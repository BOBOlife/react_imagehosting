import React, {useRef} from 'react'
import {useStores} from '../stores'
import {observer} from 'mobx-react'

const Component = observer(() => {
  const {AuthStore} = useStores()
  const inputRef = useRef()
  const bindChange = e => {
    AuthStore.setUsername(inputRef.current.value)
  }
  return (
    <>
      <h1>Login:{AuthStore.values.username}</h1>
      <input onChange={bindChange} ref={inputRef} />
    </>
  )
})


export default Component