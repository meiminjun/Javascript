<template>
    <div class="page-head">
        <div class="ph_left"><i class="icon icon-back"></i></div>
        <h1 class="ph-title ellipsis">{{ title || "理财"}}</h1>
        <div class="ph_right"><i class="icon icon-ellipsis">• • •</i></div>
        <!-- <div class="ph_right" @click.stop="drawerToggle"><i class="icon icon-ellipsis">• • •</i></div> -->
    </div>
</template>

<script>
    /**
     * 公共头部
     *
     */
    export default {
        props: {
            title: {
                type: String,
                default: '投资理财'
            },
            methods: {

            }
        }
    };
</script>
