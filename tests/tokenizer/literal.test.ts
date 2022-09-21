import { describe, it } from "https://deno.land/std@0.156.0/testing/bdd.ts"
import { expect } from "https://deno.land/x/expect@v0.2.10/mod.ts"
import { Tokenizer } from "../../src/tokenizer.ts"

describe("Tokenizer", () => {
  it("處理數字", () => {
    const input = `9527`
    const result = {
      type: "NUMBER",
      value: "9527",
    }

    expect(Tokenizer(input).token).toEqual(result)
  })

  it("處理字串", () => {
    const input = `"hello world"`
    const result = {
      type: "STRING",
      value: `"hello world"`,
    }

    expect(Tokenizer(input).token).toEqual(result)
  })

  it("處理字串", () => {
    const input = `'hello CANN'`
    const result = {
      type: "STRING",
      value: `'hello CANN'`,
    }

    expect(Tokenizer(input).token).toEqual(result)
  })
})
