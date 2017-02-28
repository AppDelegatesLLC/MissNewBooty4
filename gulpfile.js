/**
 * Created by mkahn on 2/27/17.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var shell = require('gulp-shell');
var browserSync = require( 'browser-sync' ).create();

gulp.task( 'browser-sync', function () {
    browserSync.init( {
        server: {
            baseDir: "./test/"
        }
    } );
} );

gulp.task( 'serve', [ 'dark' ], function () {

    browserSync.init( {
        server: {
            baseDir: '.',
            index: 'test/index.html'
        }
    } );

    gulp.watch( "themes/**/*.scss", [ 'dark' ] );
    gulp.watch( "test/*.html" ).on( 'change', browserSync.reload );
    
} );


gulp.task('clean', function(){
    return del([ './dist/**/*']);
});

gulp.task('decustomize', function(){
    return del( [ './node_modules/bootstrap/scss/_custom.scss' ] );
});

gulp.task('emptycustom', function(){
    return gulp.src('assets/_custom.scss')
        .pipe(gulp.dest('./node_modules/bootstrap/scss/'));
});

gulp.task( 'darkcustom', function () {
    return gulp.src( 'themes/darkbooty/_custom.scss' )
        .pipe( gulp.dest( './node_modules/bootstrap/scss/' ) );
} );


gulp.task('stock', ['decustomize', 'emptycustom'], function(){
    return gulp.src('./node_modules/bootstrap/scss/**/*.scss')
        .pipe(sass.sync().on( 'error', sass.logError ) )
        .pipe(gulp.dest('./dist/stockbooty'));
});

gulp.task( 'dark', [ 'decustomize', 'darkcustom' ], function () {
    return gulp.src( './node_modules/bootstrap/scss/**/*.scss' )
        .pipe( sass.sync().on( 'error', sass.logError ) )
        .pipe( gulp.dest( './dist/darkbooty' ) )
        .pipe( browserSync.stream() );
} );

gulp.task( 'darkwatch', function(){
    return gulp.watch( 'themes/darkbooty/_custom.scss', [ 'darkcustom' ] );
});
