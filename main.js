let apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let apiKey= "b6d60acc3798179f8ae98b35a6c49728"
let search = document.querySelector("input")
let searchBtn = document.querySelector("button")
let imgtemp = document.querySelector(".imgtemp")


async function checkWeather (city){
    let response= await fetch(apiUrl + city +`&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)
    document.querySelector(".country").innerHTML =data.sys.country 
    document.querySelector(".city").innerHTML =data.name 
    document.querySelector(".temperature").innerHTML =Math.round(data.main.temp ) +"<sup>o</sup> C"


    let NewDiv= document.createElement("div")
    NewDiv.classList.add("card")
    if(data.main.temp <="5"){
        NewDiv.innerHTML = `
        <img src="image/F.gif">
        `
    }else if(data.main.temp >="6" && data.main.temp <="20"){
        NewDiv.innerHTML = `
        <img src="image/c.gif">
        `
    }else if(data.main.temp >="21"){
        NewDiv.innerHTML = `
        <img src="image/h.gif">
        `
}
imgtemp.appendChild(NewDiv)
}
searchBtn.addEventListener("click" , ()=>{
    checkWeather(search.value) 
})

search.addEventListener("click", ()=> {
    imgtemp.innerHTML= `""`
    document.querySelector(".country").innerHTML ="" 
    document.querySelector(".city").innerHTML =""
    document.querySelector(".temperature").innerHTML = ""
})



 let currencyData = {
    "base": "USD",
    "rate": {
      "AED": 3.67219,
      "AFN": 70.40118,
      "ALL": 95.27112,
      "AMD": 403.3088,
      "ANG": 1.78718,
      "AOA": 825.50167,
      "ARS": 812.30735,
      "AUD": 1.48919,
      "AWG": 1.80945,
      "AZN": 1.70557,
      "BAM": 1.79038,
      "BBD": 1.99916,
      "BDT": 109.63311,
      "BGN": 1.79376,
      "BHD": 0.37616,
      "BIF": 2850.16041,
      "BMD": 0.999,
      "BND": 1.32822,
      "BOB": 6.90978,
      "BRL": 4.87432,
      "BSD": 1.00188,
      "BTN": 83.52283,
      "BWP": 13.50302,
      "BZD": 2.01479,
      "CAD": 1.33633,
      "CDF": 2661.58709,
      "CHF": 0.85043,
      "CLF": 0.02377,
      "CLP": 889.78266,
      "CNH": 7.16158,
      "CNY": 7.14004,
      "COP": 3886.62169,
      "CUP": 23.94328,
      "CVE": 100.78159,
      "CZK": 22.46784,
      "DJF": 178.71532,
      "DKK": 6.81441,
      "DOP": 58.4685,
      "DZD": 134.9382,
      "EGP": 30.81061,
      "ERN": 15.15302,
      "ETB": 55.79999,
      "EUR": 0.91402,
      "FJD": 2.21324,
      "FKP": 0.78631,
      "GBP": 0.78631,
      "GEL": 2.67726,
      "GHS": 11.88597,
      "GIP": 0.78631,
      "GMD": 58.24535,
      "GNF": 8560.34157,
      "GTQ": 7.81774,
      "GYD": 208.93329,
      "HKD": 7.81059,
      "HNL": 24.67486,
      "HRK": 7.02202,
      "HTG": 132.4566,
      "HUF": 345.29392,
      "IDR": 15498.12858,
      "ILS": 3.67721,
      "INR": 83.07778,
      "IQD": 1307.9905,
      "IRR": 42012.72253,
      "ISK": 137.7068,
      "JMD": 154.41907,
      "JOD": 0.70871,
      "JPY": 144.6059,
      "KES": 157.04693,
      "KGS": 89.15755,
      "KHR": 4090.70108,
      "KMF": 452.00824,
      "KPW": 899.9654,
      "KRW": 1312.54325,
      "KWD": 0.30762,
      "KYD": 0.81901,
      "KZT": 452.31647,
      "LAK": 20632.50928,
      "LBP": 15015.56898,
      "LKR": 320.0195,
      "LRD": 188.84538,
      "LSL": 18.69629,
      "LYD": 4.79338,
      "MAD": 9.9382,
      "MDL": 17.46139,
      "MGA": 4602.51934,
      "MKD": 56.10949,
      "MMK": 2095.0887,
      "MNT": 3413.15972,
      "MOP": 7.98854,
      "MRU": 39.6254,
      "MUR": 44.43425,
      "MVR": 15.39253,
      "MWK": 1684.01271,
      "MXN": 16.87252,
      "MYR": 4.64687,
      "MZN": 63.70031,
      "NAD": 18.76447,
      "NGN": 913.99321,
      "NOK": 10.30029,
      "NPR": 132.38504,
      "NZD": 1.60135,
      "OMR": 0.38417,
      "PAB": 0.999,
      "PEN": 3.71777,
      "PGK": 3.71111,
      "PHP": 55.62064,
      "PKR": 281.47371,
      "PLN": 3.97253,
      "PYG": 7278.70825,
      "QAR": 3.64035,
      "RON": 4.54442,
      "RSD": 106.75049,
      "RUB": 90.93933,
      "RWF": 1264.44455,
      "SAR": 3.74325,
      "SCR": 14.1143,
      "SDG": 598.99745,
      "SEK": 10.26011,
      "SGD": 1.32925,
      "SHP": 0.78631,
      "SLL": 22640.04215,
      "SOS": 571.31062,
      "SRD": 36.23821,
      "SYP": 13003.2396,
      "SZL": 18.67656,
      "THB": 34.71811,
      "TJS": 10.93949,
      "TMT": 3.51096,
      "TND": 3.09135,
      "TOP": 2.32094,
      "TRY": 29.82088,
      "TTD": 6.68588,
      "TWD": 30.99445,
      "TZS": 2515.09719,
      "UAH": 38.16907,
      "UGX": 3792.22495,
      "USD": 1,
      "UYU": 39.27706,
      "UZS": 12363.33899,
      "VND": 24377.87004,
      "VUV": 117.89803,
      "WST": 2.68198,
      "XAF": 599.50069,
      "XCD": 2.69896,
      "XDR": 0.74553,
      "XOF": 599.50069,
      "XPF": 108.97811,
      "YER": 249.9827,
      "ZAR": 18.67271,
      "ZMW": 25.84733
    }
  };

  let cbtn = document.querySelector(".cbtn");
  let cinput = document.querySelector(".cinput");
  let name = document.querySelector(".cr");
    console.log(currencyData);
/*
    cbtn.addEventListener("click", function(dcdata) {
        let userCurrency = cinput.value.trim();
        let currencyRate = currencyData.rate[userCurrency];
        if (currencyRate) { 
            document.querySelector(".cr").innerHTML=dcdata
         } else {
                return "Currency rate not found";
              }
    });
    */


    cbtn.addEventListener("click", function searchCurrencyRate(currency) {
      let userCurrency = cinput.value.trim();
      if (userCurrency in currencyData.rate) {
        document.querySelector(".equal").innerHTML = currencyData.rate[userCurrency];
      } else {
        document.querySelector(".equal").innerHTML= `<h4>"Currency not found"</h4>`;
      }


 
    });

    let amount = document.getElementById("amount");
    let equa = document.getElementById("equa");
    equa.addEventListener("click", function() {
      let total = amount.value * currencyData.rate[userCurrency];
      document.getElementById("result").innerHTML = total;
    });
    


/*
    function searchCurrencyRate(currency) {
        if (currency in currencyData.rates) {
          return currencyData.rates[currency];
        } else {
          return "Currency rate not found";
        }
      }
      */

/*

(currency in currencyData.rates) {
    return currencyData.rates[currency];

  let cbtn = document.querySelector(".cbtn");
  let cinput = document.querySelector(".cinput");
  let Currency = cinput;


  searchBtn.addEventListener("click" , ()=>{
    if ( cinput.value in currencyData.rate) {
        return currencyData.rate[Currency];
      } else {
        return "Currency rate not found";
      }
  })
console.log(cinput)

*/
  /*
  cbtn.addEventListener("click", () => {
    let inputCurrency = cinput.value;
    searchCurrencyRate(inputCurrency)
  });*/

/*currency*/
/*
let currencyurl = "https://api.currencyfreaks.com/v2.0/supported-currencies"
let currencyapikey = "b0e87fb6347c413b99459385ff6bb92a" 

let currencySearch = document.querySelector(".cinput")
let csearchBtn = document.querySelector(".cbutton")
let cImgTemp = document.querySelector(".c-imgtemp")


async function checkCurrency (country){
    let response= await fetch(currencyurl + country +`&appid=${currencyapikey}`)
    var data = await response.json()
    console.log(data)
}

csearchBtn.addEventListener("click" , ()=>{
    checkCurrency(search.value) 
})*/
/*
    
let currencyurl = "https://d6wn6bmjj722w.population.io:443/1.0/countries";
let currencyapikey = "e0abd80f6emsh9ac104d354dfa91p12eec3jsn3b697fb10883";

let currencySearch = document.querySelector(".cinput");
let csearchBtn = document.querySelector(".cbtn");
let cImgTemp = document.querySelector(".c-imgtemp");

async function checkCurrency(country) {
  let response =await fetch(currencyurl + country );
  let sdata = await response.json();

  console.log(sdata);
}

csearchBtn.addEventListener("click", () => {
  checkCurrency(currencySearch.value);
});
*/