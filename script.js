//  Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. 
//  Požaduje ulici, číslo domu, město a PSČ.

// 1. Uložte všechny údaje do vhodně pojmenovaných proměnných.

// 2. Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže

/*
<address>
  <p>Pod Stájemi 67</p>
  <p>12754 Klysnov</p>
</address>
*/

// 3. Pomocí document.body.innerHTML vložte sestavené HTML do stránky.
/*
const ulice = prompt("Zadej svou ulici: ")
const cisloDomu = prompt("Zadej číslo domu: ")
const mesto = prompt("Zadej své město: ")
const psc = prompt("Zadej psč: ")
*/

const address = {
    ulice: prompt("Zadej svou ulici: "), 
    cisloDomu: prompt("Zadej číslo domu: "),
    mesto: prompt("Zadej své město: "),
    psc: prompt("Zadej psč: "),
    
    
    }
    document.body.innerHTML += `
    <p>${address.ulice} ${address.cisloDomu}</p>
    <p>${address.psc}</p>
    <p>${address.mesto}</p>
    
    `