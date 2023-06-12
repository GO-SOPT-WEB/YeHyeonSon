import React from 'react'
import { Outlet } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import PageLayout from '../components/PageLayout'

const Error = () => {
  return (
    <PageLayout>
      <Outlet/>
    </PageLayout>
  )
}

export default Error
