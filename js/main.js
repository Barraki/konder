$(".popup-form").click(function () {
	$(".popup-bg").fadeIn(1000);
	$("body").css("overflow", "hidden")
})

$(".js-popup-close").click(function () {
	$(".popup-bg").fadeOut(1000)
	$("body").css("overflow", "auto")
})


$('input[name="phone"]').mask('+7 (999) 999 99-99');

$('input[name="phone"]').click(function () {
	$(this).value() = "+7 ("
	console.log($('input[name="phone"]').value());
	
})

if ($('input[name="name"]').value !== '') {
	$('input[name="name"]').siblings().css({
			"font-size": "11px",
			"font-weight": "700",
			"top": "12px",
		})
	}


	//E-mail Ajax Send
$("#form1").submit(function () { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "../controllers/mail.php", //Change
		data: th.serialize()
	}).done(function () {
		$("#form1").css("display", "none");
		$(".succes-form").fadeIn("fast");
		setTimeout(function () {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	}).fail(function() {
		$("#form1").fadeOut("fast");
		$(".succes-form.text").html("Ошибка отправки, повторите поздней");
		$(".succes-form").fadeIn("fast");
  });
	return false;
});

//E-mail Ajax Send



jQuery(function($){
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
		return false;
	});
});
