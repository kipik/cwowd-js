import Api from '@/services/Api'

export default {
  // eslint-disable-next-line
  index() {
    return Api().get('games')
  },
  post(game) {
    return Api().post('games', game)
  }
}
