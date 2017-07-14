 $(document).ready(function () {
        var year = new Date().getFullYear();
        $('#currentYear').append(year);
    })
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 30) {
          $('.ustdiv').addClass('kucult')
        }
         if (height < 30) {
          $('.ustdiv').removeClass('kucult')
        }
        if (height > 70) {
            $('.bg-ball').addClass('moved')
            $('.bg-simit').addClass('moved-2')
        }
        if (height > 100) {
            $('.bg-ball').addClass('moved-3')
            $('.bg-simit').addClass('moved-3')
        }
        if (height < 70) {
            $('.bg-ball').removeClass('moved')
            $('.bg-simit').removeClass('moved-2')
        }
        if (height < 100) {
            $('.bg-ball').removeClass('moved-3')
            $('.bg-simit').removeClass('moved-3')
        }
    });