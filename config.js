System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  transpiler: 'babel',
  babelOptions: {
    'optional': [
      'runtime'
    ]
  },
  paths: {
    'github:*': 'jspm_packages/github/*',
    'npm:*': 'jspm_packages/npm/*'
  },

  map: {
    'babel': 'npm:babel-core@5.8.22',
    'babel-runtime': 'npm:babel-runtime@5.8.20',
    'bluebird': 'npm:bluebird@2.9.34',
    'core-js': 'npm:core-js@1.1.0',
    'lodash': 'npm:lodash@4.17.10',
    'github:jspm/nodelibs-process@0.1.1': {
      'process': 'npm:process@0.10.1'
    },
    'npm:babel-runtime@5.8.20': {
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:bluebird@2.9.34': {
      'process': 'github:jspm/nodelibs-process@0.1.1'
    },
    'npm:core-js@1.1.0': {
      'fs': 'github:jspm/nodelibs-fs@0.1.2',
      'process': 'github:jspm/nodelibs-process@0.1.1',
      'systemjs-json': 'github:systemjs/plugin-json@0.1.0'
    }
  }
});
