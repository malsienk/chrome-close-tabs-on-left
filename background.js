chrome.action.onClicked.addListener(function (currentTab) {
  chrome.tabs.query({ currentWindow: true }, (tabs) =>
    chrome.tabs.remove(
      tabs
        .slice(0, currentTab.index)
        .filter((tab) => !tab.pinned)
        .map((tab) => tab.id)
    )
  );
});
