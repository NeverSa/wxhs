
<template>
    <div class="line3">
        <div id="line4" class="" style="width: 100%;height:350px;"></div>
    </div>
</template>

<script>
    var echarts = require('echarts');
    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('line4'));
            this.initData();
        },

        methods:{
            initData(){
               const option = {
                   tooltip : {
                       trigger: 'axis'
                   },
                   legend: {
                       data:['iOS留存率','安卓留存率'],
                       orient: 'vertical',
                       x : '72%',
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
                   toolbox: {
                       show : false,
                       feature : {
                           mark : {show: true},
                           dataView : {show: true, readOnly: false},
                           magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                           restore : {show: true},
                           saveAsImage : {show: true}
                       }
                   },
                   calculable : true,
                   xAxis : [
                       {
                           type : 'category',
                           boundaryGap : false,
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
                           data : ['7月22日','7月23日','7月24日','7月25日','7月26日','7月27日','7月28日','7月29日']
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
                               show:false
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
                           name:'iOS留存率',
                           type:'line',
                           stack: '总量',
                           smooth:true,
                           itemStyle : {
                               normal : {
                                   color:'#FF2266',
                                   lineStyle:{
                                       color:'#FF2266'
                                   }
                               }
                           },
                           data:[10, 32, 11, 34, 40, 30, 20,56]
                       },
                       {
                           name:'安卓留存率',
                           type:'line',
                           stack: '总量',
                           smooth:true,

                           itemStyle : {
                               normal : {
                                   color:'#DABE27',
                                   lineStyle:{
                                       color:'#DABE27'
                                   }
                               }
                           },
                           data:[20, 42, 51, 34, 29, 33, 30,75]
                       },

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
