/*
Operadores logicos
&& -> AND; All expressions must return True
|| -> OR; At least one expression must return True
! -> NOT
*/

const num1 = 9
const num2 = 1

const usuario = 'arthur'
const senha = 1923192

/*
function login(usuario, senha){
    if(usuario === 'Arthur' && senha === 1923192){
        return true
    }else{
        return false
    }
}
*/

function login(usuario, senha){
    if(usuario !== 'arthur' && senha === 1923192){
        console.log('Logado')
    }else{
        console.log('Desloag')
    }

}


login(usuario, senha)