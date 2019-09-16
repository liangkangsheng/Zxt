//右浮动
$(function(){
    var userAgent = window.navigator.userAgent.toLowerCase();
  if( $.browser.msie && /msie 7\.0/i.test(userAgent) || !$.browser.msie8 && !$.browser.msie7 && $.browser.msie && /msie 6\.0/i.test(userAgent) ){
  	
  }else {
  	bg_top();
  }
	
});

//热门关注 滑动
var donqu = 0;
var mmss = 0;
var indeem = $('#rmtj .title .title_right em').length - 1 ;
$('#rmtj .title .title_right em').click(function(){
	var inde_rmtj = $('#rmtj .title .title_right em').index(this);
	donqu = inde_rmtj;
 	$('#rmtj .title .title_right em').attr('class','');
 	$(this).attr('class','er');
 	var marleft = "-"+(inde_rmtj*963 + 15)+"";
 	if(mmss == inde_rmtj){		
 	}else {
 		$('#rmtj .conter_con .rmtj_block ').stop();
 		$('#rmtj .conter_con .rmtj_block ').animate({
            marginLeft: marleft
        }, 400);      
 	}
 	mmss = inde_rmtj ;
});

$('#rmtj .title .title_right a').click(function(){
	if($(this).attr('class')=='er' && donqu >= 1){
		donqu = donqu - 1;
		$('#rmtj .title .title_right em').attr('class','');
 	    $('#rmtj .title .title_right em').eq(donqu).attr('class','er');
	}else if(donqu < indeem  && $(this).attr('class')!='er'){
		donqu = donqu + 1;
		$('#rmtj .title .title_right em').attr('class','');
 	    $('#rmtj .title .title_right em').eq(donqu).attr('class','er');
	}
	var marleft = "-"+(donqu*963)+"";
 		$('#rmtj .conter_con .rmtj_block ').stop();
 		$('#rmtj .conter_con .rmtj_block ').animate({
            marginLeft: marleft
        }, 400);      
});


setTimeout(function(){rmtj_gun();},9000);

function rmtj_gun(){
  if(donqu < indeem ){
		donqu = donqu + 1;
		$('#rmtj .title .title_right em').attr('class','');
 	    $('#rmtj .title .title_right em').eq(donqu).attr('class','er');
  }else if( donqu == indeem ) {
  	    donqu = 0;
		$('#rmtj .title .title_right em').attr('class','');
 	    $('#rmtj .title .title_right em').eq(donqu).attr('class','er');
  }
	var marleft = "-"+(donqu*963)+"";
 		$('#rmtj .conter_con .rmtj_block ').stop();
 		$('#rmtj .conter_con .rmtj_block ').animate({
            marginLeft: marleft
        }, 400);    
    setTimeout(function(){rmtj_gun();},9000);    
}

//每日推荐
var donqu2 = 0;
var mmss2 = 0;
var indeem2 = $('#mrtj .title .title_right em').length - 1 ;
$('#mrtj .title .title_right em').click(function(){
	var inde_rmtj2 = $('#mrtj .title .title_right em').index(this);
	donqu2 = inde_rmtj2;
 	$('#mrtj .title .title_right em').attr('class','');
 	$(this).attr('class','er');
 	var marleft2 = "-"+(inde_rmtj2*963 + 15)+"";
 	if(mmss2 == inde_rmtj2){		
 	}else {
 		$('#mrtj .conter_con .mrtj_block ').stop();
 		$('#mrtj .conter_con .mrtj_block ').animate({
            marginLeft: marleft2
        }, 400);      
 	}
 	mmss2 = inde_rmtj2 ;
});

$('#mrtj .title .title_right a').click(function(){
	if($(this).attr('class')=='er' && donqu2 >= 1){
		donqu2 = donqu2 - 1;
		$('#mrtj .title .title_right em').attr('class','');
 	    $('#mrtj .title .title_right em').eq(donqu2).attr('class','er');
	}else if(donqu2 < indeem2  && $(this).attr('class')!='er'){
		donqu2 = donqu2 + 1;
		$('#mrtj .title .title_right em').attr('class','');
 	    $('#mrtj .title .title_right em').eq(donqu2).attr('class','er');
	}
	var marleft2 = "-"+(donqu2*963)+"";
 		$('#mrtj .conter_con .mrtj_block ').stop();
 		$('#mrtj .conter_con .mrtj_block ').animate({
            marginLeft: marleft2
        }, 400);      
});


setTimeout(function(){mrtj_gun();},6000);

function mrtj_gun(){
 if(donqu2 < indeem2 ){
		donqu2 = donqu2 + 1;
		$('#mrtj .title .title_right em').attr('class','');
 	    $('#mrtj .title .title_right em').eq(donqu2).attr('class','er');
	} else if(donqu2 == indeem2) {
		donqu2 = 0;
		$('#mrtj .title .title_right em').attr('class','');
 	    $('#mrtj .title .title_right em').eq(donqu2).attr('class','er');
	}
	var marleft2 = "-"+(donqu2*963)+"";
 		$('#mrtj .conter_con .mrtj_block ').stop();
 		$('#mrtj .conter_con .mrtj_block ').animate({
            marginLeft: marleft2
        }, 400);    
    setTimeout(function(){mrtj_gun();},9000);    
}

function bg_top(){
	var mg_top = getScrollTop();
    var right_m = $('#right').height();
    var left_m =  $('#left').height();
    var left_left =  $('#my_left').offset().left;
    var left_top =  $('#my_left').offset().top;
	if(mg_top > left_top - 40 && mg_top < right_m + left_top - left_m - 55 ){
		$('#LeftAndRight #left').css('margin-top','0px');
		$('#LeftAndRight #left').css('position','fixed');
		$('#LeftAndRight #left').css('top','40px');
		$('#LeftAndRight #left').css('left',left_left+'px');
	}else if( right_m + left_top - left_m - 55 < mg_top  ){
		$('#LeftAndRight #left').css('position','inherit');
		$('#LeftAndRight #left').css('margin-top',( right_m - left_m - 15 )+'px');
	}else {
		$('#LeftAndRight #left').css('margin-top','0px');
		$('#LeftAndRight #left').css('position','inherit');
	}
	setTimeout(function(){bg_top();},60);
}
function getScrollTop()
{
    var scrollTop=0;
    if(document.documentElement && document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {   
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}

function rmct_me_stm(){
	var ss_me_stm =  $('#rmct_me_con').val();
	if( $.trim(ss_me_stm)!= '关键词搜索'){
		window.location.href = "http://www.zx123.cn/search/entire_search.php?ekeyword="+$.trim(ss_me_stm)+"&etype=1"; 
	}else {
		alert('关键词不能为空!');
	}
}
//招标路径
$(function(){
	var url_ss =  getCookie('nYPLxWRfpMsubdomain');
	$('#zxbb .conter_con .zxbb_right .zxbb_list a').each(function(){
		$(this).attr('href','http://' + url_ss+'.zx123.cn/'+ $(this).attr('href') );
	});
});
//left 选中标示
$(function(){
	var h_ss =  $('#right #erji_con .erji_title span h1').text();
	$('#LeftAndRight #left .yindoa .list a').each(function(){
		if( $(this).text() == h_ss){
			$(this).parent('.list').addClass('list_hover');
		}
	});
});

