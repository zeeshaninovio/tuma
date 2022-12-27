// <!-- Bootstrap CDN -->
<script src="jquery.min.js" type="text/javascript"></script>;
<script src="js/popper.min.js" type="text/javascript"></script>;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>;
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js"></script>;
// <!-- Bootstrap CDN -->
// <!-- boostrap js -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>;
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>;
// <!-- boostrap js -->
// <!-- Main Js -->
<script src="js/main.js"></script>;
// <!-- Main Js -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>;
<script src="slick/slick.min.js"></script>;


// <!-- Wow Js CDN -->
$(".part-1").click(() => {
	$(".off-canvas-header-wrapper").addClass("open");
});
$(".close-header").click(() => {
	$(".off-canvas-header-wrapper").removeClass("open");
});
// $(document).ready(function () {
// 	$(".menu-btn a").click(function () {
// 		$(".overlay").fadeToggle(200);
// 		$(this).toggleClass("btn-open").toggleClass("btn-close");
// 	});

// 	$(".overlay").on("click", function () {
// 		$(".overlay").fadeToggle(200);
// 		$(".menu-btn a").toggleClass("btn-open").toggleClass("btn-close");
// 	});

// 	$(".menu a").on("click", function () {
// 		$(".overlay").fadeToggle(200);
// 		$(".menu-btn a").toggleClass("btn-open").toggleClass("btn-close");
// 	});
// });
// $(document).ready(function() {
//     $("input[name=action]").change(function() {
//         var test = $(this).val();
//         $(".show-hide").hide();
//         $("#" + test).show();
//     });
// });

// select input
$(document).ready(function () {
	$("#slelectID").on("change", function () {
		if (this.value == "showthis") {
			$(".box").css("display", "block");
		} else {
			$(".box").hide();
		}
	});
});
// select
$("select#slelectstates11").on("click", function (event) {
	$(".maindropdown_dv11").toggleClass("transform");
});
// heading
window.onload = function () {
	animateRandom();
};

function animateRandom() {
	var a = document.getElementsByClassName("random");
	for (var i = 0; i < a.length; i++) {
		var $this = a[i];
		var letter = $this.innerHTML;
		letter = letter.trim();
		var delay = 70;
		var delayArray = new Array();
		var randLetter = new Array();
		for (j = 0; j < letter.length; j++) {
			while (1) {
				var random = getRandomInt(0, letter.length - 1);
				if (delayArray.indexOf(random) == -1) break;
			}
			delayArray[j] = random;
		}
		for (l = 0; l < delayArray.length; l++) {
			var str = "";
			var index = delayArray[l];
			if (letter[index] != " ") {
				str =
					'<span style="animation-delay:' +
					delay +
					"ms; -moz-animation-delay:" +
					delay +
					"ms; -webkit-animation-delay:" +
					delay +
					'ms; ">' +
					letter[index] +
					"</span>";
				randLetter[index] = str;
			} else randLetter[index] = letter[index];
			delay += 30;
		}
		randLetter = randLetter.join("");
		$this.innerHTML = randLetter;
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(".checkbox").change(function () {
	if ($(this).is(":checked")) {
		$(".form-group.check-wrapper").css("display", "block");
	} else {
		$(".form-group.check-wrapper").css("display", "none");
	}
});
// radio type
$("#r11").on("click", function () {
	$(this).parent().find("a").trigger("click");
});

$("#r12").on("click", function () {
	$(this).parent().find("a").trigger("click");
});
$("#r13").on("click", function () {
	$(this).parent().find("a").trigger("click");
});
$("#r14").on("click", function () {
	$(this).parent().find("a").trigger("click");
});
$(".card-link").click(function (e) {
	var menuItem = $(this);

	if (menuItem.attr("aria-expanded") === "false") {
		$("button.default").css("display", "none");
	} else if (menuItem.attr("aria-expanded") === "true") {
		$(".btndefault").css("display", "block");
	}
});
// togglebtn
$(document).ready(function () {
	$(".hideshowbtn").click(function () {
		$(".form-wrapper").toggle();
	});
});
$(document).ready(function () {
	$(".inputtexthide").click(function () {
		$(".form-group-btn").toggle();
	});
});
// pagination
$(document).ready(function () {
	$(".next").click(function () {
		$(".pagination").find(".pageNumber.active").next().addClass("active");
		$(".pagination").find(".pageNumber.active").prev().removeClass("active");
	});
	$(".prev").click(function () {
		$(".pagination").find(".pageNumber.active").prev().addClass("active");
		$(".pagination").find(".pageNumber.active").next().removeClass("active");
	});
});

const targetDiv = document.getElementById("newpost");
const targetDiv1 = document.getElementById("newpost1");
const btn = document.getElementById("button");
btn.onclick = function () {
	if (targetDiv.style.display !== "none") {
		targetDiv.style.display = "block";
		targetDiv1.style.display = "none";
	} else {
		targetDiv.style.display = "none";
	}
};
// password
var myInput = document.getElementById("password"),
	myIcon = document.getElementById("icon");
myInput.onfocus = function () {
	myIcon.style.right = "0px";
};
myInput.onblur = function () {
	myIcon.style.right = "0px";
};
myIcon.onclick = function () {
	if (myIcon.classList.contains("fa-eye")) {
		this.classList.toggle("fa-eye-slash");
		this.classList.toggle("fa-eye");
		myInput.setAttribute("type", "text");
	} else {
		myInput.setAttribute("type", "password");
		this.classList.toggle("fa-eye");
		this.classList.toggle("fa-eye-slash");
	}
};
// password
var myInput3 = document.getElementById("password3"),
	myIcon3 = document.getElementById("icon3");
myInput3.onfocus = function () {
	myIcon3.style.right = "0px";
};
myInput3.onblur = function () {
	myIcon3.style.right = "0px";
};
myIcon3.onclick = function () {
	if (myIcon3.classList.contains("fa-eye")) {
		this.classList.toggle("fa-eye-slash");
		this.classList.toggle("fa-eye");
		myInput3.setAttribute("type", "text");
	} else {
		myInput3.setAttribute("type", "password");
		this.classList.toggle("fa-eye");
		this.classList.toggle("fa-eye-slash");
	}
};

/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches(".dropbtn")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

$(".category-card").slick({
	dots: true,
	arrows: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

$(".photo").slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
// password
var myInput4 = document.getElementById("password4"),
	myIcon4 = document.getElementById("icon4");
myInput4.onfocus = function () {
	myIcon4.style.right = "0px";
};
myInput4.onblur = function () {
	myIcon4.style.right = "0px";
};
myIcon4.onclick = function () {
	if (myIcon4.classList.contains("fa-eye")) {
		this.classList.toggle("fa-eye-slash");
		this.classList.toggle("fa-eye");
		myInput4.setAttribute("type", "text");
	} else {
		myInput4.setAttribute("type", "password");
		this.classList.toggle("fa-eye");
		this.classList.toggle("fa-eye-slash");
	}
};
// password
var myInput5 = document.getElementById("password5"),
	myIcon5 = document.getElementById("icon5");
myInput5.onfocus = function () {
	myIcon5.style.right = "0px";
};
myInput5.onblur = function () {
	myIcon5.style.right = "0px";
};
myIcon5.onclick = function () {
	if (myIcon5.classList.contains("fa-eye")) {
		this.classList.toggle("fa-eye-slash");
		this.classList.toggle("fa-eye");
		myInput5.setAttribute("type", "text");
	} else {
		myInput5.setAttribute("type", "password");
		this.classList.toggle("fa-eye");
		this.classList.toggle("fa-eye-slash");
	}
};
// password
var myInput6 = document.getElementById("password6"),
	myIcon6 = document.getElementById("icon6");
myInput6.onfocus = function () {
	myIcon6.style.right = "0px";
};
myInput6.onblur = function () {
	myIcon6.style.right = "0px";
};
myIcon6.onclick = function () {
	if (myIcon6.classList.contains("fa-eye")) {
		this.classList.toggle("fa-eye-slash");
		this.classList.toggle("fa-eye");
		myInput6.setAttribute("type", "text");
	} else {
		myInput6.setAttribute("type", "password");
		this.classList.toggle("fa-eye");
		this.classList.toggle("fa-eye-slash");
	}
};

// Card's slider

$(".slider-for").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	asNavFor: ".slider-for",
	dots: true,
	centerMode: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
	],
});

function ratingStar(star) {
	star.click(function () {
		var stars = $(".ratingW").find("li");
		stars.removeClass("on");
		var thisIndex = $(this).parents("li").index();
		for (var i = 0; i <= thisIndex; i++) {
			stars.eq(i).addClass("on");
		}
		putScoreNow(thisIndex + 1);
	});
}

function putScoreNow(i) {
	$("#ratingField").val(i);
	ratingToWord(i);
}

$(function () {
	if ($(".ratingW").length > 0) {
		ratingStar($(".ratingW li a"));
	}
});

function ratingToWord(rating) {
	if (rating == 1) {
		$("#ratingTxt").val("Bad");
	}

	if (rating == 2) {
		$("#ratingTxt").val("Poor");
	}

	if (rating == 3) {
		$("#ratingTxt").val("Fair");
	}

	if (rating == 4) {
		$("#ratingTxt").val("Good");
	}

	if (rating == 5) {
		$("#ratingTxt").val("Excellent");
	}
}

$(".product-cart-details").slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
{
	/* // // slick slider */
}
{
	/* // $('.slider-main').slick({
//     slidesToShow: 1,
//     arrows: false,
//     asNavFor: '.slider-nav',
//     vertical: true,
//     autoplay: false,
//     verticalSwiping: true,
//     centerMode: true
// });

// $('.slider-nav').slick({
//     slidesToShow: 4,
//     asNavFor: '.slider-main',
//     vertical: true,
//     focusOnSelect: true,
//     autoplay: false,
//     centerMode: true
// });
// // slick slider */
}
// script
var playbtn = document.getElementById("buton");
// Initialize WaveSurfer
var wavesurfer = WaveSurfer.create({
	container: "#waveform",
	barWidth: 2,
	height: 30,
	responsive: true,
	hideScrollbar: true,
	fillParent: false,
	minPxPerSec: 1.5,
	fillParent: false,
	minPxPerSec: 1,
	loopSelection: true,
});

// Once the user loads a file in the fileinput, the file should be loaded into waveform
$("#fileinput").on("change", function () {
	var file = this.files[0];

	if (file) {
		var reader = new FileReader();

		reader.onload = function (evt) {
			// Create a Blob providing as first argument a typed array with the file buffer
			var blob = new window.Blob([new Uint8Array(evt.target.result)]);

			// Load the blob into Wavesurfer
			wavesurfer.loadBlob(blob);
		};

		reader.onerror = function (evt) {
			console.error("An error ocurred reading the file: ", evt);
		};

		// Read File as an ArrayBuffer
		reader.readAsArrayBuffer(file);
	}
});

playbtn.addEventListener("click", function (e) {
	wavesurfer.playPause();
});
wavesurfer.on("play", function (e) {
	playbtn.classList.remove("fa-play");
	playbtn.classList.add("fa-pause");
});

//change pause button to play on pause
wavesurfer.on("pause", function (e) {
	playbtn.classList.add("fa-play");
	playbtn.classList.remove("fa-pause");
});
wavesurfer.on("ready", updateTimer);
wavesurfer.on("audioprocess", updateTimer);

// Need to watch for seek in addition to audioprocess as audioprocess doesn't fire
// if the audio is paused.
wavesurfer.on("seek", updateTimer);

function updateTimer() {
	var formattedTime = secondsToTimestamp(wavesurfer.getCurrentTime());
	$("#waveform-time-indicator .time").text(formattedTime);
}

function secondsToTimestamp(seconds) {
	seconds = Math.floor(seconds);
	var h = Math.floor(seconds / 3600);
	var m = Math.floor((seconds - h * 3600) / 60);
	var s = seconds - h - m;

	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;
	return h + ":" + m + ":" + s;
}

$("#fileinput").change(function () {
	var a = $("#fileinput").val().toString().split("\\");
	$("#fakeInput").val(a[a.length - 1]);
});

function getOption() {
	selectElement = document.querySelector("#selects1");
	output = selectElement.value;
	document.querySelector(".output").textContent = output;
}
function update() {
	// Get the select and input elements
	var select = document.getElementById("selects1");
	var input = document.getElementById("output");
	var spantext = document.getElementById("messagetxt");

	spantext.textContent = "You can edit the Text";

	// Get the index of the selected option
	var selectedIndex = select.selectedIndex;

	// Get the selected option element
	var selectedOption = select.options[selectedIndex];

	// Get the value and text of the selected option
	var optionValue = selectedOption.value;
	var optionText = selectedOption.textContent;

	// Set the value of the input element to the text of the selected option
	input.value = optionText;

	// Style the input element if it has a value
	if (input.value) {
		input.style.backgroundColor = "#fff";
		input.style.display = "block";
	}
}
update();


$('.nav-toggle-wrapper button').click(() => {
	$('.off-canvas-header-wrapper').addClass('open');
})
$('.off-canvas-header-wrapper button svg').click(function() {
	$('.off-canvas-header-wrapper').removeClass('open')
})

$('.navbar-item-wrapper.drop-item').hide();
$('.off-canvas-header-wrapper a.dropdown').click(function() {
	$('.navbar-item-wrapper.drop-item').toggle();
})