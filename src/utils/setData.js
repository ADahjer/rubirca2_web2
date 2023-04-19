// acomodar los datos para guardarlos en la base de datos
export const setData = (pedidos, total, divisa) => {
  let data = {}
  pedidos.forEach((pedido, i) => {
    if (divisa === 'COP') pedido.total = pedido.total * 5000;
    data = {
      ...data,
      [i]: {
        ...pedido,
        total: `${pedido.total} ${divisa}`
      }
    }
  });
  data = {...data, total: `${total} ${divisa}` }
  return data;
}