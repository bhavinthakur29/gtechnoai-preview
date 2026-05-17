import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Layers, ChevronRight, Zap, Globe, Heart } from 'lucide-react';

const LandingPage = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white font-sans overflow-x-hidden selection:bg-violet-500/30 flex flex-col relative w-full">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-20%] w-[70%] h-[50%] md:w-[50%] md:h-[50%] bg-violet-600/20 blur-[100px] md:blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-20%] w-[70%] h-[50%] md:w-[50%] md:h-[50%] bg-cyan-600/20 blur-[100px] md:blur-[150px] rounded-full" />
            </div>

            {/* Navbar */}
            <nav className="relative z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/20 flex-shrink-0">
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
                        G-Techno AI
                    </span>
                </div>
                <a
                    href="https://www.producthunt.com/products/g-techno-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all whitespace-nowrap"
                >
                    <span className="hidden sm:inline">Support on</span> Product Hunt
                </a>
            </nav>

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center">
                {/* Hero Section */}
                <section className="relative z-10 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="w-full"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 sm:mb-8 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm">
                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />
                            <span className="text-xs sm:text-sm font-medium text-violet-300">Featured on Product Hunt</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6 sm:mb-8">
                            Every Major AI.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                                Unlimited Possibilities.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                            Stop switching between tabs. G-Techno AI unifies the world's most powerful artificial intelligence models into one seamless, lightning-fast application.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0">
                            <button className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-black rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                                Get Started Free
                            </button>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-base sm:text-lg text-white transition-all">
                                View Features
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </button>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-10 sm:mt-14 text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2">
                            <img
                                src="https://ui-avatars.com/api/?name=Gagan+Mottan&background=8b5cf6&color=fff&rounded=true"
                                alt="Gagan Mottan"
                                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-violet-500/50"
                            />
                            <span>Created by <strong className="text-gray-300 font-semibold">Gagan Mottan</strong></span>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Feature Grid */}
                <section className="relative z-10 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {/* Card 1 */}
                        <motion.div variants={fadeInUp} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 hover:border-violet-500/50 transition-colors group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-violet-500/20 flex items-center justify-center mb-5 sm:mb-6 border border-violet-500/30 group-hover:scale-110 transition-transform">
                                <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">All-in-One Platform</h3>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                Access GPT, Claude, Gemini, and more from a single, unified interface. No more juggling subscriptions.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={fadeInUp} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 hover:border-cyan-500/50 transition-colors group md:-translate-y-4 lg:-translate-y-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5 sm:mb-6 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Lightning Fast</h3>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                Optimized routing ensures you get the fastest possible response times, no matter which model you choose.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={fadeInUp} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 hover:border-fuchsia-500/50 transition-colors group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-fuchsia-500/20 flex items-center justify-center mb-5 sm:mb-6 border border-fuchsia-500/30 group-hover:scale-110 transition-transform">
                                <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-fuchsia-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Unlimited Scope</h3>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                From coding to creative writing, leverage the specific strengths of each AI model to handle any task effortlessly.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/10 py-6 sm:py-8 mt-auto bg-black/20 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                        <Bot className="w-4 h-4" />
                        <span className="font-semibold text-xs sm:text-sm">G-Techno AI</span>
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm flex items-center flex-wrap justify-center gap-1.5">
                        Crafted with <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-500 fill-violet-500" /> by <a href="https://www.producthunt.com/products/g-techno-ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:text-violet-400 transition-colors">Gagan Mottan</a>
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;