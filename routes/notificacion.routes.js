import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const { verifySignUp } = require("../middlewares");
const Controller = require("../controllers/Notificacion.controller.js");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


  
    // Retrieve all cargos
    router.get("/notificacion",authJwt.verifyToken, Controller.findAll);


  
    module.exports = router;