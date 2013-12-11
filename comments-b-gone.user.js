// ==UserScript==
// @name Comments-B-Gone
// @description Get rid of those pesky comments, it's 2013, no one cares about anyone anymore.
// @include http://*
// @include https://*
// ==/UserScript==
console.log('COMMENTS, BE GONE!');
setInterval(function () {
    Array.prototype.filter.call(document.getElementsByTagName('iframe'), function(i) { return i.src.indexOf('http://disqus.com') != -1 }).forEach(function(i) { i.parentNode.removeChild(i) });
}, 1000);

