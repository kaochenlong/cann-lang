function parseNumericLiteral(input: string) {
  return {
    type: "Program",
    body: {
      type: "NumericLiteral",
      value: +input,
    },
  }
}

export { parseNumericLiteral }
