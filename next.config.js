/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	webpack: (webPackConfig, { isServer }) => {
		const newConfig = { ...webPackConfig };
		newConfig.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						ref: false,
						runtimeConfig: false,
						icon: true,
						dimensions: true,
						native: false,
						expandProps: 'end',
						svgo: true,
						titleProp: true,
					},
				},
			],
		});
		newConfig.resolve.fallback = {
			...newConfig.resolve.fallback,
			...(isServer
				? {}
				: {
						fs: false,
						child_process: false,
						request: false,
						net: false,
						worker_threads: false,
						tls: false,
				  }),
		};

		return newConfig;
	},
	devIndicators: {
		buildActivityPosition: 'bottom-right',
	},
	i18n,
	trailingSlash: true,
	redirects: async () => {
		return [
			{
				source: '/',
				destination: '/welcome',
				permanent: false,
			},
		];
	},
};
