console.log('Desafio Classificador de nível de Herói')

let lista = [['Homem de Ferro', 'Rulk', 'Thor', 'Capitão América'], 
             [7500, 10340, 8050, 9270]
            ]

for (let i = 0; i < lista[0].length; i++) {
   let heroi = lista[0][i]
   let xp = lista[1][i]
   let nivel = ' '

   if (xp <= 1000) {
    nivel = 'Ferro'
   } else if (xp > 1000 && xp <= 2000) {
    nivel = 'Bronze'
   } else if (xp > 2000 && xp <= 5000) {
    nivel = 'Prata'
   } else if (xp > 6000 && xp <= 7000) {
    nivel = 'Ouro'
   } else if (xp > 7000 && xp <= 8000) {
    nivel = 'Platina'
   } else if (xp > 8000 && xp <= 9000) {
    nivel = 'Ascendente'
   } else if (xp > 9000 && xp <= 10000) {
    nivel = 'Imortal'
   } else if (xp >= 10001) {
    nivel = 'Radiante'
   }

   console.log(`O Herói de nome ${heroi} tem xp de valor ${xp} e está no nível ${nivel}`)
    
}

console.log('Fim do Programa!')





