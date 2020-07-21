let mutations = {
  changeCollapse : (state,flag) => {
    state.isCollapse = flag
  },
  changeLang : (state,lang) => {
    state.language = lang
  }
}

export default mutations
