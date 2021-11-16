const {env} = require('./env')
const UPLOAD_PATH = env==='dev'?'/javaLearn/upload' :'root/upload/admin-upload'
const OLD_UPLOAD_URL = env==='dev'?'https://gotoplay.xyz/epub':'https://www.gotoplay.xyz'
const UPLOAD_URL = env==='dev'?'https://gotoplay.xyz':'https://www.gotoplay.xyz'
module.exports = {
    CODE_ERROR: -1,
    CODE_SUCCESS:0,
    CODE_TOKEN_EXPIRED:-2,
    debug:true,
    PWD_SALT:'admin_imooc_node',
    JWT_EXPIRED:60*60,
    PRIVATE_KEY:'abcd',
    UPLOAD_PATH,
    UPLOAD_URL,
    OLD_UPLOAD_URL,
    MIME_TYPE_EPUB:'application/epub+zip'
}