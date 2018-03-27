function includeTabKey(element) {
    var start = element.selectionStart;
    var end = element.selectionEnd;

    element.value = element.value.substring(0, start) + "\t" + element.value.substring(end);
    element.selectionStart = element.selectionEnd = start + 1;
}

function simulateBackspace(element) {
    var start = element.selectionStart;
    var end = element.selectionEnd;

    element.value = element.value.substring(0, start - 1) + element.value.substring(end);
    element.selectionStart = element.selectionEnd = start - 1;
}

document.addEventListener('keydown', function (e) {
    var keyCode = e.which || e.keyCode;

    if (keyCode === 9) {
        var element = e.srcElement

        if (element.nodeName == "TEXTAREA" && element.classList.contains('field')) {
            e.preventDefault();

            if (e.shiftKey) {
                simulateBackspace(element);
            } else {
                includeTabKey(element);
            }
        }
    }
})