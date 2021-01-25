import React, {Fragment} from 'react'
import s from './NickName.module.css'

const NickName = () => {
  return (
    <Fragment>
      Please, enter your name: <br/>
      <input
        className={s.InputName}
        type="text"
      />
    </Fragment>
  )
}

export default NickName