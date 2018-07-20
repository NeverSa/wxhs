<template>
    <div class="fillcontain" style="background: #282B3A" @click="otherArea" id="fillcontain">
        <head-top @tabChange="getTab"></head-top>
        <el-row :gutter="20" style="margin-top: 20px;">

            <el-col :span="5" style="min-width: 320px"><div class="grid-content bg-purple" style="padding-left: 15px;">
                <div class="outLine">

                    <div>
                        <img :src="FishUrl" alt="">
                        <div class="obj_detail">
                            <div class="gameName">千炮捕鱼</div>
                            <div>
                                <span>休闲游戏</span>
                                <span>捕鱼类</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div></el-col>
            <el-col :span="5" style="min-width: 320px"><div class="grid-content bg-purple" style="padding-left: 15px;">
                <div class="outLine relative_cancel" style="position: relative">
                    <div v-show="hasProducts" class="cancelBOx" style="position: absolute;z-index: 1000;top: -35%;right:5%;cursor: pointer" @click="cancel_btn"><img src="../../static/icon.png" alt=""></div>
                    <div :class="{'show_nt':true,'click_active':statusShow1}" v-show="!hasProducts" @mousedown.stop ="showBorder" @mouseup.stop="showBorder" @click.stop="showBox(indexBox_1)" >添加竞品</div>
                    <div v-show="hasProducts">
                        <img :src="jinProducts[0].gameUrl" alt="">
                        <div class="obj_detail">
                            <div class="gameName">{{jinProducts[0].app_name}}</div>
                            <div>
                                <span>{{jinProducts[0].attrType}}</span>
                                <span>{{jinProducts[0].gametype}}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div></el-col>
            <el-col :span="5" style="min-width: 320px"><div class="grid-content bg-purple" style="padding-left: 15px;">
                <div class="outLine" style="position: relative">
                    <div class="lock_name"><img src="../../static/lock.png" alt=""></div>
                    <!--<div :class="{'show_nt':true,'click_active':statusShow2}" v-show="!hasProducts" @mousedown.stop ="showBorder2" @mouseup.stop="showBorder2" @click.stop="showBox2(indexBox_2)">添加竞品</div>-->
                    <!--<div v-show="hasProducts">-->
                    <!--<img :src="jinProducts[1].gameUrl2" alt="">-->
                    <!--<div class="obj_detail">-->
                    <!--<div class="gameName">{{jinProducts[1].app_name2}}</div>-->
                    <!--<div>-->
                    <!--<span>{{jinProducts[1].attrType2}}</span>-->
                    <!--<span>{{jinProducts[1].gametype2 }}</span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                </div>
            </div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12" v-if="indexStatus==0"><div class="grid-content bg-purple" style="padding-left: 15px;" >
                <div class="outLine_" >
                    <div class="i_a_user">用户总量数</div>
                    <div class=" state_time">2018.06.23-2018.06.29 | 过去1天-过去7天</div>
                    <div class=" show_num">
                        <div>数量</div>
                        <div>234345</div>
                        <div></div>
                    </div>
                    <TUser></TUser>
                </div>
            </div></el-col>
            <el-col :span="6" v-if="indexStatus==2"><div class="grid-content bg-purple" style="padding-left: 15px;">
                <div class="outLine_" >
                    <div class="i_a_user">总户量性别占比</div>
                    <TUser_sex></TUser_sex>
                </div>
            </div></el-col>
            <el-col :span="12" v-if="indexStatus==1"><div class="grid-content bg-purple" style="padding-left: 15px;" >
                <div class="outLine_">
                    <div class="i_a_user">总用户量占比柱状图</div>
                    <!--<div class=" state_time">2018.06.23-2018.06.29 | 过去1天-过去7天</div>-->
                    <!--<div class=" show_percent">-->
                        <!--<div>环比</div>-->
                        <!--<div></div>-->
                        <!--<div>12.5%</div>-->
                    <!--</div>-->
                    <TUser_province></TUser_province>
                </div>
            </div></el-col>
            <el-col :span="12" v-if="indexStatus==3"><div class="grid-content bg-purple" style="padding-left: 15px;" >
                <div class="outLine_">
                    <div class="i_a_user">总用户量星座占比</div>
                    <div class=" state_time">2018.06.23-2018.07.23 | 过去30天</div>

                    <TUser_constellation></TUser_constellation>
                </div>
            </div></el-col>
            <el-col :span="12" v-if="indexStatus==4"><div class="grid-content bg-purple" style="padding-left: 15px;" >
                <div class="outLine_">
                    <div class="i_a_user">7日总用户量年龄占比柱状图</div>
                    <!--<div class=" state_time">2018.06.23-2018.06.29 | 过去1天-过去7天</div>-->
                    <!--<div class=" show_percent">-->
                    <!--<div>环比</div>-->
                    <!--<div></div>-->
                    <!--<div>12.5%</div>-->
                    <!--</div>-->
                    <TUser_age></TUser_age>
                </div>
            </div></el-col>
            <el-col :span="6" v-if="indexStatus==5"><div class="grid-content bg-purple" style="padding-left: 15px;">
                <div class="outLine_" >
                    <div class="i_a_user">总户量手机品牌占比图</div>
                    <TUser_mobile></TUser_mobile>
                </div>
            </div></el-col>
            <el-col :span="6" v-if="indexStatus==6&&!hasProducts"><div class="grid-content bg-purple" style="padding-left: 15px;">
                <div class="outLine_" >
                    <div class="i_a_user">总户量手机系统占比图</div>
                    <TUser_system></TUser_system>
                </div>
            </div></el-col>
            <el-col :span="12" v-if="indexStatus==6&&hasProducts"><div class="grid-content bg-purple" style="padding-left: 15px;">
                <div class="outLine_" >
                    <div class="i_a_user">总户量手机系统占比图</div>
                    <TUser_system2></TUser_system2>
                </div>
            </div></el-col>
        </el-row>
        <div class="shade_box" v-show="shade_" id="shade_box" @click="otherArea($event)">
            <div class="shade_top"><input type="text" placeholder="请输入你要查看的竞品" v-model="inpContent"><div class="search_btn" @click="btnSearch">搜索</div></div>
            <div class="boxToShade" >
                <div class="over_hidden" v-for="(item,index) in josnGame" :key="index">
                    <div class="shade_products" v-show="showProdusts">

                        <div class="shade_pic"><img :src="proPic" alt=""></div>
                        <div class="shade_text">
                            <div class="name_shade">{{item.app_name}}</div>
                            <div class="type_shade"><span>{{item.attrType}}</span>-<span>{{item.gametype}}</span></div>
                        </div>
                        <div class="shade_add" @click.stop="btnStatus(index)" >
                            {{item.state==0?'添加':'删除'}}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import headTop from '../components/headTop'
    import axios from 'axios'
    import TUser from '../components/TUser'
    import TUser_sex from '../components/TUser_sex'
    import TUser_province from '../components/TUser_province'
    import TUser_constellation from '../components/TUser_constellation'
    import TUser_age from '../components/TUser_age'
    import TUser_mobile from '../components/TUser_mobile'
    import TUser_system from '../components/TUser_system'
    import TUser_system2 from '../components/TUser_system2'
    import $ from 'jquery'
    import qs from 'qs';
    // import raceProduct from '../components/raceProduct'

    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



    export default {
        data(){
            return {
                FishUrl:'../../static/fish.png',
                indexBox_1:false,
                indexBox_2:false,
                hasProducts:false,
                statusShow1:false,
                statusShow2:false,
                pro1_status:false,
                pro2_status:false,
                indexStatus:0,
                passStatus:null,
                showProdusts:true,
                inpContent:'',
                statusControl:{

                },
                shade_:false,
                // arrIndex:[24,25,26,27,28,29,30],
                // pageIndex:false,
                jinProducts:[
                    {
                    app_name:'',
                    attrType:'',
                    gametype:'',
                    gameUrl:'',
                    gameState:false
                   },
                    {
                        app_name2:'',
                        attrType2:'',
                        gametype2:'',
                        gameUrl2:'',
                        gameState2:false
                    }
                ],
                uniqueId:'',
                proPic:'../../static/fish.png',
                // changStatus:'添加',
                jsonData:{
                    "msg": "dgdgfgfd",
                    "data": {
                        "app": [
                            {
                            "app_name": "千炮捕鱼",
                            "id":0,
                            "state":0,
                            "attrType":'休闲游戏',
                            "gametype":'捕鱼类',
                            "gameUrl":'../../static/fish.png',
                            },
                            {
                                "app_name": "疯狂捕鱼",
                                "id":1,
                                "state":0,
                                "attrType":'娱乐游戏',
                                "gametype":'益智类',
                                "gameUrl":'../../static/fish.png',
                            }
                            ],
                        "all_pnum": 3
                    },
                    "ok": true,
                    "status": 600
                },
                josnGame:[]
            }
        },
        components: {
            headTop,
            TUser,
            TUser_sex,
            TUser_province,
            TUser_constellation,
            TUser_age,
            TUser_mobile,
            TUser_system,
            TUser_system2,
            // raceProduct

        },
         mounted(){
             this.analyse();
             $.ajax({
                 type : "GET",
                 url : "http://47.99.37.96:8050/analyze/gameIndustry/getUserProp",
                 dataType: 'jsonp',
                 jsonp: "callback",
                 success : function(data) {
                     console.log(data);


                 },
                 error : function(){
                     alert("错误");
                 }

             });
         },

        methods: {
            otherArea(e){
              const  ele=document.getElementById('shade_box');
              if(ele){
                  if(!ele.contains(e.target)){
                      this.shade_=false;

                      // console.log(this.shade_)
                  }
              }

            },
            btnSearch(){
                 if(this.inpContent=='捕鱼'||this.inpContent=='捕鱼游戏'||this.inpContent=='游戏'){
                      this.showProdusts=true
                 }else if(this.inpContent==''){
                     this.showProdusts=false
                 }
            },
            showBox(index){
              this.shade_=true;//弹窗显示

               console.log('点击showBOx');

                console.log("竞品选框状态："+this.indexBox_1)

            },
            showBox2(index){
                this.shade_=true;//弹窗显示
                console.log('点击showBOx2');
                console.log('框2的状态'+index);

            },
            showBorder(){

                this.statusShow1=!this.statusShow1

            },
            showBorder2(){

                this.statusShow2=!this.statusShow2

            },
            btnStatus(ind){
                const data_=this.jsonData;
                const app_= data_.data.app;
                this.passStatus=app_[ind].state;
                   app_[ind].state=!app_[ind].state;//添加、删除按钮切换
                   console.log('按钮状态'+ app_[ind].state);

                   //第一个竞品选择框的状态改为true
                if(app_[ind].state){
                        this.hasProducts=true;
                        this.jinProducts[0].app_name=app_[ind].app_name;
                        this.jinProducts[0].attrType=app_[ind].attrType;
                        this.jinProducts[0].gametype=app_[ind].gametype;
                        this.jinProducts[0].gameUrl=app_[ind].gameUrl;
                }else{
                        this.hasProducts=false;
                        this.jinProducts[0].app_name='';
                        this.jinProducts[0].attrType='';
                        this.jinProducts[0].gametype='';
                        this.jinProducts[0].gameUrl=''

                }
                 console.log('内容显示'+ this.jinProducts[0].app_name);

                console.log(this.indexBox_1)
            },
            analyse(){
                const data=this.jsonData;
                this.josnGame=data.data.app
            },

            getTab(data){
                this.indexStatus=data;
                console.log('dsfgsdgfsd'+this.indexStatus);
            },
            cancel_btn(){

                this.hasProducts=false;
                
                this.passStatus=0
            }
        },
    }
</script>

<style lang="less" scoped>
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
        width: 100%;
        height: 160px;
        line-height: 160px;

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
    .show_num{
        position: absolute;
        top: 75px;
        left: 50px;

    }
    .show_num :nth-child(1){
        display: inline-block;
        color: #FAFAFA;
    }
    .show_num :nth-child(2){
        display: inline-block;
        font-size: 24px;
        color: #FEFEFE;
    }
    .show_num :nth-child(3){
        display: inline-block;
        color: #FC412E;
    }
    .outLine img{
        display: inline-block;
        vertical-align: middle;
        margin-left: 20px;


    }
    .obj_detail{
        display: inline-block;

        line-height: 40px;


    }
    .obj_detail div{
        color: #D5D6D9;
        margin-left: 20px;

    }

    .obj_detail div span{
        font-size: 14px;
        color: #848591;
    }
    .obj_detail div span:last-child{
        padding-left: 10px;
    }
    .show_nt{
        text-align: center;
        line-height: 160px;
        color: #FFFFFF;
        cursor: pointer;
        font-family: PingFangSC-Regular;
    }
    .cancelBox{
        position: absolute;
        top: 10%;
        right: 20%;
    }
    .click_active{
        border: 1px solid white;
    }
    .shade_box{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 420px;
        height: 240px;
        margin-left: -200px;
        margin-top: -120px;
        border-radius: 6px;
        background: rgba(57,63,93,.9);

    }
    .search_btn{
        display: inline-block;
        width: 50px;
        height: 30px;
        background: #0078E3;
        text-align: center;
        line-height: 29px;
        font-size: 14px;
        color: #FFFFFF;
        cursor: pointer;
        margin-top: 8px;
        border-radius: 0 5px 5px 0;
    }
    .shade_top{
        width: 70%;
        margin: 15px auto;
    }
    .shade_top input{
        width: 238px;
        height: 30px;
        background: #2F3245;
        border-radius:5px 0 0 5px;
        color: #F0F0F0;
        padding-left: 5px;

    }
    .shade_products{
        width: 70%;
        height: 60px;
        /*border: 1px solid red;*/
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        position: relative;


    }
    .shade_pic img{
        width: 100%;
        height: 100%;
    }
    .shade_pic{
        width: 60px;
        height: 60px;
        float: left;
    }
    .shade_text{
        float: left;
        width: 163px;
        height: 46px;
        padding-left: 20px;
    }
    .name_shade{
       font-size: 16px;
        color: #D1D2D9;
        margin-top: 5px;
    }
    .type_shade{
        font-size: 12px;
        color: #D1D2D9;
        margin-top: 10px;
    }
    .shade_add{
        float: left;
        width: 50px;
        height: 30px;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        background: #0078E3;
        vertical-align:middle;
        cursor: pointer;
        border-radius: 10px;
        color: #D1D2D9;
        margin-top: 13px;
    }
    .over_hidden{
        overflow-y:auto;
        height:80px;
        margin: 0 auto;

    }
    .boxToShade{
        height: 163px;
        overflow: auto;
    }
    .outLine_{
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
        color: #FAFAFA;
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
    .relative_cancel{
        position: relative;
    }
    .lock_name{
        width: 50px;
        height: 40px;
        margin-left: 38%;

    }
    .lock_name img{
        width: 100%;
        height:100%;
    }
</style>
