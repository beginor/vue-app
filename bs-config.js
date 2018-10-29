/** Browser Sync Config */
module.exports = {
    /**  files to watch */
    files: [
        'dist/**/*.(html|js|css|png)'
    ],
    server: {
        baseDir: 'dist',
        directory: true,
        index: 'index.html'
    },
    open: false,
    cors: false
};
