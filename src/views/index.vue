<template>
    <div class="index">
        <el-row :gutter="20" class="panel-overview">
            <el-col :span="8" class="el-row-8">
                <div class="row-base">
                    <el-col :span="12">
                        <div class="grid-content bg-purple pay sale-bgcolor">
                            <div class="card-title">年度总盈亏</div>
                            <div class="card-text">68(千万元)</div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple pay tax-bgcolor">
                            <div class="card-title">年度收益率</div>
                            <div class="card-text">120(%)</div>
                        </div>
                    </el-col>
                </div>

            </el-col>
            <el-col :span="16" class="el-row-16">
                <div class="row-base">
                    <el-col :span="6">
                        <div class="grid-content bg-purple extened-bgcolor">
                            <div class="card-title">潜在投资人</div>
                            <div class="card-text">686(人)</div>
                            <div class="card-text">Decreased by 10%</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple like-bgcolor">
                            <div class="card-title">意向投资人</div>
                            <div class="card-text">1276(人)</div>
                            <div class="card-text">Decreased by 40%</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple link-bg-color">
                            <div class="card-title">待审投资人</div>
                            <div class="card-text">43424(人)</div>
                            <div class="card-text">Decreased by 30%</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple kele-bg-color">
                            <div class="card-title">审核中投资人</div>
                            <div class="card-text">6565464(人)</div>
                            <div class="card-text">Decreased by 80%</div>
                        </div>
                    </el-col>
                </div>
            </el-col>
        </el-row>

        <el-row :gutter="10">
            <el-col :span="7">
                <div class="pie-chart">
                    <pie-chart></pie-chart>
                </div>
            </el-col>
            <el-col :span="17">
                <div class="discount-chart">
                    <discount-chart></discount-chart>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
  // import { getStorage } from '../tools/common'
  import pieChart from '../components/charts/pieChart'
  import discountChart from '../components/charts/discountChart'
  export default {
    name: "index",
    components : {
      pieChart,
      discountChart
    },
    mounted () {

    },
    methods : {

    }
  };
</script>

<style scoped lang="scss">
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .pie-chart,.discount-chart {
        height: 400px;
        background-color: #fff;
        border-radius: 6px;
        box-sizing: border-box;
        padding: 10px;
    }
    /*.discount-chart {*/
        /*height: 320px;*/
        /*background-color: #fff;*/
        /*border-radius: 6px;*/
    /*}*/
    .card-title {
        font-size: 14px;
        color: #fff;
    }
    .card-text {
        color: #fff;
    }
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 6px;
        height: 80px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .row-base {
        background-color: #fff;
        border-radius: 6px;
        padding: 10px;
        box-sizing: border-box;
        height: 120px;
    }
    .el-row-8,.el-row-16 {
        box-sizing: border-box;
        padding: 0 5px!important;
        /*background-color: #fff;*/
        border-radius: 6px;
    }
    .el-row-8 {
        width: 33.3333%;
    }
    .el-row-16 {
        width: 66.6667%;
    }
    .sale-bgcolor {
        background-color: #FFA3A1;
    }
    .tax-bgcolor {
        background-color: #84d9d2;
    }
    .extened-bgcolor {
        background-color: #87DE75;
    }
    .like-bgcolor {
        background-color: #a5e7f0;
    }
    .link-bg-color {
        background-color: #93b7e3;
    }
    .kele-bg-color {
        background-color: #edafda;
    }
    .panel-overview {
        height: 120px;
    }
</style>
