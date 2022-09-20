import { Token } from "../types.ts"

function nextToken({ input }: { input: string }): { token: Token | null; input: string } {
  if (input === "") {
    return { token: null, input }
  }

  // 如果是數字的話...
  const matched = /^\d+/.exec(input)
  if (matched !== null) {
    const newInput = input.slice(matched[0].length)

    return {
      token: {
        type: "NUMBER",
        value: matched[0],
      },
      input: newInput,
    }
  }

  return { token: null, input }
}

export { nextToken }
