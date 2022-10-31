import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import UserInput from "./containers/UserInput";
import Articles from "./containers/Articles";

import ReduxHooksExample from './components/ReduxHooksExample';

const App = () => (
  <div>
    <Provider store={store}>
      <UserInput/>
      <Articles/>
      <ReduxHooksExample />
    </Provider>
  </div>
);


ReactDOM.render(<App/>, document.getElementById("root"));

//
// import { createContext } from "react";
//
// const { Provider, Consumer } = createContext("John");
//
// // const { Provider2, Consumer2 } = createContext("light");
//
// const ThemeProvider = createContext("light"); // ThemeProvider.Provider ThemeProvider.Consumer
//
// function Header() {
//     return (
//         <>
//             <h1>Header</h1>
//             <SubHeader />
//         </>
//     );
// }
//
// function SubHeader() {
//     return (
//         <>
//             <h2>SubHeader</h2>
//             <Consumer>{(value) => <p>Nazwa uzytkownika: {value}</p>}</Consumer>
//         </>
//     );
// }
//
// function Main() {
//     return (
//         <>
//             <Consumer>{(value) => <p>Nazwa uzytkownika: {value}</p>}</Consumer>
//             <h1>Main</h1>
//         </>
//     );
// }
//
// function Footer() {
//     return (
//         <>
//             <Consumer>{(value) => <p>Nazwa uzytkownika: {value}</p>}</Consumer>
//             <h1>Footer</h1>
//         </>
//     );
// }
//
// export default function App() {
//     return (
//         <>
//             <Provider value="Mike">
//                 <Header />
//                 <Main />
//             </Provider>
//             <Footer />
//         </>
//     );
// }
