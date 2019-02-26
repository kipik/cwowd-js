import Api from '@/services/Api'

export default {
  index(search) {
    return Api().get('games', {
      params: {
        search: search
      }
    })
  },
  show(gameId) {
    // return Api().get('games/"+gameId+"')
    return Api().get(`games/${gameId}`)
  },
  post(game) {
    return Api().post('games', game)
  },
  put(game) {
    return Api().put(`games/${game.id}`, game)
  }
}
