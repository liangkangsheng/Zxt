//��¼����ҳ��
(function(){
	$.getScript("//www.zx123.cn/templates/zx123cs/theme-2015/js/entry_public.js");
})();

//�ٶ�cnzz��ǰ����
var _czc = _czc || [];
var _hmt = _hmt || [];
_czc.push(["_setAccount", "2977604"]);
_hmt.push(['_setAccount', 'db4023fdbccbad5b56e1c59fdf635082']);

//ͳ�����ҳ

function entry_page() {
	var cur_url = location.href;
	var ep = getCookie('entry_page');
	if (!ep) {
		addCookie('entry_page', cur_url,1000);
	}
}
entry_page();
	
//PCվ����ҳ��ת���ƶ�������ҳ js

	//��ȡurl����ͨ�÷���
	function GetQueryString(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
	
	//���û�ȡ��ǿ����ʾPC��ҳ���cookie
	var param =GetQueryString("m_pc");
	if(param !=null && param.toString().length>1){
	   if(param == "no"){								//ǿ����ʾPC��ҳ��
		   addCookie("forced_display","true",3200);
	   }else if(param == "yes"){						//ȡ��ǿ����ʾ
		   deletCookie("forced_display");
	   }
	}	
	
	//PC����ת���ƶ���
	function tiaozhuan_method(obj){
		addCookie("forced_display","false",3200);
		window.location.href = "//m.zx123.cn?m_pc=yes";
	}	

	//��ʾ
	if(getCookie("forced_display") == "true"){	//ǿ����ʾ������ת
		//alert(getCookie("forced_display"));
	}else{
		browserRedirect();	//ִ����ת
	}

//�ж��Ƿ����ƶ���
function browserRedirect() {
	var url = window.document.location.href;
	var m_pc = url.substring(url.indexOf('=')+1,url.length);
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM && m_pc == "no" ){
    	FindID();
    }
}
//�ж���ʲô��ҳ-������ҳString
function FindID(){
	var url = window.document.location.href;
	var end=url.indexOf(".html");	
	if(end==-1){end=url.length;}
	var resultStr = url.substring(7, end);
	var resultStt = url.substring(7, url.length);
	if(url.indexOf("https")!=-1){
		resultStr = url.substring(8, end);
		resultStt = url.substring(8, url.length);
	}
	var length = resultStr.length;
	var my_stin ='';
	var my_stin2 ='';
	
	if(url.indexOf("shop.zx123.cn")!=-1){
		return ation_href(0,"",'');
	}else if(resultStr.indexOf('www.zx123.cn/album')!=-1||resultStr.indexOf('www.zx123.cn/user')!=-1||resultStr.indexOf('www.zx123.cn/space')!=-1||resultStr.indexOf('/gongsi/')!=-1) {
		//www=m
		 my_stin = resultStt.substring(3, url.length); 
	  	return ation_href(2,my_stin,'');
	}else if(resultStr.indexOf('www.zx123.cn/downloads/')!=-1||resultStr.indexOf('www.zx123.cn/xiaoguotu/')!=-1||resultStr.indexOf('www.zx123.cn/chunjiezhuangxiu/')!=-1) {
		//Ч��ͼ
	    my_stin = resultStr.substring(3, end); 
	  	return ation_href(2,my_stin,'');
	}else if(resultStr.indexOf('.zx123.cn/zxsj/') !=-1 || resultStr.indexOf('.zx123.cn/xiaoqu/') !=-1 ) {
		//�����С��
		if(resultStr.indexOf('hxt-')==-1 && resultStr.indexOf('ybt-')==-1 &&resultStr.indexOf('sjt-')==-1){
			resultStr = url.substring(7, url.length);
		}else{
			resultStr = url.substring(7, url.lastIndexOf('/')) + ".html";
		}
		if(resultStr.indexOf('.zx123.cn/xiaoqu/') !=-1 &&resultStr.indexOf('-')==-1){
			resultStr = url.substring(7, url.indexOf('-')) + ".html";
		}
		my_stin = resultStr.substring(0,resultStr.indexOf('.'));
		my_stin2 = resultStr.substring(resultStr.indexOf('/')+1,resultStr.length);
		my_stin = my_stin +"/"+ my_stin2;
		return ation_href(20,my_stin,'');
	}else if(url.indexOf('zx123.cn/wenda')!=-1 ){
		//wenda
		my_stin = ".zx123.cn/"+resultStr.substring(0,resultStr.indexOf('.'))+url.substring(18,url.length);
		return ation_href(2,my_stin,'');
	}else if(url.indexOf('zx123.cn/baike')!=-1 ){
		//baike
		my_stin = url.substring(10,url.length);
		return ation_href(2,my_stin,'');
	}else if(resultStr.indexOf('.zx123.cn/join/') !=-1) {
		//����
		return ation_href(14,my_stin,'');
	}else if(resultStr.indexOf('.zx123.cn/about/baozhang/') !=-1) {
		//����
		return ation_href(18,my_stin,'');
	}else if(resultStr.indexOf('news.zx123.cn/') !=-1) {
		//news_
		my_stin = resultStr.substring(13, resultStr.length);
		if(url.indexOf("html")!=-1 ){
			my_stin = my_stin+".html";
		}
		return ation_href(201,my_stin,'');
	}else if(resultStr.indexOf('ask.zx123.cn/') !=-1) {
		//ask_
		my_stin = resultStr.substring(12, resultStr.length);
		if(url.indexOf("html")!=-1 ){
			my_stin = my_stin+".html";
		}
		return ation_href(301,my_stin,'');
	}else if(resultStr.indexOf('jjbk.zx123.cn/')!=-1) {
		//�ҾӰٿ�
		 my_stin = ".zx123.cn/jjbk"+resultStr.substring(13, end); 
	  	return ation_href(2,my_stin,'');
	}else if(resultStr.indexOf('www.zx123.cn/xuezhuangxiu/')!=-1) {
		//ѧװ��
		my_stin = resultStr.substring(3, end);
		if(zf_nmu(my_stin,"/")>2){
			var sdgd = my_stin.split("/");
			my_stin = sdgd[0]+"/zxbk/"+sdgd[2]+"/";
		}
		return ation_href(13,my_stin,'');
	}else if(resultStr.indexOf('www.zx123.cn/zxbk/') !=-1||resultStr.indexOf('.zx123.cn/usernews/') !=-1) {
		//װ��zxbk
		return ation_href(16,my_stin,'');
	}else if( resultStr.indexOf('www.zx123.cn/zxlc/') !=-1|| resultStr.indexOf('www.zx123.cn/jjzx/') !=-1|| resultStr.indexOf('www.zx123.cn/jcjj/') !=-1|| resultStr.indexOf('www.zx123.cn/jjfs/') !=-1|| resultStr.indexOf('www.zx123.cn/zxfg/') !=-1|| resultStr.indexOf('www.zx123.cn/zxgl/') !=-1|| resultStr.indexOf('.zx123.cn/bdhq/') !=-1|| resultStr.indexOf('www.zx123.cn/fwzx/') !=-1) {
		//ѧװ��list
		my_stin = resultStr.substring(resultStr.lastIndexOf('cn/')+3,length);
		return ation_href(17,my_stin,'');
	}else if(resultStr.indexOf('.zx123.cn/zb')!=-1||resultStr.indexOf('.zx123.cn/yusuan')!=-1||resultStr.indexOf('.zx123.cn/info')!=-1||resultStr.indexOf('.zx123.cn/liangfang')!=-1||resultStr.indexOf('.zx123.cn/fangan')!=-1||resultStr.indexOf('.zx123.cn/baozhang')!=-1){
		//�б�
		return ation_href(3,my_stin,'');
	}else if(resultStr.indexOf('/dt')!=-1 && resultStr.indexOf('www')==-1 ){
		//��˾����
		my_stin = resultStr.split("/");
		my_stin = ".zx123.cn/"+ my_stin[0].split(".")[0]+"/company/"+ my_stin[1]+"/"+ my_stin[2]+".html";
		return ation_href(2,my_stin,'');
	}else if(resultStr.indexOf('.zx123.cn/company')!=-1 ){
		//��˾�б�
		my_stin = resultStr.substring(0,resultStr.indexOf('.'));
		return ation_href(5,my_stin,'');
	}else if( resultStr.indexOf('www')==-1 && zf_nmu(resultStr,"/") == 2 && ( (/^[1-9]\d*$/).test(resultStr.split("/")[1]) || resultStr.indexOf("category-")!=-1) ){
		//��˾����
		my_stin = url.substring(7,url.indexOf('.'));
		my_stiner = resultStr.split("/")[1]+"/";
		if(resultStr.indexOf("category-introduce")!=-1||resultStr.indexOf("category-certificate.html")!=-1){my_stiner = my_stiner+"jieshao/"}
		if(resultStr.indexOf("category-product")!=-1){my_stiner = my_stiner+"case/"}
		if(resultStr.indexOf("category-team")!=-1){my_stiner = my_stiner+"team/"}
		if(resultStr.indexOf("category-assess")!=-1){my_stiner = my_stiner+"pinglun/"}
		if(resultStr.indexOf("category-ishare")!=-1){my_stiner = my_stiner+"gongdi/"}
		if(resultStr.indexOf("category-news")!=-1){my_stiner = my_stiner+"news/"}
		return ation_href(6,my_stin,my_stiner);
	}else if( resultStr.indexOf('/ask/')!=-1 && ( resultStr.indexOf('-solve') !=-1 || resultStr.indexOf('-nosolve') !=-1 || resultStr.indexOf('ls-hign') !=-1 || resultStr.indexOf('ls-nosolve') !=-1 || resultStr.indexOf('ls-all') !=-1 ) ){
		//�ʴ�����
		my_stin = resultStr.substring(resultStr.lastIndexOf('/')+1,length)+".html";
		return ation_href(15,my_stin,'');
	}else if(resultStr.indexOf('www.zx123.cn/ask/show-')!=-1 && (/^[1-9]\d*$/).test(resultStr.split("-")[1])){
		//�ʴ�����
		my_stin = resultStr.split("-")[1];
		return ation_href(7,my_stin,'');
	}else if(resultStr.indexOf('www.zx123.cn/ask/tlist/')!=-1){
		//�ʴ�����
		my_stin = "tlist/"+resultStr.substring(resultStr.lastIndexOf('/')+1,length);
		return ation_href(15,my_stin,'');
	}else if( resultStr.indexOf('www.zx123.cn/ask/')!=-1 ){
		//�ʴ�
		return ation_href(8,my_stin,'');
	}else if( resultStr == 'www.zx123.cn/zxrj/' ){
		//��־��ҳ
		my_stin = 'm.zx123.cn/zxrj.html';
		return ation_href(11,my_stin,'');
	}else if(resultStr.indexOf('www.zx123.cn/zxrj/')!=-1){
		//��־
		my_stin = resultStr.substring(resultStr.indexOf('.')+1,length);
		return ation_href(9,my_stin,'');
	}else if(zf_nmu(resultStr,"/") == 3 && resultStr.indexOf('www.') != -1 && resultStr.indexOf('tlist')==-1 ){
		//��������ҳ
		my_stin = resultStr.substring(resultStr.lastIndexOf('/')+1,length);
		if(my_stin.indexOf("_")!=-1){
			my_stin = my_stin.split("_")[0]+"";
		}
		return ation_href(1,my_stin,'');
	}else if(zf_nmu(resultStr,"/") == 3 && resultStr.indexOf('tlist')==-1 ){
		//��վ��������ҳ
		my_stin = resultStr.substring(resultStr.lastIndexOf('/')+1,length);
		if(my_stin.indexOf("_")!=-1){
			my_stin = my_stin.split("_")[0]+"";
		}
		//my_stin =	resultStr.substring(resultStr.indexOf('/')+1,length);
		my_stin2 = url.substring(7,url.indexOf('.'));
		return ation_href(12,my_stin,my_stin2);
	}else if(zf_nmu(resultStr,"/") == 1 ){
		//��ҳ
		my_stin = "//m.zx123.cn/"+resultStr.substring(0,resultStr.indexOf('.'));
		var my_stine = $("link[rel='alternate']").attr("href");
		if(my_stine!=undefined){
			my_stin = my_stine;
		}
		return ation_href(4,my_stin,'');
	}else {
		//����δ����
		return ation_href(99,my_stin,'');
	}
}
//��ת����Ӧ�ƶ���
function ation_href(id,strin,stin2){ 
   if(id==1){
   	//��������ҳ
   	window.location.href="//m.zx123.cn/zxbk/"+strin+".html";
   }else if(id==2){
   	//Ч��ͼ
	window.location.href="//m"+strin; 
   }else if(id==3){
   	//�б�
	window.location.href="//m.zx123.cn/zb.php";
   }else if(id==4){
   	//��ҳ
   	window.location.href=""+strin;
   }else if(id==5){
   	//��˾�б�
   	window.location.href="//m.zx123.cn/"+strin+"/company.html";
   }else if(id==6){
   	//��˾����
   	window.location.href="//m.zx123.cn/"+strin+"/company/"+stin2;
   }else if(id==7){
   	//�ʴ�����
   	window.location.href="//m.zx123.cn/ask/show-"+strin+".html";
   }else if(id==15){
   	//�ʴ�
   	window.location.href="//m.zx123.cn/ask/"+strin;
   }else if(id==20){
   	//���С��
   	window.location.href="//m.zx123.cn/"+strin;
   }else if(id==8){
   	//�ʴ�
   	window.location.href="//m.zx123.cn/ask/";
   }else if(id==9){
   	//��־
   	window.location.href="//m."+strin+".html";
   }else if(id==11){
   	//��־��ҳ
   	window.location.href="//"+strin;
   }else if(id==12){
   	//��վ��������ҳ
	window.location.href="//m.zx123.cn/zxbk/"+strin+".html";
   	//window.location.href="//m.zx123.cn/"+strin+".html";
   }else if(id==13){
   	//ѧװ��
   	window.location.href="//m"+strin;
   }else if(id==16){
   	//װ��zxbk
   	window.location.href="//m.zx123.cn/zxbk/";
   }else if(id==17){
   	//װ��list
   	window.location.href="//m.zx123.cn/baike/"+strin;
   }else if(id==18){
   	//����
   	window.location.href="//m.zx123.cn/baozhang/";
   }else if(id==14){
   	//����
   	window.location.href="//m.zx123.cn/join/";
   }else if(id==201){
   	//news
   	window.location.href="//news.m.zx123.cn"+strin;
   }else if(id==301){
   	//ask_
   	window.location.href="//ask.m.zx123.cn"+strin;
   }else if(id==0){
   	//����
   }else{
   	//��ҳ
   	window.location.href="//m.zx123.cn/";
   }
   
}
//��ȡ��Ӧ�ַ�����
function zf_nmu(str,ss){
    var mm = 0 ;
    var zf_and = 0;
	for(var i = 0 ; i<5 ;i ++){
	  zf_and = str.length;
	  mm = str.indexOf(ss);
	  str = str.substring(mm+1,zf_and);
      if(mm==-1){return i;}
	}	
}

function addCookie(objName, objValue, objHours) { //���cookie
	 var str = objName + "=" + escape(objValue);
     if(objHours > 0){                               
        var date = new Date();
        var ms = objHours*3600;
        date.setTime(date.getTime() + ms);
        str += ";path=/;domain=zx123.cn;expires=" + date.toGMTString();
	 }else{
	 	str += ";path=/;domain=zx123.cn;";
	 }
	 document.cookie = str;
}
function deletCookie(objName) { //�h��ָ�����Ƶ�cookie��ֵ
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(objName);
	if (cval != null)
		document.cookie = objName + "=" + cval + ";path=/;domain=zx123.cn;expires=" + exp.toGMTString();
}
function getCookie(objName) { //��ȡָ�����Ƶ�cookie��ֵ
	var arrStr = document.cookie.split("; ");
	for (var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split("=");
		if (temp[0] == objName) return unescape(temp[1]);
	}
}
	
//ie�汾�ж�
function ie_is(){
	var userAgent = navigator.userAgent; //ȡ���������userAgent�ַ���
	var isOpera = userAgent.indexOf("Opera") > -1; //�ж��Ƿ�Opera�����
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //�ж��Ƿ�IE�����
	var isFF = userAgent.indexOf("Firefox") > -1; //�ж��Ƿ�Firefox�����
	var isSafari = userAgent.indexOf("Safari") > -1; //�ж��Ƿ�Safari�����
	if(isIE){
		var IE5 = IE55 = IE6 = IE7 = IE8 = false;
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		IE55 = fIEVersion == 5.5;
		IE6 = fIEVersion == 6.0;
		IE7 = fIEVersion == 7.0;
		IE8 = fIEVersion == 8.0;
		IE9 = fIEVersion == 9.0;
		IE10 = fIEVersion == 10.0;
		if(IE55) {
			return "5";
		}else if(IE6) {
			return "6";
		}else if(IE7) {
			// �ж��Ƿ�ΪIE6��IE7��ʼ��XMLHttpRequest����
			if(!XMLHttpRequest){
				return "6";
			}
			return "7";
		}else if(IE8) {
			// �ж��Ƿ�ΪIE7��IE8��ʼ��document.documentMode����
			if(!!document.documentMode){
				return document.documentMode;
			}else if(!XMLHttpRequest){
				return "6";
			}
			return "8";
		}else if(IE9) {
			// �ж��Ƿ�ΪIE7��IE8��ʼ��document.documentMode����
			if(!!document.documentMode){
				return document.documentMode;
			}else if(!XMLHttpRequest){
				return "6";
			}
			return "9";
		}else if(IE10) {
			// �ж��Ƿ�ΪIE7��IE8��ʼ��document.documentMode����
			if(!!document.documentMode){
				return document.documentMode;
			}else if(!XMLHttpRequest){
				return "6";
			}
			return "10";
		}else{
			// �ж��Ƿ�ΪIE7��IE8��ʼ��document.documentMode����
			if(!!document.documentMode){
				return document.documentMode;
			}else if(!XMLHttpRequest){
				return "6";
			}
			return "11";
		}
	}else if(isFF) {
		return "99";
	}else if(isOpera) {
		return "88";
	}else{
		return "100";
	}
}
	
function page_view(url){
	referer_url = document.location.href;
	_czc.push(["_trackPageview",url,referer_url]);
	_czc.push(["_trackPageview",url+"?test",referer_url]);
	_hmt.push(['_trackPageview', url]);
}

function my_submit() {
	var inputStr = $.trim($("#txt_top_input").val());
	if (inputStr == "") {
		art.dialog.tips('��������Ҫ��ѯ�Ĺؼ���');
		return false;
	}
	var selectVal = $(".my_downlist .show").html();
	var htmlUrl = "";
	var search = 2;
	if (selectVal == "Ч��ͼ") {
		htmlUrl = "//www.zx123.cn/search/entire_search_150605.php?ekeyword=" + inputStr + "&etype=2";
		search = 2;
	} else if (selectVal == "����") {
		htmlUrl = "//www.zx123.cn/search/entire_search_150605.php?ekeyword=" + inputStr + "&etype=1";
		search = 1;
	} else if (selectVal == "�ʴ�") {
		htmlUrl = "//www.zx123.cn/ask/search.php?keywords=" + inputStr;
		search = 4;
	} else if (selectVal == "�ҹ�˾") {
		htmlUrl = "//www.zx123.cn/search/entire_search_150605.php?ekeyword=" + inputStr + "&etype=3";
		search = 3;
	}
	addCookie("search",search,360);
	window.location.href = htmlUrl;
}


//�ύ��
function tips_msg(text){
	if(typeof layer != "undefined"){
		layer.msg(text);
	}else if(typeof art != "undefined"){
		art.dialog.tips(text, 1);
	}else{
		alert(text);
	}
}

//�ύ��
function sub_click(obj) {
	
	var rep_shouji = /^1\d{10}$/;
	var rep_mianji = /^\d{1,}$/;
	var tempmianji =  $(obj).find("#mianji").val() || $(obj).find("input[name='info[mianji]']").val();//���
	var temp_fenge = $(obj).find("#ys_fenge").val() || $(obj).find("#ys_leixonjian") || $(obj).find("input[name='info[zxyq]']").val(); //���//����
	var tempareaid = $(obj).find("#areaid").val() || $(obj).find("input[name='info[areaid]']").val(); //����
	var tempLianXiRen = $(obj).find("#lianxiren").val() || $(obj).find("input[name='info[lianxiren]']").val(); //�ƺ�
	var tempShouJi = $(obj).find("#shouji").val() || $(obj).find("input[name='info[shouji]']").val(); //�ֻ�����
	var tempTitle = $(obj).find("#title").val() || $(obj).find("input[name='info[title]']").val(); //����
	var companyid = $("body").data("compenyid") || $(".but_yuyue").attr("uid");
	
	if ($(obj).find("input[name='info[lianxiren]']").length>0 && ( tempLianXiRen == "���ĳƺ�" || tempLianXiRen == "" ) ) {
		tips_msg('���������ĳƺ���');
		return false;
	}
	if ($(obj).find("input[name='info[shouji]']").val().length>0 && !rep_shouji.test(tempShouJi)) {
		tips_msg('��������ȷ���ֻ����룡');
		return false;
	}
	if ($(obj).find("input[name='info[mianji]']").length>0 && ( tempmianji == "װ�����" || tempmianji == "" || !rep_mianji.test(tempmianji) ) ) {
		tips_msg('��������ȷ��װ�������');
		return false;
	}
	if ($(obj).find("input[name='info[areaid]']").length>0 && !rep_mianji.test(tempareaid)) {
		tips_msg('��ѡ����ȷ�ĵ�����');
		return false;
	}
	if ($(obj).find("input[name='info[title]']").length>0 && tempTitle == "") {
		$("#title").val($("title").text());
	}
	
	return true;
};

function getarea(){
	var srcs = document.location.href;
	var city = srcs.split('//')[1].split('.')[0];
	if(city!=""&&city!=undefined&&city!='www'&&city!='m'&&city!='ask'&&city!='news'){
		var s = typeof _baseDomain !="undefined"? _baseDomain[city]:undefined;
		if(s!=undefined){
			return _baseDomain[city]['areaid'];
		}else{
			return "";
		}
	}else{
		return "";
	}
}

function qqzhixun(daili){
	var now_areaid=getCookie("city_area");
	var getareaw = getarea();
	now_areaid = getareaw!=""?getareaw:now_areaid!=""?now_areaid:"";
	if(!daili && now_areaid){
		$.getJSON("//www.zx123.cn/tool/join_daili_qq.php?area_id="+now_areaid +"&callback=?",function(data){
			if(data.qq.length > 4 && data.qq != '-1'){
				window.open("//wpa.qq.com/msgrd?v=3&uin="+ data.qq +"&site=qq&menu=yes", '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
			}else{
				$("body").append("<iframe src='//wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDA1MzQxOF80Nzc1MjlfODAwMDUzNDE4XzJf' width='0' height='0'></iframe>");
			}
		});	
	}else{
		$("body").append("<iframe src='//wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDA1MzQxOF80Nzc1MjlfODAwMDUzNDE4XzJf' width='0' height='0'></iframe>");		
	}
}

var shangxia = function(height){
	//�ع�
}

function getScrollTop() {
	var scrollTop = 0;
	if(document.documentElement && document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	} else if(document.body) {
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}

var scrollFunc = function(e) {
	e = e || window.event;
	var height = getScrollTop();
	if((e.wheelDelta && e.wheelDelta >= 120) || (e.detail && 3 <= e.detail)) {
		shangxia(height);
	} else if((e.wheelDelta && e.wheelDelta <= -120) || (e.detail && -3 >= e.detail)) {
		shangxia(height);
	}
}
var shangxiaer = function(){
	var height = getScrollTop();
	shangxia(height);
}
//��ʱִ��
 window.setInterval(shangxiaer,1000);
/*ע������¼�*/
if(document.addEventListener) {
	document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//W3C
window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome

//new���ҳ
var koopsd = function(herfs,contentid) {
	if($("#bgruorr").length < 1) {
		var htmlfg = "<style>#bgruorr{z-index: 101;text-align: center;position: fixed;left: 0;top: 0;bottom: 0;right: 0;}"
					+".weposdk{background:#fff;display: block;border-radius: 10px; position: absolute;left:50%;top:50%; width:960px;height:530px; margin:-280px 0 0 -480px;}"
					+".weposdf { cursor: pointer;transition: 0.3s all;border-radius: 50%; background: url(//www.zx123.cn/templates/zx123cs/img_new/yuyyue_bg.png) no-repeat 1px 3px; width: 40px; height: 40px;position: absolute;top: -55px;right: -10px; }"
					+".weposdf:hover { background: #ff3322 url(//www.zx123.cn/templates/zx123cs/img_new/yuyyue_bg.png) no-repeat 1px 3px; border-radius: 50px; }</style>"
					+"<div class='bgruorr' style='z-index: 100;text-align: center;position: fixed;left: 0;top: 0;bottom: 0;right: 0;background:#000;filter: alpha(opacity=40);opacity: 0.5;'></div>"
					+"<div id='bgruorr'><div class='weposdk'><div class='weposdf'></div></div></div>";
		if(contentid!=""&&contentid!=undefined){
			htmlfg = htmlfg + "<iframe src='//www.zx123.cn/yp/client/?action=xiangmu_show&contentid="+contentid+"&new_zb=true' width='0' height='0' style='display: none;'></iframe>";
		}
		$("body").append(htmlfg);
	} else {
		$("#bgruorr").show();
		$(".bgruorr").show();
	}
	$("#bgruorr .weposdk iframe").remove();
	$("#bgruorr .weposdk").append("<iframe border='0' scrolling='no' style='display: block;border: none;border-radius: 10px; width:960px;height:530px;margin:0' src='" + herfs + "'/>");
	$("#bgruorr .weposdf").click(function(){
		$("#bgruorr").hide();
		$(".bgruorr").hide();
	});
}

//------�ж��Ƿ��ѵ�¼-----
function loginSuccess(data) {
	var gurl="",gname="";
	$(".userManager").show();
	$(".noLoginShow").hide();
	if(data["type"]==10){
		gurl = "//www.zx123.cn/yp/client/";
		gname = "�����Ա����";
	}
	if(data["type"]==11){
		gurl = "//www.zx123.cn/yp/business/";
		gname = "������������";
	}
	var rhtml = '<a href="'+gurl+'" rel="nofollow"><span class="icon icon_a"></span>'+gname+'</a>';
	if(data["msgcount"]!=""&&data["msgcount"]!=null&&data["msgcount"]!=undefined){
		rhtml =	rhtml + '<a href="//www.zx123.cn/message/inbox.php" rel="nofollow"><span class="icon icon_b"></span>'+data["msgcount"]+'</a>';
	}
	rhtml =	rhtml + '<a href="//www.zx123.cn/member/logout.php" rel="nofollow">�˳�</a>';
	$(".top_right li span.jker").html(rhtml);
}

//------�ж��Ƿ��ѵ�¼-----
var why_Login = false;
function isLogin(){
	$.getJSON("//www.zx123.cn/member/login_new.php?action=checklogin&callback=?", function(data) {
		if (data["status"] == 1) {
			$(".top_bg .top_right").css("width","580px");
			$(".noLoginShow").hide();
			why_Login = true;
			loginSuccess(data);
		}else { 
			$(".userManager").hide();
			$(".noLoginShow").show();
		}
	}, 'json');
}

//------cookie��-----
function chundiqu_cookie(info){
	info = info && typeof info == "object" ?info:"";
	if(info != ""){
		addCookie("cityname",info[2],0),addCookie('nowcity_name',info[2],0);
		addCookie("citydir",info[4],0),addCookie('nowcity_dir',info[4],0);
    	addCookie("city_area",info[0],0),addCookie('nowcity_areaid',info[0],0);
	}
}

//ע�� CNZZ-�ٶ��¼�ͳ��
function hmt_czc(){
	//ע��ͳ�ƶ���
	hmtczc("�ײ�ͨ������",".downin .downcleft","#jianyang");
	hmtczc("ͨ����ɫ������",".right_table",".but_default");
	hmtczc("Ч��ͼ��ҳ����",".comceonter .listasda",".but_default2");
	hmtczc("Ч��ͼ��ҳ����",".new-container",".submit-btn");
	hmtczc("��վ��ҳ�ϲ�","#topright .right_table",".but_default");
	hmtczc("��վinfo,baozhang",".info_zbiao .zbiao",".but_default");
	hmtczc("��վyusuan",".yuszb",".zbcontr span");
	hmtczc("��˾����ԤԼ","#yuyuetable .yycent",".submit");
	hmtczc("��˾��ҳԤԼ",".compan_b form",".but_default");
	hmtczc("��˾�ڲ�ԤԼ",".yyues",".yye input");
	hmtczc("ͨ�õ���ͨ��",".asketable ",".but_default");
	hmtczc("ͨ�����̱�",".slcj_jm .lksdjf",".but_submit");
}
function hmtczc(texts,actiondumo,actionsubmit){
	var category="",action="",opt_label=texts,opt_value="";
	if($(actiondumo).length>0){
		$(actiondumo).find("select,input[type!='button'],input[type!='submit']").on("click",function(){
			category = "���_��Ԫ��";
			hmtczcer(category,action,opt_label,opt_value);
		});
		$(actiondumo+" "+actionsubmit).on("click",function(){
			category = "���_�ύ��ť";
			$(this).parent(actiondumo).find("input,select").each(function(){
				opt_value = opt_value + $(this).val() + "; ";
			});
			hmtczcer(category,action,opt_label,opt_value);
		});
		return true;
	}else{
		return false;
	}
}
function hmtczcer(category,action,opt_label,opt_value){
	action = why_Login?"��Ա":"�ο�";
	_hmt.push(['_trackEvent', category, action, opt_label, opt_value]);
	_czc.push(['_trackEvent', category, action, opt_label, opt_value]);
}

//װ�޽�
// var gg_ = function(ss){
// 	var text = "";
// 		text += "<style>";
// 		text += "	#ggtable { display: none; position: fixed;transition: 0.3s; margin: 0;padding: 0;left: 0;top: 0;right: 0;bottom: 0;z-index: 998; }";
// 		text += "	#ggtable .ggbgg { position: relative;width: 100%;height: 100%; background: #000;opacity: 0.6; }";
// 		text += "	#ggtable .ggxxx { cursor: pointer;transition: 0.3s all;border-radius: 50%; background: url(//www.zx123.cn/templates/zx123cs/img_new/yuyyue_bg.png) no-repeat 1px 3px; width: 40px; height: 40px;position: absolute;top: -55px;right: -10px; }";
// 		text += "	#ggtable .ggxxx:hover { background: #ff3322 url(//www.zx123.cn/templates/zx123cs/img_new/yuyyue_bg.png) no-repeat 1px 3px; border-radius: 50px; } ";
// 		text += "	#ggtable .ggter { position: absolute; width: 800px;height:436px;top: 50%;left: 50%; margin: -218px 0 0 -400px;background: #fff; border-radius: 10px; }";
// 		text += "	#ggtable .ggter a { display: block;margin: 0;padding: 0; }";
// 		text += "	#ggtable .ggter img { display: block;width: 100%;height: auto; border-radius: 10px; }";
// 		text += "</style>";
// 		text += "<div id=\"ggtable\">";
// 		text += "<div class=\"ggbgg\"></div>";
// 		text += "<div class=\"ggter\">";
// 		text += "	<div class=\"ggxxx\"></div>";
// 		text += "	<a href=\"//bj.zx123.cn/activity/hd51.html\" target=\"_blank\">";
// 		text += "		<img alt=\"�＾װ�޻\" src=\"//www.zx123.cn/templates/zx123cs/theme-2019/img/gg_daping.jpg\">";
// 		text += "	</a>";
// 		text += "</div>";
// 		text += "</div>";
// 
// 	var ss = typeof ss == "undefined"?"":ss;
// 	if(ss=="hide"){
// 		$("#ggtable").hide();
// 		$("#ggtable").remove();
// 	}
// 	if(ss=="show"){
// 		$("body").append(text);
// 		$("#ggtable").show();
// 		$("#ggtable .ggxxx,#ggtable .ggbgg,#ggtable .ggter").click(function(){
// 			gg_("hide");
// 		});
// 	}
// }
	

//ͨ��js
$(function() {
	
	isLogin();
	hmt_czc();

	$('.nav_down_er').hover(function() {
		$(this).parents('.nav_li').find('a.nav_big').addClass('nav_big_er');
	}, function() {
		$(this).parents('.nav_li').find('a.nav_big').removeClass('nav_big_er');
	});

	//��������
	$(".txt_search_but").click(function() {
		my_submit();
	});
	
	//15528223001
	var opsdmm = ['alsm','guyuan','lingwu','qingtongxia','shizuishan','wuzhong','yinchuan','zhongwei'];
	var urldmm = document.location.href;
	for(var i=0;i<opsdmm.length;i++){
		if(urldmm.indexOf(opsdmm[i]+".zx123.cn")!=-1){
			$(".banner .iponght").html('��������<br><font>155-2822-3001</font>');
			$(".top_right li .one_a").each(function(){
				if($(this).html().indexOf("4000-123-169")!=-1){
					$(this).html('<span class="iconty"><span class="icon b"></span></span>155-2822-3001');
				}
			});
		}
	}

	$('.nav_down').hover(function() {
		$(this).parents('.nav_li').addClass('nav_big_er');
	}, function() {
		$(this).parents('.nav_li').removeClass('nav_big_er');
	});

	//����������껬���¼�
	$(".userManager").hover(
		function() {
			$(".top_manager").show();
		},
		function() {
			$(".top_manager").hide();
		}
	);

	//��½����¼�

	$(".top_but_login").attr('href',$(".top_but_login").attr('href')+'?forward='+window.document.location.href);


	//�Զ���������б��¼�
	$(".my_downlist").hover(
		function() {
			$(".down").show();
		},
		function() {
			$(".down").hide();
		}
	);
	//�����б�ѡ���¼�
	$(".my_downlist .down span").click(function() {
		var text = $(this).html();
		$(this).parent().prev().html(text);
		$(".down").hide();
	});
	
	function mysearch() {
		var wegn = getCookie("search");
		if(wegn=="2"){
			$(".my_downlist .show").html("Ч��ͼ");
		}else if(wegn=="1"){
			$(".my_downlist .show").html("����");
		}else if(wegn=="3"){
			$(".my_downlist .show").html("�ҹ�˾");
		}else if(wegn=="4"){
			$(".my_downlist .show").html("�ʴ�");
		}
	}
	mysearch();

	//���������л��¼�
	$(".footer_top .tab span").click(function() {
		$(".footer_top .item .alist").hide();
		var index = $(this).parents(".tab").find("span").index($(this));
		$(".footer_top .item").find(".alist").eq(index).show();
		//ѡ���»���
		$(".footer_top .tab span").css("border-bottom", "0px");
		$(".footer_top .tab span").eq(index).css("border-bottom", "1px solid #FFCC33");
	});

	//װ�޽�
	var timestamp = Date.parse(new Date());
	// if( document.location.href == "http://bj.zx123.cn/2019/0830/1777336.html" || timestamp > 1567267200000 && timestamp < 1569852000000){
	// 	var gg =  getCookie("gg_gg");
	// 	gg == "no" ? "" : gg_('show');
	// 	addCookie('gg_gg', "no", 2000);
	// }
	//��ַ����
	$('.top_manager a').eq(2).attr('href','//www.zx123.cn/yp/client/');
	iconv_tb_link();
	function iconv_tb_link() {
		var fzlink = getCookie("mycity");
		if (fzlink != '' && fzlink != undefined && fzlink.indexOf('www.') ==-1 ) {
			
			$(".navigate .nav_big").eq(2).attr("href", fzlink + "/yusuan.html");
			$('.header_bg .navigate li.nav_li').eq(0).find('a.nav_big').attr('href',fzlink+'');
			$('.header_bg .navigate li.nav_li').eq(3).find('a.nav_big').attr('href',fzlink+'/company.html');

			$('.header_bg .navigate li.nav_li .tczx_down a').eq(0).attr('href',fzlink+'/xiaoqu/');
			$('.header_bg .navigate li.nav_li .tczx_down a').eq(1).attr('href',fzlink+'/zxsj/');
			$('.header_bg .navigate li.nav_li .tczx_down a').eq(2).attr('href',fzlink+'/gongdi/');
			$('.header_bg .navigate li.nav_li .tczx_down a').eq(3).attr('href',fzlink+'/wenda/');
			$('.ggtjuan .ggtconte .ggtconte_lest_yi a').attr('href',fzlink+'/info.html?utm_source=zx123&utm_medium=xiaoguotulist&utm_campaign=xiafang&utm_content=leftshengli');
			$('.ggtjuan .ggtconte .ggtconte_lest_er a').attr('href',fzlink+'/yusuan.html?utm_source=zx123&utm_medium=xiaoguotulist&utm_campaign=xiafang&utm_content=medshengqian');
			$('.ggtjuan .ggtconte .ggtconte_lest_sv a').attr('href',fzlink+'/baozhang.html?utm_source=zx123&utm_medium=xiaoguotulist&utm_campaign=xiafang&utm_content=rightshengxing');
			
			$("#zx_huodon").attr("href",fzlink+"/activity/hd51.html");
			$("#ggtable .ggter a").attr("href",fzlink+"/activity/hd51.html");
		}
	}
	
	//����
	(function down_icon(){
		var html =  $(".footer_dow_m .m_right").html();
		$(".footer_dow_m .m_right").html("<p class='securityer'>"+html+"</p>");
		var htmld = [];
		htmld.push('');
		htmld.push('<style>');
		htmld.push('.securityer { display: inline-block;width: 1100px;margin: 0 auto;text-align: center;  }');
		htmld.push('.security { display: inline-block;width: 1100px;margin: 0 auto;text-align: center; padding: 15px 0 0 0; }');
		htmld.push('.security a { background:#fff url(//www.zx123.cn/templates/zx123cs/theme-2017/img/index_yh.png) no-repeat;display:inline-block;font-size: 12px; color: #666; }');
		htmld.push('.security a { text-decoration: none; margin:0 10px 0 0; display:inline-block; width:59px; height:35px; padding:2px 0 0 44px; border:1px solid #DCDCDC; overflow:hidden; vertical-align:middle; line-height:16px;}');
		htmld.push('.security a:hover{ color:#666; text-decoration:none; border-color:#bcbcbc;}');
		htmld.push('.security a.last{margin-right:0;}');
		htmld.push('.security .security01{background-position:3px -1px;}');
		htmld.push('.security .security03{background-position:3px -234px; padding-left:34px;}');
		htmld.push('.security .security04{background-position:7px -95px; padding-left:36px; width:70px;}');
		htmld.push('.security .security05{background-position:3px -142px; padding-left:40px; width: 47px;}');
		htmld.push('.security .security07{background-position:-6px -290px;}');
		htmld.push('.security .security08{background-position:0px -342px; padding:0; width:106px; height:37px;}');
		htmld.push('.security .security09{background-position:5px -386px; width:58px;padding-left:38px;}');
		htmld.push('.security .security10{background-position:0px -424px; width:93px;padding-left:0;}');
		htmld.push('.security .szfw_logo { width:auto; height:39px; padding:0; border:0;background:#fff; }');
		htmld.push('.security .szfw_logo img { width:auto; height:39px;}');
		htmld.push('</style>			');
		htmld.push('<p class="security">');
		htmld.push('<a title="����������ӱ�ʶ" href="//www.scgswljg.gov.cn/iciaicweb/dzbscheck.do?method=change&id=51090020160720084760" target="_blank" class="security09" rel="nofollow" id="link431">��������<br>���ӱ�ʶ</a>');
//		htmld.push('<a title="qualys secure" href="https://seal.qualys.com/sealserv/info/?i=8daaed52-427d-474e-bc07-9c83a8a53188" target="_blank" class="security07" rel="nofollow" id="link426"></a>');
//		htmld.push('<a title="������Ϣ���簲ȫ���" target="_blank" href="//www.500.com/about/wangan/index.htm" class="security04" rel="nofollow" id="link427">������Ϣ��<br>�簲ȫ���</a>');
//		htmld.push('<a title="�й�������ҵ" href="h//www.itrust.org.cn/" target="_blank" class="security05" rel="nofollow" id="link428">�� ��<br>������Э��</a>');
//		htmld.push('<a title="��ȫ���˱�ʶ" href="//www.anquan.org/authenticate/cert/?site=www.500.com&amp;at=business"  target="_blank" class="security10" rel="nofollow" id="link349"></a>');
//		htmld.push('<a title="���Ͻ��ױ�������" href="//www.315online.com.cn/member/315120077.html" target="_blank" class="security03" rel="nofollow" id="link430">���Ͻ���<br> ��������</a>');
		htmld.push('<a title="�й�������Э��"  href="//www.itrust.org.cn/" target="_blank" class="szfw_logo"><img src="//www.zx123.cn/templates/zx123cs/theme-2017/img/footer_logo01.gif" width="110" height="39"></a>');
		htmld.push('<a title="���羯��ٱ�ƽ̨" href="//www.cdnet110.com/" target="_blank" class="security01" rel="nofollow" id="link435">���羯��<br>�ٱ�ƽ̨</a>');
		htmld.push('<a title="�й��������ٱ�����"  href="//www.12377.cn/" target="_blank" class="szfw_logo"><img src="//www.zx123.cn/templates/zx123cs/theme-2017/img/cert2.png" width="110" height="39"></a>');
		htmld.push('<a title="�����й�"  href="//www.creditchina.gov.cn/" target="_blank" class="szfw_logo"><img src="//www.zx123.cn/templates/zx123cs/theme-2017/img/creditchina.gif" width="110" height="39"></a>');
//		htmld.push('<a title="������վ�����֤" href="//www.500.com/about/knet.html" target="_blank" class="security08" rel="nofollow" id="link432"></a>');
//		htmld.push('<a title="������վ��֤"  href="https://search.szfw.org/cert/l/CX20150210006686006756" target="_blank" class="szfw_logo"><img src="//www.zx123.cn/templates/zx123cs/theme-2017/img/cert.jpg" width="110" height="39"></a>');
		htmld.push('</p>');
		$(".footer_dow_m .m_right,#mm_downm").append(htmld.join(""));
		
	})();
	
	//�ײ������ع�
	(function(){
		//top����
		var hpon = $(".banner .iponght font,.top_right li.colo,.xgt_toolbar ul.liebiao li.colo");
		hpon.each(function(){
			var tet = $(this).text();
			if(tet.indexOf("4006-1234-91")!=-1){
				$(this).text(tet.replace("4006-1234-91","4000-123-169"));
			}
		});
		
		var html = $(".main100 .address_c").html();
		html =  'Copyright 2013 zx123.cn��רҵװ����װ��123��-�Ĵ���Ѷ�����������޹�˾��Ȩ���У�����������Ȩ����<br>'+
				'������ߣ�4000-123-169&nbsp;/&nbsp;028-63138462&nbsp;&nbsp;&nbsp;&nbsp;'+
				'ICP����֤��ţ���ICP��12015828�� &nbsp;&nbsp;'+
				'<a href="javascript:void(0);" onclick="tiaozhuan_method(this)">�ֻ���</a>'+
				' | '+
				'<a href="//www.zx123.cn">���԰�</a>';
		$(".main100 .address_c").html(html);
	})();
	
	//����
	var myDate = new Date();
	var yy = myDate.getDate();
	var rr = myDate.getHours();
	var mm = myDate.getMinutes();
	var ewqr = rr * 93 - rr * yy + mm;
	$('.sty_gs_gs .gsgs_left .gsgsleft_down span font').parents('span').html("����ȫվ����<font>"+ewqr+"</font>��ԤԼ");
	$("#for .table_list.table_list_top.xxxwei").html("���� <font>"+ewqr+"</font> λҵ��������");
	$("#for .table_list.table_list_top").each(function(){
		if($(this).text().indexOf("���ջ�ʣ")!=-1){
			$(this).html("���� <font>"+ewqr+"</font> λҵ��������");
		}
	});
	$("font.dgdfleft").html(ewqr);
	
//------------����show.����
	var usd =document.location.href.split("/")[5];
	var usb =document.location.href.split("/")[4];
	if(/^\d{1,10}(.html)$/.test(usd) || /^(dt)\d{1,10}(.html)$/.test(usb)){
		$.get("https://www.zx123.cn/tool/tool.inc.php?flag=108&nowurl="+document.location.href,{},function(data){});	
	}
	
	//����ͳ��
	(function(){
		var cuturl = document.location.href;
		var refurl = window.document.referrer;
		$.get("//www.zx123.cn/tool.php?filename=pc_area_attr&type=pc&nowurl="+cuturl+"&fromurl="+refurl);
	})();
	
	//����
    (function() {
    	var bp = document.createElement('script');
    	var curProtocol = window.location.protocol.split(':')[0];
    	if(curProtocol === 'https') {
    		bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    	} else {
    		bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    	}
    	var s = document.getElementsByTagName("script")[0];
    	s.parentNode.insertBefore(bp, s);
    })();
    
    //����and�ͷ�
	$("#youlinahez,#youlinahez2,#one_a").click(function(){
		qqzhixun();
	});
	
//end
});