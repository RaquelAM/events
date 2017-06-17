//Slider home
$(document).ready(function(){
	return $("#slider").slick({
		accessibility:true,
		arrows:false,
		infinite:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		dots:true,
		autoplay:true,
		autoplaySpeed:4000,
		fade: true,
		cssEase: 'linear'
	});
})
$(document).ready(function(){
	setTimeout(function(){
		$('#slider_cover').animate({
			opacity: "0"
		},2000);
		setTimeout(function(){
			$('#slider_cover').fadeOut()
		},2100)
		$('#cont_header_home > img').animate({
			opacity: "1"
		},2000);
		$('.msj_slider').animate({
			opacity: ".8"
		},2000);
	}, 2000);
})
//Autoscroll
function autoScroll(name) {
  var mov;
   mov = document.getElementById(name).offsetTop - 80 ;
  $("html, body").animate({ scrollTop: mov }, {duration: 1000, easing: 'easeInOutCirc'});
}
//Secciones de Service
$('.cont_op').click(function(){
	if(this.id == "menu"){
		$('.op_hover').removeClass('hiddenI');
		$('#menu .op_hover').addClass('hiddenI');
		$('.info_op').stop().fadeOut(500);
		setTimeout(function(){
			$('#menu_info').stop().fadeIn(500);
		},500);
	}else{
		if(this.id == "entre"){
			$('.op_hover').removeClass('hiddenI');
			$('#entre .op_hover').addClass('hiddenI');
			$('.info_op').stop().fadeOut(500);
			setTimeout(function(){
				$('#entre_info').stop().fadeIn(500);
			},500);
		}else{
			if(this.id == "floral"){
				$('.op_hover').removeClass('hiddenI');
				$('#floral .op_hover').addClass('hiddenI');
				$('.info_op').stop().fadeOut(500);
				setTimeout(function(){
					$('#floral_info').stop().fadeIn(500);
				},500);
			}else{
				if(this.id == "planning"){
					$('.op_hover').removeClass('hiddenI');
					$('#planning .op_hover').addClass('hiddenI');
					$('.info_op').stop().fadeOut(500);
					setTimeout(function(){
						$('#planning_info').stop().fadeIn(500);
					},500);
				}else{
					$('.op_hover').removeClass('hiddenI');
					$('#properties .op_hover').addClass('hiddenI');
					$('.info_op').stop().fadeOut(500);
					setTimeout(function(){
						$('#properties_info').stop().fadeIn(500);
					},500);
				}
			}
		}
	}
})

//Secciones de San Miguel de Allende
// $('.op_hoverSM').removeClass('hiddenI');
// $('#allende1 .op_hoverSM').addClass('hiddenI');
// $('.info_opSM').stop().fadeOut(500);
// setTimeout(function(){
// 	$('#allende1_info').stop().fadeIn(500);
// },500);

$('.cont_opSM').click(function(){
		if(this.id == "allende2"){
			$('.op_hoverSM').removeClass('hiddenI');
			$('#allende2 .op_hoverSM').addClass('hiddenI');
			$('.info_opSM').fadeOut(500);
			setTimeout(function(){
				$('#allende2_info').fadeIn(500);
			},500);
		}else{
			if(this.id == "allende3"){
				$('.op_hoverSM').removeClass('hiddenI');
				$('#allende3 .op_hoverSM').addClass('hiddenI');
				$('.info_opSM').fadeOut(500);
				setTimeout(function(){
					$('#allende3_info').fadeIn(500);
				},500);
			}else{
				if(this.id =="allende4"){
					$('.op_hoverSM').removeClass('hiddenI');
					$('#allende4 .op_hoverSM').addClass('hiddenI');
					$('.info_opSM').fadeOut(500);
					setTimeout(function(){
						$('#allende4_info').fadeIn(500);
					},500);
				}else{
					if (this.id =="allende5") {
					$('.op_hoverSM').removeClass('hiddenI');
					$('#allende5 .op_hoverSM').addClass('hiddenI');
					$('.info_opSM').fadeOut(500);
					setTimeout(function(){
						$('#allende5_info').fadeIn(500);
					},500);
				}else{
					$('.op_hoverSM').removeClass('hiddenI');
					$('#allende1 .op_hoverSM').addClass('hiddenI');
					$('.info_opSM').fadeOut(500);
					setTimeout(function(){
						$('#allende1_info').fadeIn(500);
					},500);
				}
				}
			}
		}
})
//Segundo slider
$(document).ready(function(){
	return $("#slider2").slick({
		accessibility:true,
		arrows:false,
		infinite:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		dots:true,
		autoplay:true,
		autoplaySpeed:5000
	});
})
//Para version responsiva sliders galeria, SMA y services
$(document).ready(function(){
	width = $(window).width();
	if( width < 500){
		  $('#slider_services').bxSlider({
		    slideWidth: 230,
		    minSlides: 1,
		    maxSlides: 1,
		    slideMargin: 10
		  });
		  $("#slider_galeria").slick({
			accessibility:true,
			arrows:true,
			infinite:true,
			centerMode: false,
			slidesToShow: 1,
			slidesToScroll:1,
			speed:1000,
			dots:false,
			autoplay:true,
			autoplaySpeed:5000,
			appendArrows:"#arrows",
			prevArrow:'<img src="img/back.png" class="left">',
			nextArrow:'<img src="img/next.png" class="right">'
		});
		}else{
			if (width < 800) {
			$('#slider_services').bxSlider({
			    slideWidth: 230,
			    minSlides: 2,
			    maxSlides: 2,
			    slideMargin: 10
			  });
				$("#slider_galeria").slick({
					accessibility:true,
					arrows:true,
					infinite:true,
					centerMode: true,
					centerPadding: '150px',
					slidesToShow: 1,
					slidesToScroll:1,
					speed:1000,
					dots:false,
					autoplay:true,
					autoplaySpeed:5000,
					appendArrows:"#arrows",
					prevArrow:'<img src="img/back.png" class="left">',
					nextArrow:'<img src="img/next.png" class="right">'
				});
		}else{
			$('#slider_services').bxSlider({
			    slideWidth: 230,
			    minSlides: 5,
			    maxSlides: 5,
			    slideMargin: 10
			  });
			$("#slider_galeria").slick({
				accessibility:true,
				arrows:true,
				infinite:true,
				centerMode: true,
				centerPadding: '350px',
				slidesToShow: 1,
				slidesToScroll:1,
				speed:1000,
				dots:false,
				autoplay:true,
				autoplaySpeed:5000,
				appendArrows:"#arrows",
				prevArrow:'<img src="img/back.png" class="left">',
				nextArrow:'<img src="img/next.png" class="right">'
			});
		}
		}

});
$(document).ready(function(){
	width = $(window).width();
	if( width < 500){
		  $('#slider_allende').bxSlider({
		    slideWidth: 220,
		    minSlides: 1,
		    maxSlides: 1,
		    slideMargin: 10
		  });
		}else{
			if (width < 800) {
				$('#slider_allende').bxSlider({
				    slideWidth: 220,
				    minSlides: 2,
				    maxSlides: 2,
				    slideMargin: 10
				  });
			}else{
			$('#slider_allende').bxSlider({
			    slideWidth: 220,
			    minSlides: 4,
			    maxSlides: 4,
			    slideMargin: 10
			  });
		}
		}
});
//Fixed menu
$(window).scroll(function(){
	var MenuSticky = $('.top').offset().top - 90;
	if ($(window).scrollTop() >= MenuSticky) {
		$('header').addClass('FixedMenu');
	}else if($(window).scrollTop() < $('.top').offset().top){
		$('header').removeClass('FixedMenu');
	}
})


//Lightbox galeria de home
$('#slider_galeria > div').on('click', function(){
	var src = jQuery(this).find('img').attr('src')
	$('#galery').addClass('active')
	$('#galery > img').attr('src', src)
})
$('.close').on('click', function(){
	$('#galery').removeClass('active')
})
//Lightbox galeria del interior
$('.img_gal').on('click', function(){
	var data = $(this).attr('data-foto')
	var src = $(this).attr('src')
	$('#galery').addClass('active')
	$('#foto').attr('src', src)
	$('#foto').attr('data-foto', data)
})
$('.closeG').on('click', function(){
	$('#galery').removeClass('active')
})
$('.nextG').on('click', function(){
	var data = parseInt($('#foto').attr('data-foto'));
	var dataN = data + 1;
	if (dataN < 40) {
		var new_img = $( "img[data-foto=" + dataN +"]" ).attr('src');
		$('#foto').attr('src', new_img);
		$('#foto').attr('data-foto', dataN);
	} 
})
$('.backG').on('click', function(){
	var data = parseInt($('#foto').attr('data-foto'));
	var dataN = data - 1;
	
	if (dataN > 0) {
		var new_img = $( "img[data-foto=" + dataN +"]" ).attr('src');
		$('#foto').attr('src', new_img);
		$('#foto').attr('data-foto', dataN);
		var width = $('#foto').width()
	};
})
// $('.close').on('click', function(){
// 	$('.lightbox').removeClass('active')
// })
//Lightbox terms
$('#terms_link').on('click', function(){
	$('#terms').addClass('active')
})
$('.close2').on('click', function(){
	$('#terms').removeClass('active')
})
//Lightbox policy
$('#policy_link').on('click', function(){
	$('#policy').addClass('active')
})
$('.close2').on('click', function(){
	$('#policy').removeClass('active')
})
//Asignar variable para interior Allende
function SMAgoTo (variable) {
	Cookies.set('seccion', variable);
}

// Change between wedding events & other events
$('.WeddingsEvents--btn-weddings').click(function(){
	$('.WeddingsEvents--btn-weddings').addClass('active')
	$('.WeddingsEvents--btn-others').removeClass('active')
	$('.flex--WeddingInfo--OtherEvents').hide();
	$('.flex--WeddingInfo--WeddingEvents').show()
});

$('.WeddingsEvents--btn-others').click(function(){
	$('.WeddingsEvents--btn-others').addClass('active')
	$('.WeddingsEvents--btn-weddings').removeClass('active')
	$('.flex--WeddingInfo--OtherEvents').show();
	$('.flex--WeddingInfo--WeddingEvents').hide()
});

//Flujo Formulario contacto
//step1
$('#event').on('click', function() {
	$('#step1').fadeOut(1000);
	setTimeout(function () {
		$('#step2').fadeIn(1000);
	},1000)
	$('.back6').removeClass('last');
});
$('#other').on('click', function() {
	$('#step1').fadeOut(1000);
	setTimeout(function () {
		$('#step6').fadeIn(1000);
	},1000)
	$('.back6').addClass('last');
});
//step2
$('.input2').on('click', function() {
	$('.input2_txt').attr("disabled");
	$('.input2_txt').removeClass('error');
	$('#step2').fadeOut(1000);
	setTimeout(function () {
		$('#step3').fadeIn(1000);
	},1000)
});
$('#otherType').on('click', function() {
	$('.input2_txt').removeAttr("disabled");
	$('.next').addClass('activeNext');
});
$('.next').on('click',function () {
	var act = $(this).hasClass('activeNext')
	if (act) {
		var other = $('.input2_txt').val();
		if (other != "") {
			$('.input2_txt').removeClass('error');
			$('#step2').fadeOut(1000);
			setTimeout(function () {
				$('#step3').fadeIn(1000);
			},1000)
		}else{
			$('.input2_txt').addClass('error');
		};
	};
})
//step3
$('.input3').on('click', function() {
	$('#step3').fadeOut(1000);
	setTimeout(function () {
		$('#step4').fadeIn(1000);
	},1000)
	
});
//step4
$('.input4').on('click', function() {
	$('#step4').fadeOut(1000);
	setTimeout(function () {
		$('#step5').fadeIn(1000);
	},1000)
});
//step5
$('.nextStep').on('click', function(){
	$('#step5').fadeOut(1000);
	setTimeout(function () {
		$('#step6').fadeIn(1000);
	},1000)
})
$('#notSure').on('click', function() {
	$('#step5').fadeOut(1000);
	setTimeout(function () {
		$('#step6').fadeIn(1000);
	},1000)
});
//back
function back (step,back) {
	var st = $('.back6').hasClass('last')
	$('.thanks').fadeOut();
	if (st) {
		$(step).fadeOut(1000);
		setTimeout(function () {
			$('#step1').fadeIn(1000);
		},1000)
	}else{
		$(step).fadeOut(1000);
		setTimeout(function () {
			$(back).fadeIn(1000);
		},1000)
	};
}
//Send
$('#send').on('click', function(){
	var mail = $('#mail_input').val();
		add = $('#add').val();
	var val_mail = false;
		val_add = false;
	var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	if(mail.length > 5 && mail.length < 50 && expresion.test(mail)){
		var val_mail = true;
		$('#mail_input').removeClass('error');
	}else{
		$('#mail_input').addClass('error');
		var val_mail = false;
	}
	if(add.length != ' '){
		var val_add = true;
		$('#add').removeClass('error');
	}else{
		$('#add').addClass('error');
		var val_add = false;
	}
	if (val_mail && val_add) {
		$('#step6').fadeOut(1000);
		$('.thanks').fadeIn(1000);	
		//Capturando la informacion
		//subject
		var subject = $('input[name="subject"]:checked').attr('id');
		var val_subject = $('label[for=' + subject + ']').text();
		//Type of event
		var type = $('input[name="type"]:checked').attr('id');
		switch (type) {
			case 'wedd':
				var val_type = $('label[for=' + type + ']').text();
				break;
			case 'vows':
				var val_type = $('label[for=' + type + ']').text();
				break;
			case 'otherType':
				var val_type = $('#otherType_txt')[0].value;
				break;
		}
		//number of guests
		var guests = $('input[name="guests"]:checked').attr('id');
		var val_guests = $('label[for=' + guests + ']').text();
		//visit SMA
		var SMA = $('input[name="SMA"]:checked').attr('id');
		var val_SMA = $('label[for=' + SMA + ']').text();
		//date
		if ($('input[name="date"]:checked').val() == "on") {
			var date = $('input[name="date"]:checked').attr('id');
			var val_date = $('label[for=' + date + ']').text();
		}else{
			var day = $('.day').val();
			var month = $('.month').val();
			var year = $('.year').val();
			var val_date = day + "/" + month + "/" + year;
		};
		//additional informaton
		var val_add = $('#add').val();
		//mail
		var val_mail = $('#mail_input')[0].value;
		info = {
			subject: val_subject,
			type: val_type,
			guests: val_guests,
			SMA: val_SMA,
			date: val_date,
			add: val_add,
			mail: val_mail
		}
		$('#mail_input').val('');
		$('#add').val('');
		console.log(info)
	};
})

