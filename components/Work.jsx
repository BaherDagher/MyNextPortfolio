import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work'
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                My portfolio
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'
            >
                My Latest Work
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-lg'
            >
                Explore a collection of projects showcasing my expertise in front-end development.
            </motion.p>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full my-10 dark:text-black"
            >
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, scale: 0.95, y: 20 },
                            visible: { opacity: 1, scale: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="flex flex-col bg-white dark:bg-gray-100 rounded-xl shadow-md border p-3 cursor-default"
                    >
                        <img
                            src={project.bgImage}
                            alt={project.title}
                            className="w-full h-72 object-cover rounded-t-xl"
                        />

                        <div className="flex flex-col gap-3 p-5">
                            <div>
                                <h2 className="text-xl font-bold">{project.title}</h2>
                                <p className="text-base text-gray-500">{project.type}</p>
                            </div>

                            <p className="text-base text-gray-600 leading-snug text-justify h-44">
                                {project.description}
                            </p>

                            <div className="flex flex-col gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Technologies:</h3>
                                    <p className="text-base text-gray-600">
                                        {project.technologies}
                                    </p>
                                </div>

                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-black text-white text-base rounded-md bg-black hover:scale-[1.025] transition duration-300 group"
                                >
                                    Live Demo
                                    <Image
                                        src={assets.send_icon}
                                        alt="send icon"
                                        className="w-4 h-4 invert transition duration-500 "
                                    />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Work;