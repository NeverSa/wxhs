<template>
    <div class="header_container">
        <!--<ul>-->
            <!--<li  v-show="statusMeta" v-for="(item,index) in menulist"  :key="index" @click="toggle(index)"  :class="{'active':index==checkindex,'menuList':true}">{{item}}</li>-->
        <!--</ul>-->

        <el-tabs v-show="statusMeta" v-model="activeName" @tab-click="handleClick" tab-position="bottom">
            <el-tab-pane label="全部" name="first">全部</el-tab-pane>
            <el-tab-pane label="按省份" name="second">按省份</el-tab-pane>
            <el-tab-pane label="按性别" name="third">按性别</el-tab-pane>
            <el-tab-pane label="按星座" name="fourth">按星座</el-tab-pane>
            <el-tab-pane label="按年龄" name="fifth">按年龄</el-tab-pane>
            <el-tab-pane label="按手机品牌" name="seventh">按手机品牌</el-tab-pane>
            <el-tab-pane label="按手机系统" name="eighth">按手机系统</el-tab-pane>
        </el-tabs>
		<!--<el-breadcrumb separator="/f">-->
			<!--<el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>-->
             <!---->
			<!--<el-breadcrumb-item v-show="statusMeta" v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>-->
		<!--</el-breadcrumb>-->
		<el-dropdown @command="handleCommand" menu-align='start'>
			<img :src="baseImgPath + adminInfo.avatar" class="avator">
			<el-dropdown-menu slot="dropdown">
				<!--<el-dropdown-item command="home">首页</el-dropdown-item>-->
				<el-dropdown-item command="singout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
    </div>
</template>

<script>
	import {signout} from '@/api/getData'
	import {baseImgPath} from '@/config/env'
	import {mapActions, mapState} from 'vuex'

    export default {
    	data(){
    		return {
                baseImgPath,
                // menulist:['全部','按省份','按性别','按年龄','按星座','按手机品牌','按手机系统'],
                checkindex:0,
                activeName: 'first',

    		}
    	},
    	created(){
    		if (!this.adminInfo.id) {
    			this.getAdminData()
    		}
            // this.$watch('statusMeta',function (curVal,oldVal) {
            //     if (curVal==true){
            //         this.opposeMeta=false
            //     }else{
            //         this.opposeMeta=true
            //     }
            // },{deep:true})
    	},
        // watch:{
        //     statusMeta(curVal,oldVal) {
        //         if (curVal==true){
        //             this.opposeMeta=false
        //         }else{
        //             this.opposeMeta=true
        //         }
        //     },
        //     deep:true
        //
        // },

    	computed: {
    		...mapState(['adminInfo']),
            statusMeta:function () {
               if(this.$route.meta[1]=='总用户量') {

                   return true
               }
            }
    	},

		methods: {
			...mapActions(['getAdminData']),
			async handleCommand(command) {
				if (command == 'home') {
					this.$router.push('/manage');
				}else if(command == 'singout'){
					const res = await signout()
					if (res.status == 1) {
						this.$message({//element-ui 提供的方法
	                        type: 'success',
	                        message: '退出成功'
	                    });
	                    this.$router.push('/');
					}else{
						this.$message({
	                        type: 'error',
	                        message: res.message
	                    });
					}
				}
			},

             toggle(index){
			    this.checkindex=index
             },
            handleClick(tab, event) {//tab切换
                console.log(tab.index);
                this.$emit('tabChange',tab.index)

            }
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.header_container{
		background-color: #2F3245 ;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
	.avator{
		.wh(36px, 36px);
		border-radius: 50%;
		margin-right: 37px;
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
    .active{

        color: white;
    }
    .menuList{
        display: inline-block;
        width: 70px;
        height: 30px;
        text-align: center;
        font-size: 13px;
        line-height: 30px;
        color: #F5F5F6;
        cursor: pointer;

    }
    .menuList:nth-of-type(6){
        margin-left: 14px;
    }
    .menuList:nth-of-type(7){
        margin-left: 18px;
    }
    .active{
        color: #115EA9;
        border-bottom: 2px solid #115EA9;
    }
    .el-tabs__content{
        display: none;
    }
    .el-tabs__header{
        border-bottom: none;
    }
</style>
