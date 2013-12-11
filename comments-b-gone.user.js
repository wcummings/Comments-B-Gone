// ==UserScript==
// @name Comments-B-Gone
// @description Get rid of those pesky comments, it's 2013, no one cares about anyone anymore.
// @include http://*
// @include https://*
// ==/UserScript==

// yes i have read joel on softwar

!function(d, filter) {
	console.log('COMMENTS, BE GONE!');

	setInterval(function () {
		// disqus is internet cancer
	    filter.call(d.getElementsByTagName('iframe'), function(i) { return i.src.indexOf('http://disqus.com') != -1 }).forEach(function(i) { i.parentNode.removeChild(i) });
	    
	    // no one cares about your startup
	    if(d.location.href.match(/^https:\/\/news.ycombinator.com/))
		    filter.call(d.getElementsByTagName('a'), function(a) { return a.innerHTML.match(/\d+ comments/) }).forEach(function(a) { a.parentNode.removeChild(a) });

		if(d.location.href.match(/^http:\/\/www.reddit.com/))
			filter.call(d.getElementsByTagName('a'), function(a) { return a.className == "comments" }).forEach(function(a) { a.parentNode.removeChild(a) });
	}, 1000);
}(document, Array.prototype.filter);