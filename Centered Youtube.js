// ==UserScript==
// @name         Centered Youtube
// @namespace    www.technikov.com
// @description  The script aligns the new 2012 Youtube layout in the center of your browser. 
// @include      *.youtube.com/*
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @include      https://*.youtube.com/*
// @include      http://*.youtube.com/*
// @version      1.1
// @copyright    2012+, Konstantin Budnikov and Ryan Laguna 
// @license      (CC) Attribution Share Alike; http://creativecommons.org/licenses/by-sa/3.0/
// @icon 		 http://img515.imageshack.us/img515/9339/youtubeuw.png
// ==/UserScript==

// This uses JacaScript to replace the site-left-aligned CSS with site-center-aligned.
document.body.className = document.body.className.replace('site-left-aligned', 'site-center-aligned');

// This uses path to find particular class or ids and replace them with new CSS. 
// Only replacing the classes that need to be replaced with the replace function.
if (location.pathname === "/results"){
    document.body.className = document.body.className.replace('site-left-aligned', 'site-center-aligned');
	document.body.className = document.body.className.replace('exp-new-site-width', '');
}
if (location.pathname === "/watch")
{
    document.body.className="ltr gecko gecko-19 site-center-aligned exp-new-site-width exp-watch7-comment-ui hitchhiker-enabled guide-enabled guide-collapsed sidebar-expanded ";
    document.getElementById('guide-container').style.left="-70px";
    document.getElementById("watch-owner-container").style.position="relative";
    document.getElementById("watch-owner-container").style.right="-508px";
}
