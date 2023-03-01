import React, { useState } from 'react';
import { appData } from '../../data/data';
import Todolist from '../todolist/Todolist';

import './Main.scss';



const Main = (props) => {
	const [todoBlocks, setTodoBlocks] = useState(appData.todoBlocks)

	return (
		<main className="main">
			<div className="main_in">
				<h2 className="main__title">Задачи</h2>
				<div className="main__grid">
					{
						todoBlocks.map((item) => {
							return <Todolist todoBlockData={item} key={item.id}></Todolist>
						})
					}
				</div>
			</div>
		</main>
	);
};

export default Main;
