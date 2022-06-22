import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import './TodoList.css'
import { markAsDone, markAsPending, remove } from './TodoActions'

import IconButton from '../template/IconButton';
import EmptyList from './EmptyList';

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []

        if (props.list.length === 0) {
            return <EmptyList />
        }

        return list.map(todo => (
            <div className='list-item' key={todo.id} >
                <div className={'list-item-title ' + (todo.done ? 'masked_as_done' : '')}> {todo.description} </div>
                <div className='list-item-actions'>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)} ></IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)} ></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)} ></IconButton>

                </div>
            </div>
        ))
    }

    return (
        <div className='list'>
            {renderRows()}
        </div>
    )
}

const mapStateToProps = (state) => ({ list: state.todo.list })
const mapDispatchProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(TodoList)