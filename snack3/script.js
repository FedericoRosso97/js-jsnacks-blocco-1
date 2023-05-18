const array=[];
for(let i=0;i<6;i++){
    const numero=parseInt(prompt('inserisci un numero'));
    if(!(numero % 2==0)){
        array.push(numero);

    }
    console.log(numero);
}
console.log(array);