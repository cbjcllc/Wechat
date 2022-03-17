export const global = {
  _nav: (to: string) => console.log('empty global nav' + to),
  nav(to: string) {
    this._nav && this._nav(to)
  },
  setNav(nav: (to: string) => void) {
    this._nav = nav
  },
}
