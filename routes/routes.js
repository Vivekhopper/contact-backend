import express from "express";
import { Register, Login, auth } from "../controllers/userController.js";
import { verifyUser } from "../middleware/VerifyUser.js";
import { createContact, getContacts,getContact,updateContact ,deletContact} from "../controllers/contactController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/verify", verifyUser, auth);
// contacts routes
router.post("/add-contact",verifyUser,createContact)
router.get('/contacts',verifyUser,getContacts)
router.get('/contact/:id',verifyUser,getContact)
router.put('/update-contact/:id',verifyUser,updateContact)
router.delete('/contact/:id',verifyUser,deletContact)


export default router;
