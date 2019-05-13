let ingressoIdoso = 60;
let ingressoCrianca = 12;

let ingressoInteiro = 50;
let ingressoMeia = 25;


console.log(idade)

// se o usuário paga metade do ingresso(criança ou idoso)
// se a idade é menor que 12 ou maior que 60

// se o usuário paga ingresso inteiro
// se o usuário tem entre 12 ou 60

if (idade <= 12 || idade >=60) {
    console.log('O valor do seu ingresso é 25 reais')
} else {
    console.log('O valor do seu ingresso é 50 reais')
}


let meusSorvetes = ["creme", "chocolate", "morango", "flocos"];
for (let sorvete = 0; sorvete < meusSorvetes.length; sorvete++) {
    console.log("Eu vou tomar sorvete de" ,meusSorvetes[sorvete], )
}

for (
    let indice = 0; 
    indice < meusSorvetes.length; 
    indice++
    ) {
    console.log("Eu vou tomar sorvete de" ,meusSorvetes[indice], )
}

//