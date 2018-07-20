
<template>
    <div class="line3">
        <div id="line3" class="" style="width: 100%;height:350px;"></div>
    </div>
</template>

<script>
    var echarts = require('echarts');
    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('line3'));
            this.initData();
        },

        methods:{
            initData(){
               const option = {
                    title: {
                        text: ''
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                           data:['iOS','安卓'],
                            orient: 'vertical',
                            x : '82%',
                            y : '60',
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
                        bottom: '6%',
                        top:'32%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
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
                            min:0,
                            max:13,
                            nameTextStyle:{
                                color:'#9C9EA6'
                            },
                            splitLine: {//坐标轴刻度线颜色
                                show:false
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
                            },
                            // splitArea:{
                            //     show:true,
                            //     areaStyle:{
                            //         color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
                            //     }
                            // }
                        }
                    ],
                    series : [

                        {
                            name:'iOS',
                            type:'line',
                            smooth:true,
                            stack: '总量',
                            itemStyle : {
                                normal : {
                                    color:'#6D43B2',
                                    lineStyle:{
                                        color:'#884BE1'
                                    }
                                }
                            },
                            areaStyle: {normal: {}},

                            data:[3, 2, 1, 4, 4, 0, 3,3, 3, 3, 3.4, 3.9, 5.3, 3.2,5.0, 6.2, 3.1, 3.4, 3.90, 3.30, 3.20,3.20, 3.32, 3.01, 3.34]
                        },
                        {
                            name:'安卓',
                            type:'line',
                            smooth:true,
                            stack: '总量',
                            itemStyle : {
                                normal : {
                                    color:'#145A9F',
                                    lineStyle:{
                                        color:'#0176DF'
                                    }
                                }
                            },
                            label: {
                                normal : {
                                    lineStyle:{
                                        color:'#00FF00'
                                    }
                                }

                            },
                            areaStyle: {normal: {}},
                            data:[8.20, 9.32, 9.01, 9.34, 1.90, 3.0, 1.20,8.20, 9.32, 9.01, 9.34, 2.90, 5.30, 3.20,.820, 9.32, 9.01, 9.34, 5.90, 3.30, 5.20, 7.90, 3.0, 5.20, 8.20]
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
