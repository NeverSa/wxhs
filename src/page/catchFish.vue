<template>
    <div class="fillcontain" style="background: #282B3A;">
        <head-top></head-top>
        <el-row >
            <el-col :span="6">
                <div class="gameTitle">捕鱼游戏</div>
            </el-col>
        </el-row>
        <el-row :gutter="20" style=" background: #282B3A;padding-bottom: 30px;" >
            <el-col :span="12"><div class="grid-content bg-purple" style="padding-left: 15px;" >
                <div class="outLine">
                    <div class="i_a_user">捕鱼类游戏市场占有排行</div>
                    <getFish1></getFish1>
                </div>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple" style="padding-right: 15px;" >
                <div class="outLine">
                    <div class="i_a_user">捕鱼类游戏日活渗透排行</div>
                    <getFish2></getFish2>
                </div>
            </div></el-col>
        </el-row>
        <el-row :gutter="20" style=" background: #282B3A;padding-bottom: 30px;" >
            <el-col :span="12"><div class="grid-content bg-purple" style="padding-left: 15px;" >
                <div class="outLine">
                    <div class="i_a_user">捕鱼类游戏留存</div>
                    <getFish3></getFish3>
                </div>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple" style="padding-right: 15px;" >
                <div class="outLine">
                    <div class="i_a_user">捕鱼类游戏流失率排行</div>
                    <getFish4></getFish4>
                </div>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
    import getFish1 from '../components/getFish1'
    import getFish2 from '../components/getFish2'
    import getFish3 from '../components/getFish3'
    import getFish4 from '../components/getFish4'


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
            getFish1,
            getFish2,
            getFish3,
            getFish4

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
