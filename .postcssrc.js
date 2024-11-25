// node.js -> common.js방식
const autoprefixer = require('autoprefixer');/* node.js */
module.exports = {
  plugins : [
    autoprefixer
    /* autoprefixer 기능을 담아서 내보내기 한 것임 */
  ]
};
// ES방식 : 위와 같은 내용임
/* import autoprefixer from 'autoprefixer';
export {
  plugins : [
    autoprefixer
  ]
}; */