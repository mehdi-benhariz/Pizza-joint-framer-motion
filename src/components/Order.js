import React ,{useState} from 'react';
import {motion,AnimatePresence } from "framer-motion";
import Typical from "react-typical";

const containerVariance={
  hidden:{
    opacity:0
  },visible:{
    opacity:1,
    x:0,
    transition:{
      type:"spring",
      mass:0.4,
      dumping:8,
      when:"beforeChildren",
      staggerChildren:1,delay:1.5,duration:1.5 
    }
  },
  exit:{ x:'-100vw',transition:{ease:"easeInOut"}  }

}

const Order = ({ pizza }) => {


const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition:{
      delay:1.7
    }
  }
}
const [showTitle, setshowTitle] = useState(true);
setTimeout(()=>setshowTitle(false),6000);

  return (
    <motion.div className="container order"
      variants={containerVariance}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
<AnimatePresence >
  {showTitle && <motion.h1 exit={{y:-1000}} > test  </motion.h1> }
</AnimatePresence>
       <Typical 
     wrapper='h2'
     steps={[1000,'Thank you for your order :)', 1000]}
     loop={Infinity}
    />

    <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping} >{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;