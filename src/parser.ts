class Parser {
  parse() {
    return {
      type: "Program",
      body: {
        type: "NumericLiteral",
        value: 1450,
      },
    }
  }
}

export { Parser }
