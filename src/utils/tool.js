import store from 'VUEX/store'

export const toast = (str, icon) => {
  console.group('showToast')
  store.dispatch('showToast', true)
  if (icon === 'success') {
    store.dispatch('showSuccess', true)
    store.dispatch('showFail', false)
  } else {
    store.dispatch('showSuccess', false)
    store.dispatch('showFail', true)
  }
  store.dispatch('toastMsg', str)
  setTimeout(() => {
    store.dispatch('showToast', false)
  }, 1500)
  console.groupEnd()
}

export const alert = (str) => {
  console.group('showAlert')
  store.dispatch('showAlert', true)
  store.dispatch('alertMsg', str)
  setTimeout(() => {
    store.dispatch('showAlert', false)
  }, 1500)
  console.groupEnd()
}

export const open = (text) => {
  console.group('AXIOS ' + text)
}

export const close = () => {
  console.groupEnd()
}

export const formatDate = (today) => {
  let Times = new Date(today)
  let month = '' + (Times.getMonth() + 1)
  let day = '' + Times.getDate()
  let year = Times.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  let data = `${month} ${day},${year}`
  return data
}

export const formatType = (today) => {
  let Times = new Date(today)
  let month = '' + (Times.getMonth() + 1)
  let day = '' + Times.getDate()
  let year = Times.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  let data = `${month} ${day},${year}`
  return data
}
