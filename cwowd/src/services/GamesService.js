import Api from '@/services/Api'

export default {
  // eslint-disable-next-line
  index() {
    return Api().get('games')
  },
  show(gameId) {
    // return Api().get('games/"+gameId+"')
    return Api().get(`games/${gameId}`)
  },
  post(game) {
    return Api().post('games', game)
  }
}
