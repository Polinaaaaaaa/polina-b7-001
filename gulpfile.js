const gulp = require("gulp");
const gulpStylelint = require('gulp-stylelint');

const lint = () => {
  return gulp
    .src('./homeworks/**/*.css')
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
}

exports.lint = lint;