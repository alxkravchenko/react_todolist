import React, { useState } from 'react';
import { v1 } from 'uuid';

import './Todolist.scss';

const Todolist = (props) => {
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [tasks, setTasks] = useState(props.todoBlockData.list);
	const [filter, setFilter] = useState('all');

	console.log(tasks);
	const onTitleChangeHandler = (e) => {
		setNewTaskTitle(e.currentTarget.value);
	};

	const clearTaskTitle = () => {
		setNewTaskTitle('');
	};

	const addTaskHandler = (e) => {
		e.preventDefault();
		const newTask = {
			id: v1(),
			title: newTaskTitle,
			isDone: false,
		};

		if (newTaskTitle !== '') {
			setTasks([...tasks, newTask]);
			clearTaskTitle();
		}
	};

	const onTaskDeleteHandler = (id) => {
		let resultTasks = tasks.filter((item) => {
			return item.id !== id;
		});
		setTasks(resultTasks);
	};

	const onDoneHandler = (id) => {
		let resultTasks = tasks.map((item) => {
			if (item.id === id) {
				return {
					...item,
					isDone: !item.isDone,
				};
			}
			return item
		});
		setTasks(resultTasks);
	};

	let tasksForTodolist = tasks;
	if (filter === 'completed') {
		tasksForTodolist = tasks.filter((item) => {
			return item.isDone === true;
		});
	}
	if (filter === 'active') {
		tasksForTodolist = tasks.filter((item) => {
			return item.isDone === false;
		});
	}

	const onAllFilterHandler = () => {
		setFilter('all');
	};
	const onCompletedFilterHandler = () => {
		setFilter('completed');
	};
	const onActiveFilterHandler = () => {
		setFilter('active');
	};

	return (
		<div className="todolist_w">
			<h3 className="todolist_title">{props.todoBlockData.list_title}</h3>
			<form className="todolist_form" action="#">
				<input type="text" value={newTaskTitle} onChange={onTitleChangeHandler} className="todolist_form__input" />
				<button type="submit" onClick={addTaskHandler}>
					Add
				</button>
			</form>
			<ul className="todolist">
				{tasksForTodolist.map((task) => {
					return (
						<li className="todolist__item" key={task.id}>
							<label className="todolist__field">
								<input
									type="checkbox"
									className="todolist__checkbox"
									checked={task.isDone}
									onChange={() => {
										onDoneHandler(task.id);
									}}
								/>
								<span className={task.isDone ? 'todolist__title todolist__title--done_mod' : 'todolist__title'}>{task.title}</span>
							</label>
							<div className="todolist__item_controls">
								<button
									type="button"
									onClick={() => {
										onTaskDeleteHandler(task.id);
									}}
								>
									X
								</button>
								{/* <button type="button">Edit</button> */}
							</div>
						</li>
					);
				})}
			</ul>
			<div className="todolist_filters">
				<button type="button" onClick={onActiveFilterHandler}>
					Активные
				</button>
				<button type="button" onClick={onAllFilterHandler}>
					Все
				</button>
				<button type="button" onClick={onCompletedFilterHandler}>
					Завершенные
				</button>
			</div>
		</div>
	);
};

export default Todolist;
