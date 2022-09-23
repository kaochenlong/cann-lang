import { parseLiteral } from "./parser/literal.ts"

function Parser({ input }: { input: string }): any {
  return parseLiteral({ input })
}

export { Parser }
