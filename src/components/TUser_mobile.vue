<template>
    <div class="line1">
        <div id="line1" class="" style="width: 90%;height:350px;"></div>
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
                        x : '8%',
                        y : '300',

                        data:['苹果','oppo','华为','小米'],
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
                    color:['#FF2266','#FCDA22','#8D4CE9','#00D0FF'],
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

                                {value:20, name:'苹果'},
                                {value:20, name:'oppo'},
                                {value:20, name:'华为'},
                                {value:30, name:'小米'}
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
