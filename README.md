# image-resizing
This is a scalable typescript project that resizes images based on user input

# Scripts to run
"start": "nodemon src/index.ts",
"build": "npx tsc",
"jasmine": "jasmine",
"test": "npm run build && npm run jasmine",
"prettier": "prettier --config .prettierrc src/**/\*.ts --write",
"lint": "eslint src/**/_.ts --ext _.ts"
