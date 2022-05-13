let counter = 0;
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ counter });
    console.log("Counter initialised to", `color: ${counter}`);
});