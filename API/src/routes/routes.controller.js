const { query, response } = require('express');
const { Pool } = require('pg');

const conection = new Pool(
{
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "test"
});

const getAllUsers = async (req, res) =>
{
    miQuery = 'SELECT * FROM usuario';
    const response = await conection.query(miQuery);
    res.status(200).json(response.rows);
}

const getUserById = async (req, res) =>
{
    const cuil = req.params.cuil;
    propiedades = [cuil];
    myQuery = 'SELECT * FROM usuario WHERE cuil = $1';
    const response = await conection.query(myQuery, propiedades);
    res.json(response.rows);
}

const createUser = async (req, res) =>
{
    const {cuil, nombre, contraseña, correo} = (req.body);
    propiedades = [cuil, nombre, contraseña, correo];
    
    myQuery = 'INSERT INTO usuario (cuil, nombre, contraseña, correo) VALUES ($1, $2, $3, $4)'
    const response = await conection.query(myQuery, propiedades);
 
    res.json({
        menssage: 'usuario creado' 
    });
}

const deleteUser = async (req, res) =>
{
    const cuil = req.params.cuil;
    propiedades = [cuil];
    myQuery = ('DELETE FROM usuario WHERE cuil = $1');

    const response = await conection.query(myQuery, propiedades);

    res.json({
        menssage: `usuario con cuil ${cuil} eliminado`
    });
}

const updateUser = async (req, res) =>
{
    const {nombre, contrasenia, correo} = req.body;
    const cuil = req.params.cuil

    propiedades = [cuil, nombre, contrasenia, correo];

    myQuery = ('UPDATE usuario SET'
             + ' nombre = $2,'
             + ' contraseña = $3,'
             + ' correo = $4'
             + ' WHERE cuil = $1');
 
    const response = await conection.query(myQuery, propiedades);

    res.json({
        menssage: `usuario con ${cuil} actualizado`
    });
}

module.exports =
{
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}