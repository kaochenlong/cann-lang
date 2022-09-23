import { parseProgram } from "./parser/program.ts"

function Parser({ input }: { input: string }): any {
  return parseProgram({ input })
}

export { Parser }
