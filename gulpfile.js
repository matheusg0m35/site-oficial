var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

//Task para o sass
gulp.task('sass', function(){
	return sass('sass/*sass').pipe(gulp.dest('css'))
});
//Task default gulp
gulp.task('default', function(){
	
});