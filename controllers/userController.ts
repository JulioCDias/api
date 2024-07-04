//Operaçoes CRUD de Usuarios
import { Request, Response } from "express"; // importando o express
// ID ou id = identificação do Obejto  a ser criado, alterado ou deletado.

export const getUsers = (req: Request, res: Response) => { // função para retornar todos os usuarios
    res.send("Get all users");
};

export const getUser = (req: Request, res: Response) => { // função para retornar um usuario
    const { id } = req.params;
    res.send(`Get user ${id}`);
}

export const createUser = (req: Request, res: Response) => { // função para criar um usuario
    res.send("Create user");
}

export const updateUser = (req: Request, res: Response) => { // função para atualizar um usuario
    res.send("Update user");
}

export const deleteUser = (req: Request, res: Response) => { // função para deletar um usuario
    res.send("Delete user");
}