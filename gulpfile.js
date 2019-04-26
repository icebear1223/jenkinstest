const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');

gulp.task('app',function(){
    return gulp.src('./app.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('serverbuild'));
});

gulp.task('controllers',function(){
    return gulp.src('./server/controllers/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('serverbuild/controllers'));
})

gulp.task('clean',function(){
    gulp.src('./serverbuild')
    .pipe(clean())
})
// gulp.task('default',['app'],()=>{
//     console.log("gulp 处理完成");
// });
gulp.task('pack',gulp.series('app','controllers'));