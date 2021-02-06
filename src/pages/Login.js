import React from 'react'
import {observe} from 'mobx'
import {useStores} from '../stores'

const Component = observe(() => {
  const {AuthStore} = useStores()
  return (
    <>
      <h1>Login:{}</h1>
    </>
  )
})


export default Component