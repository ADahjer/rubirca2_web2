import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

// importacion propias
import NavigationBar from '../components/NavigationBar';
import { setData } from '../utils/setData';
import { saveData } from '../utils/saveData'

// importacion de componentes de bootstrap
import Container from 'react-bootstrap/Container';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';

// importacion de varias
import {Toaster, toast} from "react-hot-toast";

const Checkout = ({pedidos}) => {

  const navigate = useNavigate();

  const [usd, setUsd] = useState(0);
  const [cop, setCop] = useState(0);
  const [moneda, setMoneda] = useState(1);

  useEffect(() => {
    let total = 0;
    pedidos.forEach(pedido => {
      total += pedido.total;
    });
    setUsd(total);
    setCop(total * 5000);

  }, [moneda]);

  // funcion para manejar la cancelacion de la compra
  const onCanel = () => {
    pedidos.splice(0, pedidos.length);
    navigate('/');
  }

  // funcion para manejar el pago de la compra
  const onPay = async () => {
    let valor_total = moneda === 1 ? usd : cop;
    const divisa = moneda === 1 ? 'USD' : 'COP';
    const data = setData(pedidos, valor_total, divisa);
    toast.success('Compra realizada con exito');
    await saveData(data);
    //toast
    navigate('/');
  }

  return (
    <>
      <NavigationBar />
          <h1 className='checkout-title mt-3'>checkout</h1>
      <Container className="custom-container mt-4">
        <div className="checkout-main">
          <h2>Resumen del pedido:</h2>
            <ToggleButtonGroup type='radio' name='moneda' value={moneda}>
              <ToggleButton value={1} id="tbg-moneda-1" onClick={() => setMoneda(1)} >USD</ToggleButton>
              <ToggleButton value={2} id="tbg-moneda-2" onClick={() => setMoneda(2)} >COP</ToggleButton>
            </ToggleButtonGroup>
        </div>
        {
          pedidos.map((pedido, index) => {
            return (
              <ul key={index} className='pedido'>
                <li>Tipo de base: {pedido.tipo}</li>
                <li>Dije: {pedido.dije}</li>
                <li>Material: {pedido.material}</li>
                <li>Cantidad: {pedido.cantidad}</li>
                <li className='valor'>${moneda === 1 ? pedido.total : (pedido.total * 5000)}</li>
                <hr />
              </ul>
            );
          })
        }
        <div className='checkout-footer'>
          <div className='checkout-buttons'>
            <Button variant="success" disabled={usd === 0 ? true : false} onClick={onPay}>Pagar</Button>{' '}
            <Button variant="danger" disabled={usd === 0 ? true : false} onClick={onCanel}>Cancelar</Button>{' '}
          </div>
          <h3 className="valor mt-4">Total: ${moneda === 1 ? usd : cop}</h3>
        </div>
      </Container>

      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
};

export default Checkout;