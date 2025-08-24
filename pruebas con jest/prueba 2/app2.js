
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};


function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    const euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}


module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
