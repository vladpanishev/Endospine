const pathSrc = './src';
const pathDest = './dist';

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + '/html/**/*.html',
    watch: pathSrc + '/html/**/*.html',
    dest: pathDest,
  },

  scss: {
    src: pathSrc + '/sass/*.{sass,scss}',
    watch: pathSrc + '/sass/**/*.{sass,scss}',
    dest: pathDest + '/css',
  },

  js: {
    src: pathSrc + '/js/*.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js',
  },

  img: {
    src: pathSrc + '/img/*.{png,jpg,svg,jpeg,gif,webp,MP4}',
    watch: pathSrc + '/img/**/*.{png,jpg,svg,jpeg,gif,webp,MP4}',
    dest: pathDest + '/img',
  },

  font: {
    src: pathSrc + '/font/*.{eot,ttf,otf,otc,ttc,woff,woff2}',
    watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2}',
    dest: pathDest + '/font',
  },
};
