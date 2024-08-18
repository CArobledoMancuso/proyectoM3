import express, { Request, Response, NextFunction } from 'express';
import ICredential from '../interface/ICredentials';

const app = express();


const authenticateUser = (req: Request<any, any, ICredential>, res: Response, next: NextFunction) => {
 const { username, password } = req.body;
  if (username === 'usuario' && password === 'contraseña') {
    next();
  } else {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }
};


app.post('/users/login', authenticateUser, (req: Request<any, any, ICredential>, res: Response) => {
  res.json({ login: true, message: 'Inicio de sesión exitoso' });
});
