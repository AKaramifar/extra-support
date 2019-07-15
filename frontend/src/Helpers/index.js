export const generateFilters = e => {
    var IDs
    const localStorageIds = getLocalStorageArray(e.target.name)
    if (e.target.checked) {
      IDs = localStorageIds ? localStorageIds : []
      IDs.push(e.target.value)
      localStorage.setItem(e.target.name, JSON.stringify(IDs))
    } else {
      IDs =
        localStorageIds.length === 1
          ? []
          : localStorageIds.filter(id => id !== e.target.value)
      localStorage.setItem(e.target.name, JSON.stringify(IDs))
    }
    return IDs
  }

  export const toLowerCaseIfAlpha = value => {
    return typeof value === 'string' ? value.toLowerCase() : value
  }
  export const pancakeSort = (propertyName, ascending) => {
    return (a, b) => {
      if (
        toLowerCaseIfAlpha(a[propertyName]) < toLowerCaseIfAlpha(b[propertyName])
      ) {
        return ascending ? -1 : 0
      }
      return ascending ? 0 : -1
    }
  }

  export const getLocalStorageArray = localStorageKey => {
    return localStorage.getItem(localStorageKey)
      ? JSON.parse(localStorage.getItem(localStorageKey))
      : []
  }

  export const isCheckedInLocalStorage = (localStorageKey, key) => {
    return getLocalStorageArray(localStorageKey).includes(key)
  }
