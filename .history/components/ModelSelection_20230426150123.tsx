'use client'
import React from 'react'
import useSWR from 'swr'

const fetchModel = () => fetch('/api/selectModel').then(res => res.json)

function ModelSelection() {
    const {data: models, isLoading} = useSWR('modelkey'. fetch)
  return (
    <div>ModelSelection</div>
  )
}

export default ModelSelection