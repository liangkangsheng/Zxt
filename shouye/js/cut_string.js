$.fn.extend({ 
	displayPart:function () { 
		var displayLength = 100; 
		displayLength = this.attr("displayLength") || displayLength; 
		var text = ""; 
		    text = this.text(); 
		if (!text) return ""; 
		
		var result = ""; 
		var count = 0; 
		for (var i = 0; i < displayLength; i++) { 
			var _char = text.charAt(i); 
			if (count >= displayLength) break; 
			if (/[^x00-xff]/.test(_char)) count++; //Ë«×Ö½Ú×Ö·û£¬//[u4e00-u9fa5]ÖÐÎÄ 
			
			result += _char; 
			count++; 
		} 
		if (result.length < text.length) { 
			result += "..."; 
		} 
		this.text(result); 
	} 
}); 

$(function () {
	$(".displayPart").each(function(k,l){
	     $(l).displayPart();
	});
}); 