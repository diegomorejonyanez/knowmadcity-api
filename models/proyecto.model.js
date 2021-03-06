module.exports = (sequelize, Sequelize, DataTypes) => {
    const Proyectos = sequelize.define(
      "proyecto", // Model name
      {
        // Attributes
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },  
        numero: {
          type: DataTypes.STRING(10), 
          unique: false
        },
        titulo: {
            type: DataTypes.STRING(40), 
            unique: false
        },
        status: {
          type: DataTypes.ENUM('Creado','Pendiente', 'Aprobado', 'Rechazado'),  
          default:'Creado',
          unique: false
        },
        presupuesto: {
          type: DataTypes.STRING(40), 
          unique: false
        },
        proyectos_propuestos: {
          type: DataTypes.JSON, 
          unique: false
        },
        promotores: {
            type: DataTypes.JSON,
            unique: false
        },
        objetivos: { 
            type: DataTypes.JSON,
        },
        dimension_digital: { 
          type: DataTypes.JSON,
        },
        dimension_ecologica: { 
          type: DataTypes.JSON,
        },
        metas: {
            type: DataTypes.JSON,
         
        },
        descripcion_iniciativa:  {
          type: DataTypes.JSON,
          
        },
        archivo:  {
          type: DataTypes.STRING(200),
        },
        descripcion:  {
            type: DataTypes.TEXT('long'),
        },
        observaciones:  {
          type: DataTypes.TEXT('long'),
        },
        justificacion: {
            type: DataTypes.TEXT('long'),          
        },
        created_at: {
             allowNull: false,
             type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
      },
      {
        // Options
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return Proyectos;
  };
  