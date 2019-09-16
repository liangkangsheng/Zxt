//鼠标移动到图片上效果（动态添加元素正常）
$('.grid,.jx_item').live('mouseenter', function() {
	$(this).find(".shenqing").show();
	$(this).find(".shenqing").animate({
		opacity: 1
	}, 500);
	$(this).find(".shoucang").show();
	$(this).find(".shoucang").animate({
		opacity: 1
	}, 500);
}).live('mouseleave', function() {
	$(this).find(".shenqing").animate({
		opacity: 0
	}, 500);
	$(this).find(".shenqing").hide();
	$(this).find(".shoucang").animate({
		opacity: 0
	}, 500);
	$(this).find(".shoucang").hide();

});

$('.header_bg .navigate li.nav_li a.nav_big').eq(1).addClass('nav_big_sv');

//喜欢
function xihuan(obj,showid){
	if($(obj).attr("class").indexOf("hover")==-1){
		$(obj).addClass("hover");
		$.get("http://www.zx123.cn/mobile/xgt_tool.php?ajax=100&aid="+showid);
		$(obj).find("span.rights").html(parseInt($(obj).find("span.rights").html())+1);
	}
}
