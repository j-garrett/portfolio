import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

export default defineConfig([
  {
    extends: ['js/recommended'],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  ...compat.config({
    extends: [
      'eslint:recommended',
      'next',
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
    ],
  }),
  {
    rules: {
      'react/jsx-sort-props': 1,
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,
      'sort-keys': 1,
    },
  },
])
