const primeiraNota = parseInt(prompt("Informe a nota antes da ajuda"))

const segundaNota = parseInt(prompt("Informe a segunda nota depois da ajuda"))


if (segundaNota > primeiraNota) { 
    const acrecimoDaDiferenca = (segundaNota - primeiraNota) / 4
    alert(`O acrecimo do BB é de ${acrecimoDaDiferenca} pontos`) 
} else {
    alert(`Nao tem acrecimo `)
    
}