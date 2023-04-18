import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

// importacion de las imagenes en la carpeta assets
import cuero from "../assets/cuero.jpg";
import cuerda from "../assets/cuerda.jpg";
import matillo from "../assets/martillo.jpg";
import ancla from "../assets/ancla.jpg";
import oro from "../assets/oro.jpg";
import oroRosa from "../assets/oro-rosa.jpg";
import plata from "../assets/plata.jpg";
import niquel from "../assets/niquel.jpg";

const CreateManilla = () => {
  const tipos = { cuero, cuerda };
  const dijes = { matillo, ancla };
  const materiales = { oro, oroRosa, plata, niquel };

  // usando estados para obtener las opciones que el usuario elija de la manilla
  const [tipo, setTipo] = useState(tipos.cuero);
  const [dije, setDije] = useState(dijes.matillo);
  const [material, setMaterial] = useState(materiales.oro);
  const [cantidad, setCantidad] = useState(1);

  // funcion para manejar la seleccion de los radio buttons
  const [tipoValue, setTipoValue] = useState(1);
  const [dijeValue, setDijeValue] = useState(1);
  const [materialValue, setMaterialValue] = useState(1);
  
  // funcion para limpiar la seleccion del usuario y volver a la seleccion por defecto
  const onClear = () => {
    setTipo(tipos.cuero);
    setDije(dijes.matillo);
    setMaterial(materiales.oro);
    setCantidad(1);
    setTipoValue(1);
    setDijeValue(1);
    setMaterialValue(1);
  }

  const onContinue = () => {}

  return (
    <>
      <h1 className="manilla-title mt-2">Crea tu manilla</h1>
      <Container className="mt-4 manilla-container">

        <InputGroup className="manilla-cantidad my-3">
          <InputGroup.Text>Cantidad</InputGroup.Text>
          <FormControl type="number" min={1} value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
        </InputGroup>

        <div className="manilla-tipo">
          <h2 className="manilla-subtitle">Elige el tipo de manilla</h2>
          <div className="manilla-seccion">
            <ToggleButtonGroup type="radio" name="tipo" value={tipoValue} className="manilla-radio">
              <ToggleButton value={1} id="tbg-tipo-1" onClick={() => {setTipo(tipos.cuero); setTipoValue(1)}}>
                Cuero
              </ToggleButton>
              <ToggleButton value={2} id="tbg-tipo-2" onClick={() => {setTipo(tipos.cuerda); setTipoValue(2)}}>
                Cuerda
              </ToggleButton>
            </ToggleButtonGroup>
            <img src={tipo} alt="Tipo" />
          </div>
        </div>
        <div className="manilla-dije">
          <h2 className="manilla-subtitle">Elige el dije</h2>
          <div className="manilla-seccion">
            <ToggleButtonGroup type="radio" name="dije" value={dijeValue} className="manilla-radio">
              <ToggleButton value={1} id="tbg-dije-1" onClick={() => {setDije(dijes.matillo); setDijeValue(1)}}>martillo</ToggleButton>
              <ToggleButton value={2} id="tbg-dije-2" onClick={() => {setDije(dijes.ancla); setDijeValue(2)}}>ancla</ToggleButton>
            </ToggleButtonGroup>
            <img src={dije} alt="Dije" />
          </div>
        </div>
        <div className="manilla-material">
          <h2 className="manilla-subtitle">Elige el material</h2>
          <div className="manilla-seccion">
            <ToggleButtonGroup type="radio" name="material" value={materialValue} className="manilla-radio">
              <ToggleButton value={1} id="tbg-material-1" onClick={() => {setMaterial(materiales.oro); setMaterialValue(1)}}>Oro</ToggleButton>
              <ToggleButton value={2} id="tbg-material-2" onClick={() => {setMaterial(materiales.oroRosa); setMaterialValue(2)}}>Oro Rosa</ToggleButton>
              <ToggleButton value={3} id="tbg-material-3" onClick={() => {setMaterial(materiales.plata); setMaterialValue(3)}}>Plata</ToggleButton>
              <ToggleButton value={4} id="tbg-material-4" onClick={() => {setMaterial(materiales.niquel); setMaterialValue(4)}}>Niquel</ToggleButton>
            </ToggleButtonGroup>
            <img src={material} alt="Material" />
          </div>
        </div>

        <div className="manilla-buttons">
          <Button variant="danger" onClick={onClear}>Limpiar seleccion</Button>{' '}
          <Button variant="success">Continuar</Button>{' '}
        </div>
      </Container>
    </>
  );
};

export default CreateManilla;
