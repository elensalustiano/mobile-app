const removeConsecutiveSpaces = (string = ''): string => string.replace(/\s+/g,' ')

const removeSpaces = (string = ''): string => string.replace(/\s+/g,'')

export {
  removeConsecutiveSpaces,
  removeSpaces
}