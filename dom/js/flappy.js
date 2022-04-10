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
function Barreiras(reversa = false) {
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
    this.superior = new Barreiras(true)
    this.inferior = new Barreiras(false)

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
     * Mostra a largura atual da barrerira
     */
    this.getLarguraDaBarreira = () => this.elemento.clienteWidth

    this.sortearAbertura()
    this.setPosicaoXDaBarrereira(posicaoX)
}

// TESTE
const alturaBarreira = 700
const aberturaBarreira = 200
const posicaoXBarreira = 400

const b = new ParDeBarreiras(alturaBarreira, aberturaBarreira, posicaoXBarreira)
document.querySelector('[wm-flappy]').appendChild(b.elemento)