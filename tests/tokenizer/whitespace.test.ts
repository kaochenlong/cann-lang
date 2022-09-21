import { describe, it } from "https://deno.land/std@0.156.0/testing/bdd.ts"
import { expect } from "https://deno.land/x/expect@v0.2.10/mod.ts"
import { Tokenizer } from "../../src/tokenizer.ts"

describe("Tokenizer", () => {
  describe("Whitespace and comment", () => {
    it("處理多餘的空白 1", () => {
      const input = `     'hello CANN'    `
      const result = {
        type: "STRING",
        value: `'hello CANN'`,
      }

      expect(Tokenizer(input).token).toEqual(result)
    })

    it("處理多餘的空白 2", () => {
      const input = `     'hello      CANN'    `
      const result = {
        type: "STRING",
        value: `'hello      CANN'`,
      }

      expect(Tokenizer(input).token).toEqual(result)
    })

    it("處理註解", () => {
      const input = `
        # 這是註解
        "hello world"
        # 這也是註解
      `
      const result = {
        type: "STRING",
        value: `"hello world"`,
      }

      expect(Tokenizer(input).token).toEqual(result)
    })
  })
})
