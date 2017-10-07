
// New Refactored Code:

$(document).ready(function() {

$(document).ready(function() {
	$("p").hide();
});

$(".read-more").click(function(event) {
	event.preventDefault();
});

$(".read-less").click(function(event) {
	event.preventDefault();
});

$(".read-less").click(function() {
	$(".read-less").hide();
});

$(".read-less").click(function() {
	$(".read-more").show();
});

$(".read-more").click(function() {
	$(".read-more").hide();
});

$(".read-more").click(function() {
	$(".read-less").show();
});

$("#first-read-more-button").click(function() {
	$("#first-read-more-text").slideToggle();
});

$("#second-read-more-button").click(function() {
	$("#second-read-more-text").slideToggle();

});

$("#first-read-less-button").click(function() {
	$("#first-read-more-text").slideToggle();
});

$("#second-read-less-button").click(function() {
	$("#second-read-more-text").slideToggle();

});

});



// Old Lame Code:

// $(document).ready(function() {

// $(document).ready(function() {
// 	$("p").hide();
// });

// $(".read-more").click(function(event) {
// 	event.preventDefault();
// });

// $(".read-less").click(function(event) {
// 	event.preventDefault();
// });

// $("#first-read-more-button").click(function() {
// 	$("#first-read-more-text").slideDown();
// });

// $("#first-read-more-button").click(function() {
// 	$("#first-read-more-button").hide();
// });

// $("#first-read-more-button").click(function() {
// 	$("#first-read-less-button").show();
// });

// $("#first-read-less-button").click(function() {
// 	$("#first-read-more-text").slideUp();
// });

// $("first-read-less-button").click(function() {
// 	$("first-read-less-button").hide();
// });

// $("first-read-less-button").click(function() {
// 	$("first-read-more-button").show();
// });


// // Second read more button starts here

// $("#second-read-more-button").click(function() {
// 	$("second-read-more-text").slideDown();
// });

// $("#second-read-more-button").click(function() {
// 	$("second-read-more-button").hide();
// });

// $("#second-read-more-button").click(function() {
// 	$("second-read-less-button").show();
// });

// $("second-read-less-button").click(function() {
// 	$("second-read-more-text").slideUp();
// });

// $("second-read-less-button").click(function() {
// 	$("second-read-less-button").hide();
// });

// $("second-read-less-button").click(function() {
// 	$("second-read-more-button").show();
// });

// });

