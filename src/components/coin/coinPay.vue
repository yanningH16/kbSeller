<template>
  <div class="wrap">
    <div class="shop">
      <em class="gray">资金管理</em>>充值
    </div>
    <div class="contentPay">
      <h3>充值押金</h3>
      <div class="line"></div>
      <div style="margin-top:20px">
        <span class="account">付款账户</span>
        <el-select v-model="item" placeholder="请选择" value-key="value">
          <el-option v-for="(item,index) in options" :key="index" :label="item.label+' '+item.bankCardNo" :value="item">
          </el-option>
        </el-select>
        <router-link :to="{name:'coinList'}">
          <span class="bank">点击绑定银行卡</span>
        </router-link>
      </div>
      <div style="margin-top:20px">
        <span class="account">充值金额</span>
        <el-input placeholder="请输入金额" v-model="input4">
          <template slot="append">.{{pointNum}}</template>
        </el-input>
        <span style="font-size:12px">为快速到账,请按此金额付款,包括小数点后两位</span>
      </div>
      <div class="number">
        <button class="buttn buttn_small" style="margin-left:180px" @click="getChargeInfo">生成充值单</button>
      </div>
    </div>
    <!-- 升级规则 -->
    <div class="leave">
      <el-table :data="tableDataL" style="width: 300px">
        <el-table-column prop="levelDetail" label="会员等级" align="center">
        </el-table-column>
        <el-table-column prop="conditionNeed" label="升级条件" align="center">
          <template slot-scope="scope">
            <span>累计充值满{{scope.row.conditionNeed}}元</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="leavePrice">
      <el-table :data="priceSet" style="width: 200px">
        <el-table-column prop="price" label="圆通价格" align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="coverWhite"></div>
    <div class="contentDelit">
      <h3>待处理充值
        <span class="balance">您的押金账户余额:
          <em style="color:rgba(255,51,65,1)">{{ getMon }}</em>元</span>
      </h3>
      <div class="line"></div>
      <div class="actTab">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="payWater" align="center" label="充值单号">
          </el-table-column>
          <el-table-column prop="creatTime" align="center" label="提交时间">
          </el-table-column>
          <el-table-column prop="collectionBank" align="center" label="付款账户">
          </el-table-column>
          <el-table-column prop="moneyBank" align="center" label="收款账户">
          </el-table-column>
          <el-table-column prop="payNum" align="center" label="充值金额">
          </el-table-column>
          <el-table-column prop="remark" align="center" label="备注">
          </el-table-column>
          <el-table-column prop="JDStatus" align="center" label="充值状态">
            <template slot-scope="scope">
              <span class="tipDoing" v-if="scope.row.JDStatus==='1'">等待付款</span>
              <span class="tipDoing" v-if="scope.row.JDStatus==='2'">等待收货</span>
              <span class="tipSuccess" v-if="scope.row.JDStatus==='3'">等待收款</span>
              <span class="tipError" v-if="scope.row.JDStatus==='4'">充值失败</span>
              <span class="tipDoing" v-if="scope.row.JDStatus==='5'">订单取消</span>
              <span class="tipSuccess" v-if="scope.row.JDStatus==='6'">充值完成</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small">查看充值账单</el-button>
            </template>
          </el-table-column>
        </el-table>
        <noCont v-if="tableData.length===0"></noCont>
        <div class="pager" v-if="tableData.length!==0">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 生产虫子单弹框部分 -->
    <div class="payWrap">
      <el-dialog title="充值单" :visible.sync="dialogVisible" width="600px" :modal-append-to-body='false' center>
        <p>
          <span style="padding-left:22px">请用您的这张银行卡</span>
          <el-input v-model="input" disabled></el-input>
        </p>
        <p>
          <span style="padding-left:64px">向这张银行卡</span>
          <el-input v-model="input1" disabled></el-input>
        </p>
        <p>
          <span style="padding-left:120px">转款</span>
          <el-input v-model="input2" disabled></el-input>元
        </p>
        <p>
          <span>转款备注/附言/摘要填写</span>
          <el-input v-model="input3" disabled></el-input>
          <span class="blue copy" :data-clipboard-text='input3' @click="doCopy">复制</span>
        </p>
        <p style="margin-top:36px;font-size:12px">1.备注/附言/摘要中严格要求填写,每一次充值的编码都会变更,请核对后填写<br>2.支付宝不予审核<br>3.审核时间:周一至周五9:00-18:00 如遇节假日顺延,请合理安排充值时间<br>4.转款后无需私聊,工作日,30分钟内即可到款</p>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="transferMoney" v-show="isPosting">确认转账</el-button>
          <button v-show="!isPosting" class="btnBlack">
            <em class="el-icon-loading"></em>
          </button>
          <el-button @click="dialogVisible = false">先不转</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 充值单详情的弹窗 -->
    <el-dialog title="充值单详情" :visible.sync="toview" width="800px" :modal-append-to-body='false'>
      <div class="line"></div>
      <ul class="payPar">
        <li>
          充值账户名&nbsp;&nbsp;
          <span>{{lookData.sellerUserName}}</span>
        </li>
        <li>
          充值账户&nbsp;&nbsp;
          <span>{{lookData.sellerBankCardNo}}</span>
          <span class="blue copy" :data-clipboard-text='lookData.sellerBankCardNo' @click="doCopy">复制</span>
        </li>
        <li>
          所属银行&nbsp;&nbsp;
          <span>{{lookData.sellerBankCardName}}</span>
        </li>
        <li class="lines"></li>
        <li>
          收款账户名
          <span>{{lookData.receiptUserName}}</span>
        </li>
        <li>
          银行卡号&nbsp;&nbsp;
          <span>{{lookData.platformBankCardNo}}</span>
          <span class="blue copy" :data-clipboard-text='lookData.platformBankCardNo' @click="doCopy">复制</span>
        </li>
        <li>
          收款金额&nbsp;&nbsp;
          <span style="color:#FF2933">{{lookData.chargeAmount}}</span>
          <p style="margin-left:70px">为了汇款安全快速到账,请按添加小数点后金额汇款.如果金额不匹配会造成汇款到账延迟</p>
        </li>
        <li>
          备注/附言/摘要&nbsp;&nbsp;
          <span>{{lookData.memo}}</span>
          <span class="blue copy" :data-clipboard-text='lookData.memo' @click="doCopy">复制</span>
          <p style="margin-left:100px">请在备注/附言/摘要中严格要求填写<br>不要填写除此以外的其他字符(刷单,SD等),否则不能正确到账</p>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
import Clipboard from 'clipboard'
import { mapGetters, mapActions } from 'vuex'
import { pageCommon } from '../../assets/js/mixin'
import NoCont from '../../base/noCont/noCont'
export default {
  name: 'coinPay',
  mixins: [pageCommon],
  components: {
    NoCont
  },
  data () {
    return {
      input4: '',
      input: '',
      input1: '',
      input2: '',
      input3: '',
      currentPage: 1,
      pageSize: 5,
      dialogVisible: false,
      toview: false,
      pointNum: 0,
      objDate: {},
      lookData: {},
      recipet: {},
      tableData: [],
      options: [],
      getMon: '',
      item: '',
      apiUrl: '/api/seller/recharge/getRechargeListBySellerAccount',
      disabled: false,
      tableDataL: [],
      priceSet: [],
      isPosting: true
    }
  },
  created () {
    this.addBank()
    this.pointNum = Math.round(Math.random() * 99)
    this.setInfo()
    this.getPrice()
  },
  mounted () {
    this.getMoney()
  },
  computed: {
    params () {
      return {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        sellerAccountId: this.userInfo.sellerAccountId
      }
    },
    ...mapGetters([
      'userInfo',
      'userMoney'
    ])
  },
  methods: {
    // 获取资金
    getMoney () {
      this.$ajax.post('/api/seller/getBalance', {
        sellerAccountId: this.userInfo.sellerAccountId
      }).then((data) => {
        if (data.data.code === '200') {
          this.getMon = data.data.data.balance
        } else {
          this.$message({
            type: 'warning',
            message: data.data.message
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    doCopy () {
      var clipboard = new Clipboard('.copy')
      clipboard.on('success', (e) => {
        this.$message({
          message: '复制成功！',
          type: 'success'
        })
      })
    },
    // 当点击生成充值单 获取到充值单的信息
    getChargeInfo () {
      if (this.item.value === '' || this.input4 === '') {
        this.$message({
          message: '请正确填写充值信息',
          type: 'warning'
        })
        return false
      }
      if (this.input4 < 100) {
        this.$message({
          message: '单次最少充值100元',
          type: 'warning'
        })
        return false
      }
      this.dialogVisible = true
      this.$ajax.post('/api/seller/recharge/getSubstationRecipetContent', {
        sellerAccountId: this.userInfo.sellerAccountId
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          this.recipet = {
            name: res.data.name,
            bankName: res.data.bankName,
            account: res.data.account
          }
          this.input = this.item.label + ' ' + this.item.bankCardNo
          this.input1 = res.data.name + ' ' + res.data.bankName + '' + res.data.account
          this.input2 = this.input4 + '.' + this.pointNum
          this.input3 = res.data.random6
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch((err) => {
        console.log(err)
        this.$message.error('未知错误！')
      })
    },
    // 当点击生确认转账的时候触发的事件
    transferMoney () {
      this.isPosting = false
      this.$ajax.post('/api/seller/recharge/addRechargeSheet', {
        userId: this.userInfo.sellerAccountId,
        payingBankName: this.item.label,
        payingUserName: this.item.userName,
        payingCardNo: this.item.bankCardNo,
        recipetBankName: this.recipet.bankName,
        recipetUserName: this.recipet.name,
        recipetCardNo: this.recipet.account,
        comment: this.input3,
        money: this.input4 + '.' + this.pointNum
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          this.$ajax.post('/api/seller/recharge/confirmAlreadyPaid', {
            rechargeId: res.data.rechargeId
          }).then((data) => {
            let res = data.data
            if (res.code === '200') {
              this.$message({
                message: '充值成功',
                type: 'success'
              })
              this.dialogVisible = false
              this.getTask(1, this.pageSize)
              let time = 2
              let interval = setInterval(() => {
                time--
                if (time === 0) {
                  this.isPosting = true
                  clearInterval(interval)
                }
              }, 1000)
            } else {
              this.$message({
                message: data.data.message,
                type: 'error'
              })
            }
          }).catch((err) => {
            console.log(err)
            this.$message.error('未知错误！')
          })
        } else {
          this.$message({
            message: data.data.message,
            type: 'error'
          })
          return false
        }
      }).catch((err) => {
        console.log(err)
        this.$message.error('未知错误！')
      })
    },
    // 获取已添加的银行卡列表
    addBank () {
      this.$ajax.post('/api/seller/bankCard/getBankCardPagingListBySellerAccountId', {
        sellerAccountId: this.userInfo.sellerAccountId,
        pageNo: 1,
        pageSize: 20
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          let arr = []
          for (let word of res.data.datas) {
            let goods = {
              label: word.bankName,
              value: word.bankCardId,
              bankCardNo: word.cardNo,
              isDefault: word.isDefaul,
              userName: word.userName
            }
            arr.push(goods)
          }
          this.options = arr
          this.item = this.options[0]
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch((err) => {
        console.log(err)
        this.$message.error('未知错误！')
      })
    },
    // 待处理充值的列表
    setList (data) {
      let arr = []
      for (let word of data) {
        let goods = {
          payWater: word.rechargeId,
          creatTime: word.gmtCreate,
          collectionBank: word.payingCardNo,
          moneyBank: word.receiptCardNo,
          payNum: word.money,
          remark: word.comment,
          JDStatus: word.status
        }
        arr.push(goods)
      }
      this.tableData = arr
    },
    // 点点击查看充值单触发的信息
    handleClick (index, data) {
      this.toview = true
      this.$ajax.post('/api/seller/recharge/getRechargeSheetByRechargeId', {
        rechargeId: this.tableData[index].payWater
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          let goods = {
            sellerUserName: res.data.payingUserName || '暂无数据',
            sellerBankCardNo: res.data.payingCardNo,
            sellerBankCardName: res.data.payingBankName,
            // 收款账户名
            // 银行卡号
            platformBankCardNo: res.data.receiptCardNo,
            receiptUserName: res.data.receiptUserName,
            chargeAmount: res.data.money,
            memo: res.data.comment
          }
          this.lookData = goods
        } else {
          this.$message({
            message: data.data.message,
            type: 'warning'
          })
        }
      }).catch((err) => {
        console.log(err)
        this.$message.error('未知错误！')
      })
    },
    // 获取用户升级规则设置
    setInfo () {
      this.$ajax.post('/api/substation/getLevelUpList', {
        substationId: this.userInfo.substationId
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          let arr = []
          for (const word of res.data) {
            let obj = {
              levelDetail: word.levelDetail,
              conditionNeed: word.conditionNeed,
              id: word.id
            }
            arr.push(obj)
            arr = arr.splice(0, 4)
          }
          this.tableDataL = arr
        }
      }).catch(() => {
        this.$message.error('服务器错误！')
      })
    },
    // 获取快递价格设置
    getPrice () {
      this.$ajax.post('/api/substation/getChargeRuleList', {
        substationId: this.userInfo.substationId,
        logisticType: 1
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          let arr = []
          for (const word of res.data) {
            let obj = {
              price: word.price
            }
            arr.push(obj)
            arr = arr.splice(0, 4)
          }
          this.priceSet = arr
        }
      }).catch(() => {
        this.$message.error('服务器错误！')
      })
    },
    ...mapActions([
      'setUserMoney'
    ])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  padding 0 20px 0 20px
  .blue
    width 34px
    height 18px
    border 1px solid #179fff
    color #179fff !important
    padding 5px
    border-radius 4px
    margin-left 10px
    cursor pointer
  .shop
    background #fff
    height 36px
    line-height 36px
    padding-left 20px
    font-size 14px
    color rgba(60, 60, 60, 1)
    .gray
      color rgba(137, 137, 137, 1)
  .contentPay, .contentDelit
    background #fff
    margin-top 24px
    padding 0 20px 20px
    font-size 14px
    color rgba(155, 155, 155, 1)
    overflow hidden
    .account
      margin-right 40px
    .bank
      color rgba(23, 159, 255, 1)
      margin-left 24px
    .number
      margin-top 40px
    h3
      padding-top 40px
      font-size 16px
      color rgba(68, 68, 68, 1)
    .line
      height 1px
      background rgba(229, 229, 229, 1)
      margin-top 16px
      // 第二部分的内容
    .balance
      float right
      color rgba(155, 155, 155, 1)
      margin-right 26px
    .actTab .pager
      float right
  .detali
    font-size 14px
    color rgba(155, 155, 155, 1)
    margin-top 30px
    span
      color rgba(68, 68, 68, 1)
  .line
    height 1px
    background #dedede
    margin-top -30px
  .payPar
    font-size 14px
    color rgba(155, 155, 155, 1)
    li
      margin-top 20px
    span
      color #444444
      font-weight 600
  .payWrap
    color black
    font-size 15px
    p
      margin-bottom 10px
      span
        font-size 14px
        font-weight 600
      .star
        color #ff3341
  .leave
    position absolute
    top 118px
    right 400px
  .leavePrice
    position absolute
    top 118px
    right 220px
  .coverWhite
    position absolute
    top 171px
    right 200px
    width 500px
    height 204px
    background rgba(0, 0, 0, 0)
    z-index 999
</style>