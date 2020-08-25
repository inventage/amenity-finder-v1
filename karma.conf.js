/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

const sabarivka = require('karma-sabarivka-reporter');

const coverage = !!process.argv.find(arg => arg.includes('--coverage'));

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        { pattern: config.grep ? config.grep : 'test/**/*.test.js', type: 'module' },
      ],

      esm: {
        nodeResolve: true,
      },
      // you can overwrite/extend the config further
      plugins: coverage ? [sabarivka] : [],

      reporters: coverage ? ['sabarivka'] : [],

      coverageReporter: {
        include: ['src/**/*.js'],
      },
    })
  );
  return config;
};
