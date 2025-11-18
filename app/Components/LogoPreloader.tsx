"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LogoPreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{
            opacity: 1,
            backdropFilter: ["blur(0px)", "blur(8px)"], // blur starts after 0.5s
            transition: {
              opacity: { duration: 0.5 },
              backdropFilter: { delay: 0.5, duration: 1.5, ease: "easeOut" },
            },
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
            transition: { duration: 1 },
          }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{
              scale: [0.8, 1.5],
              opacity: [1, 1, 0.8],
            }}
            transition={{
              delay: 0.5, // start zoom after 0.5s
              duration: 2,
              ease: "easeOut",
            }}
            exit={{
              scale: 2.5,
              opacity: 0,
              transition: { duration: 1 },
            }}
          >
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
 