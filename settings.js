let fs = require('fs');

// It is cool file for start archicteture structure
const pathes = {
  src: './src',
  app: './src/app',
  assets: './src/assets'
}

const createStatus = {
  dirs: false,
  files: false,
}

const directoriesArr = [
  './src/app/_GUARDS',
  './src/app/_HELPERS',
  './src/app/_MODELS',
  './src/app/_PIPES',
  './src/app/_SERVICES',
  './src/app/_SHARED/components',
  './src/app/_SHARED/modules',
  './src/assets/fonts',
  './src/assets/images',
  './src/assets/styles',
]

const filesArr = [
  './src/app/_GUARDS/index.ts',
  './src/app/_HELPERS/index.ts',
  './src/app/_MODELS/index.ts',
  './src/app/_PIPES/index.ts',
  './src/app/_SERVICES/index.ts',
  './src/assets/styles/_vars.less',
  './src/assets/styles/common.less',
  './src/assets/styles/fonts.less',
  './src/assets/styles/modifications.less',
]

const dir = './database/temp';


if (!createStatus.dirs) {
  directoriesArr.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true
      });
    }
  });

  createStatus.dirs = true;
}

if (!createStatus.files) {
  filesArr.forEach(f => {

    fs.writeFile(f, '', function (err) {
      if (err) throw err;
      console.log(`File ${f} is created successfully.`);
    });
  });

  createStatus.files = true;
}
