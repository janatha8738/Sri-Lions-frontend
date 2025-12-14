"use client";

import Link from "next/link";
import { BookOpen, Swords, ArrowRight, Trophy, Users, Calendar, Shield } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

// Custom hook: returns a string ready to render + ref for scroll trigger
function useCountUp(end: number, suffix: string = "", duration: number = 2.5) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const value = Math.floor(latest);
    return suffix === "+" ? `${value}+` : value.toString();
  });

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      animate(count, end, {
        duration,
        ease: [0.4, 0, 0.2, 1],
      });
    }
  }, [inView, count, end, duration]);

  return { display: rounded, ref };
}

export default function OutdoorSportsIntro() {
  const sections = [
    {
      id: 1,
      title: "OUR LEGACY",
      icon: Shield,
      description:
        "For over 15 years, Siri Lions RFC has been the heartbeat of Sri Lankan rugby. From humble beginnings on Negombo's beaches to national dominance — every tackle, every try, every victory is etched into our unbreakable legacy.",
      image: "/images/legacy.png",
      imageAlt: "Siri Lions pack driving forward in a scrum",
    },
    {
      id: 2,
      title: "OUR STORY",
      icon: BookOpen,
      description:
        "Born on the beaches and fields of Negombo, Siri Lions RFC was founded by players who believed rugby is more than a game — it's a way of life. From grassroots to championship finals, we've grown through grit, brotherhood, and a love for the toughest sport on earth.",
      image: "/images/story.png",
      imageAlt: "Siri Lions celebrating a hard-fought victory",
    },
   {
      id: 3,
      title: "JOIN THE PRIDE",
      icon: Users,
      description:
        "Ready to become a Lion? Whether you're a seasoned player or stepping onto the field for the first time, Siri Lions RFC welcomes you. Join a brotherhood forged in battle, united by passion, and driven by the relentless pursuit of excellence. Your legacy starts here.",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&h=1000&fit=crop",
      imageAlt: "Siri Lions team celebrating together in unity",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Animated counters
  const years = useCountUp(15, "+", 2.8);
  const members = useCountUp(500, "+", 3.2);
  const titles = useCountUp(28, "", 2.4);

  const stats = [
    { icon: Calendar, counter: years, label: "Years Active" },
    { icon: Users, counter: members, label: "Proud Members" },
    { icon: Trophy, counter: titles, label: "Titles Won" },
  ];

  return (
    <section ref={containerRef} className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 xl:gap-24 items-start">
          {/* LEFT COLUMN 1 – Intro & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -140 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-1 lg:sticky top-8"
          >
            <div className="space-y-16">
              {/* Main Headline */}
          <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.3, duration: 1 }}
  className="space-y-6"
>
  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
    SYMBOL
    <br />
    <span className="text-amber-400 drop-shadow-2xl">OF</span>
    <br />
    <span className="text-amber-500 drop-shadow-2xl">PRIDE</span>
  </h2>
  <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-md">
    Beyond the Game. Fueled by Passion. 
    <br />
    Driven to Victory
  </p>
</motion.div>



              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-t border-emerald-900/50">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <stat.icon className="w-10 h-10 text-amber-500" />
                    </div>

                    <div className="text-4xl font-black text-white h-16 flex items-center justify-center">
                      <motion.span ref={stat.counter.ref}>{stat.counter.display}</motion.span>
                    </div>

                    <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="relative group overflow-hidden rounded-3xl shadow-4xl border-4 border-emerald-950 mt-12"
              >
                <img
                  src="/images/lion.jpeg"
                  alt="Siri Lions player breaking through the line"
                  className="w-full h-[700px] object-cover object-top group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-90" />
              </motion.div>
            </div>
          </motion.div>

          {/* COLUMN 2 – Content Cards */}
          <div className="lg:col-span-2 space-y-16">
            {/* Legacy & Story Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {sections.slice(0, 2).map((section, index) => {
                const href = index === 0 ? "/legacy-details" : "/story-details";

                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 100, x: index === 0 ? -80 : 80 }}
                    animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.3, duration: 1 }}
                    className="group relative bg-gradient-to-br from-emerald-950/70 to-rose-950/70 backdrop-blur-xl border-2xl border-2 border-rose-900/60 rounded-3xl overflow-hidden hover:shadow-4xl hover:shadow-amber-500/50 transition-all duration-700 hover:-translate-y-8"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-950/95 via-emerald-950/70 to-transparent" />

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-3xl"
                      >
                        <Link href={href}>
                          <div
                            role="link"
                            aria-label={`Read more about ${section.title}`}
                            className="w-20 h-20 flex items-center justify-center"
                          >
                            <ArrowRight className="w-10 h-10 text-white" />
                          </div>
                        </Link>
                      </motion.div>
                    </div>

                    <div className="p-10 space-y-6">
                      <div className="flex items-center gap-5">
                        <section.icon className="w-12 h-12 text-amber-500" />
                        <h3 className="text-4xl font-black text-white uppercase tracking-widest">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-200 text-lg leading-relaxed">{section.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Training Philosophy Full-Width Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 120 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 1.4 }}
              className="group relative bg-gradient-to-br from-rose-950/80 to-emerald-950/80 backdrop-blur-2xl border-4 border-rose-900/60 rounded-3xl overflow-hidden hover:shadow-4xl hover:shadow-amber-500/60 transition-all duration-800"
            >
              <div className="relative h-[600px] md:h-[700px] overflow-hidden">
                <img
                  src={sections[2].image}
                  alt={sections[2].imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-115 transition-transform duration-1400"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rose-950/98 via-emerald-950/85 to-transparent" />

                <div className="absolute inset-0 flex items-center">
                  <div className="p-12 md:p-24 max-w-5xl space-y-10">
                    <motion.div
                      initial={{ x: -120, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 1.3, duration: 1 }}
                      className="flex items-center gap-6"
                    >
                      <Swords className="w-16 h-16 text-amber-500" />
                      <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-widest">
                        {sections[2].title}
                      </h3>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.6, duration: 1 }}
                      className="text-gray-100 text-2xl leading-relaxed max-w-4xl font-medium"
                    >
                      {sections[2].description}
                    </motion.p>

                    <motion.button
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 2, duration: 0.8 }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black py-6 px-16 rounded-full text-2xl shadow-3xl shadow-amber-500/70"
                    >
                      <span>JOIN THE PRIDE</span>
                      <ArrowRight className="w-10 h-10" />
                    </motion.button>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute top-12 right-12 w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-4xl"
                >
                  <ArrowRight className="w-16 h-16 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}