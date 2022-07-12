export default () => ({
  name: 'SakuraAnime',
  pid: '78a34f3c-00f0-11ed-b939-0242ac120002',
  description: 'Plugin for the site of Sakura Anime',
  version: 'test',
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
