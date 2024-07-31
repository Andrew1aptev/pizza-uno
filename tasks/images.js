import gulp from "gulp";
import size from "gulp-size";
import newer from "gulp-newer";
import sharpOptimizeImages from "gulp-sharp-optimize-images";

export default function compressingImages() {
    return gulp.src(["src/images/src/**/*.*", "!src/images/src/*.svg"])
        .pipe(newer("src/images/"))
        .pipe(sharpOptimizeImages({
            jpg_to_jpg: {
                quality: 50,
                mozjpeg: true,
            },
            jpg_to_webp: {
                quality: 50,
            },
            jpg_to_avif: {
                quality: 50,
            },
            png_to_png: {
                quality: 50,
            },
            png_to_avif: {
                quality: 50,
            },
            png_to_webp: {
                quality: 50,
            },
        }))
        .pipe(gulp.dest("src/images/"));
}