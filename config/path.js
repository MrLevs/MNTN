const pathSrc = './src';
const pathDest = './public';

export default {
    root: pathDest,

    html: {
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },

    scss: {
        src: pathSrc + '/sass/*.{sass,scss}',
        watch: pathSrc + '/sass/**/*.{sass,scss}',
        dest: pathDest + '/css'
    },

    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },

    img: {
        src: pathSrc + '/img/*.{png,jpg,jpeg,gif,svg}',
        watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
        dest: pathDest + '/img'
    },

    sprite: {
        src: pathSrc + '/img/svg/*.svg',
        watch: pathSrc + '/img/svg/*.svg',
        dest: pathDest + '/img/sprite'
    },

    font: {
        src: pathSrc + '/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/font'
    },
}