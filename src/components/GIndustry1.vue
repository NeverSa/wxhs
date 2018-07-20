<template>
    <div class="line1">
        <div id="line1" class="" style="width: 90%;height:350px;"></div>
    </div>
</template>

<script>
    import $ from 'jquery'
    var echarts = require('echarts');
    export default {
        data(){
          return{
              data:[]
          }
        },
        mounted(){

            $.ajax({
                type : "GET",
                url : "http://47.99.37.96:8050/analyze/gameIndustry/getUserProp",
                dataType: 'jsonp',
                jsonp: "callback",
                jsonpCallback:"getMessage",
                success : (data) =>{
                    this.myChart = echarts.init(document.getElementById('line1'));
                    const  option = {

                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            // orient: 'vertical',
                            x : '28%',
                            y : '300',

                            data:[data.data[0].phoneOs,data.data[1].phoneOs],
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
                                radius : [43, 78],
                                center : ['50%', '50%'],
                                roseType : 'angle',
                                labelLine:{
                                    normal:{
                                        length:2
                                    }
                                },
                                data:[
                                    {value:data.data[0].num, name:data.data[0].phoneOs},

                                    {value:data.data[1].num, name:data.data[1].phoneOs}
                                ]
                            }
                        ]
                    };
                    this.myChart.setOption(option);

                    // console.log(this.data[0].value+'--ferferferf');

                },
                error : function(){
                    alert("错误");
                }

            });



            this.initData();

        },

        methods:{

            initData(){


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
