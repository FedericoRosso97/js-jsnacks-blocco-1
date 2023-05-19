const array=[];
const Numero=prompt('inserisci un numero di 4 cifre!')


let lunghezza=Numero.length;
if (lunghezza==4){
    console.log(Numero);
    array.push(Numero);
    console.log(array);

}else{
    console.log=('NUMERO DI CIFRE ERRATO!');
}