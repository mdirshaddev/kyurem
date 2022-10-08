module.exports = {
	/*
	 * Resolve and load @commitlint/config-conventional from node_modules.
	 * Referenced packages must be installed
	 */
	extends: ['@commitlint/config-conventional'],
	/*
	 * Any rules defined here will override rules from @commitlint/config-conventional
	 */
	rules: {
		// 'subject-case': [], // Raise error if subject is not one of the cases ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
		// 'subject-full-stop': [], // Raise error when subject full stop is used
		// 'subject-empty': [], // Raise error when subject is empty
		'header-max-length': [2, 'always', 50],
		'body-max-line-length': [2, 'always', 400],
		'type-case': [2, 'always', 'lowerCase'],
		// 'type-empty': [], // Raise error if type is empty
		'type-enum': [
			2,
			'always',
			[
				'deps',
				'config',
				'format',
				'chore',
				'ignore',
				'scripts',
				'build',
				'ci',
				'docs',
				'improvement',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
				'assets',
				'types',
				'vscode',
				'tsconfig',
				'deps',
				'deps-lock'
			]
		]
	}
};
