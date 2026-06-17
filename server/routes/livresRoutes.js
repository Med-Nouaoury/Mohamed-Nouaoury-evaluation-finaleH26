const express = require("express");
const router = express.Router();
const {
    getLivres,
    getLivresEmpruntesByEmail
} = require("../controllers/livresController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Livre:
 *       type: object
 *       properties:
 *         id_livre:
 *           type: integer
 *           example: 4
 *         titre:
 *           type: string
 *           example: "Harry Potter à l'école des sorciers"
 *         auteur:
 *           type: string
 *           example: "J.K. Rowling"
 *         isbn:
 *           type: string
 *           example: "9782070643028"
 *         categorie:
 *           type: string
 *           example: "Fantastique"
 *         disponible:
 *           type: integer
 *           example: 1
 *     Emprunt:
 *       type: object
 *       properties:
 *         id_livre:
 *           type: integer
 *           example: 1
 *         titre:
 *           type: string
 *           example: "Le Petit Prince"
 *         auteur:
 *           type: string
 *           example: "Antoine de Saint-Exupéry"
 *         date_emprunt:
 *           type: string
 *           format: date
 *           example: "2026-06-01"
 *         date_retour_prevue:
 *           type: string
 *           format: date
 *           example: "2026-06-15"
 */

/**
 * @swagger
 * tags:
 *   name: Bibliothèque
 *   description: Gestion des livres et des emprunts
 */

/**
 * @swagger
 * /api/livres:
 *   get:
 *     summary: Récupérer la liste des livres disponibles
 *     tags: [Bibliothèque]
 *     responses:
 *       200:
 *         description: Liste des livres disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Livre'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getLivres);

/**
 * @swagger
 * /api/livres/emprunts:
 *   get:
 *     summary: Récupérer les livres empruntés par un utilisateur
 *     tags: [Bibliothèque]
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email de l'utilisateur
 *         example: jean.dupont@biblio.com
 *     responses:
 *       200:
 *         description: Liste des emprunts de l'utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Emprunt'
 *       400:
 *         description: Email manquant
 *       500:
 *         description: Erreur serveur
 */
router.get("/emprunts", getLivresEmpruntesByEmail);

module.exports = router;