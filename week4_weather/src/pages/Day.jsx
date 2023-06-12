import React from 'react'
import { Outlet } from 'react-router-dom'
import Daycard from '../components/Daycard';
import PageLayout from '../components/PageLayout'

const Day = () => {
  return (
    <PageLayout>
      <Outlet/>
    </PageLayout>
  )
}

export default Day