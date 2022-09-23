import { nextToken } from "../tokenizer/token.ts"

function parseNumericLiteral({ input }: { input: string }) {
  const { token } = nextToken({ input })

  return {
    type: "Program",
    body: {
      type: "NumericLiteral",
      value: +token?.value,
    },
  }
}

function parseStringLiteral({ input }: { input: string }) {
  const { token } = nextToken({ input })

  return {
    type: "Program",
    body: {
      type: "StringLiteral",
      value: token?.value.slice(1, -1),
    },
  }
}

function parseLiteral({ input }: { input: string }) {
  const { token } = nextToken({ input })

  switch (token?.type) {
    case "NUMBER":
      return parseNumericLiteral({ input })
    case "STRING":
      return parseStringLiteral({ input })
    default:
      return { type: "Program", body: null }
  }
}

export { parseLiteral }
