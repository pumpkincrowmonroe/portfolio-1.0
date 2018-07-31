$(document).ready(function() {
  // set `$.fx.interval` at `0`
  $.fx.interval = 0;
  (function cycleBgImage(elem, bgimg) {
// `elem`:`#slideshow`
// set, reset, delay to `1000` after background image reset
elem.css("backgroundImage", bgimg)
  // fade in background image
  .fadeTo(1000, 1, "linear", function() {
    // set `delay` before fadeing out image
    // fade in background image
    $(this).delay(3000, "fx").fadeTo(1000, 0, "linear", function() {
      // split background image string at comma , creating array
      var img = $(this).css("backgroundImage").split(","),
        // concat first background image to `img` array,
        // remove first background image from `img` array
        bgimg = img.concat(img[0]).splice(1).join(",");
      // recursively call `cycleBgImage`
      cycleBgImage(elem, bgimg);
    });
  });
}($(".introhead")));
});
$(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    $(".navbar").animate({
        'opacity':'1'},800);
});
