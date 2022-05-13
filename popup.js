document.getElementById("btn").addEventListener("click", async() => {
    let tabs = await chrome.tabs.query((queryInfo = {}));
    let counter = (document.getElementById(
        "counter"
    ).innerHTML = `counter: ${tabs.length}`);
});