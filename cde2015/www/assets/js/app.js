var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
$(document).ready(function(){

    var language = window.navigator.userLanguage || window.navigator.language;
    var cookie = document.cookie;
    if((document.cookie.indexOf('language') >= 0 && getCookie('language') == 'fr') || language.indexOf('fr') >= 0) {
        $('.en').toggle();
        $('#francais').addClass("selected");
        $('#english').removeClass("selected");
    } else {
        $('.fr').toggle();
    }

    $('#english').bind('click', function() {
        if ($('#francais').hasClass("selected")) {
            $('#english').addClass("selected");
            $('#francais').removeClass("selected");

            $('.fr').toggle();
            $('.en').toggle();

            setCookie('language', 'en', 365);
        }
    });
    $('#francais').bind('click', function() {
        if ($('#english').hasClass("selected")) {
            $('#francais').addClass("selected");
            $('#english').removeClass("selected");

            $('.fr').toggle();
            $('.en').toggle();

            setCookie('language', 'fr', 365);
        }
    });
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});