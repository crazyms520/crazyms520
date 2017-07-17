var gulp         = require('gulp');
var $ = require('gulp-load-plugins')();
// var jade         = require('gulp-jade');
// var sass         = require('gulp-sass');
// var plumber      = require('gulp-plumber');
// var postcss      = require('gulp-postcss');
// var minify = require('gulp-minify-css');
// var uglify = require('gulp-uglify');
// var gulpIf = require('gulp-if);
// var gulpIf = require('gulp-clean);
// var imageMin = require('gulp-imagemin');
var sequence = require('gulp-sequence');
var minimist       = require('minimist');
var autoprefixer   = require('autoprefixer');
var mainBowerFiles = require('main-bower-files');
var browserSync    = require('browser-sync').create();  //https://browsersync.io/docs/gulp

var envOptions = {
    string: 'env',
    default: {env: 'develop'}
}

var options = minimist(process.argv.slice(2), envOptions)

gulp.task('clean', function(){
    return gulp.src(['./tmp', './public'], {read: false})
        .pipe($.clean());
        
})

gulp.task('copyHTML', function(){
    return gulp.src('./source/**/*.html')
        .pipe(gulp.dest('./public/'));
})

gulp.task('jade',function(){
    gulp.src('./source/**/*.jade')
        .pipe($.plumber())
        .pipe($.jade({
            pretty: true
        }))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./public/'))
})

gulp.task('sass', function () {
    var pulgins = [
        autoprefixer({browsers: ['last 3 version', '>5%','ie 6']})
    ];

    return gulp.src('./source/scss/**/*.scss')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.postcss(pulgins))
        .pipe($.if(options.env === 'production', $.minifyCss()))
        .pipe($.sourcemaps.write('.'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('babel', () => {
    return gulp.src('./source/js/**/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe($.concat('all.js'))
        .pipe($.if(options.env === 'production', $.uglify({
            compress: {
                drop_console : true
            }
        })))
        .pipe($.sourcemaps.write('.'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('bower', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./tmp/vendors'));
});

gulp.task('vendorsJs', ['bower'], function() {
    return gulp.src('./tmp/vendors/**/**.js')
        .pipe($.if(options.env === 'production', $.concat('vendors.js')))
        .pipe($.uglify())
        .pipe(gulp.dest('./public/js'))
})

gulp.task('browser-sync',['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});

gulp.task('image-min', function() {
    gulp.src('./source/images/*')
        .pipe($.if(options.env === 'production',$.imagemin()))
        .pipe(gulp.dest('./public/images'))
});

gulp.task('watch', function () {
    gulp.watch('./source/scss/**/*.scss', ['sass']);
    gulp.watch('./source/**/*.jade', ['jade']);
    gulp.watch('./source/**/*.js', ['babel']);
});

gulp.task('build', sequence('clean', 'jade', 'sass', 'babel', 'vendorsJs'));

gulp.task('default',['jade', 'sass', 'babel', 'vendorsJs', 'image-min, 'browser-sync', 'watch'])