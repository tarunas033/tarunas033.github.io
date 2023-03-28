import React from "react";
import Bewkoof from "../Images/Bewkoof.png";
import Netmeds from "../Images/Netmeds.png";
import Rodan from "../Images/Rodan.png";
import { motion } from "framer-motion";
import Beauty from "../Images/Beauty.png";

export default function Project() {
  const slideLeft = {
    hidden: { opacity: 0, y: 100 },
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

  const slideRight = {
    hidden: { opacity: 0, y: 100 },
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
    <div id="project">
      <h1 className="projectText name1">Projects</h1>
      <h2 className="projectText">
        Here are a few projects I've worked on recently.
      </h2>

      <motion.div initial="hidden" whileInView="visible" variants={slideLeft}>
        <div className="p1">
          <div>
            <img src={Rodan} alt="Roadan&Fields project image" />
            <h2 className="projectText name1">Tech Stack</h2>
            <div className="techStack">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <h2 className="projectText name1">Rodan & Fields Clone</h2>
            <li className="projectUl">
              {" "}
              Rodan + Fields is a leading skincare brand founded in 2000 
              with a passion for giving people the best skin of their lives
              and the confidence that comes with it.
            </li>
            <li className="projectUl">Users can login and SignUp</li>
            <li className="projectUl">User can see admin Page and other product pages</li>
            <div className="p1Btn">
              <button>
                <a
                  href="https://dulcet-narwhal-59e57d.netlify.app"
                  target="_blank"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/tarunas033/wholesale-sky-2474"
                  target="_blank"
                >
                  View Code
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={slideRight}>
        <div className="p1">
          <div>
            <img src={Bewkoof} alt="Bewkoof project image" />
            <h2 className="projectText name1">Tech Stack</h2>
            <div className="techStack">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt=""
              />

              <img
                src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <h2 className="projectText name1">BewKoof.com Clone</h2>
            <li className="projectUl">
            Bewkooof.com is lifestyle fashion brand that makes creative, distinctive 
            fashion for the trendy, contemporary Indian. Bewakoof was created on the 
            principle of creating impact through innovation, honesty and thoughtfulness.
            </li>
            <li className="projectUl">
              Users can see product page and other pages{" "}
            </li>
            <li className="projectUl">Users can login and SignUp</li>
            <li className="projectUl">Users can do payment</li>
            <div className="p1Btn">
              <button>
                <a
                  href="https://delicate-mooncake-6ba932.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/atheist31/legit-substance-7075"
                  target="_blank"
                >
                  View Code
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={slideLeft}>
        <div className="p1">
          <div>
            <img src={Netmeds} alt="Netmeds" />
            <h2 className="projectText name1">Tech Stack</h2>
            <div className="techStack">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
                alt=""
              />
              <img
                height="50px"
                src="https://avatars.githubusercontent.com/u/54212428?s=200&v=4"
                alt=""
              />
            </div>
          </div>

          <div>
            <h2 className="projectText name1">Netmeds Clone</h2>
            <li className="projectUl">
            Netmeds.com is one of India's most trusted pharmacies,
            dispensing quality medicines at reasonable prices to over 
            7 million happy customers – PAN India.
            </li>
            <li className="projectUl">Users can Login and SignUp</li>
            <li className="projectUl">
              Users can see different Product Pages.
            </li>
           
            <div className="p1Btn">
              <button>
                <a
                  href="https://benevolent-muffin-c5ecd5.netlify.app"
                  target="_blank"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/PoojaBijwal/Netmeds.com-Clone"
                  target="_blank"
                >
                  View Code
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={slideLeft}>
        <div className="p1">
          <div>
            <img src={Beauty} alt="Beauty" />
            <h2 className="projectText name1">Tech Stack</h2>
            <div className="techStack">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
                alt=""
              />

              <img
                src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
                alt=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
                alt=""
              />
              <img
                src="https://avatars.githubusercontent.com/u/54212428?s=200&v=4"
                alt=""
              />

              <img
                height="50px"
                src="https://mpng.subpng.com/20190401/zsf/kisspng-mongodb-document-oriented-database-nosql-openshift-web-app-development-servcie-in-dehradun-5ca1b8cb8a0f32.3708278115541024755655.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <h2 className="projectText name1">Beauty-bebo clone</h2>
            <li className="projectUl">
             Beauty Bebo is India's fastest growing online retail store for
             the day to day and special occasion need of the Makeup, Skin care, 
             Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda 
             products
            </li>
            <li className="projectUl">Users can Login and SignUp</li>
            <li className="projectUl">
              Users can add and remove the items from products page.
            </li>
            
            <div className="p1Btn">
              <button>
                <a href="https://peppy-flan-7a7186.netlify.app" target="_blank">
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/tarunas033/smelly-vein-4444"
                  target="_blank"
                >
                  View Code
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
