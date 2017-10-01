export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function getData(el, attrName, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + attrName, val)
  }
  return el.getAttribute(prefix + attrName)
}
