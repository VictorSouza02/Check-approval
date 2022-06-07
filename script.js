/* Get the values */

const Name = document.querySelector(".name")
const subject = prompt('Digite o nome do aluno:')

Name.textContent = subject

const score = document.querySelector(".value")
const number = prompt('Digite a nota do aluno:')

score.textContent = number
    
/* Logic */
let situation = document.querySelector(".situation")

if (number >= 6){
    situation.textContent = 'Aprovado'
    situation.style.color = 'rgb(19, 204, 19)'
} 
else{
    situation.textContent = 'Reprovado'
    situation.style.color = 'rgb(223, 14, 14)'
}
