module.exports = {
  source: ['sd-input/**/*.json'],
  fileHeader: {
    autoGenerateFileHeader: () => {
      return ['Do not edit directly, this file was auto-generated'];
    },
  },
  plateforms: {
    css: {
      transFormGroup: 'css',
      buildPath: 'tokens/',
      prefix: 'figma',
      file: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            fileHeader: 'autoGenerateFileHeader',
          },
        },
      ],
    },
  },
};
