// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://otherdutiesasassigned.github.io',
  	base: '/docs',
	integrations: [
		starlight({
			title: 'Other Duties As Assigned',
			plugins: [
        		catppuccin({
          		// Optional: customize theme flavors and accent colors
          		dark: { flavor: 'mocha', accent: 'sky' },
          		light: { flavor: 'latte', accent: 'sky' }
        })
      ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/OtherDutiesAsAssigned/' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
