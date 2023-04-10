import React from 'react'
import {List} from './style'

interface ListPokemonProps {
  children: React.ReactNode
}

export const ListPokemon = ({children} : ListPokemonProps) => {
  return (
    <List>
      {children}
    </List>
  )
}
