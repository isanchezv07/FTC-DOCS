// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FTC-DOCS',
			social: {
				github: 'https://github.com/isanchezv07/FTC-DOCS',
			},
			sidebar: [
				{
					label: 'Instalación',
					items: [
						{ label: 'Android Studio', slug: 'guides/installation'},
						{ label: 'Lógica', slug: 'guides/logica'},
						{ label: 'Partes y nombres', slug: 'guides/partes'},
						{ label: 'Declarar', slug: 'guides/declarar'},
						{ label: 'OpModes', slug: 'guides/opmodes'},
						{ label: 'Control Avanzado', slug: 'guides/control'},
					],
				}/*,
				{
					label: 'Reference',
					items: [
						{ label: 'Android Studio', slug: 'guides/installation' },
					],
				},*/
			],
		}),
	],
});
