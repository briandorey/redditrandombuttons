// ==UserScript==
// @name       Reddit randnsfw
// @version    0.1
// @description  Add randnsfw button
// @match      https://www.reddit.com/*
// @author     everyone
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
  var rand = document.getElementsByClassName('_3dnbqz69WJTFCss8wl7Wlk');
  $(rand).append('<a href="http://www.reddit.com/r/randnsfw" title="randomnsfw"><svg version="1.1" id="Layer_0" xmlns="http://www.w3.org/2000/svg" style="margin-right: 20px;"	 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 width="20px" height="20px" viewBox="-9.86 831.445 20 20" enable-background="new -9.86 831.445 20 20" xml:space="preserve"><path fill="#9B9B9B" d="M9.868,847.07l-3.094,2.849c-0.59,0.59-1.633,0.172-1.633-0.664v-1.563H3.93 c-0.129,0-0.254-0.055-0.344-0.152l-3.508-3.797l1.488-1.613l3.117,3.371h0.458v-1.875c0-0.836,1.043-1.254,1.633-0.664l3.094,2.773	C10.231,846.109,10.231,846.703,9.868,847.07z M-9.391,837.383h3.586l3.118,3.371l1.488-1.613l-3.508-3.797	c-0.09-0.098-0.215-0.152-0.344-0.152h-4.34c-0.258,0-0.469,0.211-0.469,0.469v1.25C-9.86,837.172-9.649,837.383-9.391,837.383z	 M9.868,835.746l-3.094-2.773c-0.59-0.59-1.633-0.172-1.633,0.66v1.563H3.93c-0.129,0-0.254,0.055-0.344,0.152l-9.391,10.16h-3.586	c-0.258,0-0.469,0.211-0.469,0.469v1.25c0,0.258,0.211,0.469,0.469,0.469h4.336c0.129,0,0.254-0.055,0.344-0.152l9.391-10.16h0.461 	v1.875c0,0.836,1.043,1.254,1.633,0.664l3.094-2.852C10.231,836.703,10.231,836.109,9.868,835.746z"/></svg></a>');
});