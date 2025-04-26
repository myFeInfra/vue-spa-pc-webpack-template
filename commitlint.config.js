module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        '✨ feat',
        '🐛 fix',
        '📚 docs',
        '💄 style',
        '♻️ refactor',
        '✅ test',
        '🚀 perf',
        '🔧 chore',
        '⏪ revert'
      ]
    ],
    'subject-min-length': [2, 'always', 10],
    'subject-max-length': [2, 'always', 72]
  }
}
