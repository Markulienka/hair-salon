'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = data?.navItems || []

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="z-50 flex justify-end w-full">
        <button
          onClick={toggleMenu}
          className="text-black hover:text-gray-700 text-lg tracking-wider transition-colors"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {isOpen ? 'CLOSE' : 'MENU'}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white fixed inset-0 z-40 overflow-hidden w-full"
          >
            <div className="flex h-full flex-col items-center justify-center px-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-16 text-center"
              >
                {navItems.map(({ link }, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    className="mb-5"
                  >
                    <div className="group relative inline-block" onClick={toggleMenu}>
                      <motion.div
                        className="text-black relative z-10 text-4xl font-black uppercase transition-transform duration-300 md:text-6xl lg:text-7xl"
                        initial={{ opacity: 1, filter: 'blur(0px)' }}
                        whileHover={{ opacity: 0.8, filter: 'blur(6px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <CMSLink {...link} appearance="link" className="text-black" />
                      </motion.div>

                      <motion.div
                        className="bg-black absolute bottom-0 left-0 h-1"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}