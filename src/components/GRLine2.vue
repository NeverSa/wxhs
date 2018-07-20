<template>
    <div class="line2">
        <div id="line2" class="" style="width: 100%;height:350px;"></div>
    </div>
</template>

<script>
    var echarts = require('echarts');
    export default {
        mounted(){


            this.myChart = echarts.init(document.getElementById('line2'));
            this.initData();
        },

        methods:{
            initData(){
              const  option = {
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top:'26%',
                        left: '10%',
                        right: '10%',
                        bottom: '5%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type: 'category',

                            data: ['ios', '安卓'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {//坐标轴字体颜色
                                show: true,
                                fontSize:13,
                                textStyle: {
                                    color: '#ABACB3'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#3E415B',
                                    width: 2,//这里是为了突出显示加上的

                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            name:'亿人',
                            nameTextStyle:{
                                color:'#9C9EA6'
                            },
                            min:0,
                            max:13,

                       splitLine: {//坐标轴刻度线颜色
                                lineStyle: {
                                    // 使用深浅的间隔色
                                    color: ['#3E415B']
                                }
                            },
                            axisLabel: {//坐标轴字体颜色
                                show: true,
                                fontSize:13,
                                textStyle: {
                                    color: '#ABACB3'
                                }
                            },


                            axisLine: {
                                lineStyle: {
                                    color: '#3E415B',
                                    width: 2,//这里是为了突出显示加上的

                                }
                            }
                        }
                    ],
                    series : [
                        {
                            name:'新增用户量',
                            type:'bar',
                            barWidth: '38%',
                            data:[ 5,8],
                            itemStyle:{
                                normal:{
                                    color:'#50E3C2'
                                }
                            },
                        }
                    ]
                };

                this.myChart.setOption(option);
            }
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .line2{
        display: flex;
        justify-content: center;
    }
</style>
