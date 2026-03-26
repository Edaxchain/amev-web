import { Variants } from "framer-motion";

export const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { 
            staggerChildren: 0.15, 
            delayChildren: 0.2 
        }
    }
};

export const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export const lineVars: Variants = {
    hidden: { width: 0 },
    visible: { 
        width: "100%",
        transition: { duration: 1, ease: "easeInOut" } 
    }
};