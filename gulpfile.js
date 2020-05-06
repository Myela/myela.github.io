var gulp        = require('gulp');
var concat      = require('gulp-concat')
var uglify      = require('gulp-terser')
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile all .scss into src/css/global.css
gulp.task('sass', function() {
    return gulp.src([
            'assets/vendor/bootstrap/bootstrap.css',

            // 'assets/vendor/icon-awesome/css/font-awesome.min.css',
            // 'assets/vendor/icon-line/css/simple-line-icons.css',
            // 'assets/vendor/icon-etlinefont/style.css',
            // 'assets/vendor/icon-line-pro/style.css',
            // 'assets/vendor/icon-hs/style.css',
            'assets/vendor/dzsparallaxer/dzsparallaxer.css',
            'assets/vendor/dzsparallaxer/dzsscroller/scroller.css',
            'assets/vendor/dzsparallaxer/advancedscroller/plugin.css',
            'assets/vendor/fancybox/jquery.fancybox.css',
            // 'assets/vendor/slick-carousel/slick/slick.css',
            'assets/vendor/animate.css',
            // 'assets/vendor/hs-megamenu/src/hs.megamenu.css',
            // 'assets/vendor/hamburgers/hamburgers.min.css',

            'assets/include/scss/unify-components.scss',
            'assets/include/scss/unify-core.scss',
            'assets/include/scss/unify-globals.scss',
            'assets/include/scss/custom/*.scss',
            'assets/vendor/swiper/animate.min.css',
            'assets/vendor/swiper/swiper.min.css',
            
            'assets/css/*.scss'
        ])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('custom.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
});

// Compile all javascript files into src/js/main.js
gulp.task('js', function() {
    return gulp.src([
            // 'node_modules/jquery/dist/jquery.min.js',
            // 'node_modules/bootstrap/dist/js/bootstrap.min.js',
            // 'node_modules/popper.js/dist/umd/popper.min.js',
            // 'node_modules/jquery-fancybox/source/js/jquery.fancybox.js',
            // 'node_modules/basicscroll/dist/basicScroll.min.js',
            'assets/vendor/jquery/jquery.min.js',
            'assets/vendor/jquery-migrate/jquery-migrate.min.js',
            'assets/vendor/popper.js/popper.min.js',
            'assets/vendor/bootstrap/bootstrap.min.js',
            'assets/vendor/hs-megamenu/src/hs.megamenu.js',
            'assets/vendor/dzsparallaxer/dzsparallaxer.js',
            'assets/vendor/dzsparallaxer/dzsscroller/scroller.js',
            'assets/vendor/dzsparallaxer/advancedscroller/plugin.js',
            'assets/vendor/masonry/dist/masonry.pkgd.min.js',
            'assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
            'assets/vendor/fancybox/jquery.fancybox.min.js',
            // 'assets/vendor/slick-carousel/slick/slick.js',
            // 'assets/vendor/revolution-slider/revolution/js/jquery.themepunch.tools.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/jquery.themepunch.revolution.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/extensions/revolution.extension.actions.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/extensions/revolution.extension.carousel.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/extensions/revolution.extension.kenburn.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/extensions/revolution.extension.layeranimation.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/extensions/revolution.extension.migration.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/extensions/revolution.extension.navigation.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/extensions/revolution.extension.parallax.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/extensions/revolution.extension.slideanims.min.js',
            // 'assets/vendor/revolution-slider/revolution/js/extensions/revolution.extension.video.min.js',
            'assets/js/hs.core.js',
            'assets/js/components/hs.header.js',
            'assets/js/helpers/hs.hamburgers.js',
            'assets/js/components/hs.tabs.js',
            'assets/js/components/hs.popup.js',
            'assets/js/components/hs.carousel.js',
            'assets/js/components/hs.go-to.js',
            'assets/vendor/swiper/swiper.min.js',

            'assets/js/custom.js'
        ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest("assets/js"))
        .pipe(browserSync.stream());
        
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./"  
    });

    gulp.watch(['assets/css/*.scss'], gulp.series('sass'));
    // gulp.watch(['assets/js/*.js'], gulp.series('js'));
    gulp.watch("*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.parallel('js','serve'));