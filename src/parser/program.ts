import { parseLiteral } from "./literal.ts"

function parseProgram({ input }: { input: string }) {
  return {
    type: "Program",
    body: parseLiteral({ input }),
  }
}

export { parseProgram }
