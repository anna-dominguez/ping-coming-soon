import React from 'react'
import { Facebook, Instagram, Twitter } from 'react-feather'

const Footer = () => {
  return (
    <footer className="w-full items-center text-[10px] flex flex-col gap-7 text-gray font-light mt-[72px] mb-[49px]">
      <div className="flex gap-3">
        <div className="group">
          <div className="border border-blue/10 rounded-full cursor-pointer group-hover:bg-blue p-2">
            <Facebook className="text-blue group-hover:text-white" />
          </div>
        </div>
        <div className="group">
          <div className="border border-blue/10 rounded-full cursor-pointer group-hover:bg-blue p-2">
            <Instagram className="text-blue group-hover:text-white" />
          </div>
        </div>
        <div className="group">
          <div className="border border-blue/10 rounded-full cursor-pointer group-hover:bg-blue p-2">
            <Twitter className="text-blue group-hover:text-white" />
          </div>
        </div>
      </div>
      <p>© Copyright Ping. All rights reserved.</p>
    </footer>
  )
}

export default Footer
