// Replace the URL with the random wikipedia article
function forwardToArticle(){
    window.location.replace("http://en.wikipedia.org/wiki/Special:Random");
}
window.onload = forwardToArticle;
