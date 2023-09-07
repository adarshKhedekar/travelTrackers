import React, { useContext } from 'react'
import { Context } from '../../utils/context'

function Home() {
  const {user} = useContext(Context)
  return (
    <>
      <h1>Hi!, {user}</h1>
    </>
  )
}

export default Home
