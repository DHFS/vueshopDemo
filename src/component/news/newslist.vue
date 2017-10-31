<template>

	<div id="tmpl">
		<!--新闻资讯列表样式-->
		<ul class="mui-table-view" style="margin-top: 40px">
			<li class="mui-table-view-cell mui-media" v-for="item in list">
				<a href="#">
					<img class="mui-media-object mui-pull-left" :src="item.images">
					<div class="mui-media-body">
						{{item.desc}}
						<p class='mui-ellipsis'>发布时间：{{item.createdAt | datefmt('YYYY-MM-DD hh:mm')}}</p>
					</div>
				</a>
			</li>
		</ul>


	
</div>
	
</template>




<script type="text/javascript">
			export default{
			data(){
				return{
					list:[



					]
				}
			},

                methods:{
                    getimags(){
                        //var url='http://v.juhe.cn/toutiao/index';
                        var url='http://gank.io/api/data/iOS/50/1';
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

			created(){
				/*在页面加载完之后给list赋值*/
				this.getimags();
			}
		}


</script>




<style scoped>
	img{
		width: 42px;
		height: 42px;
		border: 1px solid lightgray;
	}
	p{
		margin-top:5px;
		color: #007aff;

	}

</style>