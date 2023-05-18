
//costruisco lista invitati,
//chiedo a utente il suo nome 
//scorro l'array per confronto nome con lista invitati
//
const invitati=['mario','luigi','francesco','carolina','ester'];
const nome=prompt('scrivi il tuo nome');
let isName=false;

for(let i=0;i<invitati.length;i++){
    if (nome==invitati[i]){
       isName=true;
       
    }
}
console.log(isName)
