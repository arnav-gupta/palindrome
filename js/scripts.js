$(document).ready(function () {
//    webshim.polyfill('es5 mediaelement forms');
    $('.panel-body').on('blur', function () {
        alert('yes');
        $(this).siblings('label').removeClass('active');
    }).on('focus', function () {
        $(this).siblings('label').addClass('active');
    });
});