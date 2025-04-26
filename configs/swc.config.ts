export const swcConfig = {
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: true,
      decorators: true
    },
    transform: {
      react: {
        runtime: 'automatic',
      },
    }
  },
  module: {
    type: 'es6'
  }
};
