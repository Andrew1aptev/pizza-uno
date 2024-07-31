import gulp from "gulp";

// импортируем таски оттуда где они находится
import styles from "./tasks/styles.js";
import scripts from "./tasks/scripts.js";
import watching from "./tasks/watching.js";
import images from "./tasks/images.js";
import fonts from "./tasks/fonts.js";
import building from "./tasks/build.js";
import clean from "./tasks/clean.js";

// экспортируем отдельные задачи
// можно запустить отдельные задачи - gulp имяЗадачи
// (например gulp styles)
export {
    styles,
    scripts,
    watching,
    images,
    fonts,
    clean,
    building,
}

// запуск сборки проекта - gulp build
export let build;
build = gulp.series(clean, building)

// запуск режима разработки - gulp dev
export let dev;
dev = gulp.parallel(styles, scripts, images, watching);
