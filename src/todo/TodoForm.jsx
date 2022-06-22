import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import './TodoForm.css'
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { changeDescription, search, add, clear } from './TodoActions'

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentDidMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { search, add, description, clear } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { search, add, description, clear } = this.props

        return (
            <div role="form" className='todoForm'>
                <div className='search-box'>
                    <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        value={this.props.description} />
                    <IconButton style='white' icon='close' onClick={clear} />
                </div>
                <div className='actions'>
                    <IconButton style='info' icon='plus' onClick={() => add(description)} />
                    <IconButton style='warning' icon='search' onClick={search} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ description: state.todo.description })
const mapDispatchProps = (dispatch) => bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(TodoForm)