// importación
/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import "./App.css";

// Función flecha o Arrow function
const App = () => {
  // Array Destructuring
  const [stack, setStack] = useState("");
  // const modificarTextoResultado = useState("");
  // const stack = modificarTextoResultado[0];
  // const setStack = modificarTextoResultado[1];

  const items = words(stack, /[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length - 1] : "0";

  // Lo que ejecuta la función
  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers
        onClickNumber={(number) => {
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={(clear) => {
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          setStack(eval(stack).toString());
        }}
      />
    </main>
  );
};

// exportación
export default App;
