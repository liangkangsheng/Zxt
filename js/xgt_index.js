		var max_asd =  $('#d_slider .new_xgt_slider .nx_layer').length;
		var home_asd = 0;
		$(function(){
			 window.setInterval('drawimg(1)', 4000);
			// $('.xgtb_intro a.xgt_btn_left').click(function(){drawimg(-1);});
			// $('.xgtb_intro a.xgt_btn_right').click(function(){drawimg(1);});
			 $('dl#asdfggh dd').click(function(){
				 var indexdsad =  $('dl#asdfggh dd').index(this);
				 drawimg(indexdsad-home_asd);
			 });
		});

		function drawimg(asd){
			$('.new_xgt_slider div.nx_layer').eq(home_asd).animate({
				opacity:0,
				zIndex:0
			},400);
			$('.slider_font li').eq(home_asd).animate({
				opacity:0,
				zIndex:0
			},400);
			home_asd = home_asd + asd;
			if(home_asd<0){
				home_asd = max_asd - 1;
			}else if(home_asd>=max_asd){
				home_asd = 0;
			}
			$('dl#asdfggh dd').attr('class','');
			$('dl#asdfggh dd').eq(home_asd).attr('class','hover');
			$('.new_xgt_slider div.nx_layer').eq(home_asd).animate({
				opacity:1,
				zIndex:10
			},400);
			$('.slider_font li').eq(home_asd).animate({
				opacity:1,
				zIndex:10
			},400);
		}
		
		var ulri = 0;
		$('.ulright').click(function(){
			ulri = ulri - 1100;
			if(ulri>=-4400){
				$('.conwer').animate({
					marginLeft:ulri
				},400);
			}else{
				ulri = ulri + 1100;
				art.dialog.tips('已经是最后一批！', 1);
			}
		});
		$('.ulleft').click(function(){
			ulri = ulri + 1100;
			if(ulri<=0){
				$('.conwer').animate({
					marginLeft:ulri
				},400);
			}else{
				ulri = ulri - 1100;
				art.dialog.tips('已经是第一批了！', 1);
			}
		});
		
		
		
		
		var fengehpy = 0;
		$('#fengehpy').click(function(){
			if(fengehpy == 0){
				$('#xgt_homeStyle .omeSleft .ul').animate({
					marginLeft:-1100
				},400);
				fengehpy = 1;
			}else{
				$('#xgt_homeStyle .omeSleft .ul').animate({
					marginLeft:-0
				},400);
				fengehpy = 0;
			}
		});
		

		
		var gzhuanyuipi = 0;
		$('#gzhuanyuipi').click(function(){
			if(gzhuanyuipi >= -3300){ 
				gzhuanyuipi = gzhuanyuipi - 1100;
			}else{
				gzhuanyuipi = 0;
			}
			$('.xgt_gz .ul').animate({
				marginLeft:gzhuanyuipi
			},400);
		});
		
		
		$(".xgtimgl").click(function() {
			sdhoo(-1);
		});
		$(".xgtimgr").click(function() {
			sdhoo(1);
		});
		var odo = 0;
		var wwwsd = $(".lisdty").width();
		var odolen = $(".khfjr a").length/3;
		$(".khfjr").css('width', odolen + '00%');
		$(".khfjr a").css("width", 100 / odolen + "%");
		function sdhoo(x) {
			var maginleft = 0;
			odo = odo + x;
			console.log(odo + "/n");
			if(odo > -1 && odo < odolen) {} else if(odo <= -1) {
				$(".khfjr").css("margin-left", (-1) * (odolen - 1) * wwwsd + "px");
				odo = odolen - 1 + x;
			} else if(odo >= odolen) {
				$(".khfjr").css("margin-left", "0px");
				odo = x;
			}
			maginleft = (-1) * odo * wwwsd;
			$(".khfjr").stop();
			$(".khfjr").eq(1).animate({
				marginLeft: maginleft
			}, 100);
			$(".khfjr").eq(0).animate({
				marginLeft: maginleft
			}, 200);
			$(".khfjr").eq(2).animate({
				marginLeft: maginleft
			}, 300);
		}
		
		$(".huanyisd span").click(function(){
			var index = $(".huanyisd span").index(this);
			$(".huanyisd span").removeClass("er");
			$(this).addClass("er");
			jxti(index);
		});
		jxti(0);
		function jxti(index){
			if(index==0){
				$(".jxmtksd .jxmti").each(function(i){
					if(i>7){
						$(this).hide();
					}else{
						$(this).show();
					}
				});
			}
			if(index==1){
				$(".jxmtksd .jxmti").each(function(i){
					if(i>7){
						$(this).show();
					}else{
						$(this).hide();
					}
				});
			}
		}
		
		
		//悬浮
		var myDate = new Date(); 
		var yy = myDate.getDate();
		var rr = myDate.getHours();
		var mm = myDate.getMinutes();    
		var ewqr = rr*93-rr*yy-(mm-60);
		$('.listasda em').text(ewqr);
		
		var wbody = $('html').width();
		var wji = wbody * (-1);
		
		
		$('.fixed_dw').click(function(){
			$('.fixed_dw').animate({
				right:-0
			},200,function(){
				$('.fixed_dw').hide();
				$('.xgt_fixed').animate({
				left:0
				},400);
			});
		});
		$('.slore').click(function(){
			$('.xgt_fixed').animate({
			left: wji
			},400,function(){
				$('.fixed_dw').show();
				$('.fixed_dw').animate({
				right:-35
				},200);
			});
		});

		function getScrollTop() {
			var scrollTop = 0;
			if (document.documentElement && document.documentElement.scrollTop) {
				scrollTop = document.documentElement.scrollTop;
			} else if (document.body) {
				scrollTop = document.body.scrollTop;
			}
			return scrollTop;
		}
		var scrollFunc = function(e) {
				e = e || window.event;
				if ((e.wheelDelta && e.wheelDelta >= 120) || (e.detail && 3 <= e.detail)) {
					bg_topewr();
				} else if ((e.wheelDelta && e.wheelDelta <= -120) || (e.detail && -3 >= e.detail)) {
					bg_topewr();
				}
			}
		/*注册滚动事件*/
		if (document.addEventListener) {
			document.addEventListener('DOMMouseScroll', scrollFunc, false);
		}
		//W3C
		window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome
		
		function bg_topewr(){
			if(getScrollTop()>400){
				$('.xgt_fixed').show();
			}else{
				$('.xgt_fixed').hide();
			}
		}
		$(function(){
			$('.header_bg .navigate li.nav_li a.nav_big').eq(1).addClass('nav_big_sv');
			 $(window).resize(function() {   //变化
				 wbody = $('html').width();
				 wji = wbody * (-1);
			 }); 
			 window.setInterval('bg_topewr()', 400);
		});
		
		
		
		
		
		
		
		
		
		
		
		
		