<template>
    <div class="line1">
        <div id="line1" class="" style="width: 100%;height:350px;"></div>
    </div>
</template>

<script>
    var echarts = require('echarts');
    export default {
        mounted(){


            this.myChart = echarts.init(document.getElementById('line1'));
            this.initData();
        },

        methods:{
            initData(){
                const  option = {

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        // orient: 'vertical',
                        x : '28%',
                        y : '300',

                        data:['男性','女性'],
                        textStyle:{
                            fontSize: 14,
                            color:'#B5B7BD'
                        },
                        align: 'right',

                    },

                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    color:['#FF2266','#FCDA22'],
                    series : [

                        {
                            name:'IOS、安卓用户量占比',
                            type:'pie',
                            radius : [43, 88],
                            center : ['50%', '50%'],
                            roseType : 'angle',
                            labelLine:{
                                normal:{
                                    length:2
                                }
                            },
                            data:[

                                {value:20, name:'男性'},

                                {value:30, name:'女性'}
                            ]
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
    .line1{
        display: flex;
        justify-content: center;
    }
</style>
