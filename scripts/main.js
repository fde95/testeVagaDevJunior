$(document).ready(function(){
    AOS.init({
        delay: 300,
        once: true,
    });

    function aplicarAnimacao(elemento, classeSeta, classeLinha, escalaSeta, deslocamentoLinha) {
        $(elemento).mouseenter(function(){
            $(classeSeta).css({
                'transform': 'scale(' + escalaSeta + ')',
                'transition': '1s',
                'color': '#5712A6'
            });
            $(classeLinha).css({
                'transform': 'translate(' + deslocamentoLinha + 'px)',
                'transition': '1.3s',
                'color': '#5712A6'
            });
        });

        $(elemento).mouseleave(function(){
            $(classeSeta).css({
                'transform': 'scale(1)',
                'transition': '1s',
            });
            $(classeLinha).css({
                'transform': 'translate(0)',
                'transition': '1.3s'
            });
        });
    }

    aplicarAnimacao('.register--driver--movement', '.register--driver--movement--seta', '.register--driver--movement--line', '0.8', '20');
    aplicarAnimacao('.register--customer--movement', '.register--customer--movement--seta', '.register--customer--movement--line', '0.8', '20');
    aplicarAnimacao('.safety--content--description--span', '', '.safety--content--description--span--line', '0.8', '20');
});
