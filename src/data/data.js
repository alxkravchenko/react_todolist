import { v1 } from 'uuid';

export const appData = {
	todoBlocks: [
		{
			id: v1(),
			list_title: 'Выучить технологии',
			list: [
				{
					id: v1(),
					title: 'HTML',
					isDone: true,
				},
				{
					id: v1(),
					title: 'CSS',
					isDone: true,
				},
				{
					id: v1(),
					title: 'JS',
					isDone: true,
				},
				{
					id: v1(),
					title: 'React',
					isDone: false,
				},
			]
		},
		{
			id: v1(),
			list_title: 'Посмотреть фильмы',
			list: [
				{
					id: v1(),
					title: 'Hangover',
					isDone: true,
				},
				{
					id: v1(),
					title: 'Interstellar',
					isDone: true,
				},
				{
					id: v1(),
					title: 'Batman',
					isDone: true,
				},
				{
					id: v1(),
					title: 'Joker',
					isDone: true,
				},
			]
		},
	]
}