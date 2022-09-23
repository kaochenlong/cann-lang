type Token = {
  type: string
  value: any
}

type AST = {
  type: string
  body: any[]
}

export type { Token, AST }
