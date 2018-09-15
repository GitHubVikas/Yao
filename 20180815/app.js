var time = new Date();
time = time.toString();

Vue.component('time-list',{
	props: ['list'],
	template: '#time-list'
})

var app = new Vue({
	el: '#app',
	data: {
		lists: [{
			avatar: 'src/tou.jpg',
			names: '未来机械城',
			content: '简介:《未来机器城》是由阿里巴巴影业集团、万达影视传媒有限公司出品的动画电影，由安恪温、龙子乔执导。该片被Netflix以3000万美元买下海外发行权。',
			url: 'src/weilai.jpg'
		},
		{
			avatar: 'src/tou.jpg',
			names: '未来机械城',
			content: '简介:《未来机器城》是由阿里巴巴影业集团、万达影视传媒有限公司出品的动画电影，由安恪温、龙子乔执导。该片被Netflix以3000万美元买下海外发行权。',
			url: 'src/weilai.jpg'
		}]		
	},
	computed: {
		thisTime: function () {
			return (time);
		}
	}
})