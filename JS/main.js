document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value
})  