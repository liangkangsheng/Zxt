







indexhuanden();
function indexhuanden() {
	var mySwiper_huan = new Swiper('.swiper-container_huan', {
		direction: 'horizontal',
		loop: true,
		autoplay: 5000,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	});
}


//yuyue切换
var yuyue_min = 0;
var yuyue_max = $(".info_hb p").length;
var html = "";
for(var i=0;i<7;i++){
	var cpli=$(".info_hd .info_hb p").eq(i).html();
	if(!cpli)continue;
	html = html + "<p>"+cpli+"</p>";
}
$(".info_hd .info_hb").append(html);
function yuyueqh(){
	if(yuyue_max<7)return false;
	if(yuyue_min==yuyue_max){
		yuyue_min = 0;
		$(".info_hd .info_hb").css("margin-top","0px");
	}
	yuyue_min++;
	var mtop = yuyue_min*30*-1;
	$(".info_hd .info_hb").animate({
		marginTop:mtop
	},300);
}

//yuyue切换
var yuyue_minr = 0;
var yuyue_maxr = $(".yus_e .yus_ee .yus_eetconer p").length;
var htmlr = "";
var sizes=$(".yus_eetconer>p").size();
$(".yus_e .yus_ee .yus_eetcon").css({"height":"auto"});
if(sizes){
	for(var i=0;i<sizes;i++){
			htmlr = htmlr + "<p class='clear'>"+$(".yus_e .yus_ee .yus_eetconer p").eq(i).html()+"</p>";
	}
	$(".yus_e .yus_ee .yus_eetconer").append(htmlr);
}

function yuyueqher(){
	if(yuyue_minr==yuyue_maxr){
		yuyue_minr = 0;
		$(".yus_e .yus_ee .yus_eetconer").css("margin-top","0px");
	}
	yuyue_minr++;
	var mtopr = yuyue_minr*36*-1;
	$(".yus_e .yus_ee .yus_eetconer").animate({
		marginTop:mtopr
	},300);
}

//计时器
var indeghhg = 1;
function setterva(){
	indeghhg++;
	if(indeghhg%3==0){
		yuyueqh();
		yuyueqher();
	}
}
$(function(){
	window.setInterval(setterva, 1000);
});
		








			
				
				
//低版本提示
if(ie_is()<10){
	$(".zbleft input#ys_mianjimianji").val('请输入房屋面积');
	$(".zbleft input#ys_shouji").val('请输入手机号码收取报价结果');
	
	$(".zbleft input#ys_mianjimianji").focus(function() {
        if($(this).val() =='请输入房屋面积') {
            $(this).val('');
        }
    });
   $(".zbleft input#ys_mianjimianji").blur(function() {
        if($(this).val() ==''){
            $(this).val('请输入房屋面积');
        }
    });
	$(".zbleft input#ys_shouji").focus(function() {
        if($(this).val() =='请输入手机号码接收报价结果'){
            $(this).val('');
        }
    });
    $(".zbleft input#ys_shouji").blur(function() {
        if($(this).val() =='') {
            $(this).val('请输入手机号码接收报价结果');
        }
    });
}
$('#ys_mianjimianji').keyup(function(){
  ys_selectDoorModle($(this).val(), this);
});
function ys_selectDoorModle(square, squareEle){
    var square = Number(square);
    if(square + '' == 'NaN' || $(squareEle).val() == '') {
        return false;
    }
    if(90>square && square >= 60) {
        ys_leixonjian=2;;
        ys_zxys_ting=1;
        ys_zxys_chu=1;
        ys_zxys_wei=1;
        ys_yangtai=1;
    }else if (150>square&& square >= 90) {
        ys_zxys_shi=3;
        ys_zxys_ting=2;
        ys_zxys_chu=1;
        ys_zxys_wei=2;
        ys_yangtai=1;
    }else if (150<=square ) {
        ys_zxys_shi=4;
        ys_zxys_ting=2;
        ys_zxys_chu=1;
        ys_zxys_wei=2;
        ys_zxys_yangtai=2;
    }else{
        ys_zxys_shi=1;
        ys_zxys_ting=1;
        ys_zxys_chu=1;
        ys_zxys_wei=1;
        ys_zxys_yangtai=1;
    }
}


var ys_dianhua,ys_diqu,ys_mianji,ys_zxys_shi,ys_zxys_ting,ys_zxys_chu,ys_zxys_wei,ys_zxys_yangtai,chasu=0;
$(".zbconte .zbcontr").click(function() {
	if(chasu==0){
		chasu = 1;
		ys_jianyang();
	}else{
		art.dialog.tips("正在计算……");
		art.dialog.tips("正在计算……");
	}
});

function ys_jianyang() {
	var rep_shouji = /^(1[3|4|5|6|7|8|9][0-9])\d{8}$/;
	var rep_mianji = /^\d{1,}$/;
	ys_dianhua = $("#ys_shouji  ").val();
	ys_diqu = $("#areaiddd").val();
	ys_mianji = $("#ys_mianjimianji ").val();

	if(ys_mianji == 0 || !rep_mianji.test(ys_mianji)) {
			art.dialog.tips("房屋面积填写不正确！");
			art.dialog.tips("房屋面积填写不正确！");
			chasu = 0;
	}else if(ys_mianji < 6) {
			art.dialog.tips("房屋面积也太小了吧！");
			art.dialog.tips("房屋面积也太小了吧！");
			chasu = 0;
	} else if(ys_dianhua == "" || !rep_shouji.test(ys_dianhua)) {
		if(ys_dianhua == "") {
			art.dialog.tips("手机号码未填写！");
			art.dialog.tips("手机号码未填写！");
		} else {
			art.dialog.tips("手机号码填写不正确！");
			art.dialog.tips("手机号码填写不正确！");
		}
		chasu = 0;
	} else {
		$(".zbconte .zbcontr").addClass("hover");
		ys_ajxasf();
	}
}

function ys_ajxasf() {
	//发送请求
	var data = {
		shouji: ys_dianhua,
		lianxiren: "装修报价"+ys_zxys_shi+"室"+ys_zxys_ting+"客厅"+ys_zxys_chu+"厨房"+ys_zxys_wei+"卫生间"+ys_zxys_yangtai+"阳台",
		areaid: ys_diqu,
		mianji: ys_mianji,
		sendtype:2,
		title: ys_zxys_shi+"室"+ys_zxys_ting+"客厅"+ys_zxys_chu+"厨房"+ys_zxys_wei+"卫生间"+ys_zxys_yangtai+"阳台"
	};
	data = JSON.stringify(data);
	$.getJSON("https://www.zx123.cn/bidding/zbsubmit.php?callback=?&jisuanqi=2019", {
		jsondata: data,
		mianji: ys_mianji,
		areaid: ys_diqu,
		zbtype:"PC",
		huxing: parseInt(ys_zxys_shi)+parseInt(ys_zxys_ting)+parseInt(ys_zxys_chu)+parseInt(ys_zxys_wei)+parseInt(ys_zxys_yangtai),

	}, function(data) {
		//返回成功
		if(data.status == 1) {
			setTimeout(function(){
			$(".zbconte .zbcontr").removeClass("hover");},500);
			
			donhuas($(".td.cols.cols1 span"),data.option.jiandan.quan_txt,10);
			donhuas($(".td.cols.cols2 span"),data.option.jiandan.ban_txt,10);
			donhuas($(".td.cols.cols3 span"),data.option.zhongdeng.quan_txt,12);
			donhuas($(".td.cols.cols4 span"),data.option.zhongdeng.ban_txt,12);
			donhuas($(".td.cols.cols5 span"),data.option.haohua.quan_txt,14);
			donhuas($(".td.cols.cols6 span"),data.option.haohua.ban_txt,14);
			
			$("body").append("<iframe src='http://www.zx123.cn/yp/client/?action=xiangmu_show&contentid="+data.contentid+"&new_zb=true' width='0' height='0' style='display: none;'></iframe>");
		} else {
			$(".zbconte .zbcontr").removeClass("hover");
			art.dialog.tips(data.message);
			art.dialog.tips(data.message);
		}
		setTimeout(function(){chasu = 0;},2000);
	});
}
	
//动画展示
function donhuas(mthis,mub,mtime,ert,klsd){
	if(mub == "" || mub==0) return false;
	if(klsd==0 || klsd==undefined){
		klsd = ert = mub/mtime;
		donhuas(mthis,mub,mtime,ert,klsd);
	}else{
		if(klsd>=mub){
			mthis.text(mub.toFixed(2));
			return false;
		}else{
			klsd = klsd + ert;
			mthis.text(klsd.toFixed(2));
			setTimeout(function(){
				donhuas(mthis,mub,mtime,ert,klsd);
			},80);
		}
	}
}


function footer_top(){
	if($(".footer_top a").length<1){
		$(".footer_top").hide();
	}
}

//加载完执行
$(function(){
	shangxia = function(h){
		topdfsa(h);//悬浮底
		bg_toprt(h);
	}
	footer_top();
});
function bg_toprt(h){
	if(h>100 && xiaoguo_a()){
		xiaoguo_a = function(){return false;};
	}
	if(h>200 && xiaoguo_b()){
		xiaoguo_b = function(){return false;};
	}
	if(h>1200 && xiaoguo_c()){
		xiaoguo_c = function(){return false;};
	}
	if(h>1700 && xiaoguo_d()){
		xiaoguo_d = function(){return false;};
	}
	if(h>900 && xiaoguo_e()){
		xiaoguo_e = function(){return false;};
	}
}
//效果A
var methis_a = $(".info_c img.klo,.info_cc .info_cclist,.info_cc .info_cctext");
methis_a.addClass("hover_da_xiao_a");
var xiaoguo_a = function(){
	methis_a.each(function(i){
		setTimeout(function(){
			methis_a.eq(i).addClass("hover_da_xiao_b");
			methis_a.eq(i).removeClass("hover_da_xiao_a");
		},(i*40));
	});
	return true;
}
//效果B
var methis_b = $(".info_ccc .info_cctext p,.info_cccimg");
methis_b.addClass("hover_da_xiao_a");
var xiaoguo_b = function(){
	methis_b.each(function(i){
		setTimeout(function(){
			methis_b.eq(i).addClass("hover_da_xiao_b");
			methis_b.eq(i).removeClass("hover_da_xiao_a");
		},(i*40));
	});
	return true;
}
//效果C
var methis_c = $(".info_e .info_ee .info_eelist");
methis_c.addClass("hover_da_xiao_a");
var xiaoguo_c = function(){
	methis_c.each(function(i){
		setTimeout(function(){
			methis_c.eq(i).addClass("hover_da_xiao_b");
			methis_c.eq(i).removeClass("hover_da_xiao_a");
		},(i*40));
	});
	return true;
}
//效果D
var methis_d = $(".info_f .info_ff .info_fflis");
methis_d.addClass("hover_da_xiao_a");
var xiaoguo_d = function(){
	methis_d.each(function(i){
		setTimeout(function(){
			methis_d.eq(i).addClass("hover_da_xiao_b");
			methis_d.eq(i).removeClass("hover_da_xiao_a");
		},(i*40));
	});
	return true;
}

//效果e
var methis_e = $(".info_d .info_dd p");
methis_e.addClass("hover_da_xiao_a");
var xiaoguo_e = function(){
	methis_e.each(function(i){
		setTimeout(function(){
			methis_e.eq(i).addClass("hover_da_xiao_b");
			methis_e.eq(i).removeClass("hover_da_xiao_a");
		},(i*40));
	});
	return true;
}



				