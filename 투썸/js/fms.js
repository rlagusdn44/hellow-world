/* fms.js */

$(function(){
	var bCheck=false;
	$("#fms > h2").click(function(){
		bCheck=!bCheck;

		if(bCheck){
			$("#fms > ul").addClass("fmsopen");
		}else{
			$("#fms > ul").removeClass("fmsopen");
		}
	});
});