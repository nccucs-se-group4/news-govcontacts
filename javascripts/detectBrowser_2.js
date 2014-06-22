function detectBrowser(){
	var chromeDownloader = "https://github.com/nccucs-se-group4/news-LyContacts-extension";
	var firfoxDownloader = "https://www.dropbox.com/s/mbvi0icx8ejlkf4/firefox-extension.xpi?dl=1";
	var safariDownloader = "https://www.dropbox.com/s/pvhgrkqhbent6th/VisitedLinksLogger.safariextz?dl=1";
	var oBrowser = new detectBrowser();
	if (oBrowser.isIE) { 
		document.write("<a href=" + chromeDownloader + " class=\"xbutton\"> Chrome </a>"); 
	} 
	if (oBrowser.isSa && !oBrowser.isCh) { 
		document.write("<a href=" + safariDownloader + " class=\"xbutton\"> Safari </a>"); 
	} 
	if (oBrowser.isOp) { 
		document.write("<a href=" + chromeDownloader + " class=\"xbutton\"> Chrome </a>"); 
	} 
	if (oBrowser.isCh && oBrowser.isSa) { 
		document.write("<a href=" + chromeDownloader + " class=\"xbutton\"> Chrome </a>");
	} 
	if(oBrowser.isFF) { 
		document.write("<a href=" + firefoxDownloader + " class=\"xbutton\"> Firefox </a>"); 
	}
}
