import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // Add your rule customization block here
  {
    name: 'app/vue-rule-customization',
    files: ['**/*.vue'], // Target only Vue files
    plugins: {
      vue: pluginVue, // Add the Vue plugin
    },
    rules: {
      'vue/block-lang': 'off', // Disable the vue/block-lang rule globally
    },
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
]
