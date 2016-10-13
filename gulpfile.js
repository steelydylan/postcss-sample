var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require("gulp-cssnext");


gulp.task('css', function () {
	return gulp.src('css/src/**.css')
	.pipe(postcss([
			require('postcss-mixins'),
			require('postcss-nested'),
			require('postcss-simple-vars'),
			require('postcss-cssnext')
	]))
	.pipe(gulp.dest('css/dist/'));
});

gulp.task('default', ['css']);
