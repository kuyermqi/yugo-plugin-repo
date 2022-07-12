export default () => ({
  onInstall: () => {
    console.log('installed')
  },
  onRemove: () => {
    console.log('removed')
  },
  onLoad: () => {
    console.log('load')
  },
  onReload: () => {
    console.log('reload')
  },
  onError: (err) => {
    console.warn(err)
  },
  onSearch: (keyword) => {
    console.log('search', keyword)
  },
  onGetEpisod: (mid) => {
    console.log('get episod', mid)
  },
})
