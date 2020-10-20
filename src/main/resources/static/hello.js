$(document).ready(function() {
    $.ajax({
        url: "devops/hello"
    }).then(function(data) {
        document.getElementById('hello').append(data)
    });
});