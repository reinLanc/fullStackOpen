import { createSlice } from '@reduxjs/toolkit'


const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = {
  anecdotes: anecdotesAtStart.map(asObject)
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state,action) {
      const id = action.payload
      const anecdote = state.anecdotes.find((a) => a.id === id)
      if (anecdote) {
        anecdote.votes +=1
      }
    },
    addAnecdote(state, action) {
      const newAnecdote = { ...action.payload, id: getId() }
      state.anecdotes.push(newAnecdote)
    }
  }
})

export const { voteAnecdote, addAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
