$(".popup-form").click(function () {
	$(".popup-bg").fadeIn(1000);
	$("body").css("overflow", "hidden")
})

$(".js-popup-close").click(function () {
	$(".popup-bg").fadeOut(1000)
	$("body").css("overflow", "auto")
})


$('input[name="phone"]').mask('+7 (000) 000 00-00');

if ($('input[name="name"]').value !== '') {
	$('input[name="name"]').siblings().css({
			"font-size": "11px",
			"font-weight": "700",
			"top": "12px",
		})
	}