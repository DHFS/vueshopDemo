<template>
	
	
	<div>
		<!-- 1.0利用mitui中的组件实现整个系统的头部 -->
		<mt-header fixed title="VueShop"></mt-header>
		<!-- 3.0利用占位进行替换中间部分的组件 -->
		<router-view></router-view>
		<!-- 2.0利用MUI中的tablebar实现系统的底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/messages">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon iconfont icon-gouwuche"><!-- <span class="mui-badge">0</span> --></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon iconfont icon-sousuo"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
		

		export default{
			data(){
				return{
					
				}
			},

			methods:{
				
			},

			created(){

			}
		}

</script>

<style scoped>
 .mint-header{
	background-color:#3F51B5;
}

</style>