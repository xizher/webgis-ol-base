const typedoc = require('gulp-typedoc')
const gulp = require('gulp')

gulp.task('npx typedoc --tsconfig src/zhd/tsconfig.json', function () {
  return gulp.src(['src/zhd/src/**/*.ts']).pipe(
    typedoc({
      out: 'docs/',
      name: 'My project title',
    })
  )
})
