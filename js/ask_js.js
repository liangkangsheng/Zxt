$(function() {
	$('.ask_left .ask_lanmu').eq(0).find('span').eq(0).click(function() {
		$('.ask_left .ask_lanmu').eq(0).find('span').attr('class', '');
		$('.ask_left .ask_lanmu').eq(0).find('span').eq(0).attr('class', 'er');
		$('.ask_left .ask_lanmu').eq(0).find('span a').attr('class', '');
		$('.ask_left .ask_lanmu').eq(0).find('span a').eq(0).attr('class', 'er');
		$('#ask-zidao').hide();
		$('#ask-tuijian').show();
	});
	$('.ask_left .ask_lanmu').eq(0).find('span').eq(1).click(function() {
		$('.ask_left .ask_lanmu').eq(0).find('span').attr('class', '');
		$('.ask_left .ask_lanmu').eq(0).find('span').eq(1).attr('class', 'er');
		$('.ask_left .ask_lanmu').eq(0).find('span font').attr('class', '');
		$('.ask_left .ask_lanmu').eq(0).find('span font').eq(1).attr('class', 'er');
		$('#ask-zidao').show();
		$('#ask-tuijian').hide();
	});


	$('#ask-tuijian .asklist').eq(0).find('.asklistdowm').show();
	$('#ask-tuijian .asklist').eq(0).css('background-color', '#FBFBFB');
	$('#ask-tuijian .asklist').hover(function() {
		$('#ask-tuijian .asklist .asklistdowm').hide();
		$('#ask-tuijian .asklist').css('background-color', '#ffffff');
		$(this).css('background-color', '#fafafa');
		$(this).find('.asklistdowm').show();
	});

	$('.ask_left .ask_lanmu').eq(1).find('span').eq(0).click(function() {
		$('.ask_left .ask_lanmu').eq(1).find('span').attr('class', '');
		$('.ask_left .ask_lanmu').eq(1).find('span').eq(0).attr('class', 'er');
		$('.ask_left .ask_lanmu').eq(1).find('span font').attr('class', '');
		$('.ask_left .ask_lanmu').eq(1).find('span font').eq(0).attr('class', 'er');
		$('#askgangan').hide();
		$('#asklinhuida').hide();
		$('#askdontai').show();
	});
	$('.ask_left .ask_lanmu').eq(1).find('span').eq(1).click(function() {
		$('.ask_left .ask_lanmu').eq(1).find('span').attr('class', '');
		$('.ask_left .ask_lanmu').eq(1).find('span').eq(1).attr('class', 'er');
		$('.ask_left .ask_lanmu').eq(1).find('span font').attr('class', '');
		$('.ask_left .ask_lanmu').eq(1).find('span font').eq(1).attr('class', 'er');
		$('#asklinhuida').hide();
		$('#askdontai').hide();
		$('#askgangan').show();
	});
	$('.ask_left .ask_lanmu').eq(1).find('span').eq(2).click(function() {
		$('.ask_left .ask_lanmu').eq(1).find('span').attr('class', '');
		$('.ask_left .ask_lanmu').eq(1).find('span').eq(2).attr('class', 'er');
		$('.ask_left .ask_lanmu').eq(1).find('span font').attr('class', '');
		$('.ask_left .ask_lanmu').eq(1).find('span font').eq(2).attr('class', 'er');
		$('#askgangan').hide();
		$('#askdontai').hide();
		$('#asklinhuida').show();
	});

	$('.askpaimain .paiminconter').eq(0).show();
	$('.askpaimain .paimintitle span').hover(function() {
		$('.askpaimain .paimintitle span').attr('id', '');
		$(this).attr('id', 'hover');
		var index = $('.askpaimain .paimintitle span').index(this);
		$('.askpaimain .paiminconter').hide();
		$('.askpaimain .paiminconter').eq(index).show();
	});
	
	$('.askpaimain .paiminahover a').each(function(i){
		if(i>12){
			$(this).hide();
		}
	});

	$('#askgangan .asklist .asklistdowmw .askdowncomw a , #askdontai .asklist .asklistdowmw .askdowncomw a').each(function(){
		if($(this).text().length>120){
			$(this).text($(this).text().substring(0,120)+"бнбн");
		}
	});

	$('#submitbottom').click(function(){
		
		document.location.href = "http://www.zx123.cn/ask/question.php?question="+$('#keywords').val();
	});
	var sdsdsdurl = document.location.href;
	if(sdsdsdurl.indexOf('www')!=-1){
		$('.header_bg .navigate li.nav_li a.nav_big').eq(6).addClass('nav_big_sv');
	}else{
		$('.header_bg .navigate li.nav_li a.nav_big').eq(5).addClass('nav_big_sv');
	}
	

});