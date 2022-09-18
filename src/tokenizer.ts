import { isNumber } from "./helpers.ts"

type Token = {
  type: string
  value: any
}

class Tokenizer {
  private input: string
  private cursor: number

  constructor(input: string) {
    this.input = input
    this.cursor = 0
  }

  nextToken(): Token | null {
    if (this.input.length === this.cursor) {
      return null
    }

    const str = this.input.slice(this.cursor)

    // 如果是數字的話...
    if (isNumber(str[0])) {
      const matched = /\d+/.exec(str)
      if (matched !== null) {
        this.cursor += matched[0].length

        return {
          type: "NUMBER",
          value: +matched[0],
        }
      }
    }

    return null
  }
}

export { Tokenizer }
