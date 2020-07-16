const getStorage = key => localStorage.getItem(key)
const removeStroage = key => localStorage.removeItem(key)

export {
  getStorage,
  removeStroage
}
