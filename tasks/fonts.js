import gulp from "gulp";
import ttf2woff2 from "gulp-ttf2woff2";
import fonter from "gulp-fonter-2";
import path from "../config/path.js";

// конвертация шрифтов
export default function convertingFonts() {
    return gulp.src("src/fonts/src/*.*", { encoding: false })
        .pipe(fonter({
            formats: ["woff", "ttf"]
        }))
        .pipe(gulp.src("src/fonts/*.ttf", { encoding: false }))
        .pipe(ttf2woff2())
        .pipe(gulp.dest("src/fonts/"));
}