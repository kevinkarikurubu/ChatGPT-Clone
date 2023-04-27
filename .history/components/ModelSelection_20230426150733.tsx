'use client'
import React from 'react'
import useSWR from 'swr'

const fetchModel = () => fetch('/api/selectModel').then(res => res.json)

function ModelSelection() {
    const {data: models, isLoading} = useSWR('modelkey', fetchModel)
  return (
    <div>
        <Select
    </div>
  )
}

export default ModelSelection