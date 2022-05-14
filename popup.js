window.addEventListener("load", () => {
    countTabs();
});

const countTabs = async() => {
    let tabs = await chrome.tabs.query((queryInfo = {}));
    document.getElementById("counter").innerHTML = `counter: ${tabs.length}`;
};