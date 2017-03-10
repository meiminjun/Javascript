<template>
    <div>
    <common-header :title=title :onLeft='leftClick'></common-header>
    <section>
    <div class="pec-result">
        <i class="icon-result-ok"></i>
        <p class="pec-result-txt">支取提交成功</p>
        <p class="pec-result-txt2 pec-color-6C7684">银行账号：平安银行互联网账户(8888)</p>
    <p class="pec-result-txt2">支取金额：10,000.00元</p>
    <p class="pec-result-txt2">预计到账时间：2016-12-11 24:00:00前</p>
    </div>
    </section>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import api from '../../api/urls.js'
import types from '../../store/types.js'
import * as ald from '../../util/ald';
import CommonHeader from '../../components/Common_Header'

export default {
    data: function () {
        return {
            title:"定存宝-定活通"
        };
    },
    computed: {

    },
    created () {

    },
    methods: {
        // 左边头部按钮
        leftClick:function() {
            if (true) {
                ald.navigator.forward({
                    url: api.orderDetailPage,
                    title: api.orderDetailPage,
                    type: 'webapp'
                });
            } else {
                ald.navigator.forward({
                    title: api.orderDetailPage,
                    showHeader: true,
                    url: api.orderDetailPage,
                    tabIndex: 2,
                    tpl: 'webview'
                });
            }
        }
    },
    components:{
        CommonHeader
    }
}
</script>
