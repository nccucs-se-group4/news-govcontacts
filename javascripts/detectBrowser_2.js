function detectBrowser(){
	var chromeDownloader = "https://github.com/nccucs-se-group4/news-LyContacts-extension";
	var firfoxDownloader = "https://www.dropbox.com/s/mbvi0icx8ejlkf4/firefox-extension.xpi?dl=1";
	var safariDownloader = "https://www.dropbox.com/s/pvhgrkqhbent6th/VisitedLinksLogger.safariextz?dl=1";
	var oBrowser = new detectBrowser();
	var sAgent = navigator.userAgent.toLowerCase();
	this.isIE = (sAgent.indexOf("msie")!=-1); //IE6.0-7
	this.isFF = (sAgent.indexOf("firefox")!=-1);//firefox
	this.isSa = (sAgent.indexOf("safari")!=-1);//safari
	this.isOp = (sAgent.indexOf("opera")!=-1);//opera
	this.isNN = (sAgent.indexOf("netscape")!=-1);//netscape
	this.isCh = (sAgent.indexOf("chrome")!=-1);//chrome
	this.isMa = this.isIE;//marthon
	this.isOther = (!this.isIE && !this.isFF && !this.isSa && !this.isOp && !this.isNN && !this.isSa);//unknown Browser
	if (this.isCh)
 		document.write("<a href=" + chromeDownloader + " class=\"xbutton\"> Chrome </a>");
	else if (this.isFF)
 		document.write("<a href=" + firefoxDownloader + " class=\"xbutton\"> Firefox </a>");
	else if (this.isSa)
 		document.write("<a href=" + safariDownloader + " class=\"xbutton\"> Safari </a>");
}
