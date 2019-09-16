
	//加载更多评论信息
	$(".more_comment").click(function(){
		var currentPage = $(this).attr("currentPage");	//当前页
		var countPage = $(this).attr("countPage"); 		//总页数
		var htmlStr = "";
		if(currentPage < countPage){
			//执行ajax查询
			$.getJSON("//www.zx123.cn/block/get_comment_new.php?callflag=1&callback=?&contentid="+contentid+"&currentPage="+currentPage, function(data){
				for(var i in data){
					htmlStr += "<div class='usermsg_item'><span class='i_one'>评论人："+data[i].username+"</span><span class='i_two'>评论时间："+data[i].addtime+"</span><span class='i_three'>"+data[i].content+"</span><div style='clear:both;'></div>";
				}
				$(".more_comment").before(htmlStr);
			});
			currentPage ++;
			$(this).attr("currentPage",currentPage);
			if(currentPage == countPage){
				$(this).html("没有更多了");
			}
		}else if(currentPage >= countPage){
			$(this).html("没有更多了");
		}
	});
	//发布评论
	$("#normalComment_submit").click(function(){
		var userinputMsg = encodeURIComponent($("#userInputMsg").val());   //中文需要转码
		//var userinputMsg = encodeURI(encodeURI($("#userInputMsg").val()));   //中文需要转码
		if(userinputMsg == ""){
			alert("请输入评论内容");
			return false;
		}else{
			$.getJSON("//www.zx123.cn/block/save_comment_new.php?callback=?&contentid="+contentid+"&comment="+userinputMsg,function(jsondata){
					if(jsondata!=-1){
						$(".Ajax_UserMsg").prepend("<div class='temp_msg'>您的评论正在审核中：<br/>"+jsondata[0]['comment']+"</div>");
						$("#userInputMsg").val("");
//						+jsondata[0]['username']+"，"+jsondata[0]['comment']+"，"+jsondata[0]['time'];
						//alert("恭喜您发布已成功，我们会尽快为您审核，谢谢!");
					}else{
						alert("发布失败，请重试！");
					}
			},"json");
		}
	});