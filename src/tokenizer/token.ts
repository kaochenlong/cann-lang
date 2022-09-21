import { Token } from "../types.ts"

const tokenTypes: [RegExp, string][] = [
  [/^\s+/, "WHITESPACE"],
  [/^#.*/, "COMMENT"],

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

    if (matched === null) {
      continue
    }

    if (type === "WHITESPACE" || type === "COMMENT") {
      const newInput = input.slice(matched[0].length)
      return nextToken({ input: newInput })
    }

    const newInput = input.slice(matched[0].length)

    return {
      token: {
        type: type,
        value: matched[0],
      },
      input: newInput,
    }
  }

  return { token: null, input }
}

export { nextToken }
