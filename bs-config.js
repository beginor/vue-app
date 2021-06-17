/** Browser Sync Config */
module.exports = {
  /**  files to watch */
  files: [
    'dist/**/*.(html|js)',
    'index.html'
  ],
  server: {
    baseDir: './',
    directory: true,
    index: 'index.html'
  },
  open: false,
  cors: false
};
