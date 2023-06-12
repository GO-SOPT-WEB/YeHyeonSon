import React from 'react'
import { Outlet } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

const Week = () => {
  return (
    <PageLayout>
      <Outlet/>
    </PageLayout>
  )
}

export default Week