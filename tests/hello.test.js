import test from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../src/hello.js";

test("returns the default hello world greeting", () => {
  assert.equal(greeting(), "Hello, world!");
});

test("returns a greeting for the provided name", () => {
  assert.equal(greeting("Ada"), "Hello, Ada!");
});

test("falls back to world for blank names", () => {
  assert.equal(greeting("   "), "Hello, world!");
});

test("returns a Spanish greeting for the provided name", () => {
  assert.equal(greeting("Ada", "es"), "Hola, Ada!");
});

test("returns a shouted English greeting", () => {
  assert.equal(greeting("Ada", undefined, true), "HELLO, ADA!");
});

test("returns a shouted Spanish greeting", () => {
  assert.equal(greeting("Ada", "es", true), "HOLA, ADA!");
});

test("returns the default Spanish greeting without a name", () => {
  assert.equal(greeting(undefined, "es"), "Hola, mundo!");
});

test("falls back to English for unknown languages", () => {
  assert.equal(greeting("Ada", "fr"), "Hello, Ada!");
});
