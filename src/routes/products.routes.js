const { Router } = require("express");
//const { validarJWT } = require("../middleware/jwt.middleware");

const { crearProducto } = require("../controllers/products.ctrl");

const router = Router();

router.post("/",  crearProducto);

module.exports = router;