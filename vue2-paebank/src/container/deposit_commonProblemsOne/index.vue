<template id="template">
    <section >
        <div class="pec-list pec-margin-top20 ">
            <div class="pec-list-item">
                <div class="pec-item-body">
                    <p class="pec-color-63666B">1、	什么是“T+1到账支取”，为什么收益这么高，是否有风险？</p>
                </div>
            </div>
        </div>
        <div class="answers-01">
          “T+1到账支取”服务，是经我行协调， 经我行认可并合作的第三方机构服务商按照高于实时支取利率受让被支取的大额存款的收益权，以提高大额定期存款流动性同时提高客户收益率。传统的定期存款提前支取（即实时支取）只能获得活期存款利息。
          虽然由第三方服务商提供受让支持的支取服务，按照质押和服务协议，已支取存款的本金和支取收益未入账至您原存入本产品的活期账户内，交易不会成立，因此完全无风险
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
