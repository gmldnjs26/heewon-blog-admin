module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  rules: {
    'vue/multi-word-component-names': 'off',
    // unused-imports rules,
    '@typescript-eslint/no-unused-vars': 'off',
    // 'unused-imports/no-unused-imports': 'error',
    'vue/no-multiple-template-root': 'off',
  },
}
