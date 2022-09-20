import { parseNumericLiteral } from "./parser/literal.ts"

function Parser(input: string): any {
  return parseNumericLiteral(input)
}

export { Parser }
