angular
	.module('scgallery')
	.service('credits', credits);

credits.$inject = ['$injector'];
function credits($injector){
	var credits = {
		comisariado:{
			title: 'Komisarioa',
			name: 'Sergio García Bayón',
			link:{
				name: 'www.scgallery.es',
				url: 'http://www.scgallery.es'
			}
		},
		designDevelop:{
			title: 'Diseinua eta garapena',
			name: 'Worköholics',
			link:{
				name: 'www.workoholics.es',
				url: 'http://www.workoholics.es'
			}
		},
		others:[
			{
				title: 'Argazkia',
				components:[
					'Fernando Sancho Yarto',
					'Sergio García'
				]
			},
			{
				title: 'Bideoa',
				components:[
					'Histeria Kolektiboa',
					'Paula Iglesias',
					'Meme Millan'
				]
			},
			{
				title: 'Musika',
				components:[
					'El hombre del viento',
					'Dj makala'
				]
			}
		]
	}

	return credits;
};