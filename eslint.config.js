import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.ts'],
    rules: {
      // Customize rules as needed; keep strict defaults reasonable
    },
  }
);
