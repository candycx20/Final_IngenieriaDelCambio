//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const DatoModel = db.define('datos', {
     nombre: { type: DataTypes.STRING },
     telefono: { type: DataTypes.STRING },
 })

 export default DatoModel