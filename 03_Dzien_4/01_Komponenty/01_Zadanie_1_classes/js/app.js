import React from "react";
import ReactDOM from "react-dom";
import { StopperWithTimer } from "./components/Stopper";

const App = () => (
  <div>
    <StopperWithTimer>czas start</StopperWithTimer>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
//
// // HOF (higher-order-function)
//
// const sum = (fn, a, b) => fn(a, b);
//
// const fCF = (a, b) => a + b; // first class function
//
// console.log(sum(fCF, 5, 6));
// console.log(sum(fCF, 5, 60));
//
// function sum(a, b) {
//     return a + b;
// }
//
// const result = sum(10, 20);
//
// console.log(result);
//
// // Clojures (domknięcia)
//
// function outer() {
//     let secret = "pa$$w0rd";
//
//     function inner() {
//         console.log(secret);
//     }
//
//     return inner;
// }
//
// const someFunction = outer();
//
// // function someFunction = inner() { console.log(secret) }
//
// someFunction();
//
// // Currying
//
// function sum(a, b, c) {
//     return a + b + c;
// }
//
// console.log(sum(10, 20, 30));
//
// function curryingSum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }
//
// console.log(curryingSum(10)(20)(30));
//
// const curryingSumFatArrow = (a) => (b) => (c) => a + b + c;
//
// console.log(curryingSumFatArrow(10)(20)(40));
//
// const addTo20 = curryingSumFatArrow(20);
//
// console.log(addTo20(10)(15));
// console.log(addTo20(10)(30));
//
// const addTo30 = addTo20(10);
//
// console.log(addTo30(50));
