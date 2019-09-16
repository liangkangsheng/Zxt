/**
 * 记录外来页面
 */
if(typeof ss_ton == 'undefined'){
	var ss_ton = (function(){
		var that = this;
		//添加cookie
		function this_addCookie(objName,objValue,objHours){      
		    var str = objName + "=" + escape(objValue);
		    if(objHours > 0){                               
		        var date = new Date();
		        var ms = objHours*3600*1000;
		        date.setTime(date.getTime() + ms);
		        str += ";path=/;domain=zx123.cn;expires=" + date.toGMTString();
		   }
		   document.cookie = str;
		}
		//获取cookie
		function this_getCookie(objName) { //获取指定名称的cookie的值
			var arrStr = document.cookie.split("; ");
			for (var i = 0; i < arrStr.length; i++) {
				var temp = arrStr[i].split("=");
				if (temp[0] == objName) return unescape(temp[1]);
			}
		}
		var nowurl=window.document.location.href;  //当前页面
		var refurl = window.document.referrer;   //来路页面
		var reg=new RegExp(/^http:\/\/([a-z]+).zx123.cn/);
		if(refurl=='' || reg.test(refurl)){
			//站内直接返回
		}else{
			this_addCookie('zx123tongji_referer',refurl,240);
			this_addCookie('zx123tongji_location',nowurl,240);
		}
		
		//统计
		var record_id = "";
		var record_sd = function(href){
			var refurl = typeof href == "undefined" ? refurl : href;
			$.getJSON("https://record.zx123.cn/Home/Index/tongji?referer="+refurl,{},function(res){
				if(res.error==0){
					clearTimeout(timeclear);
					clearTimeout(yanchisss);
					record_id = res.record_id;
					record_ds();
				}
			});
		};
		var record_ds = function(){
			timeclear = setTimeout(function(){
				$.getJSON("https://record.zx123.cn/Home/Index/tongji?record_id="+record_id,{},function(){
					record_ds();
				});
			},2000);
		};
		var timeclear = 0;
		var yanchisss = 0;
		var yanchijq = function(){
			if(typeof $ != "function" ){
				yanchisss = setTimeout(function(){
					yanchijq();
				},500);
			}else{
				record_sd();
			}
		}
		yanchijq();//启动
		
		that.new_record = function(href){
			record_sd(href);
		}
		
		return that;
	})();
}
