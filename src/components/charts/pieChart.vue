<template>
    <div id="my-pie-chart" ref="myPieChart"></div>
</template>

<script>
  import { resizeDom } from "../../tools/common";
  import chartsTheme from './chartsTheme/westeros'
  export default {
    name: "pieChart",
    mounted () {
      this.initPieChart()
      resizeDom(this.$refs['myPieChart'],() => {
        this.resizeTheChart()
      })
    },
    methods : {
      initPieChart () {
        let myChart = echarts.init(this.$refs['myPieChart'],chartsTheme)
        this.myChart = myChart
        let option = {
          title : {
            text: "用户投资类型",
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['基金','股票','债券','储蓄','期货']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '50%',
              center: ['50%', '60%'],
              data: [
                {value:335, name:'基金'},
                {value:310, name:'股票'},
                {value:234, name:'债券'},
                {value:135, name:'储蓄'},
                {value:1548, name:'期货'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option);
      },
      resizeTheChart() {
        this.myChart.resize()
      }
    },
  };
</script>

<style>
    #my-pie-chart {
        height: 100%;
    }
</style>
