let datiAnagrafici = document.getElementById("dati_anagrafici");
let kmDaPercorrere = document.getElementById("km_da_percorrere");
let etàPasseggero = document.getElementById("età_passeggero");
let bottone = document.getElementById("bottone_genera");
let body = document.getElementBy
const prezzoKM = 0.21;
let prezzoFinaleBiglietto;

bottone.addEventListener("click", () => {
  let età = parseInt(etàPasseggero.value);
  let km = parseInt(kmDaPercorrere.value);
  let prezzo = prezzoKM * km;
  if (età < 18) {
    prezzoFinaleBiglietto = prezzo - (prezzo * 20) / 100;
  } else if (età > 65) {
    prezzoFinaleBiglietto = prezzo - (prezzo * 40) / 100;
  } else {
    prezzoFinaleBiglietto = prezzo;
  }
  console.log(
    "Il prezzo del biglietto è di " + prezzoFinaleBiglietto.toFixed(2) + "€"
  );

  createResulBiglietto();
})

function createResulBiglietto(){
 
}




