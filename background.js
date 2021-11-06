chrome.commands.onCommand.addListener(function (command) {

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"});
    });

});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        //
        // chrome.tts.getVoices(
        //     function(voices) {
        //         for (var i = 0; i < voices.length; i++) {
        //             console.log('Voice ' + i + ':');
        //             console.log('  name: ' + voices[i].voiceName);
        //             console.log('  lang: ' + voices[i].lang);
        //             console.log('  extension id: ' + voices[i].extensionId);
        //             console.log('  event types: ' + voices[i].eventTypes);
        //         }
        //     });
		

        console.log(request);
		chrome.tts.stop();
        chrome.tts.speak(request.text, {
            'lang': 'en-UK',
            'voiceName' : 'Google UK English Male',
            'rate': 1.0
        });
    });
	