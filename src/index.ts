import express, { Request, Response } from 'express'; // importando o express
import userRoutes from '../routes/userRoutes';
import dotenv from 'dotenv';
const app = express(); // instanciando o express
const port = process.env.PORT || 3000; // definindo a porta, para configurações do env ou padrão 3000
//Carregar as variaveis de ambiente do env
dotenv.config();
// Middlewares
app.use(express.json());
//Rotas
app.use('/api', userRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//Iniciando servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});