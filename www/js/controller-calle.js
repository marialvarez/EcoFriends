rutaApp.controller('reto_calle', function ($scope) {
    var i =0;
    var acumulador;
    var botella = '../../img/botella.png';
    var botellaX = '../../img/botellaX.png';
    $(".botella img").click(function () {
        if ($(this).attr('src') === botella) {
            $(this).attr('src', botellaX);
            i += 1;
        } else {
            $(this).attr('src', botella);
            i -= 1;
        };
        console.log(i);
    });
});
