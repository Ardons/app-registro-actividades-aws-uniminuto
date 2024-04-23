import React from 'react';
//ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//CSS
import './App.css';
//importacion de componentes----------------------------------------------------------------------------------

import { ActividadesApp } from "./componentes/ActividadesApp";
import { BarraNavegadora } from './componentes/BarraNavegadora';
import { LoginApp } from "./componentes/LoginApp";
import {RegistrarActividad} from "./componentes/RegistrarActividad";



//Listas de Datos-----------------------------------------------------------------------------------------------
const listUsuarios = ["Alvaro", "Camila", "Juan"];
const listActividades = [
  { text: "Visita de Campo", completed: true },
  { text: "Realizar Informe", completed: false },
  { text: "Notificacion de Resultados", completed: true },
  { text: "Reunion de Grupo", completed: false },
  { text: "Entrega de archivos", completed: false },
];

//Funcion Inicio-----------------------------------------------------------------------------------------------------
function App() {
  return (
    <React.Fragment>

      <BarraNavegadora />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginApp />}></Route>
          <Route path="/actividades" element={
            <ActividadesApp
              listUsuarios={listUsuarios}
              listActividades={listActividades}
            />
          }
          ></Route>
          <Route path="/registrar" element={<RegistrarActividad />}></Route>

        </Routes>


      </BrowserRouter>


      {/* <ActividadesApp
        listUsuarios={listUsuarios}
        listActividades={listActividades}
      />

      <LoginApp /> */}



    </React.Fragment>
  );
}

export default App;
