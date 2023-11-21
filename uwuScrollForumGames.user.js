// ==UserScript==
// @name        uwuScrollForumGames
// @description This is your new file, start writing code
// @match       https://gazellegames.net/forums.php?action=viewthread*
// @run-at      document-idle
// ==/UserScript==
//
// CMD + ENTER
//
document.body.addEventListener('keydown', (event) => {
    if(event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        event.target.form?.submit();
    }
});
//
//scroll
//
window.onload = window.scrollTo(0, document.body.scrollHeight);
document.getElementById("quickpost").focus();