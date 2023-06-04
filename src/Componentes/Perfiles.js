import React from 'react';
// import foto from '../Componentes/assets/img'
const imagenes = require.context('../assets/img', true)

const Perfiles = (props) => {
   return (
      <div className='container'>
         <div className='row mt-2'>
            <div className={`card mb-3 border-${props.color} bg-transparent sparent border-5 card-custom`}>
               <div className="row g-0">
                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                     <div className='card'>
                        <img src={imagenes(`./${props.foto}.jpg`)} alt='' className="img-fluid" style={{ width: "190px", height: "190px" }} />
                     </div>
                  </div>

                  <div className="col-md-10">
                     <div className="card-body">
                        <div className='row'>
                           <div className='col'>
                              <div className={`card-header text-white bg-${props.color}`}>
                                 <h1 className="fw-bold">{props.nombre}</h1>
                              </div>
                           </div>
                        </div>
                        <div className='card-header bg-light'>
                           <h3>{props.rol}</h3>
                           <p>{props.descripcion}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Perfiles