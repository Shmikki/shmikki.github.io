const currencyToHTML = currency => `
    <div class="currency__card"> 
        <div class="currency__name">${currency.quantity} ${currency.iso}</div>
        <div class="currency__rate">${currency.rate} BYN</div>
    </div>
`,
currencyNames = ['USD','EUR','RUB'],
currencyBlock = document.querySelector('#currency');

fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/nationalRates')
.then(
    response => response.json()
)
.then(valuta => {
    let currencies = currencyNames.map(currencyName => valuta.rates.find(value => value.iso === currencyName));
    const html = currencies.map(currencyToHTML).join('');
    currencyBlock.innerHTML = html;
    }
)
.catch(err => console.log(err));