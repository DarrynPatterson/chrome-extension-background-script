chrome.runtime.onMessage.addListener(receivedMessage);

function receivedMessage(message, sender, sendResponse) {
  debugger;
  let anchors = document.getElementsByTagName("a");
  for (item of anchors) {
    item.innerHTML = "";
  }
}
