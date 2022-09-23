import { AST } from "../types.ts"
import { parseLiteral } from "./literal.ts"

function parseProgram({ input }: { input: string }): AST {
  return {
    type: "Program",
    body: parseLiteral({ input }),
  }
}

export { parseProgram }
