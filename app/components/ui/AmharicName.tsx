"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FullNameType } from "@/app/types/whoAmIData"

export const AmharicName: FullNameType = () => {
  const [isLeulHovered, setIsLeulHovered] = useState(false)
  const [isMesfinHovered, setIsMesfinHovered] = useState(false)

  return (
    <h1 className="cursor-pointer text-4xl font-bold text-center flex justify-center items-center">
      <span
        className="inline-block w-24 text-center"
        onMouseEnter={() => setIsLeulHovered(true)}
        onMouseLeave={() => setIsLeulHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isLeulHovered ? "leul-amharic" : "leul-english"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            {isLeulHovered ? "ሌዑል" : "Leul"}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="mx-2"> </span>
      <span
        className="inline-block w-32 text-center"
        onMouseEnter={() => setIsMesfinHovered(true)}
        onMouseLeave={() => setIsMesfinHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isMesfinHovered ? "mesfin-amharic" : "mesfin-english"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            {isMesfinHovered ? "መስፍን" : "Mesfin"}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  )
}