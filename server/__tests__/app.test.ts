import request from "supertest";
import app from "../src/app";

describe("App root endpoint", () => {
  it("should return a 200 response", async () => {
    const result = await request(app).get("/");
    expect(result.status).toBe(200);
  });

  it("Should have CORS * header", async () => {
    const result = await request(app).get("/");
    expect(result.header["access-control-allow-origin"]).toBe("*");
  });

  it("Should not have x-powered-by header", async () => {
    const result = await request(app).get("/");
    expect(result.header["x-powered-by"]).toBeUndefined();
  });
});
