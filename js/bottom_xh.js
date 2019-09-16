// $('#sadfasdasd').hover(function(){
// 		$('.myweixin').show();
// 	}, function(){
// 		$('.myweixin').hide();
// 	});

var d_g = [];

//new_yuye
var d_u = [];
d_u.push('<style>');
d_u.push('.downin { z-index:99; position: fixed;left: 0;right: 0;bottom: -860px;height: 0;margin: 0;padding: 0; }');
d_u.push('.downin .dowbbgs { position: absolute;width: 100%;height: 620px;height: 545px; bottom: 0;background: #ae0500; background: rgba(174,5,0,.9); }');
d_u.push('.downiner .dowbbgs { transition:all 0.3s ease 0s; }');
d_u.push('.downiner .dowbbgs  { background: rgba(0,0,0,.8); }');
d_u.push('.downiner:hover .dowbbgs { background: rgba(0,0,0,.9); }');
d_u.push('.downin .downnter { z-index:99; position: absolute;bottom: 0; left: 50%;margin-left: -600px; width: 1200px;}');
d_u.push('.downin .downnter .imtrop { position: relative;width:100%; height:152px; padding: 0; margin: 0 auto;text-align: center; }');
d_u.push('.downin .downnter .imtrop img { display: block;margin:0 auto;width: auto;height: auto; }');
d_u.push('.downin .downnter .imtrop .img_lo { transition:all 0.3s; position: absolute;left:-68px;top: -5px;width:400px;cursor: pointer; }');
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
if(document.location.href!="//www.zx123.cn/xiaoguotu/"){
	$('body').append(jcgg);
}
//低版本提示
if(ie_is()<10){
	$(".downin .downcleft .ddtabllist input#mianjimianji,#bj_square").val('请输入房屋面积');
	$(".downin .downcleft .ddtabllist input#dianhua,#dh_square").val('请输入手机号码接收报价结果');
	
	$(".downin .downcleft .ddtabllist input#mianjimianji,#bj_square").focus(function() {
        if($(this).val() =='请输入房屋面积') {
            $(this).val('');
        }
    });
    $(".downin .downcleft .ddtabllist input#mianjimianji,#bj_square").blur(function() {
        if($(this).val() ==''){
            $(this).val('请输入房屋面积');
        }
    });
	$(".downin .downcleft .ddtabllist input#dianhua,#dh_square").focus(function() {
        if($(this).val() =='请输入手机号码接收报价结果'){
            $(this).val('');
        }
    });
    $(".downin .downcleft .ddtabllist input#dianhua,#dh_square").blur(function() {
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

var dfh = 1;
$(".dowbbgs,.downin .downnter .imtrop .img_bf,.downin .downnter .imtrop .img_sder").click(function() {
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
		$(".downin").css("bottom","0");
	} else {
		dfh = 1;
		var hda = $(".downin .downnter").height();
		var hdf = (hda - $(".downin .downnter .imtrop").height()) * (-1)-300;
		$(".img_hide.img_sd").hide();
		$(".img_show.img_sd").show();
		$(".downin").css("bottom",hdf+"px");
		$(".downin").addClass("downiner");
	}
}

var dianhua,diqu,diqus,mianji,zxys_shi,zxys_ting,zxys_chu,zxys_wei,zxys_yangtai,titler;
$(".downin .downccery,#jianyang").click(function() {
	jianyang();
});

function jianyang() {
	var rep_shouji = /^(1[3|4|5|6|7|8|9][0-9])\d{8}$/;
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
		art.dialog.tips("房屋面积填写不正确！");
		art.dialog.tips("房屋面积填写不正确！");
	} else if(dianhua == "" || !rep_shouji.test(dianhua)) {
		if(dianhua == "") {
			art.dialog.tips("手机号码未填写！");
			art.dialog.tips("手机号码未填写！");
		} else {
			art.dialog.tips("手机号码填写不正确！");
			art.dialog.tips("手机号码填写不正确！");
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
		lianxiren: ""+zxys_shi+"室"+zxys_ting+"厅"+zxys_chu+"厨"+zxys_wei+"卫"+"_pc效果图show悬浮精选3家公司",
		areaid: diqu,
		mianji: mianji,
		sendtype:banbeng,
		title: zxys_shi+"室"+zxys_ting+"厅"+zxys_chu+"厨"+zxys_wei+"卫"+zxys_yangtai+"阳台"+"_pc效果图show悬浮精选3家公司"
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
					art.dialog.tips('您已经申请了免费报价！');
					art.dialog.tips('您已经申请了免费报价！');
				}else{
					koopsd(hefusd,data.contentid);
				}
				hidesdhow(dfh);
			}
		} else {
			if(banbeng==2){
				art.dialog.tips(data.message);
				bottonsdg("重新<br>计算", 2)
			}else{
				art.dialog.tips('申请报价失败！');
				art.dialog.tips('申请报价失败！');
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



//==============================new_zb================================

if(ie_is()<8){
	$(".widget-frame").hide();
	$(".apply_form").show();
}else{
	$(".widget-frame").show();
	$(".apply_form").hide();
}
if(ie_is()==8){
	$(".zxbj-calc-wrap").css({'width': '243px','height': '410px','border': '1px solid #eaeaea'});
}


$(".submit-btn.expose-stream").click(function(){
	jianyang2();
});

function jianyang2() {
	var rep_shouji = /^(1[3|4|5|6|7|8|9][0-9])\d{8}$/;
	var rep_mianji = /^\d{1,}$/;
	dianhua = $("#dh_square").val();
	diqu = $("#areaid").val();
	mianji = $("#bj_square").val();
	tinchu = $("#leixonjian").val();
	tinchuval = $("#leixonjian option:selected").text();

	if(mianji == 0 || !rep_mianji.test(mianji)) {
		alert("房屋面积填写不正确！");
	} else if(dianhua == "" || !rep_shouji.test(dianhua)) {
		if(dianhua == "") {
			alert("手机号码未填写！");
		} else {
			alert("手机号码填写不正确！");
		}
	} else {
		$(".submit-btn.expose-stream").text("正在计算……");
		ajxasf2();
	}
	return false;
}

function ajxasf2() {
	//发送请求
	var data = {
		shouji: dianhua,
		lianxiren: "" + tinchuval + "_ImgShowRight计算报价",
		areaid: diqu,
		mianji: mianji,
		title: "" + tinchuval + "_ImgShowRight计算报价"
	};
	data = JSON.stringify(data);
	$.getJSON("//www.zx123.cn/bidding/zbsubmit.php?callback=?", {
		jsondata: data,
		mianji: mianji,
		areaid: diqu,
		zbtype: "pc",
		huxing: parseInt(tinchu),
		jishuan_tongyong: 1
	}, function(data) {
		//返回成功
		if(data.status == 1) {
			$("#yqbj_total").text(Math.round(data.option.allmoney / 10000));
			$("#materials_cost").text(data.option.cailiao);
			$("#labor_cost").text(data.option.rengong);
			$("#old_design_fees span").text(data.option.shejifei);
			$("#old_quality_fees span").text(mianji * 30);
			$(".zxbj-calc-header").hide(); 
			$(".zxbj-calc-con").hide(); 
			$(".zxbj-clac-yqbj").show(); 
			$(".zxbj-calc-result").show();
			$(".submit-btn.expose-stream").text("计算成功……");
			$("body").append("<iframe src='//www.zx123.cn/yp/client/?action=xiangmu_show&contentid="+data.contentid+"&new_zb=true' width='0' height='0' style='display: none;'></iframe>");
		} else {
			$(".submit-btn.expose-stream").text("重新计算……");
			alert(data.message);
		}
	});
}

$('#bj_square').keyup(function() {
	selectDoorModle2($(this).val(), this);
});

function selectDoorModle2(square, squareEle) {
	var square = Number(square);
	if(square + '' == 'NaN' || $(squareEle).val() == '') {
		return false;
	}
	if(square <= 60) {
		$('#leixonjian').val(2);
	} else if(square <= 90) {
		$('#leixonjian').val(3);
	} else if(square <= 120) {
		$('#leixonjian').val(4);
	} else if(square <= 150) {
		$('#leixonjian').val(5);
	} else if(square <= 160) {
		$('#leixonjian').val(6);
	} else if(square <= 180) {
		$('#leixonjian').val(60);
	} else if(square <= 200) {
		$('#leixonjian').val(120);
	} else if(square <= 240) {
		$('#leixonjian').val(70);
	} else {
		$('#leixonjian').val(20);
	}
}

//生成0-200000 随机数
randomNumber();
function randomNumber(){
    var num = 0,
        len = 0,
        ge = '',
        shi = '',
        bai = '',
        qian = '',
        wan = '',
        shiwan = '';
    setTimeout(function(){
        num = Math.round(Math.random()*190000)+10000;
        len = num.toString().length;
        ge = num.toString().slice(len-1);
        shi = num.toString().slice(len-2,len-1);
        bai = num.toString().slice(len-3,len-2);
        qian = num.toString().slice(len-4,len-3);
        if (len >= 5) {
            wan = num.toString().slice(len-5,len-4);
        }
        if (len == 6) {
            shiwan = num.toString().slice(len-6,len-5);
        }            
        $('.zxbj-calc-budget div').removeClass();
        $('.zxbj-calc-budget div').eq(0).addClass('num-ge num'+ge);
        $('.zxbj-calc-budget div').eq(1).addClass('num-shi num'+shi);
        $('.zxbj-calc-budget div').eq(2).addClass('num-bai num'+bai);
        $('.zxbj-calc-budget div').eq(3).addClass('num-qian num'+qian);
        $('.zxbj-calc-budget div').eq(4).addClass('num-wan num'+wan);
        $('.zxbj-calc-budget div').eq(5).addClass('num-shiwan num'+shiwan);
        randomNumber();//递归一下
    },200);
    
}
					    
//==============================new_zb_end================================

$(function(){
	wodejiaban();
	$(window).resize(function(){
   		wodejiaban();
	});
});
function wodejiaban(){
	var w = $(window).width();
	if(w < 1200){w=1200;}
	var myg =  w - 302 - 16;
	var mygyw = (w - 302 - 80)/4;
	var my_asd = 0 ;
	$('.grid .imgholder img').each(function(){
		var my_w = parseInt($(this).attr('width'));
		var my_h = parseInt($(this).attr('height'));
		my_asd = (mygyw/my_w)*my_h;
		$(this).css('height',my_asd+"px")
	});
	$('#container').css('width',myg+"px");
	$('.container2').css('width',myg+"px");

	$('.grid .imgholder img').css('width',mygyw+"px");
	$('.grid').css('width',mygyw+"px");

	$('#container').BlocksIt({
		numOfCol: 4,	//每行显示的个数
		offsetX: 8,
		offsetY: 8,
		blockElement: '.grid'
	});
}


$(function(){
	$("#normalComment_submit").click(function(){
		var inputStr = $.trim($('#editor').val());
		if(inputStr == ""){
			alert("请输入评论内容");
		}else{
			$.post("//www.zx123.cn/block/save_comment.php",{"contentid":contentid,"comment":inputStr},function(jsondata){
				if(jsondata == -1){
					alert("发布失败，请重试！");
				}else if(jsondata == -2){
					alert("您需要登录后才能留言！");
				}else if(jsondata == -3){
					alert("亲爱滴，您已经评论过了，请等待审核通过!");
				}else{
					$('#editor').val("");
					alert("恭喜您，发布成功，审核通过后就能显示了哦！");
				}
			},"json");
		}
		
	});
});

//==============================new_zb_end================================





