import { Token } from "../types.ts"

const tokenTypes: [RegExp, string][] = [
  [/^\d+/, "NUMBER"],
  [/^"[^"]*"/, "STRING"],
  [/^'[^']*'/, "STRING"],
]

function nextToken({ input }: { input: string }): { token: Token | null; input: string } {
  if (input === "") {
    return { token: null, input }
  }

  for (const [rule, type] of tokenTypes) {
    const matched = rule.exec(input)
    if (matched !== null) {
      const newInput = input.slice(matched[0].length)

      return {
        token: {
          type: type,
          value: matched[0],
        },
        input: newInput,
      }
    }
  }

  return { token: null, input }
}

export { nextToken }
