// Gets back an array of elements containing DOM 'selector', then gets the text of each. Runs through a loop to check
// 'text' parameter against each element's text. If the element's text matches the 'text' parameter, we click that
// element and break the loop.
exports.command = function(selector, text) {
    this.elements('css selector', selector, function(links) {
        let success = false;
        this.pause(500);
        for (let i = 0; i < links.value.length; i++) {
            if (success === true)
                break;
            else
                this.elementIdText(links.value[i].ELEMENT, function(result) {
                    if (result.value === text) {
                        console.log(' ✔ Selecting ' + selector + ': ' + result.value);
                        this.elementIdClick(links.value[i].ELEMENT);
                        success = true;
                    }
                })
        }
    });
};