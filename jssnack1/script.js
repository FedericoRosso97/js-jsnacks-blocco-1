
const numeri=[];
for(i=0;i<10;i++){
    let Numero=parseInt(prompt('inserisci un numero!'));
    numeri.push(Numero);
    let numero=parseInt(numeri[0]);
    let blocknotes=Numero+numero;
    numeri.push(blocknotes);
    console.log(numeri);
}
