<template>
	
	
	
		<div id="tmpl">
			
			<mt-swipe :auto="4000">
	<mt-swipe-item v-for="(item,index) in list" >
		<img :src="item.images">
	</mt-swipe-item>
				
			</mt-swipe>

		</div>	


</template>

<script>
		

		export default{
			data(){
				return{
					list:[

					]	,
					predata:[

					]			
				}
			},
			created(){
				//当页面中的data和methoods对象创建完毕之后会自动调用create中的的方法
				this.getimags();
			},
			methods:{
				getimags(){
				
				var url='http://v.juhe.cn/toutiao/index';
				var url1='http://gank.io/api/data/前端/20/5'
				this.$http.get(url1,{
				params:{
					//type:'keji',key:"29511dc145c1471a0bd75247075d850f"
				},
				// jsonp:"kkkkkkkkk"
	},
					{emulateJSON:true
					}).then(function(response){
						console.log('返回成功');
						console.log(response.body.results)
						this.predatat=response.body.results;
						var data=this.predatat;
						console.log('加工过前的数组长度：'+data.length)
					/*	for(var i in data){
								if(!data.hasOwnProperty('images')){
									data.splice(i,1);
								}
						}*/
						/*对数据源比对后发现，
						有些数据没有images属性的数组，
						所以将没有改属性的对象移除*/
						data=data.filter(function(x){

							return x.hasOwnProperty('images');
						})

							console.log('加工过后的数组长度：'+data.length)
						this.list= data;
						console.log(data);
						
					},function(response){
						console.log('失败');
					});
				

				}
			},

		
		}

</script>

<style scoped>
	.mint-swipe{
		margin-top: 40px;
		height: 300px;
	}

	.mint-swipe-item{
			
			width: 100%;
			height: 300px;
	}
.mint-swipe-item img{
		
	width: 100%;
	height: 100%;
}
</style>