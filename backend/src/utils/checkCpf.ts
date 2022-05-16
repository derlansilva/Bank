export const checkCpf = (numberCpf:string) => {
    let num = numberCpf.split('')
    let cpf : number[]=[]

    num.map(item => {
        cpf.push(parseInt(item))
    })
    let cont = 0
    let comparator = 10
    for(let i = 0 ; i< cpf.length - 2; i++){
        cont += (cpf[i] * comparator)
        comparator -= 1
    }

    cont = cont *10 
    
    let resto1 = cont %11
    cont = 0
    comparator = 11
    for(let i = 0 ; i < cpf.length-1; i++){
        cont += (cpf[i] * comparator)
        comparator = comparator- 1
    }

    cont = cont * 10
    let resto2 = cont % 11
    
    if(resto1 == cpf[9] && resto2== cpf[10]){
        return true
    }else{
        return false
    }
}