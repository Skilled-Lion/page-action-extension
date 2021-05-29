chrome.runtime.sendMessage({todo: "showPageAction"})
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if(request.todo == "changeColor"){
        var addColor =  request.clickedColor;
        $(".redirection-banner-content").css("color", addColor);
        // $(".our-promise-blocks.descCont").css("color", addColor);
    }
})