chrome.commands.onCommand.addListener(function (command) {

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});
    });

});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        chrome.tts.speak(request.text, {'lang': 'en-UK', 'rate': 1.0});
    });