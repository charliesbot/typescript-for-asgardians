// Control flow
// 1) Create a Union for Payment methods
// 2) Use a switch to branch the types
//    - Discriminant union
// 3) Could you force to use all the options available in Discriminant Union?

interface Cash {
  kind: "cash";
}

interface PayPal {
  kind: "paypal";
  email: string;
}

interface CreditCard {
  kind: "credit";
  cardNumber: string;
  securityCode: string;
}

const processPayment = args => {};
