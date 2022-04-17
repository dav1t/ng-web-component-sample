const fs = require('fs-extra');
const concat = require('concat');
var brotli = require('brotli');

build = async () =>{
    console.log('Building component...');
    const files = [
        './dist/ng-web-components/runtime.js',
        './dist/ng-web-components/polyfills.js',
        './dist/ng-web-components/main.js'
      ];
    
      await fs.ensureDir('timer');
      await concat(files, 'timer/timer.js');
      res = brotli.compress(fs.readFileSync('timer/timer.js'), {
        mode: brotli.MODE_GENERIC,
        quality: 11,
        lgwin: 22
      });

      fs.writeFileSync('timer/timer.js.br', res);
}
build();