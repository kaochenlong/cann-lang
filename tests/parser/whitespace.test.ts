import { describe, it } from "https://deno.land/std@0.156.0/testing/bdd.ts"
import { expect } from "https://deno.land/x/expect@v0.2.10/mod.ts"
import { Parser } from "../../src/parser.ts"

describe("Parser", () => {
  describe("Ignore Unnecessary chars", () => {
    it("忽略不必要的空白字元", () => {
      const input = `
        1450
      `
      const result = {
        type: "Program",
        body: {
          type: "NumericLiteral",
          value: 1450,
        },
      }

      expect(Parser({ input })).toEqual(result)
    })

    it("忽略不必要的空白字元，但保留應該保留的空白", () => {
      const input = `   "hi    there"    `
      const result = {
        type: "Program",
        body: {
          type: "StringLiteral",
          value: "hi    there",
        },
      }

      expect(Parser({ input })).toEqual(result)
    })

    it("忽略註解", () => {
      const input = `
        # 這是註解
        "hello world"
        # 這也是註解
      `
      const result = {
        type: "Program",
        body: {
          type: "StringLiteral",
          value: "hello world",
        },
      }

      expect(Parser({ input })).toEqual(result)
    })
  })
})
