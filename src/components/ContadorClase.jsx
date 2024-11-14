// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const ContadorClase = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador((prevContador) => prevContador + 1);
  };

  const reducir = () => {
    setContador((prevContador) => prevContador - 1);
  };

  return (
    <div>
      <h1>Contador de clicks</h1>
      <p>conteo: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reducir}>Reducir</button>
    </div>
  );
};
// class ContadorClase extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contador: 0,
//     };
//   }

//   incrementar = () => {
//     this.setState((prevState) => ({
//       contador: prevState.contador + 1,
//     }));
//   };

//   reducir = () => {
//     this.setState((prevState) => ({
//       contador: prevState.contador - 1,
//     }));
//   };

//   render() {
//     const { contador } = this.state;
//     return (
//       <div>
//         <h1>Contador de clicks</h1>
//         <p>conteo: {contador}</p>
//         <button onClick={this.incrementar}>Incrementar</button>
//         <button onClick={this.reducir}>Reducir</button>
//       </div>
//     );
//   }
// }

export default ContadorClase;
