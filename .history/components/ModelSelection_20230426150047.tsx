'use client'
import React from 'react'
import useSWR from 'swr'

const fetchModel = () => fetch('/api/selectModel').then(res => res.json)

function ModelSelection() {
    
  return (
    <div>ModelSelection</div>
  )
}

export default ModelSelection