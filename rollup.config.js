import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { eslint } from 'rollup-plugin-eslint';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
	input: 'src/index.tsx',
	output: {
		file: 'dist/index.js',
		globals: { 'styled-components': 'styled' },
		format: 'es'
	},
	external: [ 'react', 'styled-components' ],
	plugins: [
    // eslint(),
		replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
		}),
    typescript(),
		resolve()
	]
};
