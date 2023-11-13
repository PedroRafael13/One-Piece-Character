const botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, index ) => {
  botao.addEventListener('click', () => {

    desselectionBotao()
    desselectionPersonagem()

    botao.classList.add('selecionado')
    personagens[index].classList.add('selecionado')
  })

})

function desselectionPersonagem(){
  const personagemSelecionado = document.querySelector('.personagem.selecionado')
  personagemSelecionado.classList.remove('selecionado')
}

function desselectionBotao(){
  const botaoSelecionado = document.querySelector('.botao.selecionado')
  botaoSelecionado.classList.remove('selecionado')
}