const db = require("../models");
const Proyectos = db.proyectos;
const Empresa = db.empresas;
const Notificacion = db.notificacion;
const User = db.user;
const Cliente = db.cliente;
const Op = db.Op;
const config = require("../config/config.js");

// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.titulo) {
    res.status(400).send({
      message: "No puede ser vacio!"
    });
    return;
  }
  const body={};
  body.numero=req.body.numero;
  body.titulo=req.body.titulo;
  body.presupuesto=req.body.presupuesto;
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.archivo= `${config.server.SERVER+filename}`;
  }
  if(req.body.proyectos_propuestos){
    body.proyectos_propuestos=req.body.proyectos_propuestos;
  }
  if(req.body.promotores){
    body.promotores=req.body.promotores;
  }
  if(req.body.objetivos){
    body.objetivos=req.body.objetivos;
  }
  if(req.body.dimension_digital){
    body.dimension_digital=req.body.dimension_digital;
  }
  if(req.body.dimension_ecologica){
    body.dimension_ecologica=req.body.dimension_ecologica;
  }
  if(req.body.meta){
    body.metas=req.body.metas; 
  }
  if(req.body.descripcion_iniciativa){
    body.descripcion_iniciativa=req.body.descripcion_iniciativa; 
  }
  body.descripcion=req.body.descripcion;
  body.justificacion=req.body.justificacion;
  body.empresa_id=req.body.empresa_id;
  body.status="Creado";
  body.elabora_id=req.userId;
  body.aprueba_id=req.body.aprueba_id;
  // Save
await Proyectos.create(body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
      });
      return;
    });
};


exports.find = async (req, res) => {

await  Proyectos.findAll({
    limit: 3000000,
    offset: 0,
    where: {
    }, 
    include: [  
      {
        model:Empresa,
        where:{ cliente_id:req.body.cliente_id}
      }
    ],
    order: [
      ['id', 'DESC'],
    ],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving books."
      });
    });
};




exports.findOne = async (req, res) => {

  await  Proyectos.findOne({
      where: {
        id :req.body.id
      }, 
      include: [  
        {
          model:Empresa,
        }
      ],
      order: [
        ['id', 'DESC'],
      ],
    })
      .then(data => {
        res.send(data);
        console.log(data);
      })
      .catch(err => {
        res.send(500).send({
          message: err.message || "Some error accurred while retrieving books."
        });
      });
  };

  exports.findEmpresas = async (req, res) => {

    await  Proyectos.findAll({
        where: {
          empresa_id :req.body.empresa_id
        }, 
        include: [  
          {
            model:Empresa,
            where: {
              cliente_id :req.body.cliente_id
            }, 
          }
        ],
        order: [
          ['id', 'DESC'],
        ],
      })
        .then(data => {
          res.send(data);
          console.log(data);
        })
        .catch(err => {
          res.send(500).send({
            message: err.message || "Some error accurred while retrieving books."
          });
        });
    };


exports.findAll = async (req, res) => {
  const id = req.userId;
await  Proyectos.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {
      uid:id
    }, // conditions
    order: [
      ['id', 'DESC'],
    ],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving books."
      });
    });
};


// Update a Book by the id in the request
exports.update = async (req, res) => {

  const id = req.body.id;
  const body={};
  body.numero=req.body.numero;
  body.titulo=req.body.titulo;
  body.presupuesto=req.body.presupuesto;
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.archivo= `${config.server.SERVER+filename}`;
  }
  if(req.body.proyectos_propuestos){
    body.proyectos_propuestos=req.body.proyectos_propuestos;
  }
  if(req.body.promotores){
    body.promotores=req.body.promotores;
  }
  if(req.body.objetivos){
    body.objetivos=req.body.objetivos;
  }
  if(req.body.meta){
    body.metas=req.body.metas; 
  }
  if(req.body.descripcion_iniciativa){
    body.descripcion_iniciativa=req.body.descripcion_iniciativa; 
  }
  if(req.body.dimension_digital){
    body.dimension_digital=req.body.dimension_digital;
  }
  if(req.body.dimension_ecologica){
    body.dimension_ecologica=req.body.dimension_ecologica;
  }
  body.descripcion=req.body.descripcion;
  body.justificacion=req.body.justificacion;
  body.empresa_id=req.body.empresa_id;
  body.elabora_id=req.userId;
  body.aprueba_id=req.body.aprueba_id;
  await Proyectos.update(body,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });
      } else {
        res.send({
          message: `No puede editar el coargo con el  el =${id}. Tal vez el cargo no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar el cargo con el id=" + id
      });
    });
};



// Update a Book by the id in the request
exports.notificar = async (req, res) => {
  console.log(req.userId);
  const id = req.body.id;
  const uid = req.userId;
  const body={};
  body.status="Pendiente";
  await Proyectos.update(body,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        const datos = {
          titulo: `Proyecto generado pendiente`,
          descripcion: `Se ha generado un nuevo proyecto pendiente`,
          origen: "",
          modulo: `/proyecto/${id}`,
          icon: "ri-calendar-line",
          color: "avatar-title bg-primary rounded-circle font-size-16",
          uid: req.body.aprueba_id,
          uidr:uid,
          canal: "",
        };
        CrearNotificacion(datos);
        res.send({
          message: "editado satisfactoriamente."
        });
        
      } else {
        res.send({
          message: `No puede editar el coargo con el  el =${id}. Tal vez el cargo no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar el cargo con el id=" + id
      });
    });
};



// Update a Book by the id in the request
exports.aprobar = async (req, res) => {
  console.log(req.userId);
  const id = req.body.id;
  const uid = req.userId;
  const body={};
  body.status="Aprobado";
  await Proyectos.update(body,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        const datos = {
          titulo: `Proyecto aprobado`,
          descripcion: `Se aprobó con exito el proyecto`,
          origen: "",
          modulo: `/proyecto/${id}`,
          icon: "ri-calendar-line",
          color: "avatar-title bg-primary rounded-circle font-size-16",
          uid: req.body.elabora_id,
          uidr:uid,
          canal: "",
        };
        CrearNotificacion(datos);
        res.send({
          message: "editado satisfactoriamente."
        });
        
      } else {
        res.send({
          message: `No puede editar el coargo con el  el =${id}. Tal vez el cargo no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar el cargo con el id=" + id
      });
    });
};


// Update a Book by the id in the request
exports.rechazar = async (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const uid = req.userId;
  const body={};
  body.status="Rechazado";
  body.observaciones=req.body.observaciones;
  await Proyectos.update(body,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        const datos = {
          titulo: `Proyecto rechazado`,
          descripcion: `Se rechazó el proyecto acceda al link para conocer detalles`,
          origen: "",
          modulo: `/proyecto/${id}`,
          icon: "ri-calendar-line",
          color: "avatar-title bg-primary rounded-circle font-size-16",
          uid: req.body.elabora_id,
          uidr:uid,
          canal: "",
        };
        CrearNotificacion(datos);
        res.send({
          message: "editado satisfactoriamente."
        });
        
      } else {
        res.send({
          message: `No puede editar el coargo con el  el =${id}. Tal vez el cargo no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar el cargo con el id=" + id
      });
    });
};




async function CrearNotificacion(datos){
  // Save
  await  Notificacion.create(datos)
  .then( data => {
    notificar(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Book."
    });
    return;
  });
}

async function notificar(data){
await  User.findByPk(data.uid)
.then(datas => {
 console.log(datas);
 global.io.to(datas.canal).emit('cliente', data);
})
.catch(err => {
 res.status(500).send({
   message: `erro al editar el cargo= ${id}`
 });
});

}


// Delete a Book with the specified id in the request
exports.delete = async (req, res) => {

 await Proyectos.destroy({
    where: { id: req.body.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " borrado satisfactoriamente!"
        });
      } else {
        res.send({
          message: `No se pudo borrar el cargo con el id=${id}. Tal vez el cargo no existe!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo borrar el cargo con el id=" + id
      });
    });
};

