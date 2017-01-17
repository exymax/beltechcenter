$(document).ready(() => {

    emailjs.init("user_kbrQshJ2GwwbijbOrNN8h");

    $("#contacts-toggle, #close-contacts").click(function() {
        $("#contact-form-front").toggleClass("slide-contacts");
    });

    $("#quality-policy-link, #about-company-link, #contacts-mobile-link").leanModal();

    $("#form-content").on("submit", function(e) {
        e.preventDefault();
        const formData = $(this).serializeArray();
        $("#form-preloader").fadeIn();
        if(formIsValid(formData)) {
            emailjs.send("gmail", "template_9IdDAZYD", 
            {sender_name: formData[0].value, sender_email: formData[1].value, sender_message: formData[2].value})
                .then(function(response) {
                    sendResult("success");
                }, errorCallback);
        }
        else {
            sendResult("invalid-form");
        }
    });

    function formIsValid(serializedData) {
        let valid = true;
        serializedData.forEach((field) => {
            if(field.value.length === 0) {
                valid = false;
            }
        });
        return valid;
    }

    function errorCallback() {
        sendResult("fail");
    }

    function sendResult(type) {
        $("#form-preloader").fadeOut();
        $("#"+type).addClass("active").fadeIn();
        setTimeout(function() {
            $(".mail-send-result.active").fadeOut();
        }, 2500);
    }

});
