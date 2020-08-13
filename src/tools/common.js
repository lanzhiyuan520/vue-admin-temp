import elementResize from 'element-resize-detector'

const getStorage = key => localStorage.getItem(key)
const removeStroage = key => localStorage.removeItem(key)

const resizeDom = (dom,callback) => {
  let erd = elementResize();
  erd.listenTo(dom, (element) => {
    callback(element)
  });
}

export {
  getStorage,
  removeStroage,
  resizeDom
}
