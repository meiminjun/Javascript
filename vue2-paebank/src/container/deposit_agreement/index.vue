<template id="template">
    <div>
  <common-header :options="options" @leftButtonCallback="leftButtonCallback"></common-header>
    <section >
      <div class="agreement">
        <h3 class="m_b20">平安银行个人 “定活通（增强型）”产品服务协议</h3>
        <p>甲方：{{accountName}} </p>
        <p>签约借记卡卡号：{{payeeAcctNo}} </p>
        <p class="m_b20">乙 方：平安银行股份有限公司</p>
        <p class="ti2">乙方为甲方提供的个人定活通（增强型）产品服务是固定存期，可提前支取，并根据本金的实际留存时间对应的存款利率靠档计息，兼具收益性和流动性的一款定期存款产品。</p>
        <p class="ti2 m_b20">为规范甲、乙双方在本产品下的权利义务，双方依照中国法律法规和有关金融监管规章，经平等自愿协商一致，特就个人定活通（增强型）产品服务达成如下协议，承诺信守：</p>
        <p class="f-700 m_b20">1、 声明与保证</p>
        <p>1.1 甲方保证本协议下的存款本金是其合法所有的资金，依法可以用作本协议下的存款服务。</p>
        <p class="m_b20">1.2 在签署本协议后，甲方可通过乙方提供的指定渠道进行具体交易。</p>
        <p class="f-700 m_b20">2、 业务与服务</p>
        <p class="f-700 m_b20">2.1 资金计息规则</p>
        <p>2.1.1 存款服务的内容：在本协议有效期内，对于符合“定活通（增强型）”产品服务条件的资金，自起息日起存续届满一个存期的，乙方对到期的单笔本金进行自动本息转存活期账户，本金结付收益的规则以本协议第2.2条项下的约定为准。</p>
        <p class="m_b20">2.1.2 本产品每笔起存金额为： 1 万元人民币。因甲方提前支取等原因，造成每笔存款本金不足起存金额时，乙方将提示甲方需全额支取。</p>
        <p class="f-700 m_b20">2.2 收益计算规则</p>
        <p class="m_b20">双方约定：存款时每一笔本金的完整存期为3年，期末当日结付收益，本息结转至活期账户；办理提前支取时，乙方根据甲方定活通存款的本金和实际留存时间对应的存款利率靠档计息，本息结转至活期账户。</p>
        <p class="m_b20">定活通（增强型）账户下每笔定活通本金依照起息日和终止日的不同各自进行独立管理，各自计算本金持有期及该笔资金的收益。</p>
        <p class="m_b20">就每一笔本金而言，收益计算的具体规则如下：</p>
        <p class="m_b20">2.2.1 当每一笔本金存续期限届满一个存期时，乙方在届满日当日按该笔本金当前余额，人民币适用存入日乙方3年期定活通（增强型）存款利率计算该笔资金的收益，计算公式为：3年期利息=本金* 定活通（增强型）3年期年利率*3；</p>
        <p class="m_b20">2.2.2 当单笔本金因提前支取等各种原因发生变动，而未届满存期的，甲方授权乙方按照以下约定变更存期并结付收益:</p>
        <p>人民币3年期计息规则</p>
        <p>2.2.2.1 存期不满7天，整个存期按存入日相应人民币定活通（增强型）1天通知存款利率计息；</p>
        <p>2.2.2.2 存期7天以上（含7天）不满3个月，整个存期按存入日相应人民币定活通（增强型）7天通知存款利率计息；</p>
        <p>2.2.2.3 存期3个月以上（含三个月）不满6个月，整个存期按存入日相应人民币定活通（增强型）3个月存款利率计息；</p>
        <p>2.2.2.4 存期6个月以上（含六个月）不满1年，整个存期按存入日相应人民币定活通（增强型）6个月存款利率计息；</p>
        <p>2.2.2.5 存期1年以上（含1年）不满2年，整个存期按存入日相应人民币定活通（增强型）1年存款利率计息；</p>
        <p class="m_b20">2.2.2.6 存期2年以上（含2年）不满3年，整个存期按存入日相应人民币定活通（增强型）2年存款利率计息）；</p>
        <p class="f-700 m_b20">2.3 产品服务终止规则</p>
        <p class="m_b20">乙方将根据市场波动情况，适时调整定活通（增强型）存款利率，最新的定活通（增强型）利率详询平安银行官网。</p>
        <p class="f-700 m_b20">2.4 产品服务终止规则</p>
        <p class="m_b20">2.3.1 发生以下事项时，乙方有权终止“定活通（增强型）”产品服务：</p>
        <p>1）当发生监管政策变化等特殊事项时，乙方有权终止相应本金（可以是一笔或者多笔本金）的“定活通（增强型）”产品服务。</p>
        <p>2）甲方账户被执行了司法冻结、司法扣划等强制执行措施。</p>
        <p class="m_b20">3）其它需要说明的事项包括： </p>
        <p class="m_b20">“定活通（增强型）”产品服务终止后，将按照第2.2.2条约定的规则结付收益，本息转入活期账户。</p>
        <p class="f-700 m_b20">2.5 不可抗力项下的解约规则</p>
        <p>2.4.1 双方在此一致同意：本协议有效期限内，若发生不可抗力的事件（含法律法规及监管政策的变化 ）导致协议无法履行，甲方和乙方任一方有权在任一个自然日解约。</p>
        <p>2.4.2 乙方单方提出解约的：应该通过在平安银行网站上发布公告并将公告保留3天以上，或者采用电话银行、手机短信、营业网点告示等其他方式发布解约通知。甲方应自行通过乙方柜台、咨询电话等届时可适当利用的多种途径，以查询账户状态及/或打印对账单等方式了解签约信息、交易明细及本协议是否被终止等信息。</p>
        <p class="m_b20">2.4.3 甲方单方提出解约的：（1）在任一自然日到乙方指定渠道办理手续；（2）乙方在收到解约通知的自然日按照本协议第2.2条约定就签约账户内的全部本金结付收益，本息转入活期账户。</p>
        <p class="f-700 m_b20">3、 法律适用与争议解决</p>
        <p class="m_b20">甲乙双方在履行本协议过程中引发的一切争议纠纷，双方可通过协商或调解解决，协商调解不成的，向乙方所在地人民法院提起诉讼。</p>
        <p class="m_b20">本协议正本一式两份，甲方、乙方各执一份，各份正本的法律效力相同。</p>
      </div>
    </section>
  </div>
</template>



<script>


    import {
            mapState,
            mapActions
    } from 'vuex';
import CommonHeader from '../../components/Common_Header'
import * as ald from '../../util/ald'
let payeeAcctNo = localStorage.getItem("payeeAcctNo_agreement");
let accountName = localStorage.getItem("accountName");
localStorage.removeItem("payeeAcctNo_agreement");
//let protCH = require("http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/stg2/drawAgreement.html");

    export default {
        data() {
            return {
              options:{
                title:"定活通产品服务协议",  //头部
                showIcon:false,   //是否展示头部右侧按钮  默认false
                rightButtonText:'',//头部右侧按钮文本
                isSetBack:true,//是否设置头部返回按钮  默认false 如果设置为true
                setSelfShow:false //如果用户自己设置了分享，将不处理右边按钮   默认true
              },
              payeeAcctNo:payeeAcctNo!=="undefined"?payeeAcctNo:"",
              accountName:accountName!=="undefined"?accountName:""
            };
        },
        created: function () {
            //TODO： 请求数据回来
        },
        methods: {
          leftButtonCallback:function() {
            //alert 需清除掉cardSignData
            //ald.navigator.forward({
            //  url: api.mylivedead,
            //  type: 'webapp'
            //});
            if(ald.env.isBrowser){
              location.href = './order_detail.html';
            }else{
              ald.nav.forward({url:"orderDetailPage"});
            }
          }
        },
      components:{
        CommonHeader
      }
    }

    </script>
