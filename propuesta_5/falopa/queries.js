const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tienda_propuesta5',
  password: 'asaden2006',
  port: 5432,
})


const obtUltId = (request, response) => {
  pool.query("select MAX(id_cliente) from clientes", (error, results) => {
    if(error){
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const obtPro = (request, response) => {
  pool.query('SELECT * FROM productos', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const newClient = (request, response) => {
  const { id_pro,nombre,apellido,ciudad,codp,num_casa,tel,num_tar,cvv,ven } = request.body

  pool.query("INSERT INTO clientes (id_cliente,nombre_cliente,apellidos_cliente,ciudad_cliente,cp_cliente,num_casa_cliente,telefono_cliente,tarjeta_cliente,cvv_cliente,vencimiento_cliente) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
   [id_pro, nombre,apellido,ciudad,codp,num_casa,tel,num_tar,cvv,ven ], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.num_tar}`)
  })
}


const newSale = (request, response) => {
    const {id_ven, producto,compra,cantidad } = request.body
  
    pool.query('INSERT INTO ventas (id_venta,producto_vendido,comprador,ingresos) VALUES ($1,$2,$3,$4)', 
    [id_ven,producto,compra,cantidad], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }



const actProdu = (request, response) => {
  const id = parseInt(request.params.id)
  const { cant } = request.body

  pool.query(
    'UPDATE productos SET cantidad_producto = (cantidad_producto- $1) where id_producto = $2',
    [cant, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Producto modificado con el identificador: ${id}`)
    }
  )
}



module.exports = {
  obtPro,
  obtUltId,
  newClient,
  newSale,
  actProdu
}




























// const { Client } = require("pg");

// const client = new Client({
//     user: "postgres",
//     host: 'localhost',
//     database: 'tienda_propuesta5',
//     password: 'asaden2006',
//     port: 5432
// });

// const obtenerCat = async () => {
    
//     await client.connect();
//     const prod = await client.query('select id_producto from productos');

//     const productos = prod.rows;

//     await client.end()
//         return productos;
// };

// obtenerCat().then((productos) => {
//     let text_json = JSON.stringify(productos) 
//     console.log(text_json)
// });







