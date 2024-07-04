import { Router } from "express"; // importando o express
import { createUser, getUsers, getUser, updateUser, deleteUser } from "../controllers/userController"; // importando as funções do userController
// // ID ou id = identificação do Objeto  a ser criado, alterado ou deletado.
const router = Router(); // instanciando o objeto Router do express
//Rotas de Usuario
router.get("/", getUsers); // rota para retornar todos os usuarios "root/rais"
router.get("/:id", getUser); // rota para retornar um usuario por id
router.post("/", createUser); // rota para criar um usuario
router.put("/:id", updateUser); // rota para atualizar um usuario por id
router.delete("/:id", deleteUser); // rota para deletar um usuario por id

export default router;