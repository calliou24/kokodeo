import React, { useState } from "react";

import { FaChevronCircleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./section.module.css";

import leafs from "../../assets/images/leafs.png";
import cocoIcon from "../../assets/images/coco-icon.png";

import ImageLogo from "../../assets/images/componentIcons/imageLogo";
import logoImage from "../../assets/images/logo-image.jpg";
function Section() {
  const [showSection, setShowSection] = useState(1);

  return (
    <AnimatePresence>
      <div className={`${styles?.["main-container"]} flex flex-center `}>
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
              className={`${styles?.["button-circle"]} left-arrow`}
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
        {showSection !== 5 && (
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
              className={`${styles?.["button-circle"]} right-arrow`}
              style={{
                right: "-25",
              }}
              onClick={() => {
                if (showSection <= 4)
                  setShowSection((showSection) => showSection + 1);
              }}
              color="#99A98F"
              fontSize={50}
            />
          </motion.div>
        )}
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
            className={`w-full h-full overflow-hidden ${styles?.["grid-second"]}`}
          >
            <div
              className={`${styles?.["grid-second-first"]} flex flex-center select-none white-square`}
              style={{
                padding: "2em",
              }}
            >
              <img
                src={logoImage}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxWidth: "350px",
                }}
              />
              {/* <ImageLogo /> */}
            </div>
            <div
              className={`${styles?.["grid-second-second"]} select-none flex flex-center white-square`}
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
              className={`${styles?.["grid-second-thrid"]} flex flex-center white-square`}
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
        {showSection === 3 && (
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
            className={` ${styles?.["grid-third"]} w-full h-full overflow-hidden`}
          >
            <div
              className={`${styles?.[""]} flex white-square`}
              style={{
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <h3
                className={`flex flex-center ${styles?.["title-brown"]}`}
                style={{
                  color: "#85586F",
                  fontSize: "1.5rem",
                }}
              >
                fortalezas
              </h3>
              <p className="text-center">
                Como empresa tenemos la oportunidad de aprovechar infinidad de
                medios y recursos para darnos a conocer, proveernos de
                innovación y estabilidad financiera.
              </p>
            </div>
            <div
              className={`${styles?.[""]} flex white-square`}
              style={{
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <h3
                className={`flex flex-center ${styles?.["title-brown"]}`}
                style={{
                  color: "#ABC4AA",
                  fontSize: "1.5rem",
                }}
              >
                oportunidades
              </h3>
              <p className="text-center">
                Un mercado de oportunidades que explotar. La utilización de
                herramientas digitales y diferentes medios, entre ellos algunos
                no físicos para el ahorramiento de rentas, recursos y energía.
              </p>
            </div>
            <div
              className={`${styles?.[""]} flex white-square`}
              style={{
                flexDirection: "column",
                gap: "1em",
                height: "fit-content",
              }}
            >
              <h3
                className={`flex flex-center ${styles?.["title-brown"]}`}
                style={{
                  color: "#65647C",
                  fontSize: "1.5rem",
                }}
              >
                debilidades
              </h3>
              <p className="text-center">
                Tenemos cierta incertidumbre de los fenómenos que puedan afectar
                la economía global.
              </p>
            </div>
            <div
              className={`${styles?.[""]} flex white-square`}
              style={{
                flexDirection: "column",
                gap: "1em",
                // height: "fit-content",
              }}
            >
              <h3
                className={`flex flex-center ${styles?.["title-brown"]}`}
                style={{
                  color: "#2C3639",
                  fontSize: "1.5rem",
                }}
              >
                amenazas
              </h3>
              <p className="text-center">
                Las constante competencia y cambio en el sistema financiero.
              </p>
            </div>
          </motion.div>
        )}
        {showSection === 4 && (
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
            className={`w-full h-full overflow-hidden ${styles?.["four-container"]}`}
          >
            <div
              className={`${styles?.[""]} flex select-none white-square`}
              style={{
                flexDirection: "column",
              }}
            >
              <h2
                className={`flex flex-center ${styles?.["title-brown"]}`}
                style={{
                  fontSize: "2rem",
                  gap: "0.5em",
                }}
              >
                misión
              </h2>
              <p
                className="text-center"
                style={{
                  margin: "auto",
                }}
              >
                Ofrecer productos de higiene personal, interesándonos en todo
                momento del bienestar que brindemos a nuestros clientes y del
                impacto que generemos en nuestro ambiente.
                <br />
                <br /> Nuestro compromiso es elaborar un desodorante de coco que
                cumpla con los más altos estándares de calidad, utilizando
                ingredientes naturales y orgánicos.
              </p>
            </div>
            <div
              className={`${styles?.[""]} select-none flex white-square`}
              style={{
                flexDirection: "column",
              }}
            >
              <h2
                className={`flex flex-center ${styles?.["title-brown"]}`}
                style={{
                  fontSize: "2rem",
                  gap: "0.5em",
                }}
              >
                visión
              </h2>
              <p
                className="text-center"
                style={{
                  margin: "auto",
                }}
              >
                Ser un organismo socialmente sustentable, donde nuestro
                liderazgo, aproveche oportunidades de innovación en la
                proyección de nuestros productos y en la transmisión de
                emociones positivas para la sociedad.
                <br />
                <br />
                Nuestra visión va más allá de la comercialización de un
                desodorante de coco sustentable.
              </p>
            </div>
          </motion.div>
        )}
        {showSection === 5 && (
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
            className={`w-full h-full overflow-hidden ${styles?.["five-container"]}`}
          >
            <div
              className={`white-square ${styles?.["five-one"]}`}
              style={{
                height: "fit-content",
              }}
            >
              <h3
                className={`${styles?.["title-brown"]} text-center`}
                style={{
                  fontSize: "1.5rem",
                }}
              >
                ventajas competitivas
              </h3>
            </div>
            <div className={styles?.["inside-five"]}>
              <div
                className={`white-square text-center ${styles?.["five-two"]}`}
              >
                <h4>Destacamos en el mercado</h4>{" "}
                <p>
                  {" "}
                  Gracias a la calidad y utilidad que caracteriza nuestros
                  productos, nos vemos posicionados en una empresa destacada y
                  reconocida a nivel nacional.
                </p>
              </div>
              <div
                className={`white-square  text-center ${styles?.["five-three"]}`}
              >
                <h4>Competitividad comercial</h4>{" "}
                <p>
                  Ofrecemos variedad de productos encaminados en el marco de la
                  accesibilidad económica para poblaciones equilibradas
                  financieramente.
                </p>
              </div>
              <div
                className={`white-square  text-center ${styles?.["five-four"]}`}
              >
                <h4>Generamos emociones</h4>{" "}
                <p>
                  Dentro de nuestros valores, el ofrecimiento de emociones
                  asociadas con la seguridad, el bienestar y el confort son
                  puntos clave a destacar.
                </p>
              </div>
              <div
                className={`white-square  text-center ${styles?.["five-five"]}`}
              >
                <h4>Innovador e inteligente</h4>{" "}
                <p>
                  Nuestro equipo brillante no pierde de vista la importancia de
                  reflejar una imagen estética e innovadora.{" "}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
  ``;
}

export default Section;
