const { src, dest } = require('gulp'); // методы пакета GULP

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber'); // Перехват ошибок и более наглядный их вывод
const notify = require('gulp-notify'); // Уведомление об ошибке в виде всплывающих сообщений

const newer = require('gulp-newer'); // Обробатывает только те шрифты, которые ещё небыли сжаты

const fonter = require('gulp-fonter'); // Обробатывает только те шрифты, которые ещё небыли сжаты

// Font
const font = () => {
  return src(path.font.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'FONT',
          message: error.message,
        })),
      })
    )
    .pipe(newer(path.img.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.font.dest));
};

module.exports = font;
