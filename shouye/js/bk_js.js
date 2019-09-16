
		var img_dq = 0;
		var img_zd = $('.bk-top .img_kuan .img_list').length;
		$(function(){
//				window.setInterval('tophuanden(1)', 8000);
				$('.bk-top .img_kown .span_list_right').click(function(){
					tophuanden(1);
				});
				$('.bk-top .img_kown .span_list_left').click(function(){
					tophuanden(-1);
				});
				 $('dl#asdfggh dd').click(function(){
					 var indexdsad =  $('dl#asdfggh dd').index(this);
					 tophuanden(indexdsad-img_dq);
				 });
		});
		
		function tophuanden(x){
			img_dqer = img_dq ;
			img_dq = img_dq + x ;
			if(x==-1 && img_dq == -1 ){
				img_dq = img_zd-1;
			}else if(x==1 && img_dq == img_zd ){
				img_dq = 0;
			}
			$('dl#asdfggh dd ').attr('class','');
			$('dl#asdfggh dd ').eq(img_dq).attr('class','hover');
			$('.bk-top .img_kuan .img_list').eq(img_dq).show();
			$('.bk-top .img_kuan .img_list').eq(img_dqer).animate({
				opacity: '0.6'
			}, 200);
			$('.bk-top .img_kuan .img_list').eq(img_dq).css('position','relative');
			$('.bk-top .img_kuan .img_list').eq(img_dqer).css('position','absolute');
			$('.bk-top .img_kuan .img_list').eq(img_dqer).hide();
			$('.bk-top .img_kuan .img_list').eq(img_dq).animate({
				opacity: '1'
			}, 400);
			console.log("ÏÔÊ¾ %d Òþ²Ø%d",img_dq,img_dqer);
		}
		
		
	$('.header_bg .navigate li.nav_li a.nav_big').eq(4).addClass('nav_big_sv');