chrome.runtime.onMessage.addListener(receivedMessage);

function receivedMessage(message, sender, sendResponse) {
  let anchors = document.getElementsByTagName("a");
  for (item of anchors) {
    item.innerHTML = "";
  }
}
