	
	//头部搜索菜单
	$(".tableList span").click(function(){
		$(this).addClass("select");
		$(this).siblings("span").attr("class","item");
	});
	
	//头部下拉菜单
	$('#yy_list,#xx_list').hover(function(){
	$('#xx_list').show();
    },function(){
	$('#xx_list').hide();
    });
	
	//搜索
$("#top_search").click(function(){my_submit()});
		
function my_submit(){
	var inputStr = $.trim($("#txt_top_input").val());
	if(inputStr == ""){ 
		alert("请输入您要查询的关键词");
		return false
	}
	var selectVal = $(".tableList .select").html();
	var htmlUrl = "";
	if(selectVal == "效果图"){
		htmlUrl = "//www.zx123.cn/search/entire_search_150605.php?ekeyword="+inputStr+"&etype=2"; 
	}else if(selectVal == "文章"){
		htmlUrl = "//www.zx123.cn/search/entire_search_150605.php?ekeyword="+inputStr+"&etype=1"; 
	}else if(selectVal == "问答"){
		htmlUrl = "//www.zx123.cn/ask/search.php?keywords="+inputStr;
	}else if(selectVal == "找公司"){
		htmlUrl = "//www.zx123.cn/search/entire_search_150605.php?ekeyword="+inputStr+"&etype=3";
	}
	 window.location.href = htmlUrl; 
}
	
	//通用右侧发布招标入口方法
	function submit_zbrk_right(){
		var lianxiren = $.trim($("#lianxiren").val());
		var shouji = $.trim($("#shouji").val());
		
		if(lianxiren == "" || lianxiren == "您的称呼"){
			alert("请输入您的称呼");	
			return false;
		}
		var re = /^1\d{10}$/;
	    if (!re.test(shouji)) {
			alert("手机号码不正确")
			return false;
	    }
		return true;
	}
	
	
	
	$(document).ready(function() {
		
		//如果用户已登录，显示其登录信息
		isLogin(); 
		function isLogin(){
			$.getJSON("//www.zx123.cn/member/login_new.php?action=check&callback=?",function(data){
				if(data!=-1){
					loginSuccess(data);
				}
			},'json');
		}
		
		function loginSuccess(data){
			$(".page_topbar").html(data);
		}
		
		//获取指定名称的cookie的值
		function getCookie(objName) { 
		    var arrStr = document.cookie.split("; ");
		    for (var i = 0; i < arrStr.length; i++) {
		        var temp = arrStr[i].split("=");
		        if (temp[0] == objName) {
		        	return unescape(temp[1]);
		        }
		    }
		}
		
		//一下情况只有没有二级域名情况下才会执行			
		var cityname = getCookie("cityname");
		if(!cityname){
			$(".cityName").html("全国总站");
		}else{
			$(".cityName").html(cityname);
		}
		
	});
	
	
	//处理分站的url地址问题
	var mycity = getCookie("mycity");
	if(mycity){
		$("#TopNav .nav .main .ejym").each(function(i, item){
			var str = $(item).attr("href");
			if(str){
			str = str.replace("//bj.zx123.cn", mycity);
			str = str.replace("//www.zx123.cn/zb", mycity);
			str = str.replace("//www.zx123.cn", mycity);
			$(item).attr("href", str);
			}
		});
	}
	
	
	/**
	 * 加入收藏百科信息
	 */
	function shouchang_bk(){
		zzc();
		
		$(".show_xijie").append("<a href='javascript:;' style='font-size:12px;color:#777;' id='shouchang_btn' title='加入收藏'>加入收藏</a>");
		//加载收藏次数
		$.getJSON("//www.zx123.cn/tool/tool.inc.php?flag=107&callback=?&contentid="+contentid,function(data){
			if(data.status=='1'){
				var st = "收藏("+ data.shoucang +")次";
				$("#shouchang_btn").html(st);
			}
		});
		
		$("#shouchang_btn").bind('click dbclick',function(){
			$.getJSON("//www.zx123.cn/member/login_new.php?action=check&callback=?",function(data){
				if(data=='-1'){
					$(".LoginBut").click();
				}else{
					//判断是否需要验证
					$.getJSON("//www.zx123.cn/tool/tool.inc.php?flag=1003&callback=?",function(data){
						 if(data.status=='1'){
						 	$("#bk_yz_li").show();
						 }else{
						 	$("#bk_yz_li").hide();
						 }
					});
					
				    $(".big_div").css('height',$(document).height());
			        $(".div_border,.div_content").fadeIn(300);
			        $("#new_bk").attr("value",'');
			        $("#selected_kind_11").attr("checked","checked");
			        $.getJSON("//www.zx123.cn/tool/tool.inc.php?flag=102&callback=?",function(data){
			        	if(data.status=='1'){
			        		$("#bk_select .ad").remove();
			        		for(var i=0;i<data.data_bk.length;i++){
			        			var appendstr="<option value='"+ data.data_bk[i].id +"' class='ad'>"+ data.data_bk[i].title +"</option>"
			    				$("#bk_select").append(appendstr);
			        		}
			        	}
			        });
				}
			},'json');
		});
		
		//立即收藏
		$("#add_bk").bind("click dbclick",function(){
			var news_id=contentid;
			var title=$('.show_title h1').text();
			var href=window.location.href;
			var clump=0;
			
			var select_menu=$("#selected_kind_11");
			if(select_menu.attr('checked')=='checked'){
				clump = $("#bk_select").attr('value');
				if(clump == '0'){
					alert('请选择收藏分类');
				}else{
					$.getJSON("//www.zx123.cn/tool/tool.inc.php?flag=101&clump="+ clump +"&url="+ href +"&contentid="+ news_id +"&title="+encodeURI(title)+"&callback=?",function(data){
						if(data.status=="1"){
							alert("收藏成功！");
							$("#reback").click();
						}else{
							alert("收藏失败！");
						}
					});
				}
			}else{
				clump=-1;
				clump_name=$("#new_bk").attr("value");
				if(clump_name.length > 0){
					$.getJSON("//www.zx123.cn/tool/tool.inc.php?flag=101&clump="+ clump +"&url="+ href +"&contentid="+ news_id +"&title="+encodeURI(title)+"&clump_name="+ encodeURI(clump_name) +"&callback=?&yzm="+ $("#yzm_bk").val(),function(data){
						if(data.status=="1"){
							alert("收藏成功！");
							$("#reback").click();
						}
						if(data.status=='-1'){
							alert(data.message);
						}
					});
				}else{
					alert('请新建百科分类');
				}
			}
		});
		
		//取消操作
		$("#reback").bind("click dbclick",function(){
			$(".big_div").css('height','0px');
	   		$(".div_border,.div_content").hide();
		});
	}
	
	try{  
		if(contentid == '' || contentid == undefined){}else{
		 shouchang_bk();	
		}
    }catch(e){  
    console.log("%s",e.message); 
    }
    
    
    /**
     * 遮罩层
     */
    function zzc(){
    	var AA=[];
    	AA.push("<style type='text/css'>");
	    AA.push(".big_div{width:100%;height:0; position:absolute;top:0;left:0;z-index:1000000;background:#000000;margin:0;filter:Alpha(opacity=40);opacity:0.4;}");
	    AA.push(".div_border,.div_content{display:none;width:450px;height:260px;position:fixed;top:28%;left:32%;z-index:1000001;}");
	    AA.push(".div_border{background:#333;filter:Alpha(opacity=40);opacity:0.4;}");
	    AA.push(".div_content_list{width:430px;height:240px;background:#fff;margin:10px;}");
	    
	    AA.push(".div_content_list h3{height:45px;line-height:45px;background:#ccc;text-indent:20px;font-size:16px;margin:0 0 10px 0;}");
	    AA.push(".div_content_list p{margin:20px 0 0 20px;}");
	    AA.push("#tuji_select{height:30px;border:1px solid #ccc;color:#444;font-size:14px;line-height:30px;margin:0;outline:none;}");
	    AA.push("#new_bk,#tuji{width:200px;height:25px;font-size:14px;color#999;line-height:25px;text-indent:5px;border:1px solid #ccc;margin:0;outline:none;}");
	    AA.push("#tuji{width:140px;}");
	    AA.push(".this_button{padding:6px 15px;border:1px solid #f9f8f8;background:#ccc;border-radius:5px;outline:none;cursor:pointer;box-shadow:1px 1px 0px #999;margin:0 0 0 95px;}");
	    AA.push("#add_pic{background:#d84c29;color:#fff;}");
	    AA.push("#reback{color:#444;margin-left:20px;}");
	    AA.push("#this_message{color:red;margin:0;margin:0 0 0 73px;line-height:25px;}");
	    AA.push(".div_content_list a{padding:6px 12px;color:#444;background:#f9f8f8;border:1px solid #ccc;border-radius:5px;text-decoration:none;margin-left:10px;}");
	    AA.push("</style>");
	    
	    AA.push("<div class='big_div'></div>");
	    AA.push("<div class='div_border'></div>");
	    AA.push("<div class='div_content'>");
	   	AA.push("    <div class='div_content_list'>");
	    AA.push("          <h3>文章收藏</h3>");
	    AA.push("          <input type='hidden' id='pic_url' value='' /><input type='hidden' id='pic_content_sn' value='' /><input type='hidden' id='flag' value='2' />");
	    AA.push("             <p style='text-indent:24px;'><input type='radio' id='selected_kind_11' name='selected_kind' checked='checked' /><label for='selected_kind_11'>文章分类</label> <select id='bk_select' name='bk_select'>");
	    AA.push("            <option value='0'> 请选择分类</option>");
	    AA.push("             </select></p>");
	    AA.push("          <p style='text-indent:24px;'><input type='radio' id='selected_kind_12' name='selected_kind' /><label for='selected_kind_12'>新建分类</label> <input type='text' value='' id='new_bk' name='new_bk' class/></p>");
	    AA.push("          <p id='bk_yz_li' style='text-indent:55px;display:none;position:relative;margin-top:10px;'>验证码<input type='text' id='yzm_bk' name='yzm_bk' style='width:80px;margin:0 5px;height:25px;border:1px solid #ccc;'/><img src='//www.zx123.cn/tool/tool.inc.php?flag=1001' id='bk_yzm' style='margin:0;position:absolute;top:0;' /><a id='change_yz_bk' style='margin-left:55px'>换一张</a></p>");
	    AA.push("          <p id='this_message'></p>");
	    AA.push("          <p><input type='button' value='立即收藏' id='add_bk' class='this_button'/><input type='button' value='取消操作' class='this_button' id='reback'/></p>");
	   	AA.push("	</div>");
	    AA.push("</div>");
	    $("body").prepend(AA.join(""));
	    
    }
    
    
    //更换验证码
    function yzm_change(){
		var imghref=$("#bk_yzm").attr("src");
		$("#bk_yzm").attr("src",imghref);
	}
	$("#change_yz_bk,#bk_yzm").bind("click dbclick",function(){
		yzm_change();
	});
	
	//文章补丁
	$('#show_new .show_conter img').each(function(){
		if($(this).attr('src').indexOf('nopic_small.gif')!=-1){
			
		}else if($(this).attr('src').indexOf('adminweb')!=-1){
			
			$(this).attr('src',$(this).attr('src').substring(20,$(this).attr('src').length));
			
		}else{
			var src = $(this).attr('src');
		    var re= new RegExp("images","g");
		    var newstart=src.replace(re,"www");
		    $(this).attr('src',newstart);
		}
	});
	
	$('#right #erji_con_er .erji_list .erji_left img , #right #erji_con .erji_list .erji_left img').each(function(){
		if($(this).attr('src').indexOf('nopic_small.gif')!=-1){
			
		}else if($(this).attr('src').indexOf('adminweb')!=-1){
			
			$(this).attr('src',$(this).attr('src').substring(20,$(this).attr('src').length));
			
		}else{
			var src = $(this).attr('src');
		    var re= new RegExp("images","g");
		    var newstart=src.replace(re,"www");
		    $(this).attr('src',newstart);
		}
		
	});

	
