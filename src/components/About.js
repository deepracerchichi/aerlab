import React from 'react';
import { Cloud, Zap, Globe, Shield, Heart, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import './css/About.css';

function About() {
    return (
        <div className="about-container">
            
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-content">
                    <h1 className="about-title">About AeroAb</h1>
                    <p className="about-tagline">Your trusted companion for accurate weather forecasts</p>
                    <div className="hero-icon">☁️</div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="mission-content">
                    <h2 className="section-title">What is AeroAb?</h2>
                    <div className="mission-text">
                        <p>
                            AeroAb is a modern weather application designed to provide accurate, 
                            real-time weather information in a beautiful and intuitive interface. 
                            We believe checking the weather should be simple, fast, and delightful.
                        </p>
                        <p>
                            Born from a passion for clean design and reliable data, AeroAb brings 
                            you the forecasts you need without the clutter. No ads, no complicated 
                            menus—just beautiful, reliable weather information when you need it.
                        </p>
                        <p>
                            Whether you're planning your day, your week, or your travels, AeroAb 
                            gives you the forecasts you need with the design you deserve.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="features-section">
                <h2 className="section-title">Why Choose AeroAb?</h2>
                <p className="section-subtitle">Everything you need in a weather app</p>
                
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Zap size={40} color="white" />
                        </div>
                        <h3 className="feature-title">Real-Time Updates</h3>
                        <p className="feature-description">
                            Get up-to-date weather information instantly. Our data refreshes 
                            in real-time to keep you informed.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Cloud size={40} color="white" />
                        </div>
                        <h3 className="feature-title">Accurate Forecasts</h3>
                        <p className="feature-description">
                            Powered by reliable data sources to provide you with the most 
                            accurate weather predictions available.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Globe size={40} color="white" />
                        </div>
                        <h3 className="feature-title">Global Coverage</h3>
                        <p className="feature-description">
                            Check weather anywhere in the world. From Lagos to London, 
                            we've got you covered.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3 className="feature-title">Mobile Friendly</h3>
                        <p className="feature-description">
                            Works perfectly on any device. Desktop, tablet, or mobile—
                            beautiful weather information everywhere.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3 className="feature-title">Beautiful Design</h3>
                        <p className="feature-description">
                            Clean, modern interface with stunning glassy effects. 
                            Weather forecasts have never looked this good.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Shield size={40} color="white" />
                        </div>
                        <h3 className="feature-title">Privacy First</h3>
                        <p className="feature-description">
                            Your location data is never stored. We respect your privacy 
                            and only use data to provide weather info.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works-section">
                <h2 className="section-title">How AeroAb Works</h2>
                <p className="section-subtitle">Simple, fast, and reliable</p>
                
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3 className="step-title">Enter Your Location</h3>
                            <p className="step-description">
                                Search for any city worldwide or use your current location 
                                with one click.
                            </p>
                        </div>
                    </div>

                    <div className="step-arrow">↓</div>

                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3 className="step-title">Get Real-Time Data</h3>
                            <p className="step-description">
                                We fetch the latest weather data from trusted sources 
                                in milliseconds.
                            </p>
                        </div>
                    </div>

                    <div className="step-arrow">↓</div>

                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3 className="step-title">View Beautiful Forecasts</h3>
                            <p className="step-description">
                                See current conditions, hourly updates, and 5-day 
                                predictions in a stunning interface.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Sources */}
            <section className="data-sources-section">
                <div className="data-content">
                    <h2 className="section-title">Our Data Sources</h2>
                    <p className="data-description">
                        AeroAb uses data from OpenWeatherMap, one of the most reliable 
                        weather data providers in the world. All forecasts are updated 
                        in real-time to ensure you have the most current information.
                    </p>
                    <p className="data-description">
                        We combine accurate meteorological data with beautiful design 
                        to create an experience that's both functional and delightful.
                    </p>
                </div>
            </section>

            {/* Developer Section */}
            <section className="developer-section">
                <h2 className="section-title">Built With Passion</h2>
                <div className="developer-card">
                    <div className="developer-avatar">
                        <Code size={60} color="white" />
                    </div>
                    <h3 className="developer-name">Created by Chinyere</h3>
                    <p className="developer-bio">
                        A frontend developer passionate about creating beautiful, 
                        user-friendly web experiences. AeroAb combines modern design 
                        principles with practical functionality to deliver weather 
                        forecasts that people actually enjoy using.
                    </p>
                    <p className="developer-mission">
                        This project was built to prove that weather apps don't have 
                        to be complicated or cluttered. Sometimes, simplicity and 
                        beauty are all you need.
                    </p>
                    <div className="developer-links">
                        <a href="#" className="social-link">GitHub</a>
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">Portfolio</a>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="tech-stack-section">
                <h2 className="section-title">Built With</h2>
                <div className="tech-grid">
                    <div className="tech-item">
                        <span className="tech-icon">⚛️</span>
                        <span className="tech-name">React</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-icon">🎨</span>
                        <span className="tech-name">CSS3</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-icon">🌐</span>
                        <span className="tech-name">OpenWeather API</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-icon">📱</span>
                        <span className="tech-name">Responsive Design</span>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-description">
                    Have questions or feedback? We'd love to hear from you!
                </p>
                <div className="contact-info">
                    <div className="contact-item">
                        <span className="contact-icon">📧</span>
                        <span className="contact-text">contact@aeroab.com</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">🐦</span>
                        <span className="contact-text">@AeroAbWeather</span>
                    </div>
                </div>
                <div className="contact-buttons">
                    <button className="contact-btn">Report a Bug</button>
                    <button className="contact-btn">Request Feature</button>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to check the weather?</h2>
                    <p className="cta-description">
                        Experience beautiful weather forecasts today
                    </p>
                    <Link to="/" className="cta-button">
                        <Heart size={20} />
                        <span>Get Started</span>
                    </Link>
                </div>
            </section>

        </div>
    );
}

export default About;