
<template>
    <div class="line3">
        <div id="line_5" class="" style="width: 100%;height:400px;"></div>
    </div>
</template>

<script>
    var echarts = require('echarts');
    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('line_5'));
            this.initData();
        },

        methods:{
            initData(){
                var colors = ['#5793f3', '#d14a61', '#675bba'];
                const option = {
                    color: colors,


                    grid: {
                        left: '7%',
                        right: '0',
                        bottom: '4%',
                        top:'24%',
                        containLabel: true
                    },

                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        },

                    },
                    legend: {
                        data:['IOS','安卓'],
                        textStyle:{
                            fontSize: 14,
                            color:'#B5B7BD'
                        },
                        align: 'right',
                        x : '63%',
                        y : '40',
                    },
                    xAxis: [
                        {
                            type: 'category',
                            name:'',
                            axisTick: {
                                alignWithLabel: true
                            },
                            data: ['千炮捕鱼','千炮捕鱼','千炮捕鱼','千炮捕鱼','千炮捕鱼','千炮捕鱼','千炮捕鱼'],
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
                    yAxis: [
                        {
                            type: 'value',
                            name: 'IOS',
                            show:false,
                            min: 0,
                            max: 250,
                            position: 'right',
                            axisLine: {
                                lineStyle: {
                                    color: colors[0]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} ml'
                            }
                        },
                        {
                            type: 'value',
                            name: '安卓',
                            show:false,
                            min: 0,
                            max: 250,
                            position: 'right',
                            offset: 80,
                            axisLine: {
                                lineStyle: {
                                    color: colors[1]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} '
                            }
                        },
                        {
                            type: 'value',
                            name: '',
                            min: 0,
                            max: 100,
                            position: 'left',
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
                    series: [
                        {
                            name:'IOS',
                            type:'bar',
                            barWidth: '24%',
                            data:[124.0,104.9, 97.0, 143.2, 125.6, 76.7, 135.6],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#9BE64A'},
                                            {offset: 1, color: '#08D951'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#9BE64A'},
                                            {offset: 1, color: '#08D951'}
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            name:'安卓',
                            type:'bar',
                            barWidth: '24%',
                            yAxisIndex: 1,
                            data:[122.6,195.9, 99.0, 126.4, 128.7, 70.7, 175.6],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#FD552B'},
                                            {offset: 1, color: '#FACB16'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#FD552B'},
                                            {offset: 1, color: '#FACB16'}
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

