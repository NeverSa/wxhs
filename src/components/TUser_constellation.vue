
<template>
    <div class="line3">
        <div id="line_7" class="" style="width: 100%;height:400px;"></div>
    </div>
</template>

<script>
    var echarts = require('echarts');
    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('line_7'));
            this.initData();
        },

        methods:{
            initData(){
                const option = {
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '7%',
                        right: '9%',
                        bottom: '4%',
                        top:'34%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座','摩羯座','射手座','水瓶座','天蝎座','双鱼座'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#3E415B',
                                    width: 2,//这里是为了突出显示加上的

                                }
                            },
                            axisLabel: {//坐标轴字体颜色
                                show: true,
                                fontSize:13,
                                textStyle: {
                                    color: '#ABACB3'
                                }
                            },
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            name:'',

                            nameTextStyle:{
                                color:'#9C9EA6'
                            },
                            min:0,
                            max:100,
                            splitLine: {//坐标轴刻度线颜色
                                lineStyle: {
                                    // 使用深浅的间隔色
                                    type:'dashed',
                                    color: ['#3E415B']
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#3E415B',
                                    width: 2,//这里是为了突出显示加上的

                                }
                            },
                            axisLabel: {//坐标轴字体颜色
                                show: true,
                                fontSize:13,
                                formatter: '{value} %',
                                textStyle: {
                                    color: '#ABACB3'
                                }
                            },
                        }
                    ],
                    series : [
                        {
                            name:'新增同比',

                            type:'bar',
                            barWidth: '30%',
                            data:[90, 50, 65, 34, 59, 80, 25,35,56,73,85,46],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#FB246A'},
                                            {offset: 1, color: '#904CE4'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#FB246A'},
                                            {offset: 1, color: '#904CE4'}
                                        ]
                                    )
                                }
                            }
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
