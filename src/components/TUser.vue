
<template>
    <div class="line3">
        <div id="line5" class="" style="width: 100%;height:400px;"></div>
    </div>
</template>

<script>
    var echarts = require('echarts');
    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('line5'));
            this.initData();
        },

        methods:{
            initData(){
                const option = {

                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['千炮捕鱼','捕鱼达人'],
                        orient: 'vertical',
                        x : '80%',
                        y : '50',
                        itemWidth: 20,
                        itemHeight: 10,
                        itemGap: 10,

                        textStyle:{
                            fontSize: 12,
                            color:'#B5B7BD'
                        },
                        align: 'right',


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
                            data: ['7月1日','7月2日','7月3日','7月4日','7月5日','7月6日','7月7日','7月8日','7月9日','7月10日'],
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
                            name:'万人',
                            nameTextStyle:{
                                color:'#9C9EA6'
                            },
                            min:0,
                            max:1800,
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
                                formatter: '{value} ',
                                textStyle: {
                                    color: '#ABACB3'
                                }
                            },
                        }
                    ],
                    series : [

                        {
                            name: '千炮捕鱼',
                            type: 'bar',
                            stack: '总量',
                            barWidth :30,
                            itemStyle:{
                                normal:{
                                    color:' #8D4DE8'
                                }
                            },
                            label: {
                                normal: {
                                    show: false,


                                }
                            },
                            data: [150, 212, 201, 154, 190, 330, 410,493,594,453]
                        },
                        {
                            name: '捕鱼达人',
                            type: 'bar',
                            stack: '总量',
                            barWidth :30,
                            itemStyle:{
                                normal:{
                                    color:'#FF2366'
                                }
                            },
                            label: {
                                normal: {
                                    show: false,

                                }
                            },
                            data: [820, 832, 901, 934, 1290, 1330, 1320,990,1203,1490]
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
