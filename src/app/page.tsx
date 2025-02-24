'use client';

import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Contact from '../components/Contacts';
import Social from '../components/Social';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(true);
	const closeNav = () => setNav(false);

	useEffect(() => {
		AOS.init({
			offset: 120,
			duration: 1000,
			easing: 'ease',
			once: true,
		});
	}, []);

	return (
		<>
			<Head>
				<title>My Portfolio 🚀 | Frontend Developer</title>
				<meta
					name="description"
					content="Portofolio saya dengan Next.js dan Tailwind CSS"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<div className="overflow-x-hidden">
				<div>
					<MobileNav nav={nav} closeNav={closeNav} />
					<Nav openNav={openNav} />
					<div id="hero">
						<Hero />
					</div>
					<div className="relative z-[30]">
						<div id="about">
							<About />
						</div>
						<div id="services">
							<Services />
						</div>
						<div id="skills">
							<Skills />
						</div>
						<div id="projects">
							<Projects />
						</div>
						<div id="contact">
							<Contact />
						</div>
						<Social />
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
