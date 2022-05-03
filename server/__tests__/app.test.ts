import request from "supertest";
import app from "../src/app";

describe("App root endpoint", () => {
  it("should return a 200 response", async () => {
    const result = await request(app).get("/");
    expect(result.status).toBe(200);
  });
});
