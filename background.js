chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "recon.html";
  chrome.tabs.create({ url: newURL });
});