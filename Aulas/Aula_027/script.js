const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira){
    let nome = 'Arthur'
    console.log(`Bloco 1, ${nome}`)
    if (verdadeira){
        let nome = 'Vitor'
        console.log(`Bloco 2, ${nome}`)
    }
} 