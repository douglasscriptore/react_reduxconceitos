import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// ele conecta nosso componente com algum reducer do estado do redux
import { connect } from 'react-redux'
// essa vai aplicar o dispth nas funções de actions
import { bindActionCreators } from 'redux'
import * as TodoActions from './store/actions/todos'

const TodoList = ({ todos, addTodo, removeTodo }) => {
  return (
    <Fragment>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>remover</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo('Fazer Café')}>ADD TODO</button>
    </Fragment>
  )
}

// validação de proptypes
TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
}

// o state representa todas as informações contidas no redux
// o todos no state.todos é extamente o reducer de todos criado na pasta /store/reducers/todos
const mapStateToProps = state => ({
  todos: state.todos
})

// para o mapDispatchToProps é passado o bindActionsCreatros, método do redux que faz a busca das actions
// passando os dispatch
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

// sintax de high order function
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
