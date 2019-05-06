// todas as actions relacionadas com o todos serão adicionada aqui
// nossa action em si transformada em propriedades
// o padrão é passar todos os valores pro dispatch por um objecto payload
export const addTodo = text => ({ type: 'ADD_TODO', payload: { text } })
export const removeTodo = id => ({ type: 'REMOVE_TODO', payload: { id } })
