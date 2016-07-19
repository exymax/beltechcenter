$(document).ready(function() {

    emailjs.init("user_kbrQshJ2GwwbijbOrNN8h");

    $("#contacts-toggle, #close-contacts").click(function() {
        $("#contact-form-front").toggleClass("slide-contacts");
    });

    $("#quality-policy-link, #about-company-link, #contacts-mobile-link").leanModal();

    $("#form-content").on("submit", function(e) {
        e.preventDefault();
        const formData = $(this).serializeArray();
        $("#form-preloader").fadeIn();
        emailjs.send("gmail", "template_9IdDAZYD", {sender_name: formData[0].value, sender_email: formData[1].value, sender_message: formData[2].value})
            .then(function(response) {
                sendResult("success");
                console.log("SUCCESS. status=%s, text=%s", response.status, response.text);
            }, function(err) {
                sendResult("fail");
                console.log("FAILED. error=%s",err);
        });
    });

    function sendResult(type) {
        $("#form-preloader").fadeOut();
        $("#"+type).addClass("active").fadeIn();
        setTimeout(function() {
            $(".mail-send-result.active").fadeOut();
        }, 2500);
    }

});

//var _0xcb53=["\x75\x73\x65\x72\x5F\x6B\x62\x72\x51\x73\x68\x4A\x32\x47\x77\x77\x62\x69\x6A\x62\x4F\x72\x4E\x4E\x38\x68","\x69\x6E\x69\x74","\x73\x6C\x69\x64\x65\x2D\x63\x6F\x6E\x74\x61\x63\x74\x73","\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73","\x23\x63\x6F\x6E\x74\x61\x63\x74\x2D\x66\x6F\x72\x6D\x2D\x66\x72\x6F\x6E\x74","\x63\x6C\x69\x63\x6B","\x23\x63\x6F\x6E\x74\x61\x63\x74\x73\x2D\x74\x6F\x67\x67\x6C\x65\x2C\x20\x23\x63\x6C\x6F\x73\x65\x2D\x63\x6F\x6E\x74\x61\x63\x74\x73","\x6C\x65\x61\x6E\x4D\x6F\x64\x61\x6C","\x23\x71\x75\x61\x6C\x69\x74\x79\x2D\x70\x6F\x6C\x69\x63\x79\x2D\x6C\x69\x6E\x6B\x2C\x20\x23\x61\x62\x6F\x75\x74\x2D\x63\x6F\x6D\x70\x61\x6E\x79\x2D\x6C\x69\x6E\x6B\x2C\x20\x23\x63\x6F\x6E\x74\x61\x63\x74\x73\x2D\x6D\x6F\x62\x69\x6C\x65\x2D\x6C\x69\x6E\x6B","\x73\x75\x62\x6D\x69\x74","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x73\x65\x72\x69\x61\x6C\x69\x7A\x65\x41\x72\x72\x61\x79","\x6E\x61\x6D\x65","\x20\x2D\x20","\x76\x61\x6C\x75\x65","\x6F\x6E","\x23\x66\x6F\x72\x6D\x2D\x63\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x61\x64\x79"];$(document)[_0xcb53[17]](function(){emailjs[_0xcb53[1]](_0xcb53[0]);$(_0xcb53[6])[_0xcb53[5]](function(){$(_0xcb53[4])[_0xcb53[3]](_0xcb53[2])});$(_0xcb53[8])[_0xcb53[7]]();$(_0xcb53[16])[_0xcb53[15]](_0xcb53[9],function(_0xb5bax1){_0xb5bax1[_0xcb53[10]]();const _0xb5bax2=$(this)[_0xcb53[11]]();for(var _0xb5bax3 in _0xb5bax2){alert(_0xb5bax2[_0xb5bax3][_0xcb53[12]]+ _0xcb53[13]+ _0xb5bax2[_0xb5bax3][_0xcb53[14]])}})})
