var app=new Vue({
            el:'#app',
            data:{
               list: [
               		{
               			fruit:[
               				{
		               			id:1,
		               			name:'iPhone 7',
		               			price:6188,
		               			count:1
		               		}
               			]
               		},
               		{
               			id:2,
               			name:'iPad Pro',
               			price:5888,
               			count:1
               		},
               		{
               			id:3,
               			name:'MaxBook Pro',
               			price:21488,
               			count:1
               		}
               ],
               totalPrice: 0
            },
            /*computed:{
            	totalPrice: function (){
            		var total = 0;
            		alert("1");
            		for(var i = 0;i < this.list.length;i++){
            			var item = this.list[i];
            			if($("input[type='checkbox']").eq(i+1).is(':checked')){
	            			total += item.price * item.count;
            			}else{

            				alert("1");
            			}
            		}
            		return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
            	}
            },*/
            methods:{
            	handleReduce: function (index) {
            		if(this.list[index].count === 1){
            			return;
            		}
            		this.list[index].count--;
            		this.$options.methods.totalPrices();
            	},
            	handleAdd: function (index) {
            		this.list[index].count++;
					this.$options.methods.totalPrices();
            	},
            	handleRemove: function (index) {
            		this.list.splice(index, 1);
            		$("tr").eq(index+1).remove("input[type='checkbox']");
            		this.$options.methods.totalPrices();
            	},
            	checkBox: function (){

            		if($("#checkBox").is(':checked')==true){
            			$("input[type='checkbox']").each(function(){
            				$("input[type='checkbox']").attr("checked",true);
            			});
            		}else{
            			$("input[type='checkbox']").each(function(){
            				$("input[type='checkbox']").attr("checked",false);
            			});
            		}

            		this.$options.methods.totalPrices();
            	},
            	totalPrices: function (){
            		var total = 0;
            		for(var i = 0;i < app.list.length;i++){
            			var item = app.list[i];
            			if($("input[type='checkbox']").eq(i+1).is(':checked')){
	            			total += item.price * item.count;

            			}
            		}
            		app.totalPrice = total.toString().replace(/\B(?=(\d{3})+$)/g,',');
            	}
            }
});