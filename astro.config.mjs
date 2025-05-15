// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
//import starlightDocSearch from '@astrojs/starlight-docsearch';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FTC-DOCS',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/isanchezv07/FTC-DOCS' }
			],
			sidebar: [
				{
					label: 'Instalación',
					items: [
						{ label: 'Android Studio', slug: 'guides/installation'},
					],
				},
				{
					label: 'Introdución',
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
						{
							label: 'OnBotJava',
							items: [
								{ label: 'Introduction', slug: 'guides/onbot/example'},
							],
						}
						/*{
							label: 'FTCLib',
							items: [
								{ label: 'Instalación', slug: 'guides/ftclib/installation'},
								{ label: 'Implementación', slug: 'guides/ftclib/implement'},
							],
						},*/
					],
					
				},
				{
					label: 'Importante',
					items: [
						{ label: 'Recursos de FIRST', slug: 'importante/links'}
					],
				}/*,
				//TODO: ********** PARTE DE RETOS **********
				{
					label: 'RETOS',
					items: [
						{ label: 'Android Studio', slug: 'retos/example'},
					],
				},*/
			],/*plugins: [
				starlightDocSearch({
				  clientOptionsModule: './src/config/docsearch.ts',
				}),
			  ],*/
		}),
	],
});
