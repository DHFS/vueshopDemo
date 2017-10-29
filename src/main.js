require('../static/css/site.css');
//1.0.0导入核心包
import Vue from 'vue';
//2.0.0导入App.vue组件中的vue对象
import App from './App.vue';
//3.0.0导入router,并且使用vueRouter
import vueRouter from 'vue-router';
Vue.use(vueRouter);

//3.1.0导入路由规则中对应的组件对象
import home from '../src/component/home.vue';
import shopcar from '../src/component/shopcar/car.vue';

//3.1.1定义路由规则
var router=new vueRouter({
		//具体的路由指向
		routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/shopcar',component:shopcar}

		],
		/*改变路由激活时的class名称*/
		linkActiveClass:'mui-active'

	});



//4.0.0注册mint-ui
import mintui from 'mint-ui';
Vue.use(mintui);
//4.1.0导入 mintui 的默认 CSS 样式
import 'mint-ui/lib/style.min.css';

//5.0.0注册 MUI 的CSS 样式
import '../static/mui/css/mui.min.css';
//6.0.0导入全局样式 site.css
import '../static/css/site.css';
//6.0.1 导入购物车和搜索两个阿里巴巴矢量图标
import '../static/css/zititubiao/iconfont.css';

//7.0.0绑定 vue-resource ，自动在vue对象实例上诸如一个$http的对象使用ajax
import vueResource from 'vue-resource';
Vue.use(vueResource);


new Vue({

	el:'#app',
	/*使用路由对象*/
	router:router,
	render:c=>c(App)

});