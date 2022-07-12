module.exports = () => ({
  onLoad() {
    // console.log('load')
  },
  onReload() {
    // console.log('reload')
  },
  onError() {
    // console.warn(err)
  },
  async onSearch(keyword) {
    return []
  },
  async onGetEpisod(mid) {
    return []
  }
})
