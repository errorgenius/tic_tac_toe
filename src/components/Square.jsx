import {motion} from "framer-motion"

const Square = ({value, onSquareClick, classs = 'null'}) => {
    return (
        <div className={` ${classs}`}>

            <motion.div
                whileHover={{scale: 1.2, rotate: 180}}
                whileTap={{
                    scale: 0.8,
                    rotate: -180,
                    borderRadius: "100%"
                }}
            >
                <button className={`square`} onClick={onSquareClick}>

                    {value}

                </button>
            </motion.div>
        </div>
    );
};

export default Square;