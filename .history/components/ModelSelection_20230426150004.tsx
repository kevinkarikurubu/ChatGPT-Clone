'use client'
import React from 'react'
import useSWR from 'swr'

const fetchModel = () => fetch('/api/')

function ModelSelection() {
  return (
    <div>ModelSelection</div>
  )
}

export default ModelSelection