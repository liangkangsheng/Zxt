	//��ת
	function getCookie(objName) { //��ȡָ�����Ƶ�cookie��ֵ
		var arrStr = document.cookie.split("; ");
		for (var i = 0; i < arrStr.length; i++) {
			var temp = arrStr[i].split("=");
			if (temp[0] == objName) return unescape(temp[1]);
		}
	}
	function addCookie(objName, objValue, objHours) { //���cookie
		var str = objName + "=" + escape(objValue);
		if (objHours > 0) { //Ϊ0ʱ���趨����ʱ�䣬������ر�ʱcookie�Զ���ʧ
			var date = new Date();
			var ms = objHours * 3600 * 1000;
			date.setTime(date.getTime() + ms);
			str += "; expires=" + date.toGMTString();
			str += "; domain= zx123.cn ";
		}
		document.cookie = str;
	}
	

//��ʾ
	if(getCookie("forced_display") == "true"){	//ǿ����ʾ������ת
		//alert(getCookie("forced_display"));
	}else{
		browserRedirect3();	//ִ����ת
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

	//PC����ת���ƶ���
	function tiaozhuan_method(obj){
		addCookie("forced_display","false",3200);
		window.location.href = "http://m.zx123.cn?m_pc=yes";
	}
    
//ͳ��ע��
//var jq=jQuery.noConflict(); 
//var $=jq;
  document.domain = 'zx123.cn';
  var _czc = _czc || [];
  var _hmt = _hmt || [];
  _czc.push(["_setAccount", "2977604"]);
  _hmt.push(['_setAccount', 'db4023fdbccbad5b56e1c59fdf635082']);
  

//���ٷ�����
function index_sub_click(){
	var rep_shouji = /^(1[3|4|5|7|8][0-9])\d{8}$/;
	var shouji1 = $.trim($("#shouji1").val());
	if(!rep_shouji.test(shouji1)){
		alert("��������ȷ���ֻ����룡");
		return false;
	}else{
		//���Ϊ�գ���Ĭ��ֵ
		var realName = $.trim($(".realname").val());	//�ƺ�
		if(realName == ""){
			$(".realname").val("δ��д");
		}
		var area = $.trim($(".area").val());	//���
		if(area == ""){
			$(".area").val("0");
		}
		var address = $.trim($(".address").val());	//С����ַ
		if(address == ""){
			$(".address").val("δ��д");
		}
		//$("#nav_myform").submit(); //�ύ��
		return true;
	}
};

function bidding_enabled(){
	$('.btn-bidding').val('�����С���');
	$('.btn-bidding').attr('disabled', true);
	var abled = index_sub_click();
	if( !abled ){
		$('.btn-bidding').val('�����������');
		$('.btn-bidding').attr('disabled', false);
	}
	return abled;
}


function changetype(){
	$("#pic_type").submit();
}