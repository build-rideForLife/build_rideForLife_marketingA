const gulp = require('gulp'); 
const cleanCSS = require('gulp-clean-css')

gulp.task('cssCleanUp', function () {
    return gulp.src('./src/css/index.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/css'));
}); 

// gulp.task('test', function () {
//     console.log('Gulp js is running!'); 
// }); 