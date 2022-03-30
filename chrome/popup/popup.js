var onOff = document.querySelector("input[name=checkbox1]");

onOff.addEventListener('change', function () {
    saveOptions();
});

function saveOptions() {
    if (document.querySelector("input[name=checkbox1]").checked) {
        chrome.storage.local.set({
            onOffTTV: "true"
        }, function () { });
    } else {
        chrome.storage.local.set({
            onOffTTV: "false"
        }, function () { });
    }
}

function restoreOptions() {
    chrome.storage.local.get(['onOffTTV'], function (result) {
        if (result.onOffTTV == "true") {
            document.querySelector("input[name=checkbox1]").checked = true;
        } else if (result.onOffTTV == "false") {
            document.querySelector("input[name=checkbox1]").checked = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);