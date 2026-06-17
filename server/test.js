const request = require("supertest");

// kanduiro 3la l'server li khddam f localhost:5000 (matbadalch server.js)
const baseURL = "http://localhost:5000";

describe("API Bibliothèque - Tests d'intégration", () => {

  // ===== GET /api/livres =====
  describe("GET /api/livres", () => {
    it("devrait retourner le statut HTTP 200", async () => {
      const res = await request(baseURL).get("/api/livres");
      expect(res.statusCode).toBe(200);
    });

    it("devrait retourner un tableau JSON de livres", async () => {
      const res = await request(baseURL).get("/api/livres");
      expect(res.headers["content-type"]).toMatch(/json/);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it("chaque livre devrait avoir un titre et un auteur", async () => {
      const res = await request(baseURL).get("/api/livres");
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty("titre");
      expect(res.body[0]).toHaveProperty("auteur");
    });

    it("ne devrait retourner que les livres disponibles", async () => {
      const res = await request(baseURL).get("/api/livres");
      res.body.forEach((livre) => {
        expect(livre.disponible).toBe(1);
      });
    });
  });

  // ===== GET /api/livres/emprunts?email= =====
  describe("GET /api/livres/emprunts", () => {
    it("devrait retourner 200 pour un email valide", async () => {
      const res = await request(baseURL)
        .get("/api/livres/emprunts")
        .query({ email: "jean.dupont@biblio.com" });
      expect(res.statusCode).toBe(200);
    });

    it("devrait retourner un tableau JSON d'emprunts", async () => {
      const res = await request(baseURL)
        .get("/api/livres/emprunts")
        .query({ email: "jean.dupont@biblio.com" });
      expect(res.headers["content-type"]).toMatch(/json/);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it("les emprunts devraient contenir titre, auteur et dates", async () => {
      const res = await request(baseURL)
        .get("/api/livres/emprunts")
        .query({ email: "jean.dupont@biblio.com" });
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty("titre");
      expect(res.body[0]).toHaveProperty("auteur");
      expect(res.body[0]).toHaveProperty("date_emprunt");
      expect(res.body[0]).toHaveProperty("date_retour_prevue");
    });

    it("devrait retourner 400 si l'email est manquant", async () => {
      const res = await request(baseURL).get("/api/livres/emprunts");
      expect(res.statusCode).toBe(400);
    });
  });
});