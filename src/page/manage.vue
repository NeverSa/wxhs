<template>
	<div class="manage_page fillcontain">
        <!--<GuyuAdminHeader></GuyuAdminHeader>-->
		<el-row style="height: 100%; ">

	  		<el-col :span="3"  style="min-height: 100%; background-color: #202334;">

				<el-menu :default-active="defaultActive" style="min-height: 100%; background: #202334;"   router>

					<!--<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>-->
					<el-submenu index="2" >
						<template slot="title"><i class="el-icon-document"></i>行业纵览</template>
						<el-menu-item index="gameIndustry"  style="background: #282B3A;">游戏行业</el-menu-item>
						<el-menu-item index="relaxGame" style="background:#282B3A;">休闲游戏</el-menu-item>
						<el-menu-item index="catchFish" style="background: #282B3A;">捕鱼游戏</el-menu-item>
						<!--<el-menu-item index="orderList">订单列表</el-menu-item>-->
						<!--<el-menu-item index="adminList">管理员列表</el-menu-item>-->

					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-view"></i>运营监控</template>
						<el-menu-item index="totalUser" style="background: #282B3A;" disabled>总用户量</el-menu-item>
						<el-menu-item index="activeUser"  style="background: #282B3A;" >活跃用户</el-menu-item>
						<el-menu-item index="newAddUser"  style="background: #282B3A;" disabled>新增用户</el-menu-item>
						<el-menu-item index="activeScoar"  style="background: #282B3A;">活跃飙升度</el-menu-item>
						<el-menu-item index="marketShare" disabled style="background: #282B3A;">市场占有率</el-menu-item>
						<el-menu-item index="activePermeability" disabled style="background: #282B3A;">活跃渗透率</el-menu-item>
						<el-menu-item index="Retention" disabled style="background: #282B3A;">留存率</el-menu-item>
						<el-menu-item index="lossRate" disabled style="background: #282B3A;">流失率</el-menu-item>
						<el-menu-item index="gameLine" disabled style="background: #282B3A;">游戏行业</el-menu-item>
					</el-submenu>
					<el-submenu index="4" disabled>
						<template slot="title"><i class="el-icon-star-on" disabled></i>图表</template>
						<el-menu-item index="visitor" disabled >用户分布</el-menu-item>
						<!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
					</el-submenu>
					<!--<el-submenu index="5">-->
						<!--<template slot="title"><i class="el-icon-edit"></i>编辑</template>-->
						<!--&lt;!&ndash; <el-menu-item index="uploadImg">上传图片</el-menu-item> &ndash;&gt;-->

						<!--<el-menu-item index="vueEdit">文本编辑</el-menu-item>-->
					<!--</el-submenu>-->
					<!--<el-submenu index="6">-->
						<!--<template slot="title"><i class="el-icon-setting"></i>设置</template>-->
						<!--<el-menu-item index="adminSet">管理员设置</el-menu-item>-->
						<!--&lt;!&ndash; <el-menu-item index="sendMessage">发送通知</el-menu-item> &ndash;&gt;-->
					<!--</el-submenu>-->
					<!--<el-submenu index="7">-->
						<!--<template slot="title"><i class="el-icon-warning"></i>说明</template>-->
						<!--<el-menu-item index="explain">说明</el-menu-item>-->
					<!--</el-submenu>-->
				</el-menu>
			</el-col>
			<el-col :span="21" style="height: 100%;overflow: auto;background: rgb(40, 43, 58);">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    import GuyuAdminHeader from '../components/GuyuAdminHeader'
    export default {
        components: {
            GuyuAdminHeader,
        },
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	/*@import '../style/mixin';*/
	.manage_page{

	}
</style>
