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
