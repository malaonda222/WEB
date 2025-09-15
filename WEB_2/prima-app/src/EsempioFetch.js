console.log("ISTRUZIONE 1")
let prova = "old";
setTimeout(() =>{
    prova="pippo"
    console.log("ISTRUZIONE 2" + prova);
   
},2000)
console.log("ISTRUZIONE 3" + prova);


// oppure con una promise
function getDati(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            prova="pippo"
            resolve({nome:"Rob", cognome:"Del"});
        }, 2000)
    })
}

function setProdotti(){
    return new Promise((resolve,reject)=>{
        let prodotti = 3
        if(prodotti>5){
            setTimeout(()=>{
                resolve(30);
            },2000);
        }}
    )}
console.log("ISTRUZIONE 1")
let dati = getDati()
dati.then(ris=>{
    console.log(ris)
getProdotti.then(ris=>console.log(ris))
}
)

Promise.all([getDati(), getProdotti()]).then(ris=>console.log(ris)).catch(err=>console.log(err))
console.log("ISTRUZIONE 3")

