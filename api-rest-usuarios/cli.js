#!/usr/bin/env node

const axios = require("axios");
const { program } = require("commander");

const apiUrl = "http://localhost:3000";

program.version("1.0.0").description("cliente para la API REST");

program
  .command("listar")
  .alias("ls")
  .description("obtener los usuarios")
  .action(async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      console.log("usuarios:");
      if (Array.isArray(response.data)) {
        response.data.forEach((user) => {
          console.log(
            `${user.id}: ${user.nombre} ${user.apellido} (${user.correo})`
          );
        });
      } else {
        console.log("no se encontraron usuarios.");
      }
    } catch (error) {
      console.error("hubo un error al obtener los usuarios:", error.message);
    }
  });

program
  .command("eliminar <id>")
  .alias("rm")
  .description("eliminar un usuario")
  .action(async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/users/${id}`);
      console.log("usuario eliminado");
    } catch (error) {
      console.error("hubo un error al eliminar el usuario:", error.message);
    }
  });

program
  .command("crear <nombre> <apellido> <correo>")
  .description("crear un nuevo usuario")
  .action(async (nombre, apellido, correo) => {
    try {
      const response = await axios.post(`${apiUrl}/users`, {
        nombre,
        apellido,
        correo,
      });
      console.log("usuario creado:", response.data);
    } catch (error) {
      console.error("hubo un error al crear el usuario:", error.message);
    }
  });

program.parse(process.argv);
