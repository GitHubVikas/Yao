var time;
var hours;
var minutes;
var secounds;
var years;
var months;
var days;
function getDays(){
	time = new Date();
	hours = time.getHours();
	minutes = time.getMinutes();
	secounds = time.getSeconds();
	years = time.getFullYear();
	months = time.getMonth()+1;
	days = time.getDate();
	/*hours = zeroPadding(hours);
	minutes = zeroPadding(minutes);
	secounds = zeroPadding(secounds);
	months = zeroPadding(months);
	days = zeroPadding(days);*/
}
function zeroPadding(zero){
	if(zero < 0){
		zero = '0' + zero;
	}
	return zero;
}
function judgment(){
	var dates = new Date();
	var backs;
	if(dates.getFullYear() > years){
		backs = years + '年' + months + '月' + days + '日';
	}else if((dates.getMonth()+1 - months) > 0){
		backs = years + '年' + months + '月' + days + '日'; 
	}else if((dates.getDate() - days) > 0){
		backs = (dates.getDate() - days) + '天前';
	}else if((dates.getHours() - hours) > 0){
		backs = (dates.getHours() - hours) + '小时前';
	}else if((dates.getMinutes() - minutes) >= 1){
		backs = (dates.getMinutes() - minutes) + '分钟前';
	}else{
		backs = '刚刚';
	}
	return backs;
}
Vue.component('time-list',{
	props: ['list'],
	template: '#time-list'
});
Vue.directive('time',{
	bind: function(el, binding) {
		el._timeout_ = setInterval(function() {
			el.innerHTML = judgment();
		}, 60);
		
	},
	unbind: function(el) {
		clearInterval(el._timeout_);
		delete el._timeout_;
	}
});
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
			getDays();
			return (years + '年' + months + '月' + days + '日' + hours + ':' + minutes + ':' + secounds);
		}
	}
})