"use strict";

var onOff = document.querySelector("input[name=checkbox1]");

onOff.addEventListener('change', function () {
    saveOptions();
});

function saveOptions() {
    if (document.querySelector("input[name=checkbox1]").checked) {
        browser.storage.sync.set({
            onOffTTV: "true"
        });
    } else {
        browser.storage.sync.set({
            onOffTTV: "false"
        });
    }
}

function restoreOptions() {
    var onOff = browser.storage.sync.get('onOffTTV');
    onOff.then((res) => {
        if (res.onOffTTV == "true") {
            document.querySelector("input[name=checkbox1]").checked = true;
        } else if (res.onOffTTV == "false") {
            document.querySelector("input[name=checkbox1]").checked = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);