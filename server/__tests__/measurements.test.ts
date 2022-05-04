import request from "supertest";
import { StatusCodes } from "http-status-codes";

import app from "../src/app";
import db from "../src/db";
import {
  measurements1,
  measurements2,
  singleObject,
  missingCity,
} from "./fixtures/measurements";

const url = "/measurements/";

describe("Measurements endpoint", () => {
  it("Should return an empty collection", async () => {
    const result = await request(app).get(url);
    expect(result.status).toBe(200);
    expect(result.body).toEqual([]);
  });

  it("Content type should application/json", async () => {
    const result = await request(app).get(url);
    expect(result.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
  });
});

describe("Measurements POST methods", () => {
  it("POST method should not be allowed", async () => {
    const result = await request(app).post(url);
    expect(result.status).toBe(StatusCodes.METHOD_NOT_ALLOWED);
  });
});

describe("Measurements PUT methods", () => {
  beforeEach(() => {
    db.measurements = [];
  });

  it("PUT method should return the same object", async () => {
    const result = await request(app).put(url).send(measurements1);
    expect(result.status).toBe(StatusCodes.CREATED);
    expect(result.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
    expect(result.body).toEqual(measurements1);
    expect(result.body).toEqual(db.measurements);
  });
  it("Measurements collection should only keep the latest update", async () => {
    const result1 = await request(app).put(url).send(measurements1);
    const result2 = await request(app).put(url).send(measurements2);
    expect(result1.status).toBe(StatusCodes.CREATED);
    expect(result2.status).toBe(StatusCodes.CREATED);
    expect(result2.body).toEqual(db.measurements);
  });
});

describe("Measurements PUT validation", () => {
  beforeEach(() => {
    db.measurements = [];
  });

  it("Body should be an array of objects", async () => {
    const result = await request(app).put(url).send(singleObject);
    expect(result.status).toBe(StatusCodes.UNPROCESSABLE_ENTITY);
    expect(result.body[0].message).toContain("must be an array");
  });

  test("Missing city", async () => {
    const result = await request(app).put(url).send(missingCity);
    expect(result.status).toBe(StatusCodes.UNPROCESSABLE_ENTITY);
    expect(result.body[0].message).toContain("[0].city");
  });
});

describe("Measurements DELETE methods", () => {
  beforeEach(() => {
    db.measurements = measurements1;
  });

  it("DELETE method should clear the collection", async () => {
    const result = await request(app).delete(url);
    expect(result.status).toBe(StatusCodes.NO_CONTENT);
    expect(db.measurements).toEqual([]);
  });
});
