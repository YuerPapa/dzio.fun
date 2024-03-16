export const seo = {
  title: 'Dzio Blog | 设计师、细节控、探索家',
  description:
    '我叫 Dzio，一名设计师，目前从事 B端系统设计工作，期待和你认识。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://dzio.fun'
      : 'http://localhost:3000'
  ),
} as const
