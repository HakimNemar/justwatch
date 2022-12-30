const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');
sass.compiler = require('node-sass');

function scss() {
	return gulp
		.src('./src/scss/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./src/scss'))
		.pipe(livereload());
}

exports.build = gulp.parallel(scss);

exports.default = function () {
	livereload.listen();
	gulp.watch('./src/scss/**/*.scss', scss);
	gulp.watch('./src/Components/**/*.scss', scss);
};
