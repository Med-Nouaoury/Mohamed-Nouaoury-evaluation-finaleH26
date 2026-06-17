require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const livresRoutes = require("./routes/livresRoutes");
app.use("/api/livres", livresRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
    console.log(`📖 Swagger: http://localhost:${process.env.PORT}/api-docs`);
});

module.exports = app;