import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import collabo1 from '../assets/images/collabo1.svg'
import collabo2 from '../assets/images/collabo2.svg'
import collabo3 from '../assets/images/collabo3.svg'
import collabo4 from '../assets/images/collabo4.svg'

const collabos = [
  ['도예가', collabo1],
  ['가방브랜드', collabo2],
  ['일러스트작가', collabo3],
  ['예술가', collabo4],
]

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}

export default function Collabo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % collabos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative flex flex-col items-center'>
      <div className='relative w-[400px] h-[400px] mb-[30px]'>
        <AnimatePresence mode='sync'>
          <motion.div
            key={currentIndex}
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='absolute w-full h-full flex flex-col items-center justify-center'
          >
            <img
              src={collabos[currentIndex][1]}
              className='w-full h-full object-contain absolute'
              alt={collabos[currentIndex][0]}
            />
            <div className='absolute flex flex-col items-center justify-center font-extrabold'>
              <p className='text-[60px] leading-tight'>
                {collabos[currentIndex][0]}와
              </p>
              <p className='text-[30px] leading-tight'>협업하고 싶다면?</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className='font-bold'>
        스와이프 매칭 시스템으로
        <br />
        쉽고 빠르게 대화할 수 있는 컨택토
      </p>
    </div>
  )
}
