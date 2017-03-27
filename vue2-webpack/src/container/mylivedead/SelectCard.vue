<template>
  <div>
    <div class="pec-mask" style="display: none;" :style="{display:MaskShow?'block':'none'}" @click="noSelect"></div>
    <div class="pec-pop-picker" style="transition: all 0.5s;bottom:-100%" :style="{bottom:pickerBottom}">
      <div class="pec-picker-title">
        <div class="pec-picker-title-head" @click="noSelect">取消</div>
        <div class="pec-picker-title-body">请选择银行卡</div>
      </div>
      <div class="pec-picker-list">
        <div class="pec-picker-item" v-for="(item, index) in selectData.data"  @click="selectValue" :data-index="index">
          <div class="pec-picker-item-head"><i class="icon-pabank"></i></div>
          <div class="pec-picker-item-body">
            <p>{{item.bankName}} ({{item.bankCardMask | changeNo}})</p>
          </div>
          <div class="pec-picker-item-foot"><i :class="[index==selectData.index?'icon-checked':'icon-check']"></i></div>
        </div>
        <!--<div class="pec-picker-item">-->
        <!--<div class="pec-picker-item-head"><img src="../assets/images/common/icon-bank-pa.png"></div>-->
        <!--<div class="pec-picker-item-body">-->
        <!--<p>平安银行互联网账户(8888)</p>-->
        <!--<p class="pec-picker-item-tips">账户余额：3,000,00元</p>-->
        <!--</div>-->
        <!--<div class="pec-picker-item-foot"><i class="icon-check"></i></div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      showPicker:Boolean,
      selectData:{
        type:Object,
        required: true
      }
      //selectObj:Object,
    },
    data(){
      return {
        MaskShow:false,
        pickerBottom:"-100%"
      }
    },
    filters:{
      changeNo(card){
        return card.substr(-4)
      },
    },
    mounted (){
//      this.pickerBottom="-100%";
//      this.$nextTick(function(){
//        this.pickerBottom="0";
//      });
      setTimeout((function(){
        this.MaskShow=true;
        this.pickerBottom="0";
      }).bind(this),1);
    },
    methods:{
      noSelect(){
        setTimeout((function(){
          this.MaskShow=false;
          this.$emit('cancelselect');
        }).bind(this),300);
        this.pickerBottom="-100%";
      },
      selectValue(event){
        var index = event.currentTarget.getAttribute("data-index");
        this.noSelect();
        this.$emit("selectvalue",{index:+index,data:this.selectData.data[+index]});

      }
    },
    components: {
    }
  }
</script>
