<template>
  <header class="header">
  	<i class="el-icon-menu"  @click="menuClick"></i>
  	<span>后台管理系统</span>

  </header>
</template>

<script>
export default {
  name: 'GUyuAdminHeader',
  data () {
    return {

    }
  },
  methods: {
    	menuClick(){
    		this.$emit('menuClick' );
    	},
    	handleCommand(command){
    		 if(command=='exit'){
    		 		this.$guyu.logoff();
    		 }else if(command=='changePassword'){
    		 	  this.$router.push('/changePassword');
    		 }
    	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 15;
		height: 60px;
		width: 100%;
    line-height: 60px;
    background: #00acc1 !important;
    color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    font-size: 20px;
    padding-left: 15px;
}
.el-dropdown-link {
		color: #fff;
}
.el-dropdown {
		margin-right: 15px;
		padding-left: 15px;
		padding-right: 15px;
		background-color: rgba(255,255,255,.3);
}
</style>
