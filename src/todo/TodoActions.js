import * as uuid from "uuid";

const NAME = "@todo-app:list";

export const getData = () => {
	const data = localStorage.getItem(NAME) || "[]";
	return JSON.parse(data);
};

export const setData = (data) => {
	localStorage.setItem(NAME, JSON.stringify(data));
}

export const getIndex = (id) => {
	const data = getData();
	return data.findIndex(item => item.id === id);
}

export const changeDescription = (event) => ({
	type: "DESCRIPTION_CHANGE",
	payload: event.target.value
});

export const search = () => {
	return (dispatch, getState) => {
		const todos = getData();
		const description = getState().todo.description || "";
		dispatch({
			type: "TODO_SEARCHED",
			payload: todos.filter((todo) => todo.description.includes(description))
		});
	};
};

export const add = (description) => {
	return (dispatch) => {
		if(!description) return;
		const todos = getData();
		todos.push({ id: uuid.v4(), description });
		setData(todos);
		dispatch({ type: "TODO_CLEAR" });
		dispatch(search());
	};
};

export const markAsDone = (todo) => {
	return (dispatch) => {
		const todos = getData();
		const index = getIndex(todo.id);
		todos[index].done = true;
		setData(todos);
		dispatch(search());
	};
};

export const markAsPending = (todo) => {
	return (dispatch) => {
		const todos = getData();
		const index = getIndex(todo.id);
		todos[index].done = false;
		setData(todos);
		dispatch(search());
	};
};

export const remove = (todo) => {
	return (dispatch) => {
		const todos = getData();
		const index = getIndex(todo.id);
		todos.splice(index, 1);
		setData(todos);
		dispatch(search());
	};
};

export const clear = () => [{ type: "TODO_CLEAR" }, search()];
