import Api from '@/services/Api'

export default {
  // eslint-disable-next-line
  register (credentials) {
    return Api().post('register', credentials)
  },
  // eslint-disable-next-line
  login (credentials) {
    return Api().post('login', credentials)
  }
}
