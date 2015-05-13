module.exports = {
  test: {
    'secret': 'abimbola',
    'url' : 'mongodb://localhost/mysite-test'
  },
  production: {
    'secret' : 'ashkdi',
    'url' : 'mongodb://localhost/mysite-test'
  },
  development: {
    'secret' : 'anoda',
    'url': 'mongodb://localhost/mysite-test'
  }
}
//at file top
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
//wherever needed
mongoose.connect(database[process.env.NODE_ENV]['url']);
