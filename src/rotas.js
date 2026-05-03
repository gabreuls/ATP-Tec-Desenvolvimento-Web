import { BrowserRouter, Route , Routes} from "react-router-dom";

import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import Main from './paginas/Main';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;