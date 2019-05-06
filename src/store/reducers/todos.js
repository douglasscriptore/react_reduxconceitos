// o parametro state é o estado do todos antes da alteração
// o parametro action é a ação que será executada pelo usuario
// ela é global portanto é necessário criar um type unico p/ cada

const INITIAL_SATE = [
  { id: 1, text: 'fazer café' },
  { id: 2, text: 'estudar react' }
]

export default function todos (state = INITIAL_SATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}
