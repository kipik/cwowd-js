import Api from '@/services/Api'

export default {
  // eslint-disable-next-line
  register(credentials) {
    return Api().post('register', credentials)
  }
}
