'use strict'

// (quantity)d(sides) + (bonus) = (result)
const init = {
  result: '0',
  quantity: '1',
  sides: '20',
  bonus: '0'
}

function roll(state) {
  let sum = state.bonus | 0
  for (let i = 0; i < state.quantity; ++i) {
    sum += (Math.random() * state.sides + 1.0) | 0
  }
  return sum + ''
}

function roller (state = init, action = {}) {
  switch (action.type) {
    case 'roll':
      return {
        ...state,
        result: roll(state)
      }
    case 'update':
      state[action.key] = action.value
      return state
    default:
      return state
  }
}

export { roller, init }
