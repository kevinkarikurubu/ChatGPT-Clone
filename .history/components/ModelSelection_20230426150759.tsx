'use client'
import React from 'react'
import { ActionMeta, InputActionMeta } from 'react-select'
import Select from 'react-select/dist/declarations/src/Select'
import useSWR from 'swr'

const fetchModel = () => fetch('/api/selectModel').then(res => res.json)

function ModelSelection() {
    const {data: models, isLoading} = useSWR('modelkey', fetchModel)
  return (
    <div>
        <Select inputValue={''} onChange={function (newValue: unknown, actionMeta: ActionMeta<unknown>): void {
              throw new Error('Function not implemented.')
          } } onInputChange={function (newValue: string, actionMeta: InputActionMeta): void {
              throw new Error('Function not implemented.')
          } } onMenuOpen={function (): void {
              throw new Error('Function not implemented.')
          } } onMenuClose={function (): void {
              throw new Error('Function not implemented.')
          } } value={undefined} />
    </div>
  )
}

export default ModelSelection