import React from 'react'
import { motion } from 'framer-motion'
import TextAnimation from '../Container/TextAnimation'
const Whoweare = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}>
       <h2 className="title we-do__title">
          <span>w</span>
          <span>•</span>
          <span>h</span>
          <span>•</span>
          <span>a</span>
          <span>•</span>
          <span>t</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>w</span>
          <span>•</span>
          <span>e</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>d</span>
          <span>•</span>
          <span>o</span>
        </h2>
        
        <p className='for-text-animy'>
        
        <TextAnimation text="WE PROVIDE A FULL RANGE OF SERVICES IN THE FIELD OF CRYPTOCURRENCY MINING: HOSTING AND SUPPLIES, MAINTENANCE AND SERVICE, CONSULTING, SOFTWARE DEVELOPMENT AND ENGINEERING FOR MINING SYSTEMS AND DATA CENTER INFRASTRUCTURE." />
        </p>
    </motion.div>
  )
}

export default Whoweare
