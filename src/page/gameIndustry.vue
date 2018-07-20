<template>
    <div class="fillcontain" style="background: #282B3A;">
        <head-top></head-top>
        <el-row >
            <el-col :span="6">
                <div class="gameTitle">游戏行业</div>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px;background: #282B3A;" >

            <el-col :span="6"><div class="grid-content bg-purple" style="padding-left: 15px;">
                <div class="outLine">
                    <div class="i_a_user">IOS、安卓总户量占比</div>
                    <GIndustry1></GIndustry1>
                </div>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
                <div class="outLine">
                    <div class="i_a_user">IOS、安卓新增用户量</div>
                    <GIndustry2></GIndustry2>
                </div>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
                <div class="outLine">
                    <div class="i_a_user">IOS、安卓24h登录时间分布</div>
                    <div class=" state_time">2018.06.29-2018.06.30 | 过去一天</div>
                    <GIndustry3></GIndustry3>
                </div>
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple" style="padding-right: 15px;">
                <div class="outLine">
                    <div class="i_a_user">IOS、安卓 7日留存率</div>
                    <div class=" state_time">2018.06.23-2018.06.30 | 过去7天</div>
                    <GIndustry4></GIndustry4>
                </div>
            </div></el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 45px;">
            <el-col :span="12"><div class="grid-content bg-purple" style="padding-left: 15px;" >
                <div class="outLine">
                    <div class="i_a_user">7日新增日环比</div>
                    <div class=" state_time">2018.06.23-2018.06.29 | 过去1天-过去7天</div>
                    <div class=" show_percent">
                        <div>环比</div>
                        <div></div>
                        <div>12.5%</div>
                    </div>
                    <GIndustry5></GIndustry5>
                </div>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple" style="padding-left: 15px;" >
                <div class="outLine">
                    <div class="i_a_user">7日新增周同比</div>
                    <div class=" state_time">2018.06.23-2018.06.29 | 过去1天-过去7天</div>
                    <div class=" show_percent">
                        <div>同比</div>
                        <div></div>
                        <div>12.5%</div>
                    </div>
                    <GIndustry6></GIndustry6>
                </div>
            </div></el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 30px; background: #282B3A;padding-bottom: 30px;" >
            <el-col :span="12"><div class="grid-content bg-purple" style="padding-left: 15px;" >
                <div class="outLine">
                    <div class="i_a_user">总用户量星座占比</div>
                    <!--<div class=" state_time">2018.06.23-2018.07.23 | 过去30天</div>-->

                    <GIndustry7></GIndustry7>
                </div>
            </div></el-col>

        </el-row>
    </div>
</template>

<script>
    import GIndustry1 from '../components/GIndustry1'
    import GIndustry2 from '../components/GIndustry2'
    import GIndustry3 from '../components/GIndustry3'
    import GIndustry4 from '../components/GIndustry4'
    import GIndustry5 from '../components/GIndustry5'
    import GIndustry6 from '../components/GIndustry6'
    import GIndustry7 from '../components/GIndustry7'

    import headTop from '../components/headTop'
    import {baseUrl, baseImgPath} from '@/config/env'
    import {cityGuess, getResturants, getResturantsCount, foodCategory, updateResturant, searchplace, deleteResturant} from '@/api/getData'
    export default {
        data(){
            return {
                baseUrl,
                baseImgPath,

            }
        },

        components: {
            headTop,
            GIndustry1,
            GIndustry2,
            GIndustry3,
            GIndustry4,
            GIndustry5,
            GIndustry6,
            GIndustry7,

        },
        methods: {

        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {

        /*border: 1px solid white ;*/
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {

        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .gameTitle{
        font-family: "Hiragino Sans GB";
        color: white;
    }
    .outLine{
        position: relative;
        background: #2F3245;
    }
    .i_a_user{
        position: absolute;
        top: 20px;
        left: 50px;
        color: #E8E8EA;
        font-size: 20px;
        letter-spacing: 2px;
    }
    .gameTitle{
        padding-left: 20px;
        margin-top: 30px;
        font-size: 23px;
    }
    .state_time{
        position: absolute;
        top: 50px;
        left: 50px;
        color: #E8E8EA;
        font-size: 12px;
        letter-spacing: 2px;
    }
    .show_percent{
        position: absolute;
        top: 75px;
        left: 50px;

    }
    .show_percent :nth-child(1){
        display: inline-block;
        color: #FC412E;
    }
    .show_percent :nth-child(2){
        display: inline-block;
        width: 0;
        height: 0;
        border-width:0 8px 8px;
        border-style:solid;
        border-color:transparent transparent #FC412E;/*透明 透明  灰*/
    }
    .show_percent :nth-child(3){
        display: inline-block;
        color: #FC412E;
    }
</style>
