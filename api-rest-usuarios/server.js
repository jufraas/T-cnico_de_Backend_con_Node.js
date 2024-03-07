const express = require('express');
const jwt = require('jsonwebtoken');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const staticoDir = path.join(__dirname, 'public');

app.use(express.json());

app.get('/users', (req, res) => {
    res.send('Todos los usuarios');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Usuario con id ${userId}`);
});

app.post('/users', (req, res) => {
    res.send('Crear nuevo usuario');
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Actualizar usuario ${userId}`);
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Eliminar usuario ${userId}`);
});

app.listen(port, () => {
    console.log(`El servidor está en ejecución en http://localhost:${port}`);
});

let users = [
    { id: 1, username: 'usuario1', password: 'password1'}, 
    { id: 2, username: 'usuario2', password: 'password2'}
];

const jwt_password = 'chanchito1';

function authenticateUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password );
    if (!user) {
        return null;
    }
    return user;
}

function generateToken(user) {
    return jwt.sign({ userId: user.id }, jwt_password);
}

const server = http.createServer((req, res) => {
    const filePath = path.join(staticoDir, req.url);

    fs.exists(filePath, (exists) => {
        if (exists) {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error del servidor');
                } else {
                    res.writeHead(200);
                    res.end(data);
                }
            });
        } else {
            res.writeHead(404);
            res.end('El archivo no se encontró');
        }
    });
});
