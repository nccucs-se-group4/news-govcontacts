function detectBrowser(){
	var chromeDownloader = "https://github.com/nccucs-se-group4/news-LyContacts-extension";
	var firfoxDownloader = "https://www.dropbox.com/s/mbvi0icx8ejlkf4/firefox-extension.xpi?dl=1";
	var safariDownloader = "https://www.dropbox.com/s/pvhgrkqhbent6th/VisitedLinksLogger.safariextz?dl=1";
	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    	// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    	// At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
	var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
	if (isChrome)
 		document.write("<a href=" + chromeDownloader + " class=\"xbutton\"> Chrome </a>");
	else if (navigator.userAgent.match("Firefox"))
 		document.write("<a href=" + firefoxDownloader + " class=\"xbutton\"> Firefox </a>");
	else if (isSafari)
 		document.write("<a href=" + safariDownloader + " class=\"xbutton\"> Safari </a>");
	else {
  		document.write("<a href=" + chromeDownloader + " class=\"xbutton\"> Chrome </a>");
	}
}
