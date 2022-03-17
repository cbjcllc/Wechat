export const Token = (() => {
  let Token =
    JSON.parse(localStorage.getItem('lccbjc.com/wechat') || '{}').token || ''
  return {
    get: () => Token,
    set: (t: string) => (Token = t),
  }
})()
