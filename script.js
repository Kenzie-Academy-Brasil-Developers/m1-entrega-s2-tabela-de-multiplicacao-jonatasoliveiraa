function tabuada(){

    let tabela = []

    for(let i = 0; i <= 10; i++){

        tabela[i] = []
        
        for(let j = 0; j <= 10; j++){

            tabela[i][j] = [i]*[j]

        }
    }

    return tabela

}console.table(tabuada())



function tabuadaInterativa(numero){

    let tabela = []

    for(let i = 0; i <= numero; i++){

        tabela[i] = []
        
        for(let j = 0; j <= numero; j++){

            tabela[i][j] = [i]*[j]

        }
    }

    return tabela

}console.table(tabuadaInterativa(16))