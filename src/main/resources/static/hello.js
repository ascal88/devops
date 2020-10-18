$(document).ready(function() {
    $.ajax({
        url: "/hello"
    }).then(function(data) {
        document.getElementById('hello').append(data)
    });
});