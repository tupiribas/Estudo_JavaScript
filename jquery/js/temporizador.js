(function ($) {
    $.fn.temporizador = function(opcoes) {
        // Valores padões
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!'
        }, opcoes)

        // Criando o horário
        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')
        // Criando os separadores
        const separadorHora = $('<span class="digito">').html(':')
        const separadorMinuto = $('<span class="digito">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        // Implementar o html na DOM com jQuery
        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora,
             minutoDezena, minutoUnidade, separadorMinuto,
             segundoDezena, segundoUnidade, mensagem)

        // Tratando o horário que vem por parâmetro
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        // console.log(horarioAlvo);

        // Atualiza o horário atual que está sendo decrementado
        let temporizador = setInterval(() => {
            const atual = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMiliseg = alvo.getTime() - atual.getTime() 
            if (diferencaEmMiliseg >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMiliseg).toISOString())
                // console.log(diferenca);

                // Captura o tal[] valor da tal[] letra
                horaDezena.html(diferenca[1][0]) 
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            }
            else {
                clearInterval(temporizador)
            }
        }, 1000)

        return this // Promove a reutilização da função
    }
})(jQuery)