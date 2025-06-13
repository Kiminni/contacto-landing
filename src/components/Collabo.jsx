import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import collabo1 from '../assets/images/collabo1.svg'
import collabo2 from '../assets/images/collabo2.svg'
import collabo3 from '../assets/images/collabo3.svg'
import collabo4 from '../assets/images/collabo4.svg'
import { useTranslation } from 'react-i18next';

const collabos = [
  ['collabo_artist_potter', collabo1],
  ['collabo_brand_bag', collabo2],
  ['collabo_artist_illustrator', collabo3],
  ['collabo_artist_artist', collabo4],
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
  const { t } = useTranslation();

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
              alt={t(collabos[currentIndex][0])}
            />
            <div className='absolute flex flex-col items-center justify-center font-extrabold'>
              <p className='text-[60px] leading-tight'>
                {t('collabo_collaboration_question1', { artistName: t(collabos[currentIndex][0]) })}
              </p>
              <p className='text-[30px] leading-tight'>{t('collabo_collaboration_question2')}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className='font-bold' dangerouslySetInnerHTML={{ __html: t('collabo_swipe_matching_system') }} />
    </div>
  )
}
