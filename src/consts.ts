export const SITE = {
	title: 'Electronics Made Easy',
	description: 'This site is a helpful guide for my Dad. Open source to anyone to help contribute.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'docsearch',
	appId: '57H4C3T2LL',
	apiKey: 'a5ad50b3c6b7e65391d478e1d132e75a',
};docsearch

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Apple Items': [
			{ text: 'The Apple iPhone', link: 'en/introduction' },
			{ text: 'Overview', link: 'en/page-2' },
			{ text: 'Tips & Tricks', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};
