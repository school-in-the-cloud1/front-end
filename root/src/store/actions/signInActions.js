import { axiosWithAuth } from '../index';
import { fetchVolunteers } from '../actions'

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_RES = 'FETCH_TASKS_RES';
export const FETCH_TASKS_ERR = 'FETCH_TASKS_ERR';
export const ADD_TASK = 'ADD_TASK';
export const ADD_RES = 'ADD_RES'
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_MEMBER_ID = 'SET_MEMBER_ID';
export const SET_EDITING = 'SET_EDITING';
export const LOADNG_RES = 'LOADING_RES';

export const fetchTasks = () => (dispatch) => {
    dispatch({ type: FETCH_TASKS });

    // debugger

    axiosWithAuth().get('api/tasks')
    .then(res => {
        // console.log(res); -- Tasks come back as res.data
        dispatch({ type: FETCH_TASKS_RES, payload: res.data })
    })
    .catch(err => {
        // console.dir(err);
        dispatch({ type: FETCH_TASKS_ERR, payload: err.data })
    })
}

export const addTask = (copy) => (dispatch) => {
    dispatch({ type: FETCH_TASKS });

    axiosWithAuth().post('api/tasks', copy )
    .then(res => {
        // console.log(res);
    })
    .catch(err => {
        // console.dir(err);
    })
}

export const editTask = (copy) => (dispatch) => {
    axiosWithAuth().put(`api/tasks/${copy.id}`, copy)
    .then(res => {
        // console.log(res);
        // dispatch(fetchTasks())
    })
    .catch(err => {
        // console.dir(err);
    })
}

export const deleteTask = (copy) => (dispatch) => {

    axiosWithAuth().delete(`api/tasks/${copy.id}`)
    .then(res => {
        // console.log(res);
        dispatch(fetchTasks())
    })
    .catch(err => {
        // console.dir(err);
    })
}

export const deleteMember = (copy) => (dispatch) => {
    axiosWithAuth().delete(`api/users/${copy.id}`)
    .then(res => {
        // console.log(res);
        dispatch(fetchVolunteers())
    })
    .catch(err => {})
}

export const setMemberID = (res) => (dispatch) => {
    dispatch({ type: SET_MEMBER_ID, payload: res })
}

export const setEditing = () => (dispatch) => {
    dispatch({ type: SET_EDITING });
}

export const setLoading = () => (dispatch) => {
    dispatch({ type: FETCH_TASKS });
}

export const loadingRes = () => (dispatch) => {
    dispatch({ type: LOADNG_RES })
}

export const setErrors = (err) => (dispatch) => {
    dispatch({ type: FETCH_TASKS_ERR, payload: err.message })
}