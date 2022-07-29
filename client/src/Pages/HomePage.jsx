import React from 'react'
import Button from '../Components/Button'

export default function HomePage() {
  return (
    <div className="container--main">
      <h1>The Best TV service around!</h1>
      <p>Are you ready to enjoy ultra-best service?</p>
      <div className="container__button">
        <Button name="let`s do it!" />
      </div>
    </div>
  )
}
