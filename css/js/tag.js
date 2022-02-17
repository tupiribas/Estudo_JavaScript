const color_style = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    },
}

document.querySelectorAll('.tag').forEach(elemento => {
    // Atribui alista de tags a variável
    const tagName = elemento.tagName.toLocaleLowerCase()
    // Muda a bordar para identificar
    elemento.style.borderColor = color_style.get(tagName)
    // Verifica se no documento contem uma classe nolabel
    if (!elemento.classList.contains('nolabel')) {
        // Cria o elemento label e atribui o nome da tag ao label
        const label = document.createElement('label')
        label.style.backgroundColor = color_style.get(tagName)
        label.innerHTML = tagName
        // Insere antes do primeiro elemento 
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})