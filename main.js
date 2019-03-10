$(document).ready(function() {
	$("form").find("input[type='text']").each(function() {
		var tp = $(this).attr("watermark");
		$(this).attr('value',tp).css('color','gray');
	}).focusin(function() {
		var val = $(this).attr('watermark');
		if($(this).val() == val) {
			$(this).attr('value','').css('color','#303030');
		}
	}).focusout(function() {
		var val = $(this).attr('watermark');
		if($(this).val() == "") {
			$(this).attr('value', val).css('color','gray');
		}
	});

	$("form").submit(function() {
		$(this).find("input[type='text']").each(function() {
			var val = $(this).attr('watermark');
			if($(this).val() == val) {
				$(this).attr('value','');
			}
		})
	});
});