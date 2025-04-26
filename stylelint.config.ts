import type { Config } from 'stylelint';

const config: Config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen'
        ]
      }
    ],
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['url']
      }
    ],
    'string-no-newline': null,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx']
      }
    ],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
    ]
  }
};

export default config;
