import { describe, it } from "https://deno.land/std@0.156.0/testing/bdd.ts"
import { expect } from "https://deno.land/x/expect@v0.2.10/mod.ts"
import { Parser } from "../../src/parser.ts"

describe("Parser", () => {
  it("可以處理數字", () => {
    const input = `1450`
    const result = {
      type: "Program",
      body: {
        type: "NumericLiteral",
        value: 1450,
      },
    }

    expect(Parser(input)).toEqual(result)
  })

  it("可以處理數字", () => {
    const input = `"hello world"`
    const result = {
      type: "Program",
      body: {
        type: "StringLiteral",
        value: "hello world",
      },
    }

    expect(Parser(input)).toEqual(result)
  })
})
