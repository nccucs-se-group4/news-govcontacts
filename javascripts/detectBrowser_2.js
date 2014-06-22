function detectBrowser(){
	var chromeDownloader = "https://github.com/nccucs-se-group4/news-LyContacts-extension";
	var firfoxDownloader = "https://www.dropbox.com/s/mbvi0icx8ejlkf4/firefox-extension.xpi?dl=1";
	var safariDownloader = "https://www.dropbox.com/s/pvhgrkqhbent6th/VisitedLinksLogger.safariextz?dl=1";
	if (navigator.userAgent.indexOf("Firefox")!=-1)
		document.open()
		ocument.write("<a href=" + firefoxDownloader + " class=\"xbutton\"> Firefox </a>");
		document.body.appendChild(text);
		document.close()
	if (navigator.userAgent.indexOf("Chrome")!=-1)
		document.write("<a href=" + chromeDownloader + " class=\"xbutton\"> Chrome </a>");
	else if (navigator.userAgent.indexOf("Safari")!=-1)
		document.write("<a href=" + safariDownloader + " class=\"xbutton\"> Safari </a>");
}
