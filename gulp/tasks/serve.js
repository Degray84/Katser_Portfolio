// 'use strict';

// module.exports = function() {
//     $.gulp.task('serve', function() {
//         $.browserSync.init({
//             open: false,
//             server: $.config.root
//         });
//         $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
//     });
// };
'use strict';

module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            proxy: 'http://localhost:3000',
            port: 4000
        });
    });
};