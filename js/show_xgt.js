	//跳转
	function getCookie(objName) { //获取指定名称的cookie的值
		var arrStr = document.cookie.split("; ");
		for (var i = 0; i < arrStr.length; i++) {
			var temp = arrStr[i].split("=");
			if (temp[0] == objName) return unescape(temp[1]);
		}
	}
	function addCookie(objName, objValue, objHours) { //添加cookie
		var str = objName + "=" + escape(objValue);
		if (objHours > 0) { //为0时不设定过期时间，浏览器关闭时cookie自动消失
			var date = new Date();
			var ms = objHours * 3600 * 1000;
			date.setTime(date.getTime() + ms);
			str += "; expires=" + date.toGMTString();
			str += "; domain= zx123.cn ";
		}
		document.cookie = str;
	}
	

//显示
	if(getCookie("forced_display") == "true"){	//强制显示，不跳转
		//alert(getCookie("forced_display"));
	}else{
		browserRedirect3();	//执行跳转
	}
    function browserRedirect3() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM ){
      var url = window.document.location.href;
	  var end=url.length;
	  var resultStr = url.substring(7, end); 
	  var length = resultStr.length;
	  var my_stin ='';
       my_stin =	resultStr.substring(resultStr.lastIndexOf('/')+1,length);
       window.location.href="http://m.zx123.cn/xiaoguotu/"+my_stin;
       return;
     }
    }

	//PC端跳转到移动端
	function tiaozhuan_method(obj){
		addCookie("forced_display","false",3200);
		window.location.href = "http://m.zx123.cn?m_pc=yes";
	}
    
//统计注册
//var jq=jQuery.noConflict(); 
//var $=jq;
  document.domain = 'zx123.cn';
  var _czc = _czc || [];
  var _hmt = _hmt || [];
  _czc.push(["_setAccount", "2977604"]);
  _hmt.push(['_setAccount', 'db4023fdbccbad5b56e1c59fdf635082']);
  

//快速发布标
function index_sub_click(){
	var rep_shouji = /^(1[3|4|5|7|8][0-9])\d{8}$/;
	var shouji1 = $.trim($("#shouji1").val());
	if(!rep_shouji.test(shouji1)){
		alert("请输入正确的手机号码！");
		return false;
	}else{
		//如果为空，则付默认值
		var realName = $.trim($(".realname").val());	//称呼
		if(realName == ""){
			$(".realname").val("未填写");
		}
		var area = $.trim($(".area").val());	//面积
		if(area == ""){
			$(".area").val("0");
		}
		var address = $.trim($(".address").val());	//小区地址
		if(address == ""){
			$(".address").val("未填写");
		}
		//$("#nav_myform").submit(); //提交表单
		return true;
	}
};

function bidding_enabled(){
	$('.btn-bidding').val('申请中……');
	$('.btn-bidding').attr('disabled', true);
	var abled = index_sub_click();
	if( !abled ){
		$('.btn-bidding').val('马上免费申请');
		$('.btn-bidding').attr('disabled', false);
	}
	return abled;
}


function changetype(){
	$("#pic_type").submit();
}