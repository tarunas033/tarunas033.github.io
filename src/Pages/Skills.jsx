import { motion } from "framer-motion";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Skills() {
  const slidetop = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div id="skills">
      <h1>
        Professional <span className="name1">Skills</span>{" "}
      </h1>

      <h1 className="skillDes">Frontend</h1>

      <div className="main_div">
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
            alt="javascript logo"
          />
          <h4>JavaScript</h4>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
            alt="html logo"
          />
          <h4>HTML </h4>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            alt="css logo"
          />
          <h4>CSS </h4>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
            alt="react logo"
          />
          <h4>React </h4>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGe8rLKVut76o81y6AYPvjbZxDUtrq-OYdMV7yvuQ2ag&s"
            alt="material ui logo"
          />
          <h4>Material UI </h4>
        </motion.div>
      </div>

      <h1 className="skillDes">Backend</h1>
      <div
        className="main_div child_1"
        style={{ width: "34%", gap: "5vw", margin: "auto" }}
      >
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
            alt="nodeJS logo"
          />
          <h4>NodeJS </h4>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            height="80px"
            src="https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?pid=ImgDet&rs=1"
            alt="express logo"
          />
          <h4>Express </h4>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://mpng.subpng.com/20190401/zsf/kisspng-mongodb-document-oriented-database-nosql-openshift-web-app-development-servcie-in-dehradun-5ca1b8cb8a0f32.3708278115541024755655.jpg"
            alt="mongoDb logo"
          />
          <h4>MongoDB </h4>
        </motion.div>
      </div>

      <h1 className="skillDes">
        {" "}
        <span className="name1">Tools</span> 
      </h1>
      <div
        className="main_div child_1"
        style={{ width: "34%", gap: "5vw", margin: "auto" }}
      >
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
            alt="vscode logo"
          />
          <h4>VS Code </h4>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"
            alt="github logo"
          />
          <h4>GitHub </h4>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={slidetop}>
          <img
            src="https://image.pngaaa.com/42/95042-middle.png"
            alt="postman logo"
          />
          <h4>Postman </h4>
        </motion.div>
      </div>

      <h1 className="skillDes">
        My <span className="name1">Statistics</span>
      </h1>
      <div id="stats">
        <img
         
          src="https://github-readme-streak-stats.herokuapp.com/?user=tarunas033&"
          alt="stat"
        />
        <img
          src="https://github-readme-stats.vercel.app/api?username=tarunas033&show_icons=true&locale=en"
          alt="stat"
        />
      </div>

      <h1 className="skillDes">
        Days I <span className="name1">Code</span>
      </h1>
      <div
        style={{
         
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20vh",
        }}
      >
        <GitHubCalendar username="tarunas033" />
      </div>
    </div>
  );
}
