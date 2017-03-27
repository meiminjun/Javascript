<template id="template">
    <section>
        <div class="pec-list pec-margin-top20 ">
            <div class="pec-list-item">
                <div class="pec-item-body">
                    <p class="pec-color-63666B">2、	产品有什么特点？</p>
                </div>
            </div>
        </div>
        <div class="answers-01">
          收益稳健，零风险：银行存款，无风险，本息安全有保障。
          随时存入，当日起息，次日可支取：随时存入当日起息，存入次日即可支取，第二天支取即可获收益
          支取方式有得选：提供“实时支取”和“T+1到账支取”， “T+1到账支取”收益更高
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
