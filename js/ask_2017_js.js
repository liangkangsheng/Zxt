	$(".asktui_uy span.sk span.jk").html("<font>0</font><font>1</font><font>2</font><font>3</font><font>4</font><font>5</font><font>6</font><font>7</font><font>8</font><font>9</font><font>0</font>");
	$(".asktui_uy span.sk").each(function(i){
		var sums = $(this).attr("date_s");
		if(sums==0){sums=10;}
		sums = sums*36*(-1);
		if(ie_is()<8){sums=sums-4;}
		timeout = 1400+160*i;
		$(this).find(".jk").animate({
			marginTop:sums
		},timeout);
	});


$(function() {
	
	

	

	$('.askpaimain .paiminconter').eq(0).show();
	$('.askpaimain .paimintitle span').hover(function() {
		$('.askpaimain .paimintitle span').attr('id', '');
		$(this).attr('id', 'hover');
		var index = $('.askpaimain .paimintitle span').index(this);
		$('.askpaimain .paiminconter').hide();
		$('.askpaimain .paiminconter').eq(index).show();
	});
	
	$('.askpaimain .paiminahover a').each(function(i){
		if(i>19){
			$(this).hide();
		}
	});

	
	$('#submitbottom').click(function(){
		if($('#keywords').val()==""){
			alert("输入您遇到的问题!");
		}else{
			document.location.href = "http://www.zx123.cn/ask/question.php?question="+$('#keywords').val();	
		}
		
	});
	var sdsdsdurl = document.location.href;
	if(sdsdsdurl.indexOf('www')!=-1){
		$('.header_bg .navigate li.nav_li a.nav_big').eq(6).addClass('nav_big_sv');
	}else{
		$('.header_bg .navigate li.nav_li a.nav_big').eq(5).addClass('nav_big_sv');
	}
	
	
	
	$(".ask_left .ask_lanmu.oer span").hover(function(){
		var insde = $(".ask_left .ask_lanmu.oer span").index(this);
		$(".ask_left .ask_lanmu.oer span").removeClass("er");
		$(this).addClass("er");
		$(".ask_left .ask_conter.askdontai").hide();
		$(".ask_left .ask_conter.askdontai").eq(insde).show();
	});
	

});