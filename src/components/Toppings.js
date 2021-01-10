import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";


const containerVariance={
  hidden:{
    opacity:0
  },visible:{
    opacity:1,
    transition:{delay:1.5,duration:1.5 }
  },
  exit:{ x:'-100vw',transition:{ease:"easeInOut"}  }

}
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
 
  const containerVariants={
    hidden:{
      x:'100vw',
      opacity:0
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:"spring",
        delay:0.7
      }
    }
  }

  const buttonVariance = {
    hover:{
      scale:1.2,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",  
      transition:{
        duration:.3,
        yoyo:Infinity
      } 
    },
    visible:{
      transition:{delay:2},

    }
  };

 
  return (

    <motion.div className="toppings container"
    variants={containerVariance}
    initial="hidden"
    animate="visible" 
    exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li  key={topping} onClick={() => addTopping(topping)}
            whileHover={{
              scale:1.3,originX:0}}
            transition={{type:"spring" ,stiffness:300 }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button 
        variants={buttonVariance}
        whileHover="hover"
 > 
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;