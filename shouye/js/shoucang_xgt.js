    var css_arr=[];
    css_arr.push('<style type="text/css">');
	css_arr.push('    .big_div{ display:none; width:100%;position:absolute;top:0;left:0;z-index:1000000;background:#000000;margin:0;filter:Alpha(opacity=30);opacity:0.3;}');
	css_arr.push('    .div_border,.div_content{display:none;width:450px;height:260px;position:fixed;top:28%;left:32%;z-index:1000001;}');
	css_arr.push('    .div_border{background:#333;filter:Alpha(opacity=50);opacity:0.5;}');
	css_arr.push('    .div_content_list{width:430px;height:240px;background:#fff;margin:10px;}');
	    
	css_arr.push('    .div_content_list h3{width:430px;height:45px;display:inline-block;line-height:45px;background:#ccc;text-indent:20px;font-size:16px;margin:0 0 10px 0;width:100%;}');
	css_arr.push('    .div_content_list p{margin:20px 0 0 20px;}');
	css_arr.push('    #tuji_select{height:30px;border:1px solid #ccc;color:#444;font-size:14px;line-height:30px;margin:0;outline:none;}');
	css_arr.push('    #tuji_title,#tuji,#yzm{width:310px;height:25px;font-size:14px;color#999;line-height:25px;text-indent:5px;border:1px solid #ccc;margin:0;outline:none;}');
	css_arr.push('    #tuji{width:140px;}');
	css_arr.push('    #yzm{width:80px;}');
	css_arr.push('    .this_button{padding:6px 15px;border:1px solid #f9f8f8;background:#ccc;border-radius:5px;outline:none;cursor:pointer;box-shadow:1px 1px 0px #999;margin:0 0 0 50px;}');
	css_arr.push('    #add_pic{background:#d84c29;color:#fff;}');
	css_arr.push('    #reback{color:#444;margin-left:20px;}');
	css_arr.push('    #this_message{color:red;margin:0;margin:0 0 0 73px;line-height:25px;}');
	css_arr.push('    .div_content_list a{padding:6px 12px;color:#444;background:#f9f8f8;border:1px solid #ccc;border-radius:5px;text-decoration:none;margin-left:10px;}');
	css_arr.push('    #check_imgs{position:absolute;top:0px;left:140px;}');
	css_arr.push('    #change_yz{margin-left:70px;}');
	css_arr.push('</style>');
	
	var div_arrs=[];
	div_arrs.push('<div class="big_div"></div>');
    div_arrs.push('<div class="div_border"></div>');
    div_arrs.push('<div class="div_content">');
   	div_arrs.push('    <div class="div_content_list">');
    div_arrs.push('          <h3>图片收藏</h3>');
    div_arrs.push('          <input type="hidden" id="pic_url" value="" /><input type="hidden" id="pic_content_sn" value="" /><input type="hidden" id="flag" value="2" />');
    div_arrs.push('             <p style="text-indent:24px;">图集 <select id="tuji_select" name="tuji_select" style="width:auto">');
    div_arrs.push('            <option value="0"> 请选择图集</option>');
                
    div_arrs.push('             </select><a href="javascript:void(0);" id="add_tuji">添加图集</a></p>');
    div_arrs.push('          <p style="text-indent:24px;display:none;">图集 <input type="text" value="" id="tuji" name="tuji"/><a href="javascript:void(0);" id="select_tuji">选择图集</a></p>');
    div_arrs.push('          <p>图片标题 <input type="text" value="" id="tuji_title" name="tuji_title"/></p>');
    div_arrs.push('          <p id="yz_p" style="text-indent:12px;margin-top:10px;position:relative;display:none;">验证码 <input type="text" value="" id="yzm" name="yzm"/><img src="http://www.zx123.cn/tool/tool.inc.php?flag=1001" id="check_imgs" /><a id="change_yz">换一张</a></p>');
    div_arrs.push('          <p style="margin-top:10px;"><input type="button" value="立即收藏" id="add_pic" class="this_button"/><input type="button" value="取消操作" class="this_button" id="reback"/></p>');
   	div_arrs.push('	</div>');
    div_arrs.push('</div>');
    
    
    
        
    
	    function yzm_changes(){ 
	    	var imghref=$("#check_imgs").attr("src");
	    	$("#check_imgs").attr("src",imghref + "&ran="+Math.random());
	    }
	    
	    //填充数据
	    function set_select(imgurl,title,contentids){
	    	$("#pic_url").attr("value",imgurl.replace("http://images.zx123.cn/",''));
	    	$("#tuji_title").attr("value",title);
	    	$("#pic_content_sn").attr("value",contentids);
	    }
	    
	     /**
	     * 获取图集分类信息
	     */
	    function get_kind(){
	    	$.getJSON("http://www.zx123.cn/tool/tool.inc.php?flag=1&callback=?",function(data){
	    		 if(data.status=="1"){
	    		 	$("#tuji_select .ad").remove();
	        		for(var i=0;i<data.res.length;i++){
	        			var appendstr="<option value='"+ data.res[i].id +"' class='ad'>"+ data.res[i].title +"</option>"
	    				$("#tuji_select").append(appendstr);
	        		}
	    		 }
	    	});
	    }
	    
	    
	    function open_choucang(login_kind){
	    	//添加图片收藏
	    	get_kind();
	    	
	    	$.getJSON("http://www.zx123.cn/member/login_new.php?action=check&callback=?",function(data){
				if(data=='-1'){
					if(login_kind==1){
						$(".LoginBut").click();
					}else{
						location.href="http://www.zx123.cn/member/login.php";
					}
				}else{
					$.getJSON("http://www.zx123.cn/tool/tool.inc.php?flag=1002&callback=?",function(data){
						 if(data.status=='1'){
						 	$("#yz_p").show();
						 }else{
						 	$("#yz_p").hide();
						 }
					});
				   $('.big_div').css("height",$(document).height());
				   $('.big_div').show();
		    	   $(".div_border,.div_content").fadeIn(200);
				}
			},'json');
	    }
	    
	    
	    /**
	     * 添加用户收藏
	     */
	    function add_choucang(){
	    	$("body").append(css_arr.join(""));
	    	$("body").append(div_arrs.join(""));
	    	
	    	
	    	//更改验证码
	    	$("#check_imgs,#change_yz").bind("click dbclick",function(){
	    		yzm_changes();
	    	});
	    
	    	
		    $("#reback").click(function(){
		    	$(".big_div").hide();
		    	$(".div_border,.div_content").hide();
		    	$("#select_tuji").click();
		    });
		    
		    $("#add_tuji").bind("click dbclick",function(){
		    	$(this).parent().hide();
		    	$(".div_content_list p").eq(1).show();
		    });
		    $("#select_tuji").bind("click dbclick",function(){
		    	$("#tuji").val("");
		    	$(this).parent().hide();
		    	$(".div_content_list p").eq(0).show();
		    });
		    
		    $("#add_pic").bind("click dbclick",function(){
		    	if($("#tuji_select").val() == 0 && $("#tuji").val().length < 1){
		    		alert('请选择图集');
		    	    return false;
		    	}
		    	
		    	$.post("http://www.zx123.cn/tool/tool.inc.php",
		    	{
		    		flag : $("#flag").val(),
		    		pic_url : $("#pic_url").val(),
		    		pic_title : $("#tuji_title").val(),
		    		content_id : $("#pic_content_sn").val(),
		    		clump : $("#tuji_select").val(),
		    		clump_name : $("#tuji").val(),
		    		yzm : $("#yzm").val()
		    	},function(data){
		    		var result = eval("("+ data +")");
		    		if(result.status == '1' || result.status == '2'){
		    			if(result.status == '2'){
		    				//var appendstr="<option value='"+ result.clump_id +"'>"+ result.clump +"</option>";
		    				//$("#tuji_select").append(appendstr);
		    			}
		    			yzm_changes();
		    			$("#yzm").val("");
		    			alert('图片收藏成功');
		    			$("#reback").click();
		    		}
		    		if(result.status == '6'){
		    			alert(result.message);
		    			//$("#reback").click();
		    		}
		    		if(result.status == '-1'){
		    			yzm_changes();
		    			$("#yzm").val("");
		    			alert('收藏失败');
		    			$("#reback").click();
		    		}
		    		if(result.status == '-100'){
		    			yzm_changes();
		    			alert('请登录用户名');
		    			$("#reback").click();
		    		}
		    		if(result.status == '1001'){
		    			yzm_changes();
		    			alert('验证码不正确');
		    		}
		    	});
		    });
	    }
	    
	   
	    
  