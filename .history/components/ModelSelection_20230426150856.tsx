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
        <Select 
            className="mt-2 "
            defaultValue={model}
            isLoading
        />
    </div>
  )
}

export default ModelSelection