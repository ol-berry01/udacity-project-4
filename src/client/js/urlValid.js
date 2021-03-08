const urlValid = inputURL => {
  const regex = inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)

  return regex == null ? 0 : 1
}

export { urlValid }
