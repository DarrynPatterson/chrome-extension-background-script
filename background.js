console.log("Background script running");

chrome.browserAction.onClicked.addListener(buttonClicked);

// Callback contains the tab object
function buttonClicked(tab) {
  let message = {
    data: ""
  };

  chrome.tabs.sendMessage(tab.id, message);
}
