const creditCard = {
  kind: "credit",
  cardNumber: 123456789,
  securityCode: 456,
};

type A = {
  kind: string;
  cardNumber: number;
  securityCode: number;
};

function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const value = prop(creditCard, "securityCode");
