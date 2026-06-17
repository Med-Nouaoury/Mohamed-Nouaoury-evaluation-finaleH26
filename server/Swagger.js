const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Bibliothèque Numérique",
            version: "1.0.0",
            description:
                "Documentation de l'API de la bibliothèque (React + Express + MySQL). " +
                "Permet de consulter les livres disponibles et les emprunts par utilisateur.",
            contact: {
                name: "Mohamed Nouaoury",
            },
        },
        servers: [
            {
                url: "http://localhost:5000",
                description: "Serveur local",
            },
            {
                url: "https://mohamed-nouaoury-evaluation-finaleh26.onrender.com",
                description: "Serveur de production (Render)",
            },
        ],
    },
    // kanqraw les commentaires Swagger men les routes
    apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;