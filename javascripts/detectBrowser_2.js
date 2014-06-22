function detectBrowser(){
	var chromeDownloader = "https://github.com/nccucs-se-group4/news-LyContacts-extension";
	var firfoxDownloader = "https://www.dropbox.com/s/mbvi0icx8ejlkf4/firefox-extension.xpi?dl=1";
	var safariDownloader = "https://www.dropbox.com/s/pvhgrkqhbent6th/VisitedLinksLogger.safariextz?dl=1";
	var sAgent = navigator.userAgent.toLowerCase();
	this.isIE = (sAgent.indexOf("msie")!=-1); //IE6.0-7
	this.isFF = (sAgent.indexOf("firefox")!=-1);//firefox
	this.isSa = (sAgent.indexOf("safari")!=-1);//safari
	this.isOp = (sAgent.indexOf("opera")!=-1);//opera
	this.isNN = (sAgent.indexOf("netscape")!=-1);//netscape
	this.isCh = (sAgent.indexOf("chrome")!=-1);//chrome
	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	if (is.firefox)
  		document.write("<a href=" + firefoxDownloader + " class=\"xbutton\"> Firefox </a>");
  	else if (this.isCh)
  		document.write("<a href=" + chromeDownloader + " class=\"xbutton\"> Chrome </a>");
  	else if (this.isSa)
  		document.write("<a href=" + safariDownloader + " class=\"xbutton\"> Safari </a>");
  	else
  		document.write("<a href=" + chromeDownloader + " class=\"xbutton\"> Chrome </a>");
}
