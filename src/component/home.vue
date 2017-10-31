<template>
	
	
	
		<div id="tmpl">
			<!-- 1.0mintUI中的swipe组件实现的录播图 -->
			<mt-swipe :auto="4000">
	<mt-swipe-item v-for="(item,index) in list" >
		<img :src="item.images">
	</mt-swipe-item>	
			</mt-swipe>
			<!-- 2.0使用mui九宫格实现主页中部导航区域 -->
<div class="mui-content">
	<ul class="mui-table-view mui-grid-view mui-grid-9">
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
	        <span class="mui-icon iconfont icon-xinwenzixun"><span class="mui-badge">5</span></span>
	        <div class="mui-media-body">新闻资讯</div></router-link></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
	        <span class="mui-icon iconfont icon-tupianfenxiang"></span>
	        <div class="mui-media-body">图片分享</div></router-link></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
	        <span class="mui-icon iconfont icon-buy"></span>
	        <div class="mui-media-body">商品购买</div></router-link></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feedback">
	        <span class="mui-icon iconfont icon-fankui1"></span>
	        <div class="mui-media-body">留言反馈</div></router-link></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/vedio">
	        <span class="mui-icon iconfont icon-shipin"></span>
	        <div class="mui-media-body">视频专区</div></router-link></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/contactus">
	        <span class="mui-icon iconfont icon-lianxiwomen"></span>
	        <div class="mui-media-body">联系我们</div></router-link></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/settings">
	        <span class="mui-icon mui-icon-gear"></span>
	        <div class="mui-media-body">设置</div></router-link></li>
	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/about">
	        <span class="mui-icon mui-icon-info"></span>
	        <div class="mui-media-body">关于</div></router-link></li>

	</ul>
</div>
		</div>	


</template>

<script>
		

		export default{
			data(){
				return{
					list:[]		
				}
			},
			created(){
				//当页面中的data和methoods对象创建完毕之后会自动调用create中的的方法
				this.getimags();
			},
			methods:{
				getimags(){
				//var url='http://v.juhe.cn/toutiao/index';
				var url='http://gank.io/api/data/iOS/12/2';
				this.$http.get(url,{
				params:{},
			
	},
					{emulateJSON:true
					}).then(function(response){
						console.log('数据获取成功');
						console.log(response.body.results)						
						var data=response.body.results;
						console.log('加工过前的数组长度：'+data.length)
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
.mui-content, .mui-content ul{
	background-color: #fff;
}

.mui-content>.mui-table-view:first-child{
	    margin-top: 0px;
}

</style>