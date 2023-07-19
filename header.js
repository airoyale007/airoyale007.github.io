// header.js
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.head.innerHTML += xhr.responseText;
    }
};
xhr.open('GET', 'header.html', true);
xhr.send();
