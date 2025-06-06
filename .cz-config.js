module.exports = {
  types: [
    { value: '✨ feat', name: '✨ feat:     新功能' },
    { value: '🐛 fix', name: '🐛 fix:      修复bug' },
    { value: '📚 docs', name: '📚 docs:     文档更新' },
    { value: '💄 style', name: '💄 style:    样式修改' },
    { value: '♻️ refactor', name: '♻️  refactor: 代码重构' },
    { value: '✅ test', name: '✅ test:     测试相关' },
    { value: '🚀 perf', name: '🚀 perf:     性能优化' },
    { value: '🔧 chore', name: '🔧 chore:    构建过程或工具变动' },
    { value: '⏪ revert', name: '⏪ revert:   回滚' },
  ],
  messages: {
    type: '选择提交类型:',
    scope: '选择影响范围(可选):',
    subject: '简短说明(必填):\n',
    body: '详细说明(可选):\n',
    breaking: '不兼容变更说明(可选):\n',
    footer: '关联问题(可选):\n',
    confirmCommit: '确认提交?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer', 'breaking'],
  subjectLimit: 100,
  scopes: [
    { name: 'component' },
    { name: 'style' },
    { name: 'config' },
    { name: 'test' },
  ],
}
