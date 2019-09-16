$(function(){
	
	var sadfhlk = 0;
	var herf_m = document.location.href;
	
	if(herf_m.indexOf(".html")!=-1){
		$('.bklist .bklist_down .bk_list .bktitle em').hide();
	}
	
	var indesd = 0;
	$('.bklist .bklist_cont .xgt_daoh_top span').each(function(asdsad){
		if($(this).attr('class')=="er"){
			indesd = asdsad;
		}
	});
	$('.bklist .bklist_cont .xgt_daoh_down .xgt_daoh_down_list').eq(0).find('.tubiaow').addClass('tubiaow_'+indesd);
	
	if($('.bklist .bklist_cont .xgt_daoh_down .xgt_daoh_down_list').eq(0).find('a').eq(0).attr('href') != herf_m){
		
		if( herf_m.indexOf('http://www.zx123.cn/diban/') != -1 ){
			$('.bklist .bklist_cont .xgt_daoh_down .xgt_daoh_down_list').eq(0).find('a').each(function(sd){
			if($(this).attr('href') == herf_m ){
				$(this).attr('class','er');
				sadfhlk =  $(this).position().left;;
			}else if(herf_m.indexOf($(this).attr('href')) != -1 && sd != 0 || sd == 1){
				$(this).attr('class','er');
				sadfhlk =  $(this).position().left;;
			}else{
				$(this).attr('class','');
			}
		});	
		}else{
			$('.bklist .bklist_cont .xgt_daoh_down .xgt_daoh_down_list').eq(0).find('a').each(function(sd){
			if($(this).attr('href') == herf_m ){
				$(this).attr('class','er');
				sadfhlk =  $(this).position().left;;
			}else if(herf_m.indexOf($(this).attr('href')) != -1 && sd != 0){
				$(this).attr('class','er');
				sadfhlk =  $(this).position().left;;
			}else{
				$(this).attr('class','');
			}
		});	
		}
	}else{

	}
	if($('.bklist .bklist_cont .xgt_daoh_down .xgt_daoh_down_list').eq(1) != "" ){
		
	$('.bklist .bklist_cont .xgt_daoh_down .xgt_daoh_down_list').eq(1).find('a').each(function(asdsad){
		if($(this).attr('href') == herf_m ){
			$(this).attr('class','er');
			
		}else if(herf_m.indexOf($(this).attr('href')) != -1 && asdsad != 0){
			$(this).attr('class','er');
			
		}else{
			$(this).attr('class','');
		}
	});
	$('.bklist .bklist_cont .xgt_daoh_down .xgt_daoh_down_list').eq(1).find('.tubiaow').css('left',(sadfhlk+10)+'px');
	}
	
	
	
	
	$('.bklist .bklist_down .bk_list .bkconter p').each(function(){
		if($(this).text().length>50){
			$(this).text($(this).text().substring(0,50)+"¡­¡­");
		}
	});
	
	$('.pages a').each(function(){
		if($(this).attr('href') == herf_m && $(this).attr('rel') !='nofollow' ){
			$(this).attr('class','hovers');
		}else{
			$(this).attr('class','');
		}
	});
	
	$('.header_bg .navigate li.nav_li a.nav_big').eq(4).addClass('nav_big_sv');
	
	
	//²¹³äÑ¡µØÇø
	(function(){
		$.getScript("http://www.zx123.cn/templates/zx123cs/js/diqulist.js");
	})();

	
});
