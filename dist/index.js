"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // importando o express
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)(); // instanciando o express
const port = process.env.PORT || 3000; // definindo a porta, para configurações do env ou padrão 3000
//Carregar as variaveis de ambiente do env
dotenv_1.default.config();
// Middlewares
app.use(express_1.default.json());
//Rotas
app.use('/api', userRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//Iniciando servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
