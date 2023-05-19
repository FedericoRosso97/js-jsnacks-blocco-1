
const numeri=[];
let conto=0;
for(let i=0;i<10;i++){
    let Numero=parseInt(prompt('inserisci un numero!'));
    numeri.push(Numero);
    let numero=numeri[0];
    conto=Numero+conto;
    /*numeri.push(conto);*/
    console.log(numeri);
}
console.log(conto);