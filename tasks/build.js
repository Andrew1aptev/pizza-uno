import gulp from "gulp";

export default function building() {
    return gulp.src([
        "src/css/main.min.css",
        "src/js/main.min.js",
        "src/images/**/*.*",
        "!src/images/src/**/*",
        "src/fonts/**/*.*",
        "!src/fonts/src/**/*",
        "src/**/*.html",
    ], { base: "src" })
        .pipe(gulp.dest("./public"))
}