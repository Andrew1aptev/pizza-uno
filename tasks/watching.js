import gulp from "gulp";
import browserSync from "browser-sync";
import styles from "./styles.js";
import scripts from "./scripts.js";
import images from "./images.js";

export default function watchingAndReloading() {
    browserSync.init({
        server: {
            baseDir: "src/",
        }
    });
    // Наблюдение за HTML-файлами
    gulp.watch(["./src/**/*.html"]).on('change', browserSync.reload);

    // Наблюдение за SCSS-файлами, компиляция и перезагрузка браузера
    gulp.watch(["./src/scss/**/*.scss"],
        function stylesCompilation() {
           return styles().on('change', browserSync.reload)
        });

    // Наблюдение за JS-файлами (!кроме main.min.js), компиляция/обработка и перезагрузка браузера
    gulp.watch(["./src/js/**/*.js", "!./src/js/main.min.js"],
        function scriptsCompilation() {
            return scripts()
        });

    gulp.watch(["./src/images/src"],
        function imagesCompressing() {
            return images()
        });
}