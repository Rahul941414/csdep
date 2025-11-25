"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden border-t border-blue-700/50">
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                              radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
                        backgroundSize: "100px 100px",
                    }}
                />
            </div>

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12 border-b border-blue-700/30">

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                                <img
                                    src="/png/cselogo.png"
                                    alt="CSE Logo"
                                    className="w-10 h-10 object-contain rounded-lg"
                                />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                    CSE Department
                                </h3>
                                <p className="text-sm text-blue-300 font-medium">IIT Indore</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Department of Computer Science and Engineering,<br />
                                    Indian Institute of Technology Indore<br />
                                    Khandwa Road, Simrol, Indore<br />
                                    Madhya Pradesh 453552
                                </p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                                <p className="text-gray-300 text-sm">+91 731 2433 000</p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                                <a
                                    href="mailto:cse@iiti.ac.in"
                                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                                >
                                    cse@iiti.ac.in
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
                            Quick Links
                            <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                        </h3>

                        <ul className="space-y-3">
                            {[
                                { href: "/people/faculty", label: "Faculty & Staff" },
                                { href: "/research", label: "Research" },
                                { href: "/about/contact", label: "Contact Us" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                                    >
                                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
                            Academics
                            <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                        </h3>

                        <ul className="space-y-3">
                            {[
                                { href: "/programs/btech", label: "B.Tech (CSE)" },
                                { href: "/programs/mtech", label: "M.Tech (CS)" },
                                { href: "/programs/ms", label: "M.S. Programs" },
                                { href: "/programs/phd", label: "Ph.D. Programs" },
                                { href: "/teaching/courses", label: "Course Catalog" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                                    >
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
                            Connect With Us
                            <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                        </h3>

                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Stay updated with the latest news, research breakthroughs, and academic
                            events from the CSE Department.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {[
                                {
                                    href: "https://www.iiti.ac.in/",
                                    label: "Student Portal",
                                    icon: <ExternalLink size={12} />,
                                },
                            ].map((resource) => (
                                <a
                                    key={resource.href}
                                    href={resource.href}
                                    className="group flex items-center space-x-1 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20 text-xs font-medium"
                                >
                                    <span className="text-blue-300">{resource.icon}</span>
                                    <span className="text-gray-300 group-hover:text-white">
                                        {resource.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <div className="flex flex-col items-center justify-center text-center py-4">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Department of Computer Science & Engineering,
                            <span className="text-blue-300 font-medium"> IIT Indore</span>. All rights reserved.
                        </p>
                    </div>

                    <div className="text-center mt-4 pt-4 border-t border-blue-700/30">
                        <p className="text-gray-500 text-xs">
                            An Institute of National Importance under the Institutes of Technology Act, 1961
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
} 