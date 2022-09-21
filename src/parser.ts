import { parseLiteral } from "./parser/literal.ts"

function Parser(input: string): any {
  return parseLiteral(input)
}

export { Parser }
