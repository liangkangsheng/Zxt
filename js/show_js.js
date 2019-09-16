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
		if((e.wheelDelta && e.wheelDelta >= 120) || (e.detail && 3 <= e.detail)) {
			//			bg_top();
		} else if((e.wheelDelta && e.wheelDelta <= -120) || (e.detail && -3 >= e.detail)) {
			//			bg_top();
		}
	}
	/*注册滚动事件*/
	if(document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	}//W3C
	window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome 

$(function() {
	var adurl = document.location.href;
	$(".top_left .left_dow .text_span span a").each(function() {
		$(this).attr('href', $(this).attr('href') + adurl);
	});
	$('.textdown .textdowntop').text($('.textdown .textdowntop').text() + adurl);

	var sdsdsdurl = document.location.href;
	if(sdsdsdurl.indexOf('ask') != -1) {
		if(sdsdsdurl.indexOf('wenda') == -1) {
			$('.header_bg .navigate li.nav_li a.nav_big').eq(6).addClass('nav_big_sv');
		} else {
			$('.header_bg .navigate li.nav_li a.nav_big').eq(5).addClass('nav_big_sv');
		}
	} else {
		$('.header_bg .navigate li.nav_li a.nav_big').eq(4).addClass('nav_big_sv');
	}

	var guanggao_show = '<div class="guanggao_show" style="margin: 20px 0 0 0;">'
						+'<a href="//www.zx123.cn/zb/info.html?utm_source=wenzhang_showcenter" target="_blank">'
						+'<img alt="广告" src="//www.zx123.cn/templates/zx123cs/img_new/gg_masg_0818.png" style="display: block;width: 100%;height: auto;"/>'
						+'</a></div>';
	if($("#ys_yd").parent().find(".guanggao_show").length<1){
		$("#ys_yd").before(guanggao_show);
	}
	
	var showids = document.location.href.replace(".html","").split("/")[5];
	$.getJSON("//www.zx123.cn/twocode.php?contentid="+showids,function(res){
		if(res.status==1){
			var leftimg = res.data["app"];
			var righimg = res.data["pic"];
			$(".sty_top .top_left .left_dow .text_conter").after(''
			+'<div class="clear" style="padding:0 35px;margin:15px 0;">'
			+'	<div style="float:left;width:48%;margin:0 2% 0 0;">'
			+'  <div style="padding:10px;border: 1px solid #eee;">'
			+'		<img src="'+leftimg+'" alt="app" style="display:block;">'
			+'	</div>'
			+'	</div>'
			+'	<div style="float:right;width:48%;margin:0 0 0 2%;">'
			+'	<div style="padding:10px;border: 1px solid #eee;">'
			+'		<img src="'+righimg+'" alt="pic" style="display:block;">'
			+'	</div>'
			+'	</div>'
			+'</div><style>.textdown .shangxiab { padding:0;border-top:0 }</style>');
		}
	});
	
});