import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    const skillIcons = [
        { name: 'HTML', icon: '/skills/html.svg' },
        { name: 'CSS', icon: '/skills/css.svg' },
        { name: 'JavaScript', icon: '/skills/javascript.svg' },
        { name: 'TypeScript', icon: '/skills/typescript.svg' },
        { name: 'React', icon: '/skills/react.svg' },
        { name: 'Next.js', icon: '/skills/next-js.svg' },
        { name: 'Bootstrap', icon: '/skills/bootstrap.svg' },
        { name: 'Tailwind CSS', icon: '/skills/tailwind.svg' },
        { name: 'Material UI', icon: '/skills/materialui.svg' },
        { name: 'Git', icon: '/skills/git.svg' },
        { name: 'Node.js', icon: '/skills/nodejs.svg' },
        { name: 'Figma', icon: '/skills/figma.svg' },
    ];

    return (
        <motion.div
            id='about'
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>
                Introduction
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className='flex-1'
                >
                    <p className='mb-10 font-Ovo text-lg'>
                        I’m a passionate Junior Frontend Developer motivated to learn, grow, and contribute to impactful projects. I enjoy building user-friendly and interactive web experiences that combine clean design with smooth functionality, while constantly exploring new tools and best practices to stay ahead.
                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="flex flex-wrap gap-6"
                    >
                        {[
                            {
                                icon: assets.code_icon,
                                title: "Languages",
                                items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js']
                            },
                            {
                                icon: assets.edu_icon,
                                title: "Education",
                                items: [
                                    <>
                                        Front-End and Cross-Platform Mobile Development
                                        <div className="ml-4 text-[14px] text-gray-600 dark:text-white/50">Information Technology Institute (ITI)</div>
                                    </>,
                                    <>
                                        B.Sc. in Electrical Engineering
                                        <div className="ml-4 text-[14px] text-gray-600 dark:text-white/50">Cairo University</div>
                                    </>
                                ]
                            },
                            {
                                icon: assets.skills,
                                title: "Soft Skills",
                                items: [
                                    'Fast Learner',
                                    'Adaptable & Growth-Oriented',
                                    'Team Player',
                                    'Strong Communicator',
                                    'Problem Solver'
                                ]
                            }
                        ].map((section, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                className="flex-1 min-w-[250px] max-w-[400px] border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                            >
                                <Image
                                    src={section.icon}
                                    alt={section.title}
                                    className="w-7 mt-3"
                                />
                                <h3 className="my-4 text-lg font-semibold text-gray-800 dark:text-white">{section.title}</h3>
                                <ul className="list-disc list-inside text-sm space-y-1 ">
                                    {section.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                        className='mt-6 font-Ovo text-center text-lg'>
                        Tools I use
                    </motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                        className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mt-5"
                    >
                        {skillIcons.map(({ name, icon }, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 2.2 + index * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                                title={name}
                            >
                                <Image src={icon} alt={name} width={28} height={28} className="w-5 sm:w-7" />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;