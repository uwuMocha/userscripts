// ==UserScript==
// @name        uwuAB Count
// @description This is your new file, start writing code
// @match       https://animebytes.tv/forums.php?action=viewthread&threadid=556&page=1
// @match       https://animebytes.tv/forums.php?*action=viewthread&threadid=556*
// @run-at      document-idle
// ==/UserScript==
var posts = document.getElementsByClassName('post_block');
var lastPostContent = posts[posts.length - 1].querySelector("[id^='content']").textContent.trim();
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

  var element = document.querySelector("#forum_70 > div.pages:nth-child(32) > div.pagenums > a.next-prev.last:last-child");
  if (element) {
      element.click();
  }  
})();