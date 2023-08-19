import React from "react";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.pinimg.com/564x/c6/57/fc/c657fc5a6210964b2003eb28ec02d757.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        position: "relative",
        width: "90%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: "0 50px",
        }}
      >
        <div style={{ marginLeft: "5px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
            style={{
              fontSize: "2xl",
              fontWeight: "bold",
            }}
          >
            <h1 style={{ fontSize: "2rem" }}>Master of your</h1>
            <h1 style={{ fontSize: "2rem" }}>life by mastering</h1>
            <h1 style={{ fontSize: "2rem" }}>your emotions</h1>
          </motion.div>

          <div style={{ marginTop: "10px" }}>
            <motion.div
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
               transition={{ type: "spring", stiffness: 400, damping: 17 }}
               
              style={{
                width: "200px",
                height: "50px",
                fontSize: "20px",
                gap:"5px",
                display:"flex",
                backgroundColor: "white",
                padding: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin:"10px"
              
              }}
            >
               <p>⭐ </p>
               <p>⭐ </p>
               <p>⭐ </p>
               <p>⭐ </p>
               <p>⭐ </p>
               <p>⭐ </p>
            </motion.div>
          </div>

          <motion.div style={{ marginTop: "10px" }}
             className="box"
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button
          
           
              style={{
              
                fontSize:"2xl",
                  marginLeft:"10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.pinimg.com/236x/87/d1/ad/87d1adaf3d7265833970c832ee3db258.jpg"
                alt="Apple Store"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              Apple Store
            </button>
          </motion.div>
        </div>

        <motion.div
         className="box"
         animate={{
           scale: [0.5, 1, 1, 0.5, 0.5],
           rotate: [0, 0, 180, 180, 0],
           borderRadius: ["0%", "0%", "50%", "50%", "0%"]
         }}
         transition={{
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
           repeat: Infinity,
           repeatDelay: 1
         }}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.pinimg.com/564x/ee/69/fb/ee69fb0a11cfa59bfe1d8c6960a19ab8.jpg"
            alt="Mobile"
            style={{
              width: "300px",
              height: "300px",
              marginLeft: "4px",
             
             
              animation: "fade-in 1s 0.5s forwards",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
