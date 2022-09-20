import { nextToken } from "./tokenizer/token.ts"

function Tokenizer(input: string): any {
  return nextToken({ input })
}

export { Tokenizer }
