
<template>
    <div>
    <section v-if="cardshow" >
      <div><common-header :title=title :onLeft='leftClick'></common-header></div>
        <div class="pec-list pec-LBP-list pec-margin-top20">
            <div class="pec-list-item"  @click="selectRechargeCard">
                <div class="pec-item-head">
                    银行账号
                </div>
                <div class="pec-item-body">
                    <p>{{rechargeCard}}</p>
                </div>
                <div class="pec-item-foot">
                    <i class="icon-arrow"></i>
                </div>
            </div>
            <div class="pec-list-item ">
                <div class="pec-item-head">共0笔</div>
                <div class="pec-item-foot pec-text-right">共计<span class="pec-color-F17940">0.00</span>元</div>
            </div>
        </div>
        <p class="pec-text-center pec-margin-top60 pec-color-B2B2B2 pec-font-size24">您当前还没有存定活宝-定活通存款</p>
        <div class="pec-btn-zone pec-margin-top110">
            <button size="big" class="pec-primary-btn" @click="rightcun">立即存入</button>
        </div>
    </section>

    <section v-else>
        <div class="pec-list-item" @click="selectRechargeCard"style="position: fixed;top: 0.88rem;left:0;right: 0">
            <div class="pec-item-head">
                银行账号
            </div>
            <div class="pec-item-body">
                {{rechargeCard}}
            </div>
            <div class="pec-item-foot">
                <i class="icon-arrow"></i>
            </div>
        </div>
        <div class="pec-list pec-LBP-list pec-margin-top20">
            <div class="pec-list-item ">
                <div class="pec-item-head">共{{resRender.resmytotal.totalNum}}笔</div>
                <div class="pec-item-foot pec-text-right">共计<span class="pec-color-F17940">{{resRender.resmytotal.totalAmt}}</span>元</div>
            </div>
        </div>

        <div  v-for="item in resRender.data"  class="pec-list pec-LBP-list pec-margin-top20" style="z-index: -55">
            <div class="pec-list-item ">
                <div class="pec-item-head">
                    <p class="pec-color-3F4246 pec-font-size28">{{item.depositDate}}</p>
                    <p class="pec-prodcut-desc">到期日{{item.expiryDate}}</p>
                    <p class="pec-prodcut-desc">已存{{item.depositedDuration}}天</p>
                </div>
                <div class="pec-item-body pec-text-right">
                    <p>剩余本金<span class="pec-color-F17940">{{item.corpusBalance}}</span>元</p>
                    <p class="pec-prodcut-desc">到期利率{{item.expirylntRate}}%</p>
                    <p class="pec-prodcut-desc">{{item.bankType}}({{item.lastFourNum}})</p>
                </div>
                <div class="pec-item-foot">
                    <i class="icon-arrow"></i>
                </div>
            </div>
        </div>
    </section>










        <Select-card v-if="select" @cancelselect="cancelSelect" @selectvalue="selectValue" :select-data="scardData"></Select-card>
    </div>
</template>

<script>
    import {
            mapState,
            mapActions
    } from 'vuex';
    import SelectCard from './SelectCard.vue';
    import * as types from '../../store/types'
    import api from '../../api/urls.js'
    import * as ald from '../../util/ald';

    export default {
        props: {
            cardData: {
                type: Object,
                default: ""
            },
            scardData:{
                type:Object,
                default: ""
            }

        },
        data: function () {
            return {
                select:false,
                cardshow:true
            }

        },
        methods: {
            ...mapActions([
                'getMyliveDead',

            ]),
            selectRechargeCard() {
                this.select = true;
            },
            cancelSelect(){
                this.select = false;
            },
            selectValue(Data){
                this.selectedIndex=Data.index;
                debugger;
                let content = Data.data.bankName+"("+Data.data.bankCardMask+")";
                debugger;
                this.$store.commit("DHT_CHANGECARDSHOW",content);
                this.choosecard(Data.data)
            },
            choosecard(data){
                this.getMyliveDead({pageNum:1}).then(res => {
                    debugger;
                    this.cardshow = res.cardshow;
                });

            },
          rightcun(){
            ald.navigator.forward({
              url:"http://localhost:8088/omm/mobile/deposit_buy.html"
            });

          },
          leftClick(){
            ald.navigator.back();
          }

        },
        computed: {
            ...mapState([
                'fund',
            ]),
            rechargeCard: function() {
                return this.fund.changecard;
            },

        },
        components: {
            SelectCard
        },
        created: function () {


        },
        mounted:function(){

        },
    }
</script>

