import gulp from "gulp";
import browserSync from "browser-sync";
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import path from "../config/path.js";

const sass = gulpSass(dartSass);

// компиляция scss в css
export default function styles() {
    return gulp.src(path.styles.src, {encoding: false})
        //переименовываем получаемый файл
        .pipe(concat("main.min.css"))
        //сжимаем получаемый файл
        .pipe(sass({
            outputStyle: 'compressed',
        }, undefined))
        //указываем путь куда сохранится файл
        .pipe(gulp.dest(path.styles.dest))
        .pipe(browserSync.stream())
}