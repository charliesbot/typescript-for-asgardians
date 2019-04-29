const creditCard = {
  kind: "credit",
  cardNumber: 123456789,
  securityCode: 456
};

function prop(obj, key) {
  return obj[key];
}

const value = prop(creditCard, "securityCode");
