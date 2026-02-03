




function calculaIMC(peso, altura) {
    return IMC = peso / (altura ** 2)

}


function Informacao() {
    console.log('informacao pegando')
    const form = document.querySelector('.form')
    const descricao = document.querySelector('.Descricao')

    function recebeEventoForm(evento) {

        console.log('evento pegando')

        evento.preventDefault();
        const nome = form.querySelector('#name')
        const sobrenome = form.querySelector('#sobrenome')
        const idade = form.querySelector('#idade')
        const altura = form.querySelector('#altura')
        const peso = form.querySelector('#peso')
        const pessoa = []
        const IMC = calculaIMC(peso.value, altura.value);
        const texto = form.querySelector('#texto')
       

        function classificacao(IMC) {
            let resultado = {
                ideal: " ",
                descricao: " "
            };

            if (IMC < 18.5) {
                resultado.ideal = "muito abaixo";
                resultado.descricao = "O vento soprou, você sumiu. Se comer um alface, o peso dobra. Tá na hora de um pratão de pedreiro!"
            } else if (IMC < 24.9) {
                resultado.ideal = "normal";
                resultado.descricao = "Tá voando baixo! O IMC tá tão bom que parece montagem. Se melhorar, estraga."
            } else if (IMC < 29.9) {
                resultado.ideal = "acima do peso";
                resultado.descricao = "É o famoso 'não sou gordo, sou fácil de ver'. A academia tá te chamando, mas o iFood tá chamando mais alto."
            } else if (IMC < 39.9) {
                resultado.ideal = "Obesidade";
                resultado.descricao = "O Adm tá grande! Se cair, causa um terremoto nível 7. O guarda-roupa já pediu arrego."
            } else if (IMC > 40) {
                resultado.ideal = "Obesidade Grave"
                resultado.descricao = "Invejosos dirão que é obesidade, eu digo que é massa gravitacional própria. Você não caminha, você desloca o espaço-tempo."
            }

            return resultado;
        }



        dados = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value,
            peso: peso.value,
            imc: IMC
        };



        pessoa.push(dados)
        console.log(pessoa)
        texto.innerHTML = `
        <fieldset>
            <h1>Dados de ${dados.nome} ${dados.sobrenome}</h1>
            <hr>            
            <p><strong>Idade:</strong>  ${dados.idade} anos</p>
            <p><strong>Altura:</strong> ${dados.altura} metro</p>
            <p><strong>Peso:</strong>   ${dados.peso} kg</p>
            <p><strong>IMC:</strong>    ${dados.imc.toFixed(2)} (${classificacao(IMC).ideal})</p>
        </fieldset>
        
        `
        descricao.innerHTML = `
        <fieldset>
            <h1>${classificacao(IMC).ideal}</h1>
            <p>${classificacao(IMC).descricao}</p>
        </fieldset>
        
        `
    }

    

    form.addEventListener('submit', recebeEventoForm)
}


