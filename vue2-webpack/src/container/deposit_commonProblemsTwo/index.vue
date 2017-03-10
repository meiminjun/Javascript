<template id="template">
    <section>
        <div class="pec-list pec-margin-top20 ">
            <div class="pec-list-item">
                <div class="pec-item-body">
                    <p class="pec-color-63666B">2、T+1到账支取具体到账时间是什么？</p>
                </div>
            </div>
        </div>
        <div class="answers-01">
            银行卡上的到账时间是其他，是凭借证件取款，主要是指有效证件：身份证，或者类似身份证的驾照银行卡上的支取方式还有的是密码.
        </div>
    </section>
</template>

<script>
    import {
            mapState,
            mapActions
    } from 'vuex';
    export default {
        data() {
            return {
                model: {

                }
            };
        },
        created: function () {
            //TODO： 请求数据回来
        },
        methods: {
            onBuy() {
                //TODO: to send buy request
                alert("on buy");
            }
        }
    }

    </script>
