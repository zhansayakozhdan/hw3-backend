import { Router } from "express";
import { createUser, getUserById, getUsers } from "../services/users";

const router = Router();

//все апи которые я здесь обьявлю будут доступны как 
// /api/users/
router.get('/', getUsers);

// /api/users/123
router.get('/:id', getUserById);

// /api/users/
router.post('/', createUser);

export default router;