// Type Literals
//
// 1) Let vs const -> Typescript Edition
// 2) What is a type literal?
// 3) Type literals ->
//    - Unions
//    - Set and subsets

// 1) What are the inferred types of these let variables?
let aString = "I'm a string";
let aNumber = 1;
let aBoolean = true;

// 2) What are the inferred types of these const variables?
const anotherString = "I'm a string";
const anotherNumber = 1;
const anotherBoolean = true;

// 3) Set and subsets
type True = true;
type False = false;
// type Bool = ????
