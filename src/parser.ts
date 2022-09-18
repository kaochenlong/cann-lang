class Parser {
  parse() {
    return {
      type: "Program",
      body: {
        type: "NUMBER",
        value: 1450,
      },
    }
  }
}

export { Parser }
