//! saveToStorage func
//! function is used to store the Books into LocalStorage
export function saveToLocalStorage(key: string, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log('Error: ', error)
  }
}

//! saveToStorage
//! function is used to get (fetch) the Books from LocalStorage
export function getFromLocalStorage(key: string) {
  try {
    const value = JSON.parse(localStorage.getItem(key)!)
    return value
  } catch (error) {
    console.log('Error: ', error)
  }
}

//! deleteLocalStorage
//! function is used to delete the Books from LocalStorage, and convert JSON automatically
export function deleteLocalStorage(key: string) {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.log('Error: ', error)
  }
}
