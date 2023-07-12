const {Router} = require ("express");
const {validarJWT } = require ("../middleware/jwt.middleware")
const {registrarUsuaurio, iniciarSesion, renovarToken} =require ("../controllers/auth.ctrl")
const router = Router ();

router.post ("/register", registrarUsuaurio);
router.post ("/login", iniciarSesion)
router.get ("/renew", validarJWT, renovarToken)

module.exports = router;