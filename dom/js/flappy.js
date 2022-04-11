/**
 * Cria um novo elemento na DOM.
 * @param tagName Nome da tag html
 * @param className Nome da classe
 * @returns elemento
 */
function novoElemento(tagName, className) {
    const elemento = document.createElement(tagName)
    elemento.className = className
    return elemento
}

/**
 * Criará uma barreira e irá verificar se está a posição:
    superior ou inferior (reversa ou normal).
 * @param reversa Superior (true) ou inferior (false)
 */
function Barreira(reversa = false) {
        // Criando a área das barreiras.
        this.elemento = novoElemento('div', 'barreira')

        const borda = novoElemento('div', 'borda')
        const corpo = novoElemento('div', 'corpo')

        // Verificando o tipo da barreira e adicionando.
        const normal = reversa ? corpo : borda
        const anormal = reversa ? borda : corpo
        this.elemento.appendChild(normal)
        this.elemento.appendChild(anormal)

        /**
         * Altera a altura da barreira.
         * @param altura Altura da barreira
         */
        this.setAlturaDaBarreira = altura => corpo.style.height = `${altura}px`
}

// TESTE
// const b = new Barreiras(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

/**
 * Adiciona o par de barrerias (inferior E superior)
 * á área da barreira.
 * @param altura Altura do jogo
 * @param abertura Tamanho do espaçamento entre as barreiras
 * @param posicaoX Posição do eixo horizontal da barreira
 */
function ParDeBarreiras(altura, abertura, posicaoX) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    // Criando os pares.
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    // Adicionando os pares na DOM.
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    /**
     * Altera a altura das barreiras aleatóriamente.
     */
    this.sortearAbertura = () => {
        const alturaBarreiraSuperior = Math.random() * (altura - abertura)
        const alturaBarreiraInferior = altura - abertura - alturaBarreiraSuperior
        this.superior.setAlturaDaBarreira(alturaBarreiraSuperior)
        this.inferior.setAlturaDaBarreira(alturaBarreiraInferior)
    }

    /**
     * Mostra a posição atual da barreira.
     */
    this.getPosicaoXDaBarrereira = () => parseInt(this.elemento.style.left.split('px')[0])
    
    /**
     * Altera a posição da barreira variando a posição dela no eixo horizontal.
     * @param posicao Posição do eixo horizontal da barreira
     */
    this.setPosicaoXDaBarrereira = (posicao) => this.elemento.style.left = `${posicao}px`

    /**
     * Mostra a largura atual do jogo
     */
    this.getLarguraDoJogo = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setPosicaoXDaBarrereira(posicaoX)
}

// TESTE
// const alturaBarreira = 700
// const aberturaBarreira = 200
// const posicaoXBarreira = 800

// const b = new ParDeBarreiras(alturaBarreira, aberturaBarreira, posicaoXBarreira)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

/**
 * Controlar multiplas barreiras (animação).
 * @param altura Altura do jogo
 * @param largura Largura do jogo
 * @param abertura Abertura entre entre as barreiras
 * @param espaco Espaçamento horizontal entre cada par de barrera
 * @param notificarPonto Aciona uma nova pontuação quando um par de barrera cruzar o meio do jogo
 */
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    // Posicionando as barreiras no período inicial.
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3),
    ]
    // Quantidade de pixels para a movimentação.
    const deslocamento = 3
    /**
     * Faz a movimentação das barreiras.
     */
    this.animar = () => {
        this.pares.forEach(par => {
            par.setPosicaoXDaBarrereira(par.getPosicaoXDaBarrereira() - deslocamento)

            // Quando o par de barreira sair da área do jogo.
            if (par.getPosicaoXDaBarrereira() < -par.getLarguraDoJogo()) {
                par.setPosicaoXDaBarrereira(par.getPosicaoXDaBarrereira() + espaco * this.pares.length)
                par.sortearAbertura()
            }
        
            // Notificar o usuário que ele cruzou a barreira
            const meio = largura / 2.5
            const cruzouOMeio = par.getPosicaoXDaBarrereira() + deslocamento >= meio 
                && par.getPosicaoXDaBarrereira() < meio
            if (cruzouOMeio) notificarPonto()
        }) 
    }
}

/**
 * Informações iniciais do pássaro
 * @param alturaDoJogo Altura da área do jogo
 */
function Passaro(alturaDoJogo) {
    let voando = false
    
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    /**
     * Mostrar a posição atual do pássaro
     */
    this.getPosicaoYDoPassaro = () => parseInt(this.elemento.style.bottom.split('px')[0])
    /**
     * Altera a posição do pássaro variando a posição dele no eixo vertical.
     * @param posicao Posição do eixo horizontal do pássaro
     */
    this.setPosicaoYDoPassaro = (posicao) => this.elemento.style.bottom = `${posicao}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    /**
     * Faz a movimentação do pássaro
     */
    this.animar = () => {
        // Quando o passaro estiver em movimento 
        const novaAltura = this.getPosicaoYDoPassaro() + (voando ? 8 : -5)
        const alturaMaxima = alturaDoJogo - this.elemento.clientHeight
        
        // Posição inicial do pássaro
        this.setPosicaoYDoPassaro(alturaDoJogo / 2)
        
        // Impede do passaro ultrapassar o limite do jogo
        if (novaAltura <= 0) {
            this.setPosicaoYDoPassaro(0)
        }
        else if (novaAltura >= alturaMaxima) {
            this.setPosicaoYDoPassaro(alturaMaxima)
        }
        else {
            this.setPosicaoYDoPassaro(novaAltura)
        }
    }
}

/**
 * Instancia os pontos do jogo.
 */
function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    /**
     * Atualiza os pontos do jogo mostrando na tela.
     * @param pontos ponto atual (int)
     */
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }

    this.atualizarPontos(0)
}

/**
 * Valida o estado de sobreposição entre dois elementos.
 * @param elementoA Primeiro elemento
 * @param elementoB Segundo elemento
 * @returns verdadeiro ou falso (boolean)
 */
function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const ladoDireitoA = a.left + a.width
    const ladoDireitoB = b.left + b.width
    const inferiorA = a.top + a.height 
    const inferiorB = b.top + b.height

    const colisaoHorizontal = ladoDireitoA >= b.left && ladoDireitoB >= a.left
    const colisaoVertical = inferiorA >= b.top && inferiorB >= a.top

    return colisaoHorizontal && colisaoVertical
}

/**
 * Valida a colisão entre os objetos.
 * @param passaro Objeto Passaro
 * @param  barreiras Objeto de colisão
 * @returns 
 */
function colidiu(passaro, barreiras) {
    let colidiu = false

    barreiras.pares.forEach(parDeBarreiras => {
        // Qual objeto foi sofreu colisão
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento

            colidiu = estaoSobrepostos(passaro.elemento, superior) 
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

/**
 * Startar a aplicação
 */
function FlappyBird() {
    let pontos = 0
    let abertura = 250
    let espaco = 400

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const alturaDoJogo = areaDoJogo.clientHeight
    const larguraDoJogo = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(alturaDoJogo, larguraDoJogo, abertura, espaco, 
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(alturaDoJogo)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()