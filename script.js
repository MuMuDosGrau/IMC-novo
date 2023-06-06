const form = document.querySelector('form')
const textoNome = document.getElementById('nome')
const textoAltura = document.getElementById('altura')
const textoPeso = document.getElementById('peso')
const textoDescricao = document.getElementById('descricao')
const textoimc = document.getElementById('imc')
const textofoto = document.getElementById('fotoJogador')
const imcResultado = document.getElementById('imcResultado')





form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target)

    const nome = inputs.get('nome')
    const altura = inputs.get('altura')
    const peso = inputs.get('peso')
    const descricao = inputs.get('descricao')
    const foto = inputs.get('foto')




    textoNome.textContent = `Nome do jogador: ${nome}`
    textoAltura.textContent = `Altura: ${altura}`
    textoPeso.textContent = `Peso: ${peso}`
    textoDescricao.textContent = `Descrição: ${descricao}`
    textofoto.src = foto

    var imc = textoimc

    imc = peso / (altura * altura)
    textoimc.textContent = `IMC: ${imc}`

    if (imc <= 18.5) {
        imcResultado.textContent = `Magreza`
    }

    if (imc >= 18.5 && imc <= 24.9) {
        imcResultado.textContent = `Normal`
    }

    if (imc >= 25 && imc <= 29.9) {
        imcResultado.textContent = `Sobrepeso`
    }

    if (imc >= 30 && imc <= 39.9) {
        imcResultado.textContent = `Obesidade`

    }

    if (imc > 40) {
        imcResultado.textContent = `Obesidade Grave`

    }



    return false
}


