chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var textToRead = selectSentence();
        chrome.runtime.sendMessage({text: textToRead});

    });


function selectSentence() {
    let selection = window.getSelection();
    selection.modify('extend', 'forward', 'sentence');
    return window.getSelection().toString();
}