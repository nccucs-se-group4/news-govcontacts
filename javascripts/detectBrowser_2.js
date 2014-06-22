function detectBrowser(){
	var chromeDownloader = "https://github.com/nccucs-se-group4/news-LyContacts-extension";
	var firfoxDownloader = "https://www.dropbox.com/s/mbvi0icx8ejlkf4/firefox-extension.xpi?dl=1";
	var safariDownloader = "https://www.dropbox.com/s/pvhgrkqhbent6th/VisitedLinksLogger.safariextz?dl=1";
	var oBrowser = new detectBrowser();
	if (oBrowser.isIE) { 
		alert("IE6.0/7.0(or above version)."); 
	} 
	if (oBrowser.isSa && !oBrowser.isCh) { 
		alert("Safari."); 
	} 
	if (oBrowser.isOp) { 
		alert("Opera."); 
	} 
	if (oBrowser.isCh && oBrowser.isSa) { 
		alert("Chrom."); 
	} 
	if(oBrowser.isFF) { 
		alert("FireFox."); 
	}
}
