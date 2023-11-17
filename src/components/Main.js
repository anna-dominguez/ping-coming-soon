'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import Dashboard from '../../public/images/illustration-dashboard.png'
import Logo from '../../public/images/logo.svg'

const Main = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const handleClick = () => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setEmail('')
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <main className="flex flex-col items-center w-full">
      <section className="flex flex-col items-center mx-2.5 w-full mb-20">
        <Image className="mb-8 text-xl" src={Logo} alt="Ping logo" />
        <h1 className="text-[22px] lg:text-[48px] font-light mb-4 text-gray">
          We are launching{' '}
          <span className="font-bold text-veryDarkBlue">soon!</span>
        </h1>
        <p className="font-light text-xs lg:text-xl text-veryDarkBlue mb-8">
          Subscribe and get notified
        </p>
        <div className="w-full flex flex-col items-center lg:grid lg:grid-cols-[70%_30%] lg:gap-4">
          <input
            className={`px-8 py-2.5 lg:py-[18px] mb-2.5 ${
              error && ' border-lightRed'
            } text-xs lg:text-base placeholder:text-[#B8C7ED]
                      w-full border border-paleBlue rounded-3xl max-w-md
                     outline-none lg:max-w-none lg:mb-0`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address..."
          />
          {error && (
            <p className={`lg:hidden italic text-lightRed text-[10px] mb-2.5`}>
              Please provide a valid email address
            </p>
          )}
          <button
            className="text-white bg-blue py-3 lg:py-[18px] w-full max-w-md rounded-3xl
                            shadow-[0_5px_10px_2px_rgba(76,123,243,0.23)]"
            onClick={() => handleClick()}
          >
            Notify me
          </button>
        </div>
        {error && (
          <p
            className={`hidden lg:block italic text-lightRed text-[12px] self-start ml-[20px]`}
          >
            Please provide a valid email address
          </p>
        )}
      </section>
      <Image
        className="w-full max-w-md lg:max-w-none"
        src={Dashboard}
        alt="Dashboard illustration"
      />
    </main>
  )
}

export default Main
