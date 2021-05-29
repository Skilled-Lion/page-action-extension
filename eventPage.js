chrome.runtime.onMessage.addListener(function(req, sender, sendResponse){
    if(req.todo == "showPageAction"){
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.pageAction.show(tabs[0].id)
        })
    }
})