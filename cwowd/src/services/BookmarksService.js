import Api from '@/services/Api'

export default {
  // eslint-disable-next-line
  index(bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  post(bookmark) {
    return Api().post('bookmarks', bookmark)
  },
  delete(bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
