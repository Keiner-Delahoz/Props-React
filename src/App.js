import "./App.css";
import Perfiles from "./Componentes/Perfiles";
import Titulo from "./Componentes/Titulo";
import foto from "../src/assets/img/fondo.jpg";

function App() {
   const backgroundStyle = {
     backgroundImage: `url(${foto})`,
     backgroundSize: "cover",
     margin: 0,
     minHeight: "100vh",
   };

   return (
      <div className="App" style={backgroundStyle}>
        <div className=""></div>
        <Titulo/> 
        <div className="container pt-0">
          <div className="mt-4">
            <Perfiles
              nombre="Brisele Johnson"
              rol="Web Developer & Ui-Ux Designer"
              descripcion="Bootstrap, Diseño de Mockups y Prototipos Web."
              foto="26dacc7a09b226b07afa65cd4b8a0c76"
              color="success"
            />
            <Perfiles
              nombre="Gisele Smith"
              rol="Frontend Developer"
              descripcion="Destreza en React y vue, Bootstrap, Diseño de Mockups y Prototipos Web"
              foto="f29f11e05a53aa79d4dee7573c1df54f"
              color="primary"
            />
            <Perfiles
              nombre="Isabella Williams"
              rol="Backend Developer"
              descripcion="Destreza en Java, Nodejs, Arquitectura de Software, entre otros."
              foto="ddd6cf749a5c37528884509587edb6c8"
              color="danger"
            />
            <Perfiles
              nombre="Emily Jones"
              rol="FullStack Developer"
              descripcion="Destreza en Vue, React, Java, Nodejs, entre otros."
              foto="b95f7da44d62deda7dc9adc748ae6773"
              color="warning"
            />
            <Perfiles
              nombre="Alison Brown"
              rol="FullStack Seniors Developer"
              descripcion="Destreza en Vue, React, Java, Nodejs, entre otros."
              foto="8f9847e0c84357a9e632727e68b47673"
              color="info"
            />
          </div>
        </div>
      </div>
    );
 }

export default App;
