let datiAnagrafici = document.getElementById("dati_anagrafici");
let kmDaPercorrere = document.getElementById("km_da_percorrere");
let etàPasseggero = document.getElementById("età_passeggero");
let bottone = document.getElementById("bottone_genera");
let bottoneAnnulla = document.getElementById("bottone_annulla")

const prezzoKM = 0.21;
let prezzoFinaleBiglietto;

bottone.addEventListener("click", () => {
  let età = parseInt(etàPasseggero.value);
  let km = parseInt(kmDaPercorrere.value);
  let prezzo = prezzoKM * km;
  let generaNumeriCarrozza = Math.round(Math.random() * (5 - 1) + 1);
  let generaNumeroCp = Math.floor(10000 + Math.random() * 90000);
  const nomePasseggero = datiAnagrafici.value;
  document.getElementById("nome_passeggero").innerHTML = nomePasseggero;
  if (età < 18) {
    prezzoFinaleBiglietto = prezzo - (prezzo * 20) / 100;
    document.getElementById("tipo_offerta").innerHTML = "Biglietto ridotto";
  } else if (età > 65) {
    prezzoFinaleBiglietto = prezzo - (prezzo * 40) / 100;
    document.getElementById("tipo_offerta").innerHTML = "Biglietto ridotto";
  } else {
    prezzoFinaleBiglietto = prezzo;
  }
  document.getElementById("valore_cp").innerHTML = generaNumeroCp;
  document.getElementById("numero_carrozza").innerHTML = generaNumeriCarrozza;
  
  document.getElementById("prezzo_biglietto").innerHTML = `${prezzoFinaleBiglietto.toFixed(2)}€`;
  let bigliettoVisibile = document.getElementById(`biglietto_container`)
  bigliettoVisibile.classList.remove("invisible")
});
bottoneAnnulla.addEventListener ("click", ()=> {
   let bigliettoInvisibile = document.getElementById("biglietto_container");
bigliettoInvisibile.classList.add("invisible");
})
