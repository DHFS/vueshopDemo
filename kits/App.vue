<template>
	
	
	<div>
		<!-- 1.0利用mitui中的组件实现整个系统的头部 -->
		<mt-header fixed title="首页"></mt-header>
		<!-- 3.0利用占位进行替换中间部分的组件 -->

		<!-- 2.0利用MUI中的tablebar实现系统的底部 -->
	</div>

</template>

<script>
		

		export default{
			data(){
				return{
					msg:'测试Vue.component',
				}
			},

			methods:{
				
			},

			created(){

			}
		}

</script>

<style scoped>
	.red{
		color: red;
		font-size: 26px;
	}

</style>