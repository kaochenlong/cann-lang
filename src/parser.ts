import { parseProgram } from "./parser/program.ts"
import { AST } from "./types.ts"

function Parser({ input }: { input: string }): AST {
  return parseProgram({ input })
}

export { Parser }
