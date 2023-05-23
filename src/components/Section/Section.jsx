import React, { useState } from "react";

import { FaChevronCircleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./section.module.css";

import ilustration from "../../assets/images/container-paper.jpg";
import leafs from "../../assets/images/leafs.png";
import cocoIcon from "../../assets/images/coco-icon.png";

import kokodeoLogo from "../../assets/images/kokodeo-logo.svg";

function Section() {
  const [showSection, setShowSection] = useState(1);

  return (
    <AnimatePresence>
      <div
        style={{
          width: "60vw",
          minWidth: "1000px",
          height: "60vh",
          minHeight: "600px",
          borderRadius: "20px",
          background: "rgba(255,255,255, 0.3)",
          margin: "auto",
          position: "relative",
          display: "flex",

          alignItems: "center",
          padding: "2em",
        }}
      >
        a
        <img
          src={leafs}
          style={{
            position: "absolute",
            left: "-20px",
            top: "-30px",
            cursor: "pointer",
            width: "100px",
            transform: "rotate(-60deg)",
          }}
        />
        <img
          src={cocoIcon}
          style={{
            position: "absolute",
            right: "-20px",
            bottom: "-30px",
            cursor: "pointer",
            width: "100px",
            transform: "rotate(-60deg)",
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
              style={{
                position: "absolute",
                left: "-25",
                cursor: "pointer",
                borderRadius: "50%",
                transform: " rotateZ(-180deg)",
                boxShadow: "0px 0px 28px -3px rgba(0,0,0,0.3)",
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
            style={{
              position: "absolute",
              right: "-25",
              cursor: "pointer",
              borderRadius: "50%",
              boxShadow: "0px 0px 28px -3px rgba(0,0,0,0.3)",
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
            <div className={styles["big-square"]}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "4rem",
                  fontFamily: "antebas",
                  color: "#453132",
                }}
              >
                SOBRE NOSOTROS
              </h1>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.3rem",
                  margin: "auto",
                  color: "#0009",
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
                style={{
                  border: "4px solid #453132",
                  background: "transparent",
                  padding: "20px",
                  borderRadius: "0.5em",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowSection(2);
                }}
                className={styles["button-see"]}
              >
                Saber más
              </button>
            </div>
            <div className={styles["small-square"]}>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontFamily: "antebas",
                  color: "#453132",
                }}
              >
                FILOSOFÍA
              </h3>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.3rem",
                  margin: "20px auto",
                  color: "#0009",
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
            style={{
              display: "grid",
              gap: "1em",
              gridTemplateColumns: "repeat(2, 1fr)",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                background: "rgba(255,255,255, 1)",
              }}
            ></div>
            <div
              style={{
                borderRadius: "20px",
                background: "rgba(255,255,255, 1)",
              }}
            ></div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}

export default Section;
