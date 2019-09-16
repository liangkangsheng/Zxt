//头部与左部的广告
//头部   小图 and 大图
var i_topimg_min = "//www.zx123.cn/templates/zx123cs/theme-2015/img/sytopmin.jpg";
var i_topimg_max = "//www.zx123.cn/templates/zx123cs/theme-2015/img/sytopmax.jpg";
//var i_topimg_min = "//www.zx123.cn/templates/zx123cs/img_new/shuang11_1.jpg";
//var i_topimg_max = "//www.zx123.cn/templates/zx123cs/img_new/shuang11_2.png";
var i_topimg_aaa = "//bj.zx123.cn/yusuan.html";

//左部  小图 and 大图
var i_leftimg_min = "//www.zx123.cn/templates/zx123cs/theme-2015/img/sytopleft_b.jpg";
var i_leftimg_max = "//www.zx123.cn/templates/zx123cs/theme-2015/img/sytopleft.jpg";
var i_leftimg_aaa = "//bj.zx123.cn/yusuan.html";
if(topimg_min != ""){
	i_topimg_min = topimg_min;
}
if(topimg_max != ""){
	i_topimg_max = topimg_max;
}
if(topimg_aaa != ""){
	if(topimg_aaa.indexOf(".zx123.cn")!=-1&&topimg_aaa.indexOf("http")==-1){
		i_topimg_aaa ="//"+topimg_aaa;
	}else{
		i_topimg_aaa = topimg_aaa;
	}
}
if(leftimg_min != ""){
	i_leftimg_min = leftimg_min;
}
if(leftimg_max != ""){
	i_leftimg_max = leftimg_max;
}
if(leftimg_aaa != ""){
	if(leftimg_aaa.indexOf("http")==-1&&leftimg_aaa.indexOf(".zx123.cn")!=-1){
		if(leftimg_aaa == "www.zx123.cn/zb/yusuan.html"){
			i_leftimg_aaa ="/yusuan.html";
		}else{
			i_leftimg_aaa ="//"+leftimg_aaa;
		}
	}else{
		i_leftimg_aaa = leftimg_aaa;
	}
}

var t = [];
t.push('<style>');
t.push('.xuanf { width: 100%;height: 1px; z-index: 10; position: relative; margin:0 auto; }');
t.push('.xuanf .xuan_center { width: 100%;margin: 0 auto;position: relative; }');
t.push('.xuanf .xuan_top { z-index: -1; position: absolute;left: 0;top: 0; width: 100%;margin: 0 auto; }');
t.push('.xuanf .xuan_top .xuantop_max { z-index: -1; cursor: pointer;height: 450px;display: none;');
t.push('background: url("' + i_topimg_max + '") no-repeat center center;background-size: auto auto;  }');
t.push('.xuanf .xuan_top .xuantop_min { z-index: -1;  cursor: pointer;width: 100%;height: 60px;');
t.push('background: url("' + i_topimg_min + '") no-repeat center center;background-size: auto auto; }');
t.push('.xuanf .xuan_left { display: none;  cursor: pointer; width: 96px; position: fixed;left: 0;top: 227px; height: 328px;border-radius:0 2px 2px 0;');
t.push('background: url("' + i_leftimg_max + '") no-repeat center center;background-size:cover; }');
t.push('.xuanf .xuan_left_b { display: block; cursor: pointer; width: 22px; position: fixed;left: -1px;top: 227px; height: 328px;border-radius:0 2px 2px 0;');
t.push('background: url("' + i_leftimg_min + '") no-repeat center center;background-size:cover; }');
t.push('.xuanf .xuan_top .xuantop_max a ,');
t.push('.xuanf .xuan_top .xuantop_min a ,');
t.push('.xuanf .xuan_left a { display: block;width: 100%; height: 100%; }');
t.push('.xuanf .xuan_x { display: none; cursor: pointer; position: absolute;right:50%;top: 19px;margin-right:-650px; width: 20px;height: 19px; padding: 1px;');
t.push('background: url("http:\/\/www.zx123.cn/templates/zx123cs/theme-2015/img/dfgg.png") no-repeat;}');
t.push('.xuanf .xuan_xx { cursor: pointer; position: absolute;right: 0;bottom: 0;width: 16px;height: 16px;');
t.push(' background: #888;text-align: center;line-height: 16px;font-size: 12px;color: #fff;border-radius: 8px 0 2px 0; }');
t.push('.xuanf .xuan_xxx { cursor: pointer; position: absolute;right:50%;top: 19px;margin-right:-650px;width: 20px;height: 19px; padding: 1px;');
t.push(' background: url("http:\/\/www.zx123.cn/templates/zx123cs/theme-2015/img/dfgg.png") no-repeat;background-position: 0 -20px;}');
t.push('.xuanf .xuan_gg { position: absolute;bottom: 0;right: 50%;margin-right:-550px; z-index: 1;line-height: 14px;padding: 2px 4px;color: #fff;white-space: normal;background: #888; }');
t.push('</style>');
t.push('<div class="xuanf">');
t.push('<div class="xuan_center">');
t.push('<div class="xuan_top">');
t.push('<div class="xuantop_min">');
t.push('<a target="_blank" hrefs="' + i_topimg_aaa + '"></a>');
t.push('<div class="xuan_x"></div>');
t.push('</div>');
t.push('<div class="xuantop_max">');
t.push('<a target="_blank" href="' + i_topimg_aaa + '"></a>');
t.push('<div class="xuan_gg">广告</div>');
t.push('<div class="xuan_xxx"></div>');
t.push('</div>');
t.push('<div style="clear: both;"></div>');
t.push('</div>');
t.push('</div>');
t.push('<div class="xuan_left">');
t.push('<a target="_blank" href="' + i_leftimg_aaa + '"></a>');
t.push('<div class="xuan_xx">x</div>');
t.push('<div style="clear: both;"></div>');
t.push('</div>');
t.push('<div class="xuan_left_b">');
t.push('<a target="_blank" href="' + i_leftimg_aaa + '"></a>');
//t.push('<div class="xuan_xx">x</div>');
t.push('<div style="clear: both;"></div>');
t.push('</div>');
t.push('<div style="clear: both;"></div>');
t.push('</div>');

//建材   广告
if(jc_min_a == "") {
	jc_min_a = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_a.jpg";
}
if(jc_max_a == "") {
	jc_max_a = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_b.jpg";
}
if(jc_aaa_a == "") {
	jc_aaa_a = "//www.zx123.cn/jcjj/";
} else {
	jc_aaa_a = "//" + jc_aaa_a
}
if(jc_min_b == "") {
	jc_min_b = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_a.jpg";
}
if(jc_max_b == "") {
	jc_max_b = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_b.jpg";
}
if(jc_aaa_b == "") {
	jc_aaa_b = "//www.zx123.cn/jcjj/";
} else {
	jc_aaa_b = "//" + jc_aaa_b
}
if(jc_min_c == "") {
	jc_min_c = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_a.jpg";
}
if(jc_max_c == "") {
	jc_max_c = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_b.jpg";
}
if(jc_aaa_c == "") {
	jc_aaa_c = "//www.zx123.cn/jcjj/";
} else {
	jc_aaa_c = "//" + jc_aaa_c
}
if(jc_min_d == "") {
	jc_min_d = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_a.jpg";
}
if(jc_max_d == "") {
	jc_max_d = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_b.jpg";
}
if(jc_aaa_d == "") {
	jc_aaa_d = "//www.zx123.cn/jcjj/";
} else {
	jc_aaa_d = "//" + jc_aaa_d
}
if(jc_min_e == "") {
	jc_min_e = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_a.jpg";
}
if(jc_max_e == "") {
	jc_max_e = "//www.zx123.cn/templates/zx123cs/theme-2015/img/zxsy_b.jpg";
}
if(jc_aaa_e == "") {
	jc_aaa_e = "//www.zx123.cn/jcjj/";
} else {
	jc_aaa_e = "//" + jc_aaa_e
}

var j = [];
j.push('<div id="ggjc">');
j.push('<div class="ddkaun">');
j.push('<div class="gjclist a">');
j.push('<div class="gglista">');
j.push('<a href="' + jc_aaa_a + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_min_a + '" /></a>');
j.push('</div>');
j.push('<div class="gglistb">');
j.push('<a href="' + jc_aaa_a + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_max_a + '" /></a>');
j.push('</div>');
j.push('<div style="clear: both;"></div>');
j.push('</div>');
j.push('<div class="gjclist b">');
j.push('<div class="gglista">');
j.push('<a href="' + jc_aaa_b + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_min_b + '" /></a>');
j.push('</div>');
j.push('<div class="gglistb">');
j.push('<a href="' + jc_aaa_b + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_max_b + '" /></a>');
j.push('</div>');
j.push('<div style="clear: both;"></div>');
j.push('</div>');
j.push('<div class="gjclist c">');
j.push('<div class="gglista">');
j.push('<a href="' + jc_aaa_c + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_min_c + '" /></a>');
j.push('</div>');
j.push('<div class="gglistb">');
j.push('<a href="' + jc_aaa_c + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_max_c + '" /></a>');
j.push('</div>');
j.push('<div style="clear: both;"></div>');
j.push('</div>');
j.push('<div class="gjclist d">');
j.push('<div class="gglista">');
j.push('<a href="' + jc_aaa_d + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_min_d + '" /></a>');
j.push('</div>');
j.push('<div class="gglistb">');
j.push('<a href="' + jc_aaa_d + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_max_d + '" /></a>');
j.push('</div>');
j.push('<div style="clear: both;"></div>');
j.push('</div>');
j.push('<div class="gjclist e">');
j.push('<div class="gglista">');
j.push('<a href="' + jc_aaa_e + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_min_e + '" /></a>');
j.push('</div>');
j.push('<div class="gglistb">');
j.push('<a href="' + jc_aaa_e + '" target="_blank" rel="nofollow"><img alt="" src="' + jc_max_e + '" /></a>');
j.push('</div>');
j.push('<div style="clear: both;"></div>');
j.push('</div>');
j.push('<div style="clear: both;"></div>');
j.push('</div>');
j.push('<div style="clear: both;"></div>');
j.push('</div>');

var jcgg = j.join("");
$('#jcgg').append(jcgg);

if(document.location.href == "//xingtai.zx123.cn/") {
	var jj = [];
	var hidff = 0;
	jj.push('<style>');
	jj.push('.xintailistat { z-index:0; margin: 0 auto;min-width: 1200px;width: 100%;overflow: hidden; }');
	jj.push('.xintailistat .xintailista { width: 1200px; height:58px;overflow: hidden; margin: 0 auto;padding-top:4px ; }');
	jj.push('.xintailistat .xintailista img { display: block;width: 100%;height: 100%; }');
	jj.push('</style>');
	jj.push('<div class="xintailistat">');
	if(xt_topaaimag) {
		hidff = hidff + 62;
		jj.push('<div class="xintailista">');
		jj.push('<a href="' + xt_topaalink + '" target="_blank">');
		jj.push('<img alt="" src="' + xt_topaaimag + '" />');
		jj.push('</a>');
		jj.push('</div>');
	}
	if(xt_topbbimag) {
		hidff = hidff + 62;
		jj.push('<div class="xintailista">');
		jj.push('<a href="' + xt_topbblink + '" target="_blank">');
		jj.push('<img alt="" src="' + xt_topbbimag + '" />');
		jj.push('</a>');
		jj.push('</div>');
	}
	if(xt_topccimag) {
		hidff = hidff + 62;
		jj.push('<div class="xintailista">');
		jj.push('<a href="' + xt_topcclink + '" target="_blank">');
		jj.push('<img alt="" src="' + xt_topccimag + '" />');
		jj.push('</a>');
		jj.push('</div>');
	}
	jj.push('</div>');
	jcgg = jj.join("");
}
var titmeasd;
var titmeasda;
var titmeasdb;
var asdfgh = t.join("");
//个性代理补
if(document.location.href == "//chongzhou.zx123.cn/") {
	//不要
}else{
	$('.top_fuzhu_div').append(asdfgh);
	$('.top_fuzhu_div').animate({
		height: 60
	}, 200);
}

//个性代理补丁
if(document.location.href.indexOf("//chongzhou.zx123.cn/")!=-1){
	$(".iponght").html("咨询热线：<br/><font>13348847260</font>");
	$("#rightxuanfu .ki.f img").attr("src","//www.zx123.cn/templates/zx123cs/theme-2018/img/chongzhou_erweima.jpg");
}

//个性要求
if(document.location.href.indexOf("//baoji.zx123.cn/")!=-1) {
	$(".xuanf .xuan_left").hide();
}

//临时顶部
if(false){
	var xuan_tophtml="<a href='//www.zx123.cn/2018/0726/1526573.html' target='_blank'><img id='zxt1920' style='display: block;width:1920px;height:0px; position: absolute;left: 50%;top:0;margin:0 0 0 -960px;' alt='装信通' src='//www.zx123.cn/templates/zx123new/mobile_new/img/zxt1920.jpg'/></a>";
	$(".xuanf .xuan_top").html("").css("height","62px").css("overflow","hidden").append(xuan_tophtml);
	$(".top_fuzhu_div,#zxt1920").animate({
		height:62
	},1000);
}


$(function() {
	$('.xuanf .xuantop_min').click(function() {
		z_kai();
	});
	$('.xuanf .xuan_xx').click(function() {
		clearTimeout(titmeasdb);
		$(this).parent().hide();
		$('.xuan_left_b').show();
	});
	$('.xuan_left_b').hover(function() {
		clearTimeout(titmeasdb);
		$('.xuan_left').show();
		$(this).hide();
		titmeasdb = setTimeout(function() {
			$('.xuan_left').hide();
			$('.xuan_left_b').show();
		}, 4000);
	});
	$('.xuanf .xuan_xxx').click(function() {
		g_bi();
	});
	
	var dgfgj = getCookie("ggtopleft");
	addCookie('ggtopleft', 'true');
	if(dgfgj != "true") {
		if(document.location.href == "//hengyang.zx123.cn/") {
			//衡阳不要自动弹
		} else {
			titmeasda = setTimeout(function() {
				z_kai();
			}, 2000);
		}
	}
	
});

function z_kai() {
	clearTimeout(titmeasda);

//	$('.xuanf .xuan_x').hide();
	$('.xuanf .xuan_top .xuantop_min').animate({
		height: 0
	}, 400);
	$('.top_bg,.pctop').animate({
		marginTop: 0
	}, 400, function() {
		$('.xuanf .xuan_xxx').show();
		$('.xuanf .xuan_top .xuantop_min').hide();
		$('.xuanf .xuan_top .xuantop_max').show();
		$('.xuanf .xuan_top .xuantop_max').css('height', '0');
		$('.top_fuzhu_div').animate({
			height: 450
		}, 400);
		$('.xuanf .xuan_top .xuantop_max').animate({
			height: 450
		}, 400);
	});
	titmeasd = setTimeout(function() {
		g_bi();
	}, 6000);
}

function g_bi() {
	clearTimeout(titmeasda);
	$('.xuanf .xuan_xxx').hide();
	$('.xuanf .xuan_top .xuantop_max').animate({
		height: 0
	}, 400);
	$('.top_fuzhu_div').animate({
			height: 60
	}, 400);
	$('.top_bg,.pctop').animate({
		marginTop: 0
	}, 400, function() {
//		$('.xuanf .xuan_x').show();
		$('.xuanf .xuan_top .xuantop_max').hide();
		$('.xuanf .xuan_top .xuantop_min').show();
		$('.xuanf .xuan_top .xuantop_min').css('height', '0');
		
		$('.xuanf .xuan_top .xuantop_min').animate({
			height: 60
		}, 400);
	});
	clearTimeout(titmeasd);
}

var d_h = [];
d_h.push('<style>');
d_h.push('.layoutform-bg { display: none;z-index:9999; position:fixed;top:0;left:0;width:100%;height:100%;background:#000;opacity:0.7;filter:alpha(opacity=70);z-index:999;}');
d_h.push('.layoutform-w { display: none;z-index:9999; font: 14px/1.5 "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;position:fixed;width:800px;height:600px;padding:0 130px;top:50%;left: 50%;margin-top:-300px;margin-left:-530px;background: #FFFFFF;z-index:1000;box-shadow: 0 0 10px #000000;}');
d_h.push('.layoutform-w .layoutform-tit {position:absolute;left:0;width: 1060px;height: 186px;}');
d_h.push('.layoutform-w .layoutform-closebtn {position: absolute;width: 40px;height: 40px;top:-15px;right:-15px;z-index: 1001;background: url("//www.zx123.cn/templates/zx123cs/theme-2017/img/layout-closebtn.png") no-repeat;cursor: pointer;}');
d_h.push('.layoutform-w .form-tit {width: 800px;height: 60px;margin-top:149px;overflow: hidden;}');
d_h.push('.layoutform-w .form-tit .tit-l {float: left;}');
d_h.push('.layoutform-w .form-tit .tit-l h2 {float:left;font-size: 24px;color:#000000;line-height: 66px;}');
d_h.push('.layoutform-w .form-tit .tit-l i {float:left;font-size: 16px;font-style: normal;color:#ff3000;margin-left: 15px;line-height:70px;}');
d_h.push('.layoutform-w .form-tit .tit-r {float: right;height: 16px;padding-top:30px;font-size: 12px;color: #505050;}');
d_h.push('.layoutform-w .form-tit .tit-r i {float:left;display: inline-block;width: 18px;height: 16px;background: url("//www.zx123.cn/templates/zx123cs/theme-2017/img/layoutform-ico.gif") no-repeat;vertical-align: middle;margin-right: 5px;}');
d_h.push('.layoutform-w .form-tit .tit-r strong {color:#ff3000; padding: 0 5px;}');
d_h.push('.layoutform-w .form-w {width: 770px;height: 318px;padding: 0 14px;border: 1px solid #e5e5e5;}');
d_h.push('.layoutform-w .form-w .line-w {width: 100%;height: 46px;border-bottom: 1px dotted #dddddd;overflow: hidden;}');
d_h.push('.layoutform-w .form-w .name-w {position:relative;float: left;width: 80px;height: 46px;padding-left:25px;line-height:46px;font-size: 16px;color: #505050;}');
d_h.push('.layoutform-w .form-w .name-w i {position:absolute;display: block;width: 24px;height: 46px;line-height: 46px;left:0;text-align: center;color: #ff3300;font-size:16px;font-family: Simsun;font-style: normal;}');
d_h.push('.layoutform-w .form-w .inp-w .txttr{display:block;float:left;height:26px;line-height:26px;padding:0 5px;border:1px solid #CCCCCC;font-size: 12px;color: #a3a3a3;margin-top: 8px;}');
d_h.push('.layoutform-w .form-w .inp-w span {margin-left:0!important;float:left;height:46px;line-height:46px;color:#505050;}');
d_h.push('.layoutform-w .form-w .inp-w .radioWp{float:left;height:46px;line-height:46px;margin-right:30px;}');
d_h.push('.layoutform-w .form-w .inp-w .radioWp input{display:inline-block;height:46px;line-height:46px;float:left;}');
d_h.push('.layoutform-w .form-w .inp-w .radioWp label{display:inline-block;height:46px;line-height:46px;float:left;padding:0 5px;}');
d_h.push('.layoutform-w .form-w .inp-w select {display:block;float:left;width:100px;padding:2px 3px;border:1px solid #CCCCCC;margin-top:8px;margin-right:8px;}');
d_h.push('.layoutform-w .form-w .inp-w #layoud{display:block;float:left;width:196px;height:58px;padding:0 5px;line-height:18px;overflow:auto;vertical-align:top;resize:none;font-size:12px;border:1px solid #CCCCCC;color: #a3a3a3;margin-top: 8px;}');
d_h.push('.layoutform-w .form-w .inp-w p {display: block;float: left;width: 210px;height: 46px;line-height: 46px;font-size: 12px;margin-left: 5px;color:#ff3300;}');
d_h.push('.layoutform-w .form-w .inp-w p i {display: inline-block;width: 16px;height: 16px;vertical-align: middle;margin-right: 3px;}');
d_h.push('.layoutform-w  #layobtn {display:block;cursor:pointer;width:288px;height: 48px;line-height:48px;margin-left:241px;background: #ff3300;text-align: center;font-size: 22px;border: 0;color: #FFFFFF;}');
d_h.push('.layoutform-w .success-w {width: 800px; height:300px;margin-top: 256px;overflow: hidden;display: none;}');
d_h.push('.layoutform-w .success-w h3 {font-size:50px;color: #cccccc;font-weight: normal;text-align: center;margin-top: 40px;}');
d_h.push('.layoutform-w .success-w p {font-size: 16px;color: #999999;text-align: center;margin-top: 30px;}');
d_h.push('</style>');
d_h.push('<div class="layoutform-w">');
d_h.push('<div class="layoutform-closebtn"></div>');
d_h.push('<div class="layoutform-tit"><img src="//www.zx123.cn/templates/zx123cs/theme-2017/img/layout-tit.gif" alt="免费发布招标四大优势"></div>');
d_h.push('<div class="success-w">');
d_h.push('<h3>恭喜您发布招标成功</h3>');
d_h.push('<p>我们的客服人员将在24小时之内与您取得联系。请耐心等待</p>');
d_h.push('</div>');
d_h.push('<div class="form-tit">');
d_h.push('<div class="tit-l"><h2>免费发布装修招标</h2><i>并获取3-4家正规装修公司服务</i></div>');
d_h.push('<div class="tit-r"><i></i>今天已有<strong>2290</strong>名业主免费发布了装修需求</div>');
d_h.push('</div>');
d_h.push('<form>');
d_h.push('<div class="form-w">');
d_h.push('<div class="line-w inp-w">');
d_h.push('<div class="name-w">招标类型</div>');
d_h.push('<div class="radioWp">');
d_h.push('<input type="radio" name="zhaobiao_type" value="家装" checked="checked"/>');
d_h.push('<label for="zhaobiao_type1">家装</label>');
d_h.push('</div>');
d_h.push('<div class="radioWp">');
d_h.push('<input type="radio" name="zhaobiao_type" value="工装" />');
d_h.push('<label for="zhaobiao_type2">工装</label>');
d_h.push('</div>');
d_h.push('</div>');
d_h.push('<div class="line-w inp-w">');
d_h.push('<div class="name-w"><i>*</i>建筑面积</div>');
d_h.push('<input type="text" class="txttr" name="acreage" id="mianjirt" style="width: 90px;"/>');
d_h.push('<span>&nbsp;&nbsp;平方米</span>');
d_h.push('<p></p>');
d_h.push('</div>');
d_h.push('<div class="line-w inp-w">');
d_h.push('<div class="name-w"><i>*</i>所在区域</div>');
d_h.push('<span id="dfff"></span>');
d_h.push('<input class="txt" id="areaiddd" name="info[areaid]" type="hidden" />');
d_h.push('<input type="text" class="txttr" name="community_jia" id="xiaoquname"  placeholder="小区或附近街道名称" value="" style="width: 196px;">');
d_h.push('<p></p>');
d_h.push('</div>');
d_h.push('<div class="line-w inp-w">');
d_h.push('<div class="name-w"><i>*</i>您的称呼</div>');
d_h.push('<input type="text" class="txttr" name="name" id="layo_name" style="width: 196px;">');
d_h.push('<p></p>');
d_h.push('</div>');
d_h.push('<div class="line-w inp-w">');
d_h.push('<div class="name-w"><i>*</i>手机号码</div>');
d_h.push('<input type="text" class="txttr" name="mobilephone" id="laephone" style="width: 196px;">');
d_h.push('<p></p>');
d_h.push('</div>');
d_h.push('<div class="inp-w">');
d_h.push('<div class="name-w">招标要求</div>');
d_h.push('<textarea name="demand" id="layoud" placeholder="您可以在这里详细描述您想要的设计风格，装修要点等其它要求"></textarea>');
d_h.push('<p></p>');
d_h.push('</div>');
d_h.push('</div>');
d_h.push('<input type="button" id="layobtn" value="立即发布招标"/>');
d_h.push('</form>');
d_h.push('</div>');
d_h.push('<div class="layoutform-bg">');
d_h.push('</div>');

var xint_i = d_h.join("");
$('body').append(xint_i);

if(document.location.href.indexOf("//xingtai.zx123.cn/") !=-1 ) {
	if(!getCookie("xintaitc")) {
		setTimeout(function() {
			showxintai();
		}, 2000);
		addCookie(("xintaitc", "OK", 36000));
	}
}

function showxintai() {
	$(".layoutform-bg").show();
	$(".layoutform-w").show();
}

function hidexintai() {
	$(".layoutform-bg").hide();
	$(".layoutform-w").hide();
}
$(".layoutform-closebtn").click(function() {
	hidexintai();
});
$("#layobtn").click(function() {
	var xin_a = $("input[name=zhaobiao_type]:checked").val(); //家装||工装
	var xin_b = $("#mianjirt").val(); //面积
	var xin_c = $("#areaiddd").val(); //地区
	var xin_d = $("#xiaoquname").val(); //小区
	var xin_e = $("#layo_name").val(); //称呼
	var xin_f = $("#laephone").val(); //电话
	var xin_g = $("#layoud").val(); //需求
	var rep_shouji = /^1\d{10}$/;
	var rep_mianji = /^\d{1,}$/;
	if(xin_b == 0 || !rep_mianji.test(xin_b)) {
		alert("房屋面积填写不正确！");
	} else if(xin_f == "" || !rep_shouji.test(xin_f)) {
		if(xin_f == "") {
			alert("手机号码未填写！");
		} else {
			alert("手机号码填写不正确！");
		}
	} else if(xin_d == "") {
		alert("小区填写不正确！");
	} else if(xin_e == "") {
		alert("称呼未填写！");
	} else {
		//提交
		var xindate = {
			shouji: xin_f,
			lpmc: xin_d,
			lianxiren: "" + xin_e,
			areaid: xin_c,
			mianji: xin_b,
			title: xin_a + xin_d,
			zxyq: xin_g
		};
		xindate = JSON.stringify(xindate);
		$.getJSON("//www.zx123.cn/bidding/zbsubmit.php?callback=?", {
			jsondata: xindate
		}, function(data) {
			//返回成功
			if(data.status == 1) {
				hidexintai();
				alert("发布成功，我们的客户稍后将会联系您！请注意接听！");
			} else {
				alert(data.message);
			}
		});
	}
});