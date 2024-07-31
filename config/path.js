const pathSrc = "./src";
const pathDest = "./public";

export default {
    root: pathSrc,
    // html: {
    //     src: pathSrc + "/**/*.html",
    //     watch: pathSrc + "/**/*.html",
    //     dest: pathDest + "/public"
    // },
    images: {
        src: pathSrc + "/images/**/*.{png,jpg,jpeg,png,webp}",
        watch: pathSrc + "/images/**/*.{png,jpg,jpeg,png,webp}",
        dest: pathDest + "./images"
    },
    fonts: {
        src: pathSrc + "/fonts/**/*.ttf",
        watch: pathSrc + "/fonts/**/*.ttf",
        dest: pathDest + "/fonts/",
    },
    styles: {
        src: pathSrc + "/scss/main.scss",
        watch: pathSrc + "/scss/main.scss",
        dest: pathSrc + "/css/",
    },
    // scripts: {
    //     src: pathSrc + "/js/main.js",
    //     watch: pathSrc + "/js/main.js",
    //     dest: pathSrc + "/js/",
    // },
}