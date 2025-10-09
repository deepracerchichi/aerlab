import React from 'react';
import './css/Home.css'; 
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">Know the Weather, Own Your Day</h1>
                <p className="hero-subtitle">Get accurate forecasts for your location</p>
            </section>

            {/* Main Weather Card */}
            <section className="main-weather-card">
                <h2 className="location">Lagos, Nigeria</h2>
                
                <div className="weather-icon">☀️</div>
                
                <div className="temperature">32°C</div>
                
                <p className="weather-description">Sunny & Clear</p>
                
                <div className="weather-details">
                    <div className="detail-item">
                        <span>Feels like: </span>
                        <strong>35°C</strong>
                    </div>
                    <div className="detail-item">
                        <span>Humidity: </span>
                        <strong>65%</strong>
                    </div>
                    <div className="detail-item">
                        <span>Wind: </span>
                        <strong>12 km/h</strong>
                    </div>
                    <div className="detail-item">
                        <span>UV Index: </span>
                        <strong>8</strong>
                    </div>
                </div>
            </section>

            {/* Quick Forecast Section */}
            <section className="quick-forecast">
                <div className="forecast-card">
                    <div className="forecast-day">Wed</div>
                    <div className="forecast-icon">☀️</div>
                    <div className="forecast-temp">32°</div>
                </div>
                <div className="forecast-card">
                    <div className="forecast-day">Thu</div>
                    <div className="forecast-icon">⛅</div>
                    <div className="forecast-temp">30°</div>
                </div>
                <div className="forecast-card">
                    <div className="forecast-day">Fri</div>
                    <div className="forecast-icon">🌧️</div>
                    <div className="forecast-temp">28°</div>
                </div>
                <div className="forecast-card">
                    <div className="forecast-day">Sat</div>
                    <div className="forecast-icon">⛈️</div>
                    <div className="forecast-temp">27°</div>
                </div>
                <div className="forecast-card">
                    <div className="forecast-day">Sun</div>
                    <div className="forecast-icon">☀️</div>
                    <div className="forecast-temp">31°</div>
                </div>
            </section>

            {/* Weather Highlights */}
            <section className="weather-highlights">
                <div className="highlight-card">
                    <div className="highlight-icon">🌅</div>
                    <div className="highlight-label">Sunrise</div>
                    <div className="highlight-value">6:32 AM</div>
                </div>
                <div className="highlight-card">
                    <div className="highlight-icon">💧</div>
                    <div className="highlight-label">Rain Chance</div>
                    <div className="highlight-value">20%</div>
                </div>
                <div className="highlight-card">
                    <div className="highlight-icon">👁️</div>
                    <div className="highlight-label">Visibility</div>
                    <div className="highlight-value">10 km</div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <p className="cta-text">Want more detailed forecasts?</p>
                <Link to="/forecast" className="cta-button">
                    View 7-Day Forecast
                </Link>
            </section>

            <footer className="footer">
                <p>© 2025 Aerlab by Chinyere. All rights reserved.</p>
                
            </footer>

        </div>
    );
}

export default Home;