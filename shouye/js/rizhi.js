//回复日记回复框
var answer_div=[];
//answer_div.push('<style type="text/css">');
//answer_div.push('.rizhi_right .rizhi_huifu { border-top:1px solid #eaeaea ;margin-top: 25px; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you { margin: 15px auto;border-bottom: 1px dashed #DADADA; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_left { width: 60px;float: left; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_left img { display: block;margin: 0px auto; width: 52px;height: 52px;margin-top: 10px;border-radius: 50%; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght { width: 660px;float: left; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .text_top {  padding: 5px;line-height: 28px;width:630px;margin: 0px auto;  } ');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .text_top span { display: block;float: left;margin-right: 10px; } ');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .text_top span.er { color: #888; }  ');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .text_top span.san { float: right;margin-right: 25px; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .text_top span.er a { color: #888; }  ');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .textarea { padding: 5px;color: #666666; min-height: 50px;line-height: 28px;width: 630px;margin: 0px auto; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght textarea {resize:none; display: block;width: 630px;line-height: 28px;padding: 5px;border: 1px solid #efefef;margin: 0px auto;min-height: 50px; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_my_inp  { display: block;margin: 15px auto;  }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_my_inp span { display: block;height: 150px; float: right;margin-right: 15px; height: 30px;line-height: 30px; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_my_inp input { display: block;float: right;margin-right: 15px;height: 30px;line-height: 30px; border: 1px solid #EAEAEA;background-color:#D84C29 ;color: #FFFFFF; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu { width: 96%;padding: 2%; height: auto;overflow: hidden;margin-bottom: 15px;background-color: #eaeaea; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_left { width: 60px;float: left; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_left img { display: block ;width: 50px;margin: 0px auto;margin-top: 10px;border-radius: 50%; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_right { width: 540px;float: left;  }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_right .huifu_right_top { height: 30px;line-height: 30px;margin: 0px auto; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_right .huifu_right_top span { display: block; margin-right:5px;float: left; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_right .huifu_right_top span.er { color: #666666; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_right .huifu_right_down { width: 540px; float: left;line-height: 30px; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_right .huifu_right_down textarea {resize:none; display: block;width: 100%;height: 30px;line-height: 28px;border: 1px solid #EAEAEA; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_right .huifu_right_down .textarea { width: 100%;height: 30px;line-height: 28px; }');
//answer_div.push('.rizhi_right .rizhi_huifu .huifu_you .huifu_you_roght .huifu_huifu .huifu_right .huifu_right_down2 {  width: 540px;float: left; }');
//answer_div.push('</style>');


answer_div.push('<div class="huifu_huifu">');
answer_div.push('	 <div class="huifu_left" style="margin-right: 15px;">');
answer_div.push('	 	<img alt="" src="http://www.zx123.cn/uploadfile/2014/0701/20140701035908575.jpg" />');
answer_div.push('	 </div>');
answer_div.push('	 <div class="huifu_right">');
answer_div.push('	 	<div class="huifu_right_top">');
answer_div.push('	 		<span class="me">游客</span>');
answer_div.push('	 		<span class="er">回复</span>');
answer_div.push('	 		<span class="er he"></span>');
//answer_div.push('	 		<div style="clear: both;"></div>');
answer_div.push('	 	</div>');
answer_div.push('	 	<div class="huifu_right_down">');
answer_div.push('	 		<textarea class="answer_message_back"></textarea>');
answer_div.push('	 	</div>');
answer_div.push('	 	<div class="huifu_right_down2">');
answer_div.push('	 		<div class="huifu_my_inp" style="margin-bottom: 6px;">');
answer_div.push('		 				<span>');
//answer_div.push('			 			<input type="button" class="answer_list_btn" value="回复信息" />');
answer_div.push('<a href="javascript:answer_list();" class="answer_list_btn">立即回复</a>');
answer_div.push('			 			</span>');
answer_div.push('			 			<span>');
answer_div.push('			 				最多输入<b>200</b>字');
answer_div.push('			 			</span>');
answer_div.push('			 			<div style="clear: both;"></div>');
answer_div.push('			</div>');
answer_div.push('			<div style="clear: both;"></div>');
answer_div.push('	 	</div>');
answer_div.push('	 	<div style="clear: both;"></div>');
answer_div.push('	 </div>');
answer_div.push('	 <div style="clear: both;"></div>');
//answer_div.push('<input type="hidden" id="answer_rizhiid" class="answer_rizhiid" value="" />');
//answer_div.push('<input type="hidden" id="answer_uid" class="answer_uid" value="" />');
//answer_div.push('<input type="hidden" id="answer_askid" class="answer_askid" value="" />');
answer_div.push('</div>');





$(document).ready(function(){
	answer_rizhi();
	list_answer();
});


//回复日志
function answer_rizhi(){
	$(".answer_btn").live("click dbclick",function(){
		var mes_id=$(this).attr('message_id');
		var message2=$("#answer_message"+mes_id).val();
		var ddd=$("#answer_message"+mes_id);
		var icons=$("#iconssss"+ mes_id).find("img").attr("src");
		var answer_time=0;
		var byname="";
		if(is_answer_time==1){
			answer_time = $("#answer_timess"+mes_id).val();
			byname=$("#bynamess"+mes_id).val(); //昵称
		}
		//检查登录
		$.getJSON("http://www.zx123.cn/member/login_new.php?action=check&callback=?",function(data){
				if(data==-1){
					//$(".Ajax_LoginBut").click();
					location.href="http://www.zx123.cn/member/login.php";
					return false;
				}else{
					if(message2.length < 2){
						alert('请至少输入5个字符的回复内容');
						return false;
					}
					$.post("http://www.zx123.cn/space/rizhi.inc.php",{
						action:'rizhi_pingjia',
						rizhi:mes_id,
						message:message2,
						answer_time:answer_time,
						icon_url:icons,
						byname:byname
					},function(data){
						var ob=eval("("+ data +")");
						if(ob.status=='1'){
							ddd.val("");
							alert(ob.message);
						}else{
							alert(ob.message);
						}
					});
				}
		   },'json');
	});
}


//二级回复
function list_answer(){
	$('.say,.say2').bind("click dbclick",function(){
		var askid=$(this).attr("askid");
        var uid=$(this).attr("uid");
        var rizhi_id=$(this).attr("rizhiid");
        var uid_name=$(this).attr("uid_name");
        
        var other_askid_id=0;
        
        //三级回复赋值
        if($(this).attr("class")=="say2"){
        	other_askid_id=$(this).attr("ask_list_id");
        }
        
		
		$("#add_div"+ askid).html(answer_div.join(""));

		
		$("#add_div"+ askid).append('<input type="hidden" id="answer_rizhiid'+ askid +'" value="'+ rizhi_id +'" />');
		$("#add_div"+ askid).append('<input type="hidden" id="answer_uid'+ askid +'" value="'+ uid +'" />');
		$("#add_div"+ askid).append('<input type="hidden" id="answer_askid'+ askid +'" value="'+ askid +'" />');
		$("#add_div"+ askid).append('<input type="hidden" id="other_askid'+ askid +'" value="'+ other_askid_id +'" />');
		if(is_answer_time==1){
			$("#add_div"+ askid).find(".huifu_right_top").append('<input type="text" id="byname'+ askid +'"  value="" placeholder="请输入昵称" style="width:150px;outline:none;border:1px solid #ccc;height:20px;background:#fff;color:#666;margin-left:25px;">');
			$("#add_div"+ askid).find(".huifu_right_top").append('<input type="text" id="answer_time'+ askid +'" placeholder="请选择时间" value="" onclick="WdatePicker()" style="width:80px;outline:none;margin-left:50px;border:1px solid #ccc;"><div style="clear: both;"></div>');
			//选择头像展示
			$("#add_div"+ askid).find(".huifu_left").addClass("icondiv"+ askid).attr("onclick","click_selete_icon('.icondiv"+ askid +"')");
		}
		
		$("#add_div"+ askid).find(".answer_list_btn").attr("href","javascript:answer_list("+ askid +");");
		var user_name = $(".my_info").attr("id");
		var logo = $(".my_info").attr("src");
		$(".me").html(user_name);
		$("#add_div"+ askid).find(".he").html(uid_name);
	});
	

}



//二级回复提交
function answer_list(askid){
	var div=$("#add_div"+ askid);
	var message3 = $("#add_div"+ askid).find(".answer_message_back").val();
	var rizhi_id2=$("#answer_rizhiid"+askid).val();
	var uid2=$("#answer_uid"+askid).val();
	var askid2=$("#answer_askid"+askid).val();
	var other_askid2=$("#other_askid"+askid).val();
	var icons=$("#add_div"+ askid).find(".huifu_left").find("img").attr("src");
	var answer_time=0;
	var byname="";
	var backbyname="";
	if(is_answer_time==1){
		answer_time=$("#answer_time"+ askid).val();
		byname=$("#byname"+askid).val(); //昵称
		backbyname = $("#add_div"+ askid).find(".he").html();
	}
    		
	//检查登录
	$.getJSON("http://www.zx123.cn/member/login_new.php?action=check&callback=?",function(data){
			if(data==-1){
				location.href="http://www.zx123.cn/member/login.php";
				return false;
			}else{
				if(message3.length < 5){
					alert('请至少输入5个字的回复内容');
					return false;
				}
				$.post("http://www.zx123.cn/space/rizhi.inc.php",{
					answer_time:answer_time,
					action:'rizhi_pingjia',
					rizhi:rizhi_id2,
					message:message3,
					answer:uid2,
					askid:askid2,
					other_askid:other_askid2,
					icon_url:icons,
					byname:byname,
					backbyname:backbyname
				},function(data){
					var ob=eval("("+ data +")");
					if(ob.status=='1'){
						div.html("");
						alert(ob.message);
					}else{
						alert(ob.message);
					}
				});
			}
	   },'json');
}
