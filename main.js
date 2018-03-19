document.addEventListener('keydown', function (e) {
    var keyCode = e.which || e.keyCode;

    if (keyCode === 9) {
        var element = e.srcElement

        if (element.nodeName == "TEXTAREA" && element.classList.contains('field')) {
            e.preventDefault();

            var start = element.selectionStart;
            var end = element.selectionEnd;

            element.value = element.value.substring(0, start) + "\t" + element.value.substring(end);

            element.selectionStart =
            element.selectionEnd = start + 1;
        }
    }
})