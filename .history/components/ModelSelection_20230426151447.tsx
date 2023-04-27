'use client'
import React from 'react'
import { ActionMeta, InputActionMeta } from 'react-select'
import Select from 'react-select'
import useSWR from 'swr'

const fetchModel = () => fetch('/api/selectModel').then(res => res.json)

function ModelSelection() {
    const {data: models, isLoading} = useSWR('modelkey', fetchModel)
    const {data: model, mutate: setModel} = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })

  return (
    <div>
        <Select 
            className="mt-2 "
            //defaultValue={model}
            isLoading={isLoading}
            isSearchable
            menuPosition='fixed'
            classNames={{
                control: (state) => 'bg-gray-400 border-bg-700'
            }}
            options={models?.modelOptions}
        
        />
    </div>
  )
}

export default ModelSelection