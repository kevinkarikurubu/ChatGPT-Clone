'use client'
import React from 'react'
import { ActionMeta, InputActionMeta } from 'react-select'
import Select from 'react-select'
import useSWR from 'swr'

const fetchModels = () => fetch('/api/selectModel').then(res => res.json)

function ModelSelection() {
    const {data: models, isLoading} = useSWR('modelkey', fetchModels)
    const {data: model, mutate: setModel} = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })

  return (
    <div>
        <Select
            options={models?.modelOptions}
            className="mt-2 "
            defaultValue={model}
            placeholder={model}
            isLoading={isLoading}
            isSearchable
            menuPosition='fixed'
            classNames={{
                control: (state) => 'bg-gray-400 border-bg-700'
            }}
            onChange={(e) => setModel(e.value)}
        
        />
    </div>
  )
}

export default ModelSelection