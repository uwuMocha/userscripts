// ==UserScript==
// @name        uwuPTP Count to 60
// @description This is your new file, start writing code
// @match       https://passthepopcorn.me/forums.php?*action=viewthread&threadid=25066*
// @run-at      document-idle
// ==/UserScript==
var posts = document.getElementsByClassName('forum_post');
var lastPostContent = posts[posts.length - 2].querySelector("[id^='content']").textContent.trim();
var num = parseInt(lastPostContent) + 1;
//
//scroll and autofill
//
document.onload = window.scrollTo(0, document.body.scrollHeight);
document.getElementById("quickpost").focus();
document.getElementById("quickpost").value = num;
//
// CMD + ENTER listener
//
document.body.addEventListener('keydown', (event) => {
    if(event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        event.target.form?.submit();
    }
});
// 
//GOTO LAST PAGE
//
(function() {
  'use strict';

  var element = document.querySelector("#content > div.thin:nth-child(2) > div.pagination.pagination--bottom:nth-child(32) > a.pagination__link.pagination__link--last:last-child");
  //var element = document.getElementsByClassName('a.pagination__link.pagination__link--last');
  if (element) {
      element.click();
  }  
})();