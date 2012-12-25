// ==UserScript==
// @name         Centered Youtube
// @namespace    www.technikov.com
// @description  This script aligns the new 2012 Youtube layout in the center of your browser. 
// @include      *.youtube.com/*
// @version      1.0
// @copyright    2012+, Konstantin Budnikov and Ryan Laguna 
// ==/UserScript==
// This uses JacaScript to replace the site-left-aligned CSS with site-center-aligned.
document.body.className = document.body.className.replace('site-left-aligned', 'site-center-aligned');
// This uses path to find particular class or ids and replace them with new CSS. 
if (location.pathname === "/results"){
    document.body.className="ltr  gecko gecko-19      site-center-aligned     exp-watch7-comment-ui hitchhiker-enabled      guide-enabled       guide-expanded "; 
}
if else (location.pathname === "/watch")
{
    document.body.className="ltr gecko gecko-19 site-center-aligned exp-new-site-width exp-watch7-comment-ui hitchhiker-enabled guide-enabled guide-collapsed sidebar-expanded ";
    document.getElementById('guide-container').style.left="-70px";
    document.getElementById("watch-owner-container").style.position="relative";
    document.getElementById("watch-owner-container").style.right="-508px";
}