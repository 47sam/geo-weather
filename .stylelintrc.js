module.exports = {
	extends: ['@cogoport/stylelint-config'],
	rules: {
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global'],
			},
		],
	},
	overrides: [
		{
			files: ['*.scss', '**/*.scss'],
			customSyntax: 'postcss-scss',
		},
	],
};
