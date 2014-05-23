function detectBrowser() {
var nVer = navigator.appVersion;
var navigatorAgent = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = ''+parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion,10);
var nameShift,versionShift,trimSemicolon;
var chromeDownloader = "https://github.com/nccucs-se-group4/news-LyContacts-extension";
var firfoxDownloader = "https://github.com/nccucs-se-group4/firefox-extension";
var safariDownloader = "https://github.com/nccucs-se-group4/firefox-extension";

if ((versionShift = navigatorAgent.indexOf("Opera")) != -1) {
  browserName = "Opera";
  fullVersion = navigatorAgent.substring(versionShift + 6);
  if ((versionShift = navigatorAgent.indexOf("Version")) != -1)
  fullVersion = navigatorAgent.substring(versionShift + 8);
}
else if ((versionShift = navigatorAgent.indexOf("MSIE")) != -1) {
  browserName = "Microsoft Internet Explorer";
  fullVersion = navigatorAgent.substring(versionShift + 5);
}
else if ((versionShift = navigatorAgent.indexOf("Sleipnir")) != -1) {
  browserName = "Sleipnir";
  fullVersion = navigatorAgent.substring(versionShift + 9);
}
else if ((versionShift = navigatorAgent.indexOf("Chrome")) != -1) {
  browserName = "Chrome";
  fullVersion = navigatorAgent.substring(versionShift + 7);
}
else if ((versionShift = navigatorAgent.indexOf("Safari")) != -1) {
  browserName = "Safari";
  fullVersion = navigatorAgent.substring(versionShift + 7);
  if ((versionShift = navigatorAgent.indexOf("Version")) != -1)
  fullVersion = navigatorAgent.substring(versionShift + 8);
}
else if ((versionShift = navigatorAgent.indexOf("Firefox")) != -1) {
  browserName = "Firefox";
  fullVersion = navigatorAgent.substring(versionShift + 8);
}
// 多數瀏覽器中，“名稱/版本”是在 userAgent 的結尾
else if ((nameShift = navigatorAgent.lastIndexOf(' ') + 1) <
  (versionShift = navigatorAgent.lastIndexOf('/'))) {
  browserName = navigatorAgent.substring(nameShift, versionShift);
  fullVersion = navigatorAgent.substring(versionShift + 1);
  if (browserName.toLowerCase() == browserName.toUpperCase()) {
    browserName = navigator.appName;
  }
}
// 如果分號存在修剪分號
if ((trimSemicolon = fullVersion.indexOf(";")) != -1)
  fullVersion = fullVersion.substring(0, trimSemicolon);
if ((trimSemicolon = fullVersion.indexOf(" ")) != -1)
  fullVersion = fullVersion.substring(0, trimSemicolon);
  majorVersion = parseInt('' + fullVersion, 10);
if (isNaN(majorVersion)) {
  fullVersion = '' + parseFloat(navigator.appVersion);
  majorVersion = parseInt(navigator.appVersion, 10);
}
if (browserName == "Chrome")
 document.write("<a href=\"Chrome\">" + chromeDownloader + "</a>")
document.write("<ul>")
document.write("<li>Browser name = " + browserName + "</li>");
document.write("<li>Full version = " + fullVersion + "</li>");
document.write("<li>Major version = " + majorVersion + "</li>");
document.write("<li>navigator.appName = " + navigator.appName + "</li>");
document.write("</ul>")
document.write("<h3>navigator.userAgent</h3>")
document.write("<p>" + navigator.userAgent + "</p>");
}
