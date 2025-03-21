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
					],
				},
				{
					label: 'Introducbión',
					items: [
						{ label: 'Partes y nombres', slug: 'guides/partes'},
						{ label: 'Lógica', slug: 'guides/logica'}
					],
				},
				{
					label: 'Programación',
					items: [
						{ label: 'Declarar', slug: 'guides/declarar'},
						{ label: 'OpModes', slug: 'guides/opmodes'},
						{ label: 'Control Avanzado', slug: 'guides/control'},
					],
				}/*,
				//TODO: ********** PARTE DE RETOS **********
				{
					label: 'RETOS',
					items: [
						{ label: 'Android Studio', slug: 'retos/example'},
					],
				},*/
			],
		}),
	],
});
