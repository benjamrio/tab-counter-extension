window.addEventListener("load", () => {
    countTabs();
});

const countTabs = async() => {
    let tabs = await chrome.tabs.query((queryInfo = {}));
    let counter = document.getElementById("counter");
    counter.innerHTML = `counter: ${tabs.length}`;
    counter.style.color = computeContinuousColor(tabs.length);
};

function computeContinuousColor(counter) {
    let red = Math.min(parseInt(counter) * 10, 255);
    return `rgb(${red}, 0 ,0)`;
}