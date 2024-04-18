const qtd = document.getElementById("qtdCaracteres")
const btnGerar = document.getElementById('btnGerar')
const btnCopia = document.getElementById('copia')
const exibicaoSenha = document.getElementById('senha')
const containerGerador = document.getElementById('gerador')

const caracteres = [
    "0123456789", // Números de 0 a 9
    "abcdefghijklmnopqrstuvwxyz", // Letras minúsculas
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Letras maiúsculas
    "!?#$%" // Pontos de exclamação, interrogação, cerquilha, símbolo percentual e cifrão
  ];
  
  const opcoesCaracteres = [...caracteres.join('')];

btnGerar.addEventListener('click',()=>{
    let numCaracteres = qtd.value
    console.log(numCaracteres)

    let senha = []
    for (let i = 0; i<numCaracteres; i++){
        let novoCaracter = opcoesCaracteres[Math.round(Math.random()*67)]
        senha.push(novoCaracter)
    }
    let resultado = senha.join('')  

    exibicaoSenha.innerHTML = resultado
    if (numCaracteres>=36){
        
        containerGerador.style.maxWidth = "800px"
    } else {
        containerGerador.style.minWidth = "400px"
        containerGerador.style.maxWidth = "400px"
       
    }
})

btnCopia.addEventListener('click',()=>{
    navigator.clipboard.writeText(exibicaoSenha.innerHTML)
})


  