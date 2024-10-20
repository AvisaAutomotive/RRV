import React, { useEffect, useState } from 'react';
import './index.css';

const TypingText = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index += 1;
            if (index === text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center transform transition-transform duration-500 scale-105 px-4">
            {displayedText}
        </h1>
    );
};

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            <header className="border-b border-gray-300 relative">
                <div className="container mx-auto flex justify-between items-center py-4 px-4">
                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        ☰
                    </button>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex space-x-9 opacity-100 animate-fade-in">
                        <a href="app.js" className="text-black hover:underline">Home</a>
                        <a href="#" className="text-black hover:underline">About Us</a>
                        <a href="#" className="text-black hover:underline">Product</a>
                        <a href="#" className="text-black hover:underline">Careers</a>
                        <a href="#" className="text-black hover:underline">Contact Us</a>
                    </nav>

                    {/* Mobile menu */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50">
                            <div className="flex flex-col p-4 space-y-4">
                                <a href="app.js" className="text-black hover:underline">Home</a>
                                <a href="#" className="text-black hover:underline">About Us</a>
                                <a href="#" className="text-black hover:underline">Product</a>
                                <a href="#" className="text-black hover:underline">Careers</a>
                                <a href="#" className="text-black hover:underline">Contact Us</a>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            <div className="text-center p-4">
                <div className="flex justify-center items-center my-1">
                    <img src="/logo.png" alt="AVISA AUTOMOTIVE Logo" className="h-10 sm:h-12 md:h-16" />
                </div>
            </div>

            <main className="overflow-hidden">
                <section className="relative">
                    <img 
                        src="/vendor1.png" 
                        alt="Street vendor working" 
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4">
                        <TypingText text="For 10 Million+ street vendors" speed={150} />
                    </div>
                </section>

                <section className="bg-gray-100 py-8">
                    <div className="container mx-auto text-center px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
                            <div className="flex-1 animate-fade-in">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                                    Empower street vendors and create sustainable business practices
                                </h2>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:scale-105">
                                    Know More
                                </button>
                            </div>
                        </div>
                        <div className="animate-fade-in">
                            <img 
                                src="/emotion.png" 
                                alt="Electric utility vehicle" 
                                className="w-full h-48 sm:h-64 md:h-96 object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-black-100 text-black py-8">
                    <div className="container mx-auto text-center px-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">AVISA Empathizes</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6">Street Vendors struggle!</p>
                        <p className="text-base sm:text-lg md:text-xl mb-6">Who makes..</p>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
                            14% Contribution to the Informal Employment Sector
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <img src="/emp1.png" alt="Street vendor image 1" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-lg" />
                            <img src="emp2.png" alt="Street vendor image 2" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-lg" />
                            <img src="emp3.png" alt="Street vendor image 3" className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-lg sm:col-span-2 md:col-span-1" />
                        </div>
                    </div>
                </section>

                <section className="bg-black text-white py-8">
                    <div className="container mx-auto text-center px-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">Join the Movement</h2>
                        <p className="text-base sm:text-lg md:text-xl mb-6">
                            Be part of an attempt to transform the lives of vendors and create a sustainable future
                        </p>
                        <button className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-blue-600 transition">
                            Join Now
                        </button>
                    </div>
                </section>

                <section className="bg-blue-1000 py-8">
                    <div className="container mx-auto text-center px-4">
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                            <div className="flex flex-col sm:flex-row items-center h-auto sm:h-20 space-y-2 sm:space-y-0">
                                <img src="/iith.png" alt="IIT Hyderabad" className="w-32 h-auto object-contain mr-2" />
                                <p className="text-black">Supported by IIT Hyderabad</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center h-auto sm:h-20 space-y-2 sm:space-y-0">
                                <img src="/scitechs.png" alt="SCITECH Park" className="w-32 h-auto object-contain mr-2" />
                                <p className="text-black">Supported by SCITECH Park, Pune</p>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                            <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-lg font-semibold text-gray-800">Visit</h3>
                                <p className="text-gray-600">
                                    <a href="http://avisaautomotive.com" className="text-blue-500 hover:underline">avisaautomotive.com</a>
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                                <p className="text-gray-600">
                                    <a href="mailto:contact.avisa@gmail.com" className="text-blue-500 hover:underline">contact.avisa@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-black py-4">
                <div className="container mx-auto text-center px-4">
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                        &copy; 2023 <span className="font-bold text-blue-600">AVISA AUTOMOTIVE</span>. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;