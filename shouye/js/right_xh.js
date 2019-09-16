
//右栏的人工咨询	
var e = [];
if(ie_is()>=9){
e.push('		<style>');
e.push('			#rightxuanfu { position: fixed;z-index:9;transition: ease all 0.4s;font-family: "microsoft yahei"; right: 0;top: 200px; background: rgba(140,140,140,0.2);width: 88px;height: auto;padding:10px 8px;border-radius: 10px; }');
e.push('			#rightxuanfu div.kl { transition: ease all 0.4s; cursor: pointer; margin: 0 auto;line-height: 12px;height: 12px;padding:5px 5px 5px 15px;background: #fff;border-radius: 10px; position: relative;color: #4c4c4c;font-size: 12px; }');
e.push('			#rightxuanfu div.kl:nth-child(n+1) { margin-top: 15px; }');
e.push('			#rightxuanfu div.kl font { display: block;margin: 0 auto; text-align: center;float: right; }');
e.push('			#rightxuanfu div.kl span { -webkit-transition: ease all 0.4s; -moz-transition: ease all 0.4s;background: transparent url(//www.zx123.cn/templates/zx123cs/theme-2017/img/xuanfutu.png) no-repeat; }');
e.push('			#rightxuanfu div.kl span { display: block;background-size: 300px 35px;border-radius: 4px;position: absolute;left: 5px;bottom: 0;width: 30px;height: 35px; }');
e.push('			#rightxuanfu .kl.a span { background-position: -183px 0px; }');
e.push('			#rightxuanfu .kl.b span { background-position: -138px 0px; }');
e.push('			#rightxuanfu .kl.c span { background-position: -95px 0px; }');
e.push('			#rightxuanfu .kl.d span { background-position: -48px 0px; }');
e.push('			#rightxuanfu .kl.e span { background-position: -229px 0px; }');
e.push('			#rightxuanfu div.kl.hover { margin-top: 70px; line-height: 20px;height: 20px;padding:2px 5px;font-size: 12px; color: #2c2c2c;background: #ffca3a; }');
e.push('			#rightxuanfu div.kl.hover font { float: none; }');
e.push('			#rightxuanfu div.kl.hover span { background-size: 600px 71px; bottom: 24px;width: 80px;height: 71px;}');
e.push('			#rightxuanfu .kl.a.hover span { background-position: -358px 0px; }');
e.push('			#rightxuanfu .kl.b.hover span { background-position: -265px 0px; }');
e.push('			#rightxuanfu .kl.c.hover span { background-position: -177px 0px; }');
e.push('			#rightxuanfu .kl.d.hover span { background-position: -87px 0px; }');
e.push('			#rightxuanfu .kl.e.hover span { background-position: -449px 0px; }');
e.push('			#rightxuanfu .ki { padding-top: 15px; }');
e.push('			#rightxuanfu .ki img { display: block;width: 88%;border-radius: 5px;margin: 0 auto; }');
e.push('			#rightxuanfu .ki.h { cursor: pointer; }');
e.push('			#rightxuanfu .ki span { font-size: 12px;text-align: center;display: block;margin: 0 auto;line-height: 14px;height: auto;padding-top: 5px;color: #666; }');
e.push('			#rightxuanfu .ku.x { position: absolute;top: 8px;right: 6px;cursor: pointer; color: #fff;opacity: 0.6; font-size: 12px;width: 10px;line-height: 10px;text-align: center; }');
e.push('			#rightxuanfu .ku.x:hover { opacity: 1; }');
e.push('			#rightxuanfu .kh.t { display: none;position: absolute;left: 0;right: 0;bottom: -32px;font-size: 12px; text-align: center;color: #fff;height: 30px;line-height: 30px;cursor: pointer; background: rgba(140,140,140,0.2);color: #fff;border-radius: 10px; }');
e.push('			#rightxuanfu.hide { width: 32px; }');
e.push('			#rightxuanfu.hide .ku.x,'); 
e.push('			#rightxuanfu.hide .ki span,');
e.push('			#rightxuanfu.hide div.kl font { display: none; }');
e.push('			#rightxuanfu.hide div.kl span { left: 1px; }');
e.push('			.whatis {  position: absolute;right: 0;top: -110px;width: 100%;height: 104px; background: url(//www.zx123.cn/templates/zx123cs/theme-2017/img/fzindex_banle.png) no-repeat 2px -472px; }');
e.push('			.whatis a { display: block; width: 100%;height: 100%;}');
e.push('		</style>');
e.push('		<div id="rightxuanfu" class="shoew">');
//e.push('			<div class="whatis"><a target="_blank" href="//www.zx123.cn/about/aboutus/"></a></div>');
e.push('			<div class="kl a hover"><span></span><font>免费报价</font></div>');
e.push('			<div class="kl b"><span></span><font>业主咨询</font></div>');
e.push('			<div class="kl d"><span></span><font>商家咨询</font></div>');
//e.push('			<div class="kl c"><span></span><font>装修咨询</font></div>');
//e.push('			<div class="kl e"><span></span><font>合作加盟</font></div>');
e.push('			<div class="ki f"><img src="//www.zx123.cn/templates/zx123cs/theme-2017/img/asd.jpg"><span>关注微信</span></div>');
e.push('			<div class="ki g" style="padding-top: 5px;"><img src="//www.zx123.cn/templates/zx123cs/theme-2017/img/dsa.jpg"><span>商家关注</span></div>');
e.push('			<div class="ki h" style="padding-top: 5px;"><img src="//www.zx123.cn/templates/zx123cs/theme-2019/img/gg_xuanfu_pc.jpg"><span>装修狂欢节</span></div>');
e.push('			<div class="ku x">X</div>');
e.push('			<div class="kh t">回顶部</div>');
e.push('		</div>');
e.push('');
}else{
e.push('<style>');
e.push('	#tiepi { width: 48px;position: fixed;right: 0;top: 227px;border: 1px solid #EAEAEA;border-right: 0;background-color: #FFFFFF; }');
e.push('	#tiepi .tis_list { width: 100%;height: 64px; cursor: pointer; display: inline-block; border-bottom: 1px solid #EAEAEA;text-align: center;line-height: 62px;font-size: 14px;}');
e.push('	#tiepi .tis_list { position: relative;top: 0;left: 0; }');
e.push('	#tiepi .tis_list:hover { background: #fafafa; }');
e.push('	#tiepi .tis_list a { display: block;width: 100%;height: 100%;color: #545454;  }');
e.push('	#tiepi .tis_list a.asdtop {   background: url(//www.zx123.cn/templates/zx123cs/theme-2015/img/img2015.png); background-position: -4px -276px;  }');
e.push('	#tiepi .tis_list a.asdosp {   background: url(//www.zx123.cn/templates/zx123cs/theme-2015/img/img2015.png); background-position: -1px -331px;  }');
e.push('	#tiepi .tis_list a:hover {  }');
e.push('	#tiepi .tis_list_cse { border: 0; }');
e.push('	#tiepi .tis_list img { width: 30px;height: 30px; vertical-align: middle; }');
e.push('	#tiepi .tis_list .saoamf { display: none; width: 100px;height: 100px;padding: 15px;background-color: #ffffff;border-radius:5px ; position: absolute;z-index:99; top:-30px;left: -148px;border: 1px solid #EAEAEA; }');
e.push('	#tiepi .tis_list .saoamf img { display: block;width: 100%;height: 100%;  position: relative; z-index:99; top:0;left:0; }');
e.push('	#tiepi .tis_list .saoamf .imghieght { width: 20px; height: 20px;margin-top: 55px; position: absolute;top: 0;right: 0; margin-right: -14px; background: url(//www.zx123.cn/templates/zx123cs/theme-2015/img/comD.png) no-repeat;  background-position: 0 -122px; }');	
e.push('</style>');
e.push('	<div id="tiepi">');
e.push('		<div class="tis_list newkf_qq">');
e.push('			<a>客服</a>');
e.push('		</div>');
e.push('		<div class="tis_list newkf_zx">');
e.push('			<a>投诉</a>');
e.push('		</div>');
e.push('		<div class="tis_list newkf_qq">');
e.push('			<a>解答</a>');
e.push('		</div>');
e.push('		<div class="tis_list" id="saoma">');
e.push('			<a class="asdosp">　</a>');
e.push('			<div class="saoamf">');
e.push('				<img alt="装修123微信二维码" src="//www.zx123.cn/templates/zx123cs/img_new/qrcode_for_gh_e4f.png">');
e.push('				<div class="imghieght"></div>');
e.push('				<div style="clear: both;"></div>');
e.push('			</div>');
e.push('		</div>');
e.push('		<div class="tis_list tis_list_cse" id="newkfbottom">');
e.push('			<a class="asdtop">　</a></div>');
e.push('		<div style="clear: both;">');
e.push('		</div>');
e.push('	</div>');	
}
$("body").append(e.join(""));

var lunbos = "";
var lunbou = 0;
var ztsdd = "show";
$("#rightxuanfu div.kl").hover(function(){
	if(ztsdd=="show"){
		$("#rightxuanfu div.kl").removeClass("hover");
		$(this).addClass("hover");
		lunbou = $("#rightxuanfu div.kl").index($(this));
	}
});
$("#rightxuanfu").hover(function(){
	if(ztsdd=="show"){
		clearTimeout(lunbos);
	}
	if(ztsdd=="hide"){
		$("#rightxuanfu").addClass("shoew");
		$("#rightxuanfu").removeClass("hide");
		$("#rightxuanfu div.kl").removeClass("hover");
		$("#rightxuanfu div.kl").eq(0).addClass("hover");
		ztsdd = "show";
	}
},function(){
	if(ztsdd=="show"){
		$("#rightxuanfu div.kl").removeClass("hover");
		$("#rightxuanfu div.kl").eq(0).addClass("hover");
		lunbofun(lunbou);
	}
});
$("#rightxuanfu .ku.x").click(function(){
	if(ztsdd=="show"){
		$("#rightxuanfu").addClass("hide");
		$("#rightxuanfu").removeClass("shoew");
		$("#rightxuanfu div.kl").removeClass("hover");
		ztsdd = "hide";	
	}	
});
$("#rightxuanfu .ki.h").click(function(){
	var fzlink = getCookie("mycity");
	if (fzlink != '' && fzlink != undefined && fzlink.indexOf('www.') ==-1 ) {
		document.location.href = fzlink+'/activity/hd51.html';
	}else{
		document.location.href = "//bj.zx123.cn/activity/hd51.html";
	}
});
lunbofun(lunbou);
function lunbofun(luouw){
	lunbou = luouw;
	lunbos = setTimeout(function(){
		lunbofun(luouw+1);
	},2000);
	if(luouw>2){ luouw = 0; }
	$("#rightxuanfu div.kl").removeClass("hover");
	$("#rightxuanfu div.kl").eq(luouw).addClass("hover");
};

var fzlink = getCookie("mycity");
if (fzlink != '' && fzlink != undefined && fzlink.indexOf('www.') ==-1 ) {
}else{
	fzlink = "//www.zx123.cn/zb/";
}
$("#rightxuanfu div.kl.a,#rightxuanfu div.kl.b,#rightxuanfu div.kl.d,.newkf_qq,.newkf_zx,#youlinahez").click(function(){
	var now_areaid=getCookie("city_area");
	if(now_areaid==undefined){
		qqzhixun(123);	
	}else{
		qqzhixun();
	}
});
//$("#rightxuanfu div.kl.a").click(function(){
//	document.location.href = fzlink +"/yusuan.html";
//});
//$("#rightxuanfu div.kl.b").click(function(){
//	document.location.href = fzlink +"/info.html";
//});
//$("#rightxuanfu div.kl.d").click(function(){
//	document.location.href = fzlink +"/baozhang.html";
//});
$("#rightxuanfu div.kh.t").click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
	$(this).hide();
});

function topdfsa(h){
	if(h>500){
		$("#rightxuanfu div.kh.t").show();
	}else{
		$("#rightxuanfu div.kh.t").hide();
	}
}
shangxia = function(h){
	topdfsa(h);
}

//个性代理补丁
if(document.location.href.indexOf("//huangshi.zx123.cn/")!=-1 || document.location.href.indexOf("//daye.zx123.cn/") !=-1){
	$("#rightxuanfu .ki.f img").attr("src","//www.zx123.cn/templates/zx123cs/theme-2018/img/huangshi_erweima.jpg");
}

//底部加载
var em = [];
em.push('<div class="ggtjuan">');
em.push('<div class="ggttitle">');
em.push('<strong>3大特"<font>省</font>"服务，让装修更<font>省</font></strong>');
em.push('</div>');
em.push('<div class="ggtconte">');
em.push('<div class="ggtconte_lest ggtconte_lest_yi">');
em.push('<a rel="nofollow" href="//bj.zx123.cn/info.html" target="_blank">');
em.push('<span>申请服务，省力</span>');
em.push('<span class="er">只需30秒，免费申请装修</span>');
em.push('</a>');
em.push('</div>');
em.push('<div class="ggtconte_lest ggtconte_lest_er">');
em.push('<a rel="nofollow" href="//bj.zx123.cn/yusuan.html" target="_blank">');
em.push('<span>全方位PK，省钱</span>');
em.push('<span class="er">免费量房+报价PK+方案PK</span>');
em.push('</a>');
em.push('</div>');
em.push('<div class="ggtconte_lest ggtconte_lest_sv">');
em.push('<a rel="nofollow" href="//bj.zx123.cn/baozhang.html" target="_blank">');
em.push('<span>装修保障，省心</span>');
em.push('<span class="er">业主保障，装修无担忧</span>');
em.push('</a>');
em.push('</div>');
em.push('<div style="clear: both;"></div>');
em.push('</div>');
em.push('<div style="clear: both;"></div>');
em.push('</div>');


$(document).ready(function() {
	
	if($(".newdowns").length<1 && $(".ggtjuan").length==0&&($("#ggtjuan").length==1||$("#ggtjuaner").length==1)){
		if($("#ggtjuan").length==1){
			$("#ggtjuan").append(em.join(""));
		}else{
			$("#ggtjuaner").append(em.join(""));
		}
	}
	$('#saoma').hover(function() {
		$('.saoamf').show();
	}, function() {
		$('.saoamf').hide();
	});
	$("#newkftop,#newkfbottom").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 700);
	});
});



var d_g = [];
//new_yuye
var d_u = [];

d_u.push('<style>');
d_u.push('.downin { z-index:99; position: fixed;left: 0;right: 0;bottom: -460px;height: 0;margin: 0;padding: 0; }');
d_u.push('.downin .dowbbgs { position: absolute;width: 100%;height: 620px;height: 545px; bottom: 0;background: #ae0500; background: rgba(174,5,0,.9); }');
d_u.push('.downiner .dowbbgs { transition:all 0.3s ease 0s; }');
d_u.push('.downiner:hover .dowbbgs { background: #ae0500; background: rgba(174,5,0,1); }');
d_u.push('.downin .downnter { z-index:99; position: absolute;bottom: 0; left: 50%;margin-left: -600px; width: 1200px;}');
d_u.push('.downin .downnter .imtrop { position: relative;width:100%; height:152px; padding: 0; margin: 0 auto;text-align: center; }');
d_u.push('.downin .downnter .imtrop img { display: block;margin:0 auto;width: auto;height: auto; }');
d_u.push('.downin .downnter .imtrop .img_lo { display:none; transition:all 0.3s; position: absolute;left:-68px;top: -5px;width:400px;cursor: pointer; }');
d_u.push('.downin .downnter .imtrop .img_lo:hover { position: absolute;left:-80px;top: -20px;width:440px;cursor: pointer; }');
d_u.push('.downin .downnter .imtrop .img_bf { float:left; width:1264px;height:141px;margin: 10px 0 0 -110px; }');
d_u.push('.downin .downnter .imtrop .img_sd { float:right;display: block;width: 47px;height:41px; cursor: pointer; position: absolute;right: 0;margin: 0; }');
d_u.push('.downin .downnter .imtrop .img_sder { width: 47px;height:41px; top: 86px;transform: rotate(180deg); }');
d_u.push('.downin .downnter .imtrop .img_hide { display: none; }');
d_u.push('.downin .downnter .imtrop .img_show { top: 86px; animation:skyset 800ms infinite ease;}');
d_u.push('@keyframes skyset {');
d_u.push('0% { top: 86px;}');
d_u.push('25% {top: 80px;}');
d_u.push('50%{ top: 86px;}');
d_u.push('75% {top: 92px;}');
d_u.push('100% {top: 86px;}');
d_u.push('}');
d_u.push('.downin .downnter .imcenter { position: relative;border-radius: 20px 20px 0 0; background: #fff url(//www.zx123.cn/templates/zx123cs/theme-2018/img/xuanbg_2018.png) center bottom no-repeat;background-size: 100% auto;;+width:940px;_width:940px; padding: 40px 60px;margin: 0;height: auto; }');
d_u.push('.downin .downnter .imdwnszs { background: #fafafa;padding: 15px 50px 15px 50px;+width:958px;_width:958px; margin: 0;border: 1px solid #f4f4f4; }');
d_u.push('.downin .downcleft { float: left;width: 260px;padding-left: 120px; }');
d_u.push('.downin .downcleft .ddtabletit { position: relative;margin: 0 auto; color: #393939;text-align: center;line-height: 30px;padding-bottom: 25px; }');
d_u.push('.downin .downcleft .ddtabllist { position: relative; margin: 0 auto; padding-bottom: 10px;height: 44px; }');
d_u.push('.downin .downcleft .ddtabllist .posi { display: block;position: absolute;top: 13px;right: 10px; line-height:20px;color: #686464; }');
d_u.push('.downin .downcleft .ddtabllist input { display: block;font-size: 14px;color: #696969; height: 38px;line-height: 38px;text-indent:10px;width: 258px; margin: 0;border: 1px solid #dedede; }');
d_u.push('.downin .downcleft .ddtabllist select { display: block;font-size: 14px;color: #696969; height: 40px;line-height: 40px;text-indent:5px;width: 258px; margin: 0;border: 1px solid #dedede; }');
d_u.push('.downin .downcleft .ddtabllist .dff { display: block;margin: 0; }');
d_u.push('.downin .downcleft .ddtabllist .dff select { float: left;width: 32%;margin-left: 2%; }');
d_u.push('.downin .downcleft .ddtabllist .dff select:first-child { margin: 0; }');
d_u.push('.downin .downcleft .ddtabllist .dfff select { float: left;width: 49%;margin-left: 2%; }');
d_u.push('.downin .downcleft .ddtabllist .dfff select:first-child { margin: 0; }');
d_u.push('.downin .downcleft .ddtabllist input.sj { border: 1px solid #fe552e;color: #fe552e; }');
d_u.push('.downin .downcleft .ddtabllist input.ttj { border: 1px solid #fe552e;font-size:16px; color: #fff;background:#fe552e; }');
d_u.push('.downin .downcleft .ddtabletit h3 { display:block;font-weight:100; font-size: 18px;font-weight:bold;position: absolute;top:0;left:-120px; }');
d_u.push('.downin .downcleft .ddtabletit h3 b { font-size: 20px;color:#fe552e;font-weight:bold; }');
d_u.push('.downin .downcleft .ddtabletit span { display:block;font-size:14px;margin-left:25px;color:#666; }');
d_u.push('.downin .downcleft .ddtabletit span font { color:#ff552e; }');
d_u.push('.downin .downcleft .ddtabllist .leftre { width:100px; position: absolute;top:0;left:-120px;font-size:14px; }');
d_u.push('.downin .downcleft .ddtabllist .leftre:after { content: "*";display:block;margin-top: 4px;float:right;color:#fe552e;font-size:16px;font-weight:600;  }');
d_u.push('.downin .downccery { position: absolute;left: 510px;top: 150px; cursor: pointer; height: 60px;width: 60px; line-height: 30px;font-size: 20px; padding: 25px;border: 20px solid #ffe5df;background: transparent;border-radius: 50%;color: #fff;text-align: center;}');
d_u.push('.downin .downcceryyi { background: #35e18e; }');
d_u.push('.downin .downcceryer { background: #fe552e; }');
d_u.push('.downin .downcrigt { float: right; width:680px; height:368px;margin-right:-25px;border-left: 1px solid #eee; background: url(//www.zx123.cn/templates/zx123cs/theme-2018/img/xuanrt_2018.png) no-repeat center center; }');
d_u.push('</style>');
d_u.push('<div class="downin downiner">');
d_u.push('<div class="dowbbgs"></div>');
d_u.push('<div class="downnter">');
d_u.push('<div class="imtrop">');
d_u.push('<a style="display: inline;" href="//www.zx123.cn/about/cctv.html" target="_blank"><img class="img_lo" alt="装修钱去哪了！" width="80" height="79" src="//www.zx123.cn/templates/zx123cs/theme-2018/img/down_logo_2019.png" /></a>');
d_u.push('<img class="img_bf" alt="装修钱去哪了！" width="1018" height="142" src="//www.zx123.cn/templates/zx123cs/theme-2018/img/down_losu_2019.png" />');
d_u.push('<img class="img_sd img_show" alt="装修" src="//www.zx123.cn/templates/zx123cs/theme-2018/img/tunmf.png" />');
d_u.push('<img class="img_sd img_sder img_hide" alt="装修" src="//www.zx123.cn/templates/zx123cs/theme-2018/img/tunmf.png" />');
d_u.push('</div>');
d_u.push('<div class="imcenter clear">');
d_u.push('<div class="downcleft">');
d_u.push('<div class="ddtabletit dgdfleft clear">');
d_u.push('<h3 class="leftre">申请3份精准报价方案对比，才知能 <b>省30%!</b></h3><span>&nbsp;</span>');
d_u.push('</div>');
d_u.push('<div class="ddtabllist">');
d_u.push('<div class="leftre">所在城市：</div>');
d_u.push('<span id="dff" class="dff clear">');
d_u.push('</span>');
d_u.push('<input class="txt" id="areaidd" name="info[areaid]" type="hidden" value="1">');
d_u.push('</div>');
d_u.push('<div class="ddtabllist">');
d_u.push('<div class="leftre">房屋面积：</div>');
d_u.push('<input id="mianjimianji" placeholder="请输入房屋面积" />');
d_u.push('<div class="posi">m&sup2;</div>');
d_u.push('</div>');
d_u.push('<div class="ddtabllist">');
d_u.push('<div class="leftre">房屋户型：</div>');
d_u.push('<span class="dff clear">');
d_u.push('<select name="shi" id="zxys_shi" class="first_line">');
d_u.push('<option value="1">1室</option>');
d_u.push('<option value="2">2室</option>');
d_u.push('<option value="3">3室</option>');
d_u.push('<option value="4">4室</option>');
d_u.push('<option value="5">5室</option>');
d_u.push('<option value="6">6室</option>');
d_u.push('</select>');
d_u.push('<select name="ting" id="zxys_ting" class="first_line">');
d_u.push('<option value="1">1厅</option>');
d_u.push('<option value="2">2厅</option>');
d_u.push('<option value="3">3厅</option>');
d_u.push('<option value="4">4厅</option>');
d_u.push('<option value="5">5厅</option>');
d_u.push('<option value="6">6厅</option>');
d_u.push('</select>');
d_u.push('<select name="chu" id="zxys_chu" class="first_line">');
d_u.push('<option value="1">1厨</option>');
d_u.push('<option value="2">2厨</option>');
d_u.push('<option value="3">3厨</option>');
d_u.push('</select>');
d_u.push('</span>');
d_u.push('</div>');
d_u.push('<div class="ddtabllist">');
d_u.push('<span class="dfff clear">');
d_u.push('<select name="wei" id="zxys_wei" class="second_line">');
d_u.push('<option value="1">1卫生间</option>');
d_u.push('<option value="2">2卫生间</option>');
d_u.push('<option value="3">3卫生间</option>');
d_u.push('<option value="4">4卫生间</option>');
d_u.push('<option value="5">5卫生间</option>');
d_u.push('<option value="6">6卫生间</option>');
d_u.push('</select>');
d_u.push('<select name="yangtai" id="zxys_yangtai" class="second_line">');
d_u.push('<option value="1">1阳台</option>');
d_u.push('<option value="2">2阳台</option>');
d_u.push('<option value="3">3阳台</option>');
d_u.push('<option value="4">4阳台</option>');
d_u.push('<option value="5">5阳台</option>');
d_u.push('<option value="6">6阳台</option>');
d_u.push('</select>');
d_u.push('</span>');
d_u.push('</div>');
d_u.push('<div class="ddtabllist">');
d_u.push('<div class="leftre">联系方式：</div>');
d_u.push('<input class="sj" id="dianhua" placeholder="请输入手机号码" />');
d_u.push('</div>');
d_u.push('<div class="ddtabllist">');
d_u.push('<input class="ttj" type="button" id="jianyang" value="免费申请" />');
d_u.push('</div>');
d_u.push('</div>');
d_u.push('<div class="downcrigt">');
d_u.push('</div>');
d_u.push('</div>');
d_u.push('</div>');
d_u.push('</div>');
//版本切换
var jcgg = "";
var banbeng = 2;
if(true){
	jcgg = d_u.join("");
	banbeng = 3;
}else{
	jcgg = d_g.join("");
	banbeng = 2;
}
//低版本
if(ie_is()<8){
	jcgg = "";
}

//排除index效果图
var url_op = document.location.href;
if(url_op!="//www.zx123.cn/xiaoguotu/"){
	$('body').append(jcgg);
	biaodabcas();
}
//低版本提示
if(ie_is()<10){
	$(".downin .downcleft .ddtabllist input#mianjimianji").val('请输入房屋面积');
	$(".downin .downcleft .ddtabllist input#dianhua").val('请输入手机号码接收报价结果');
	
	$(".downin .downcleft .ddtabllist input#mianjimianji").focus(function() {
        if($(this).val() =='请输入房屋面积') {
            $(this).val('');
        }
    });
    $(".downin .downcleft .ddtabllist input#mianjimianji").blur(function() {
        if($(this).val() ==''){
            $(this).val('请输入房屋面积');
        }
    });
	$(".downin .downcleft .ddtabllist input#dianhua").focus(function() {
        if($(this).val() =='请输入手机号码接收报价结果'){
            $(this).val('');
        }
    });
    $(".downin .downcleft .ddtabllist input#dianhua").blur(function() {
        if($(this).val() =='') {
            $(this).val('请输入手机号码接收报价结果');
        }
    });
}
$('#mianjimianji').keyup(function(){
  selectDoorModle($(this).val(), this);
});
function selectDoorModle(square, squareEle){
    var square = Number(square);
    if(square + '' == 'NaN' || $(squareEle).val() == '') {
        return false;
    }
    if(90>square && square >= 60) {
        $('#zxys_shi').val(2);
        $('#zxys_ting').val(1);
        $('#zxys_chu').val(1);
        $('#zxys_wei').val(1);
        $('#yangtai').val(1);
    }else if (150>square&& square >= 90) {
        $('#zxys_shi').val(3);
        $('#zxys_ting').val(2);
        $('#zxys_chu').val(1);
        $('#zxys_wei').val(2);
        $('#yangtai').val(1);
    }else if (150<=square ) {
        $('#zxys_shi').val(4);
        $('#zxys_ting').val(2);
        $('#zxys_chu').val(1);
        $('#zxys_wei').val(2);
        $('#zxys_yangtai').val(2);
    }else{
        $('#zxys_shi').val(1);
        $('#zxys_ting').val(1);
        $('#zxys_chu').val(1);
        $('#zxys_wei').val(1);
        $('#zxys_yangtai').val(1);
    }
}

function biaodabcas() {
	var myDate = new Date();
	var yy = myDate.getDate();
	var rr = myDate.getHours();
	var mm = myDate.getMinutes();
	var ewqr = rr * 93 - rr * yy + mm;
	$('.dgdfleft font').text(ewqr);
}

var dfh = 1;
$(".dowbbgs,.downin .downnter .imtrop .img_bf,.downin .downnter .imtrop .img_sder,.downin .downnter .imtrop .img_show").click(function() {
	hidesdhow(dfh);
});

$(".downin .downnter .imtrop .img_lo").click(function() {
	
});

function hidesdhow(x) {
	if(x == 1) {
		dfh = -1;
		$(".img_show.img_sd").hide();
		$(".img_hide.img_sd").show();
		$(".downin").removeClass("downiner");
		$(".downin").animate({
			bottom: 0
		}, 200);
	} else {
		dfh = 1;
		var hda = $(".downin .downnter").height();
		var hdf = (hda - $(".downin .downnter .imtrop").height()) * (-1);
		$(".img_hide.img_sd").hide();
		$(".img_show.img_sd").show();
		$(".downin").animate({
			bottom: hdf
		}, 400, function() {
			$(".downin").addClass("downiner");
		});

	}
}

//获取范例数据
//hkhifgsz();

function hkhifgsz() {
	var zonghtml,zonghtmlwe;
	$.getJSON("//www.zx123.cn/bidding/getbid.php?count=39&callback=?", function(data) {
		//返回成功
		if(data.status == 1) {
			for(var i = 0; i < data.res.length; i++) {
				zonghtml = zonghtml + "<span>" + data.res[i]["lianxiren"] + " " + data.res[i]["shouji"] + " 刚刚获取了装修预算</span>"
				if(i==3){zonghtmlwe = zonghtml;}
			}
			$(".dgdright .dgdrightghk").html(zonghtml+zonghtmlwe);
		}
	});

}
var topmgin = 0;
//titmdf();
$(".downin .downnter .imdwnszs").hide();
function titmdf() {
	if(topmgin <= (-360)) {
		topmgin = 0;
		$(".dgdright .dgdrightghk").css("margin-top", topmgin)
	}
	topmgin = topmgin - 40;
	$(".dgdright .dgdrightghk").stop().animate({
		marginTop: topmgin
	}, 800);
	setTimeout(function() {
		titmdf();
	}, 2000);
}

var dianhua,diqu,diqus,mianji,zxys_shi,zxys_ting,zxys_chu,zxys_wei,zxys_yangtai,titler;
$(".downin .downccery,#jianyang").click(function() {
	jianyang();
});

function jianyang() {
	var rep_shouji = /^1\d{10}$/;
	var rep_mianji = /^\d{1,}$/;
	dianhua = $(".imcenter #dianhua").val();
	diqu = $(".imcenter #areaidd").val();
	diqus = $('#dff select').eq(0).find("option:selected").text()+$('#dff select').eq(1).find("option:selected").text()+$('#dff select').eq(2).find("option:selected").text();
	diqus = diqus.split("")[1];
	mianji = $(".imcenter #mianjimianji").val();
	zxys_shi = $(".imcenter #zxys_shi").val();
	zxys_ting = $(".imcenter #zxys_ting").val();
	zxys_chu = $(".imcenter #zxys_chu").val();
	zxys_wei = $(".imcenter #zxys_wei").val();
	zxys_yangtai = $(".imcenter #zxys_yangtai").val();
	titler = zxys_shi+"室"+zxys_ting+"客厅"+zxys_chu+"厨"+zxys_wei+"卫";
	//记录历史
	jilushils();

	if(mianji == 0 || !rep_mianji.test(mianji)) {
		tips_msg("房屋面积填写不正确！");
	} else if(dianhua == "" || !rep_shouji.test(dianhua)) {
		if(dianhua == "") {
			tips_msg("手机号码未填写！");
		} else {
			tips_msg("手机号码填写不正确！");
		}
	} else {
		if(banbeng==2){
			bottonsdg("正在<br>计算", "");
		}
		ajxasf();
	}
}

function ajxasf() {
	//发送请求
	var data = {
		shouji: dianhua,
		lianxiren: ""+zxys_shi+"室"+zxys_ting+"厅"+zxys_chu+"厨"+zxys_wei+"卫"+"_pc悬浮精选3家公司",
		areaid: diqu,
		mianji: mianji,
		sendtype:banbeng,
		title: zxys_shi+"室"+zxys_ting+"厅"+zxys_chu+"厨"+zxys_wei+"卫"+zxys_yangtai+"阳台"+"_pc悬浮精选3家公司"
	};
	data = JSON.stringify(data);
	$.getJSON("https://www.zx123.cn/bidding/zbsubmit.php?callback=?", {
		jsondata: data,
		mianji: mianji,
		areaid: diqu,
		zbtype:"PC",
		huxing: parseInt(zxys_shi)+parseInt(zxys_ting)+parseInt(zxys_chu)+parseInt(zxys_wei)+parseInt(zxys_yangtai),
		jishuan_tongyong: 1
	}, function(data) {
		//返回成功
		if(data.status == 1) {
			if(banbeng==2){
			bottonsdg("预算<br>成功", 1)
			datelo = true;
			$(".downcrigt .ddtabletit font").text(Math.round(data.option.allmoney / 10000));
			$(".downcrigt .sdhglit font").eq(0).text(data.option.cailiao);
			$(".downcrigt .sdhglit font").eq(1).text(data.option.rengong);
			$(".downcrigt .sdhglit font").eq(2).text(data.option.shejifei);
			$(".downcrigt .sdhglit font").eq(3).text(mianji * 30);
			$("body").append("<iframe src='//www.zx123.cn/yp/client/?action=xiangmu_show&contentid="+data.contentid+"&new_zb=true' width='0' height='0' style='display: none;'></iframe>");	
			}else{
				var hefusd = "//www.zx123.cn/tool/public/public_php.php?action=zb_result&type=yuyue&contentid="+data.contentid+"&areaid="+diqu+"&l1="+Math.round(data.option.allmoney / 10000)+"&l2="+data.option.cailiao+"&l3="+data.option.rengong+"&l6="+data.option.shejifei+"&l5="+mianji * 30+"&dq="+diqus+"&mj="+mianji+"&ti="+titler;
				if(data.contentid==undefined){
					koopsd(hefusd,"");
					tips_msg('您已经申请了免费报价！');
				}else{
					koopsd(hefusd,data.contentid);
				}
				hidesdhow(dfh);
			}
		} else {
			if(banbeng==2){
				tips_msg(data.message);
				bottonsdg("重新<br>计算", 2)
			}else{
				tips_msg('申请报价失败！');
			}
		}
	});
}

var datelo = false;

function jilushils() {
	$(".downin .downcleft select,.downin .downcleft input").each(function() {
		$(this).attr("lishi", $(this).val());
	});
}
$(".downin .downcleft select,.downin .downcleft input").blur(function() {
	if($(this).attr("lishi") != $(this).val() && datelo) {
		bottonsdg("重新<br>计算", 2)
	}
});

var anitema;
var bgflfg = 1;

function bottonsdg(text, bg) {
	if(text != "") {
		$(".downin .downccerysv").html(text);
	}
	if(bg == 1) {
		clearTimeout(anitema);
		$(".downin .downcceryyi").animate({
			opacity: 1
		}, 200);
		$(".downin .downcceryer").animate({
			opacity: 0
		}, 200);
	} else if(bg == 2) {
		clearTimeout(anitema);
		$(".downin .downcceryer").animate({
			opacity: 1
		}, 200);
		$(".downin .downcceryyi").animate({
			opacity: 0
		}, 200);
	}
	if(bg == "") {
		bgflfg = bgflfg == 1 ? 2 : 1;
		bottonsdg("", bgflfg);
		anitema = setTimeout(function() {
			bottonsdg("", "");
		}, 200);
	}
}