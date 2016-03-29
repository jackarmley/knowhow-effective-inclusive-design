var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade');


var assets = {
    styles : './public/styles/',
    markup : './public/markup/'
};

var locals = {
    title : 'Know How Talk',
    codepen : 'http://codepen.io/jackarmley/',
    demos : {
        'Guess the quote challenge' : [
            {
                'name' : 'Guess the quote',
                'url' : 'jqmNxg'
            }
        ],
        'Intro to screenreaders' : [
            {
                'name' : 'Intro to screenreaders',
                'url' : 'mPmeMY'
            }
        ],
        'Golden rule 1: Images have an aural equivalent' : [
            {
                'name' : 'Images have an aural equivilent for screenreaders',
                'url' : 'ZWLvBP'
            }
        ],
        'Golden rule 2: Links make sense out of context' : [
            {
                'name' : 'For links within a paragraph of text, their purpose can be perceived out of context',
                'url' : 'qZmJNZ'
            },
            {
                'name' : 'Accessible find out more links',
                'url' : 'BKpEJY'
            }
        ],
        'Golden rule 3: Markup is fit for purpose' : [
            {
                'name' : 'Checkbox served two ways - ARIA and native',
                'url' : 'grxpeG'
            },
            {
                'name' : 'For a keyboard-only user, only one button is actually a button',
                'url' : 'PNWgPm'
            },
            {
                'name' : 'Simple ARIA toggle',
                'url' : 'VaWvgq'
            },
            {
                'name' : 'Aria tabs',
                'url' : 'BKWgEz'
            }
        ]
    }
};

gulp.task('styles', function () {
  gulp.src(assets.styles + '**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(assets.styles));
});

gulp.task('markup', function() {

  gulp.src(assets.markup + '*.jade')
    .pipe(jade({
      locals: locals
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('server', function(){
  connect.server({
    port: 3000,
    root: './'
  });
});

gulp.task('watch',function(){
  gulp.watch(assets.styles + '**/*.scss',['styles']);
  gulp.watch(assets.markup + '**/*.jade',['markup']);
});

gulp.task('default', [
    'server',
    'styles',
    'markup',
    'watch'
]);

