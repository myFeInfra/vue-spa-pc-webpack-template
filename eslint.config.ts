import type { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';
import vueEslintParser from 'vue-eslint-parser';
import typescriptParser from '@typescript-eslint/parser';
import eslintRecommended from '@eslint/js';

const config: Linter.FlatConfig[] = [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
      parser: vueEslintParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      vue: pluginVue
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-explicit-emits': 'off',
      'vue/require-prop-types': 'off',
      'vue/require-render-return': 'off',
      'vue/script-setup-uses-vars': 'off',
      'vue/single-line-component-name': 'off',
      'vue/v-on-function-call': 'off',
      'vue/v-on-style': 'off',
      'vue/v-once': 'off',
      'vue/v-slot-style': 'off',
    }
  },
];

export default config;
