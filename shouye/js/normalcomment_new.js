
	//���ظ���������Ϣ
	$(".more_comment").click(function(){
		var currentPage = $(this).attr("currentPage");	//��ǰҳ
		var countPage = $(this).attr("countPage"); 		//��ҳ��
		var htmlStr = "";
		if(currentPage < countPage){
			//ִ��ajax��ѯ
			$.getJSON("//www.zx123.cn/block/get_comment_new.php?callflag=1&callback=?&contentid="+contentid+"&currentPage="+currentPage, function(data){
				for(var i in data){
					htmlStr += "<div class='usermsg_item'><span class='i_one'>�����ˣ�"+data[i].username+"</span><span class='i_two'>����ʱ�䣺"+data[i].addtime+"</span><span class='i_three'>"+data[i].content+"</span><div style='clear:both;'></div>";
				}
				$(".more_comment").before(htmlStr);
			});
			currentPage ++;
			$(this).attr("currentPage",currentPage);
			if(currentPage == countPage){
				$(this).html("û�и�����");
			}
		}else if(currentPage >= countPage){
			$(this).html("û�и�����");
		}
	});
	//��������
	$("#normalComment_submit").click(function(){
		var userinputMsg = encodeURIComponent($("#userInputMsg").val());   //������Ҫת��
		//var userinputMsg = encodeURI(encodeURI($("#userInputMsg").val()));   //������Ҫת��
		if(userinputMsg == ""){
			alert("��������������");
			return false;
		}else{
			$.getJSON("//www.zx123.cn/block/save_comment_new.php?callback=?&contentid="+contentid+"&comment="+userinputMsg,function(jsondata){
					if(jsondata!=-1){
						$(".Ajax_UserMsg").prepend("<div class='temp_msg'>����������������У�<br/>"+jsondata[0]['comment']+"</div>");
						$("#userInputMsg").val("");
//						+jsondata[0]['username']+"��"+jsondata[0]['comment']+"��"+jsondata[0]['time'];
						//alert("��ϲ�������ѳɹ������ǻᾡ��Ϊ����ˣ�лл!");
					}else{
						alert("����ʧ�ܣ������ԣ�");
					}
			},"json");
		}
	});