import { assertEquals } from "https://deno.land/std@0.156.0/testing/asserts.ts"
import { add } from "../src/main.ts"

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5)
})
