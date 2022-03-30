import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export default () => (
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
);