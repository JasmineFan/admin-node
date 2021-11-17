const { env } = require('./env')
let dbHost
let dbUser
let dbPwd
if (env === 'dev') {
  dbHost = "localhost"
  dbUser = "root"
  dbPwd = "changeme"
} else if (env === 'prod') {
  dbHost = "120.27.133.131"
  dbUser = "root"
  dbPwd = "123456"
}
const UPLOAD_PATH = env === 'dev' ? '/javaLearn/upload' : '/root/nginx/upload'
const OLD_UPLOAD_URL = env === 'dev' ? 'https://gotoplay.xyz/epub' : 'http://www.test.studygood.top'
const UPLOAD_URL = env === 'dev' ? 'https://gotoplay.xyz' : 'https://www.test.studygood.top'
module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2,
  debug: true,
  PWD_SALT: 'admin_imooc_node',
  JWT_EXPIRED: 60 * 60,
  PRIVATE_KEY: 'abcd',
  UPLOAD_PATH,
  UPLOAD_URL,
  OLD_UPLOAD_URL,
  MIME_TYPE_EPUB: 'application/epub+zip',
  dbHost,
  dbUser,
  dbPwd
}