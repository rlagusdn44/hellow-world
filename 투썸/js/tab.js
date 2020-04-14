/* tab.js */

$(function(){
	$("ul.panel li:not("+$("ul.tab li a.selected").attr("href")+")").hide()
	$("ul.tab li a").click(function(){
		$("ul.tab li a").removeClass("selected");
		$(this).addClass("selected");
		$("ul.panel li").hide();
		$($(this).attr("href")).show();
		if( $(this).attr("href") == "#tab1" ) {
			$("#sel_addr").addClass("check");
		} else {
			$("#sel_addr").removeClass("check");
		}
		return false;
	});

	var realBirths = $("select[name='realBirth_yy'], select[name='realBirth_mm'], select[name='realBirth_dd']");
	realBirths.change(function(){
		var realBirth = "";
		realBirths.each(function(){
			if( $(this).val() != "" ){
				if( $(this).val().length < 2 )
					realBirth += "0"+$(this).val();
				else
					realBirth += $(this).val();
			}
		});

		if( realBirth.length != 8 ){
			realBirth = "";
		}

		$("input[name='realBirth']").val(realBirth);

	});
});