let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();
let navShow = $('.nav');

$(window).on ("scroll load resize", function (){
	introH = intro.innerHeight();
	scrollPos = $(this).scrollTop();

	if (scrollPos > introH ) {
		header.addClass("fixed");
	} else {
		header.removeClass("fixed");
	}
});

// Burger menu active ================================
	const menuToggle = document. querySelector ('#menu-togle');
	let nav = $('.menu-icon');

	menuToggle. onclick = function (event) {
		event.preventDefault();
		nav.toggleClass('menu-icon-active');
		navShow.toggleClass('show');
	};

$("[data-scroll").on ("click", function (event){
	event.preventDefault();

	let elementId = $(this).data('scroll');
	let elementOffset = $(elementId).offset().top;
	
	navShow.removeClass('show');
	nav.removeClass('menu-icon-active');
	
	$("html, body").animate({
		scrollTop:elementOffset + 10
	},700);
});

// PopUp Window===================

	const popUpToggle = document.querySelectorAll(".shop-btn");
	
	let popUp = $(".popup");

		for (var i = 0; i < popUpToggle.length; i++) {

			popUpToggle[i].addEventListener("click", function(event){
			event.preventDefault();
			popUp.addClass("popup-show");
		}); 
	}
	closeToggle.addEventListener("click", function(event){
		event.preventDefault();
		popUp.removeClass ("popup-show");
	}); 
		
// Close pop-up windows=================	

	closePopUp. onclick = function (event) {
		event.preventDefault();
		popUp.removeClass ("popup-show");
	}

//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});