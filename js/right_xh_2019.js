
//右栏的人工咨询	
var e = [];
e.push('<style>');	
e.push('#rightxuanfu,.xuanf .xuan_left { display: none; }');	
e.push('#right_xf { position: fixed; z-index: 9; transition: ease all 0.4s; font-family: "microsoft yahei"; right: 0; top: 150px; background: #fff; width: 52px; padding: 0; border-radius: 2px;box-shadow: 0 2px 6px rgba(0,0,0,.1); }');
e.push('#right_xf ._xflist { cursor: pointer;transition: ease all 0.4s; margin: 0 auto;border-top: 1px solid #eee;line-height: 20px;padding: 8px 10px 5px 10px;text-align: center;position: relative; }');	
e.push('#right_xf #xf-top._xflist { transition:none }');
e.push('#right_xf ._xflist:first-child { border: 0; }');
e.push('#right_xf ._xflist:hover { background: #f8f8f8; }');	
e.push('#right_xf ._xflist:active { transform: scale(0.8); }');	
e.push('#right_xf .xf-icon { margin: 0;height: 26px;background: url(//www.zx123.cn/templates/zx123cs/theme-2019/img/xf-icon.png) no-repeat; }');	
e.push('#right_xf .xf-icon.a { background-position: 3px 4px; }');	
e.push('#right_xf .xf-icon.b { background-position: 3px -60px; }');	
e.push('#right_xf .xf-icon.c { background-position: 3px -123px; }');	
e.push('#right_xf .xf-icon.d { background-position: 3px -188px; }');	
e.push('#right_xf .xf-icon.e { background-position: 3px -253px; }');	
e.push('#right_xf .xf-icon.f { background-position: 5px -320px; }');	
e.push('#right_xf .xf-text { font-size: 12px;color: #a4a4a4; }');	
e.push('#right_xf .xf-shen { position: absolute;bottom: -120px;right: -10px;width: 113px;transition: ease all 0.4s; }');	
e.push('#right_xf .xf-shen:active { transform: scale(0.8); }');	
e.push('#right_xf .xf-shen img { display: block;margin: 0;width: 100%;height: auto; }');right_xf
e.push('#right_xf .xf-shen img:hover { transform: scale(1.02); }');	
e.push('#xf-top { display: none; }');	
e.push('.xf-erwei { display: none; position: absolute;right: 50px;bottom: 0; }');	
e.push('#right_xf ._xflist:hover .xf-erwei { display: block; }');	
e.push('.xf-erweima { margin: 0 3px 0 0;padding:1px 10px;background: #fff;border-radius: 2px;box-shadow: 0 2px 6px rgba(0,0,0,.1); }');	
e.push('.xf-erweima .erwei { width: 78px;margin: 9px auto; }');	
e.push('.xf-erweima .erwei img { display: block;margin: 0;width: 100%;height: auto; }');	
e.push('.xf-erweima .erwei span { display: block;margin: 0;font-size: 12px;color: #a4a4a4;line-height: 20px; }');	
e.push('');		
e.push('</style>');	
e.push('<div class="right_xf" id="right_xf">');	
e.push('<div class="_xflist">');	
e.push('<a class="datahref" href="//www.zx123.cn/zb/info.html" data-href="/info.html" target="_blank">');	
e.push('<div class="xf-icon a"></div>');	
e.push('<div class="xf-text">设计</div>');	
e.push('</a>');	
e.push('</div>');	
e.push('<a class="datahref" href="//www.zx123.cn/zb/yusuan.html" data-href="/yusuan.html" target="_blank">');
e.push('<div class="_xflist">');
e.push('<div class="xf-icon b"></div>');	
e.push('<div class="xf-text">报价</div>');	
e.push('</a>');	
e.push('</div>');	
e.push('<div class="_xflist newkf_qq">');	
e.push('<div class="xf-icon c"></div>');	
e.push('<div class="xf-text">咨询</div>');	
e.push('</div>');	
e.push('<div class="_xflist">');	
e.push('<a href="//www.zx123.cn/yp/client/" target="_blank">');	
e.push('<div class="xf-icon d"></div>');	
e.push('<div class="xf-text">我的</div>');	
e.push('</a>');	
e.push('</div>');	
e.push('<div class="_xflist">');	
e.push('<div class="xf-icon e"></div>');	
e.push('<div class="xf-text">微信</div>');	
e.push('<div class="xf-erwei">');	
e.push('<div class="xf-erweima">');	
e.push('<div class="erwei"><img class="rightxuanfu img" src="//www.zx123.cn/templates/zx123cs/theme-2017/img/asd.jpg"><span>业主关注</span></div>');	
e.push('<div class="erwei"><img src="//www.zx123.cn/templates/zx123cs/theme-2017/img/dsa.jpg"><span>商家关注</span></div>');	
e.push('</div>');	
e.push('</div>');	
e.push('</div>');	
e.push('<div class="_xflist" id="xf-top">');	
e.push('<div class="xf-icon f"></div>');	
e.push('<div class="xf-text">TOP</div>');	
e.push('</div>');	
e.push('<a class="datahref" href="//www.zx123.cn/zb/info.html" data-href="/info.html" target="_blank">');	
e.push('<div class="xf-shen">');	
e.push('<img alt="报价省30%" src="//www.zx123.cn/templates/zx123cs/theme-2019/img/xf-right.png" />');	
e.push('</a>');	
e.push('</div>');	
e.push('</div>');	
e.push('');	

$("body").append(e.join(""));
var right_xf = function(){
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var right = (width-1300)/4-20;
	right = right>10?right:10;
	$("#right_xf").css("right",right+"px");
}
right_xf();
//重构滚轮监听事件
shangxia = function(height){
	if(height>500){
		$("#xf-top").show(300);
	}else{
		$("#xf-top").hide(300);
	}
}
$(".xuanf .xuan_left,.xuanf .xuan_left_b").remove();//删除左xf
$("#xf-top").click(function(){
	 $('html, body').animate({scrollTop:0}, 'slow');
});
$(".newkf_qq,.newkf_zx,#youlinahez").click(function(){
	qqzhixun();
});
$(function(){
	$(window).resize(function(){
		right_xf();
	})
	
	//子域名 info~ 
	if(typeof _baseDomain == "object"){
		var zyumin = document.location.href.split("//")[1].split(".")[0];
		if(typeof _baseDomain[zyumin] == "object"){
			$("a.datahref").each(function(){
				if($(this).attr("data-href")!=""){
					$(this).attr("href",$(this).attr("data-href"));
				}
			})
		}
	}
	
})
//个性代理补丁
if(document.location.href.indexOf("//chongzhou.zx123.cn/")!=-1){
	$(".rightxuanfu.img").attr("src","//www.zx123.cn/templates/zx123cs/theme-2018/img/chongzhou_erweima.jpg");
}
if(document.location.href.indexOf("//huangshi.zx123.cn/")!=-1 || document.location.href.indexOf("//daye.zx123.cn/") !=-1){
	$(".rightxuanfu.img").attr("src","//www.zx123.cn/templates/zx123cs/theme-2018/img/huangshi_erweima.jpg");
}


var d_g = [];
//new_yuye
var d_u = [];

d_u.push('<style>');
d_u.push('.downin { z-index:99; position: fixed;left: 0;right: 0;bottom: -460px;height: 0;margin: 0;padding: 0; }');
d_u.push('.downin .dowbbgs { box-shadow: 0 0 10px rgba(0,0,0,.2); position: absolute;width: 100%;height:534px; bottom: 0;background: url(//www.zx123.cn/templates/zx123cs/theme-2019/img/xf-bg.png); }');
d_u.push('.downiner .dowbbgs { transition:all 0.3s ease 0s; box-shadow: 0 0 10px rgba(0,0,0,.2); }');
//d_u.push('.downiner:hover .dowbbgs { background:#f4f4f4 }');
d_u.push('.downin .downnter { z-index:99; position: absolute;bottom: 0; left: 50%;margin-left: -600px; width: 1200px;}');
d_u.push('.downin .downnter .imtrop { position: relative;width:100%; height:75px; padding: 0; margin: 0 auto;text-align: center; }');
d_u.push('.downin .downnter .imtrop img { display: block;margin:0 auto;width: auto;height: auto; }');
d_u.push('.downin .downnter .imtrop .img_lo { transition:all 0.3s; position: absolute;left:-80px;top: -90px;width:455px;cursor: pointer; }');
d_u.push('.downin .downnter .imtrop .img_lo:hover { transform: scale(1.02) translate(0,-2px); }');
d_u.push('.downin .downnter .imtrop .img_bf { float:left; width:659px;height:33px;margin:25px 0 0 282px; }');
d_u.push('.downin .downnter .imtrop .img_sd { float:right;display: block;width: 47px;height:41px; cursor: pointer; position: absolute;right: 0;margin: 0 100px 0 0; }');
d_u.push('.downin .downnter .imtrop .img_sder { width: 41px;height:36px; top: 16px;transform: rotate(180deg); }');
d_u.push('.downin .downnter .imtrop .img_hide { display: none; }');
d_u.push('.downin .downnter .imtrop .img_show { top: 16px; animation:skyset 800ms infinite ease;}');
d_u.push('@keyframes skyset {');
d_u.push('0% { top: 16px;}');
d_u.push('25% {top: 10px;}');
d_u.push('50%{ top: 16px;}');
d_u.push('75% {top: 22px;}');
d_u.push('100% {top: 16px;}');
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
d_u.push('<a class="datahref" style="display: inline;" href="//www.zx123.cn/zb/baozhang.html" data-href="/baozhang.html" target="_blank">');
d_u.push('<img class="img_lo" src="//www.zx123.cn/templates/zx123cs/theme-2019/img/xf-left.png" /></a>');
d_u.push('<img class="img_bf" src="//www.zx123.cn/templates/zx123cs/theme-2019/img/xf-text.png" />');
d_u.push('<img class="img_sd img_show" src="//www.zx123.cn/templates/zx123cs/theme-2019/img/xf-top.png" />');
d_u.push('<img class="img_sd img_sder img_hide" src="//www.zx123.cn/templates/zx123cs/theme-2019/img/xf-top.png" />');
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