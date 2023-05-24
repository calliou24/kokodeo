import React, { useState } from "react";

import { FaChevronCircleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./section.module.css";

import ilustration from "../../assets/images/container-paper.jpg";
import leafs from "../../assets/images/leafs.png";
import cocoIcon from "../../assets/images/coco-icon.png";

import kokodeoLogo from "../../assets/images/kokodeo-logo.svg";
import ImageLogo from "../../assets/images/componentIcons/imageLogo";

function Section() {
  const [showSection, setShowSection] = useState(1);

  return (
    <AnimatePresence>
      <div
        className="flex flex-center white-square"
        style={{
          width: "60vw",
          minWidth: "1000px",
          height: "60vh",
          minHeight: "450px",
          background: "rgba(255,255,255, 0.3)",
          margin: "auto",
          position: "relative",
          padding: "2em",
        }}
      >
        <img
          src={leafs}
          className={styles?.["corner-images"]}
          style={{
            left: "-20px",
            top: "-30px",
          }}
        />
        {/* <img
        
        /> */}
        <img
          className={styles?.["corner-images"]}
          src={cocoIcon}
          style={{
            right: "-20px",
            bottom: "-30px",
          }}
        />
        {showSection !== 1 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronCircleRight
              className={styles?.["button-circle"]}
              style={{
                left: "-25",
                transform: " rotateZ(-180deg)",
              }}
              color="#99A98F"
              onClick={() => {
                if (showSection > 1)
                  setShowSection((showSection) => showSection - 1);
              }}
              fontSize={50}
            />
          </motion.div>
        )}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronCircleRight
            className={styles?.["button-circle"]}
            style={{
              right: "-25",
            }}
            onClick={() => {
              if (showSection <= 2)
                setShowSection((showSection) => showSection + 1);
            }}
            color="#99A98F"
            fontSize={50}
          />
        </motion.div>
        {showSection === 1 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 0.3 }}
            className={styles["first-layout"]}
          >
            <div
              style={{
                position: "relative",
              }}
              className={styles["big-square"]}
            >
              <h1
                className={`${styles?.["title-brown"]} flex flex-center`}
                style={{
                  textAlign: "center",
                  fontSize: "4rem",
                  gap: "0.5em",
                }}
              >
                sobre nosotros
              </h1>
              <p
                style={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                “Kokodeo” es una sociedad de empresarios visionarios en un
                futuro, donde el propiciamiento del bienestar individual
                acompañado de la sustentabilidad ambiental no es solo una
                fantasía, sino una realidad. Nuestro proyecto, es producto de
                esfuerzo y dedicación, donde ofrecemos un producto que brinda
                higiene y confort a las personas que lo utilizan.
              </p>
              <button
                style={{}}
                onClick={() => {
                  setShowSection(2);
                }}
                className={styles["button-see"]}
              >
                Saber más
              </button>
            </div>
          </motion.div>
        )}
        {showSection === 2 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            className="w-full h-full overflow-hidden"
            style={{
              display: "grid",
              gap: "1em",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
            }}
          >
            <div
              className={`${styles?.["white-square"]} flex flex-center select-none`}
              style={{
                gridRow: "1 / 6",
              }}
            >
              <ImageLogo />
            </div>
            <div
              className={`${styles?.["white-square"]} select-none flex flex-center`}
              style={{
                gridRow: "1 / 2",
                gridColumn: "2/2",
              }}
            >
              <h2
                className={`flex flex-center ${styles?.["title-brown"]}`}
                style={{
                  fontSize: "2rem",
                  gap: "0.5em",
                }}
              >
                filosofía
              </h2>
            </div>
            <div
              className={`${styles?.["white-square"]} flex flex-center`}
              style={{
                gridRow: "2 / 6",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                La filosofía de “Kokodeo” es lograr un equilibrio entre la
                búsqueda de un bienestar humano, como una responsabilidad donde
                desde nuestra integridad, brindemos productos que impacten
                positivamente en nuestros medios.
              </p>
            </div>
          </motion.div>
        )}
        {/* {showSection === 3 && (
        )} */}
      </div>
    </AnimatePresence>
  );
}

export default Section;
