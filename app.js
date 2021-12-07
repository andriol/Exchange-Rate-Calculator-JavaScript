API_KEY = "Your_api_key_here";

const baseCurrency = document.getElementById("base-currency");
const baseAmount = document.getElementById("number-one");
const targetCurrency = document.getElementById("target-currency");
const targetAmount = document.getElementById("number-two");
const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

function currencyConversion() {
  const currency_base = baseCurrency.value;
  const currency_target = targetCurrency.value;
  BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${currency_base}/${currency_target}`;

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.conversion_rate;

      rateElement.innerText = `1 ${data.base_code} = ${rate} ${data.target_code} `;
      targetAmount.value = (baseAmount.value * rate).toFixed(2);
    });
}
// updates currencies
baseCurrency.addEventListener("change", currencyConversion);
targetCurrency.addEventListener("change", currencyConversion);

//updates the input values
baseAmount.addEventListener("input", currencyConversion);
targetAmount.addEventListener("input", currencyConversion);

// swap button
swap.addEventListener("click", function () {
  let temp = baseCurrency.value;
  baseCurrency.value = targetCurrency.value;
  targetCurrency.value = temp;
  currencyConversion();
});
currencyConversion();
