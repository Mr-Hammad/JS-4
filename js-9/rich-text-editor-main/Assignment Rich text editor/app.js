
function updateText() {
    var textInput = document.getElementById('text-input');
    var editor = document.getElementById('editor');
    editor.innerHTML = textInput.value;
}

function bold() {
    var editor = document.getElementById('editor')
    editor.style.fontWeight = editor.style.fontWeight === 'bold' ? 'normal' : 'bold'
}
function italic() {
    var editor = document.getElementById('editor')
    editor.style.fontStyle = editor.style.fontStyle === 'italic' ? 'normal' : 'italic'
}
function underline() {
    var editor = document.getElementById('editor')
    editor.style.textDecoration = editor.style.textDecoration === 'underline' ? 'none' : 'underline';
}
function alignment(alignment) {
    var editor = document.getElementById('editor')
    editor.style.textAlign = alignment;
}
function textColor(color) {
    var editor = document.getElementById('editor');
    editor.style.color = color;
}
function fontSize(size) {
    var editor = document.getElementById('editor');
    editor.style.fontSize = size + 'px';
}
// Add a class to the result-div when the content is scrolled
document.getElementById("editor").addEventListener("scroll", function () {
    this.classList.add("scroll-active");
});

// Remove the class when scrolling stops
document.getElementById("editor").addEventListener("scroll", function () {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
        this.classList.remove("scroll-active");
    }, 500);
});
