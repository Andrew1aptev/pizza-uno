import gulp from "gulp";
import clean from "gulp-clean";
import log from "fancy-log";

export default function cleanPublic() {
    return gulp.src("./public")
        .pipe(clean())
}