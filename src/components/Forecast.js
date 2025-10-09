import './css/Forecast.css';
import { Search, MapPin } from 'lucide-react';
import React, { useState } from 'react';

function ForeCast() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [city, setCity] = useState('');

    // Get weather icon based on condition
    const getWeatherIcon = (weatherMain) => {
        const icons = {
            'Clear': '☀️',
            'Clouds': '☁️',
            'Rain': '🌧️',
            'Drizzle': '🌦️',
            'Thunderstorm': '⛈️',
            'Snow': '❄️',
            'Mist': '🌫️',
            'Fog': '🌫️',
            'Haze': '🌫️'
        };
        return icons[weatherMain] || '🌤️';
    };

    // Format timestamp to day name
    const getDayName = (timestamp) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(timestamp * 1000);
        return days[date.getDay()];
    };

    // Single function that gets both current weather AND forecast
    async function fetchWeatherData(cityName) {
        if (!cityName.trim()) {
            setError('Please enter a city name');
            return;
        }

        setLoading(true);
        setError('');
        setWeather(null);
        setForecast(null);

        const API_KEY = 'a0792f5e9f17e73b32a61f90f91ea950';
        
        try {
            const [weatherResponse, forecastResponse] = await Promise.all([
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`),
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`)
            ]);

            if (!weatherResponse.ok || !forecastResponse.ok) {
                throw new Error('City not found');
            }

            const [weatherData, forecastData] = await Promise.all([
                weatherResponse.json(),
                forecastResponse.json()
            ]);

            setWeather(weatherData);
            setForecast(forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 5));

        } catch (error) {
            setError(error.message || 'Failed to fetch weather data');
        } finally {
            setLoading(false);
        }
    }

    async function fetchWeatherByCoords(lat, lon) {
        setLoading(true);
        setError('');
        
        const API_KEY = 'a0792f5e9f17e73b32a61f90f91ea950';
        
        try {
            const [weatherResponse, forecastResponse] = await Promise.all([
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`),
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
            ]);
            
            if (!weatherResponse.ok || !forecastResponse.ok) {
                throw new Error('Failed to get weather for your location');
            }
            
            const [weatherData, forecastData] = await Promise.all([
                weatherResponse.json(),
                forecastResponse.json()
            ]);

            setWeather(weatherData);
            setForecast(forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 5));
            
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    fetchWeatherByCoords(lat, lon);
                },
                (error) => {
                    setError("Error getting location: " + error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }

    const handleSearch = () => {
        fetchWeatherData(city);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return(
        <div className="fore-container">
            
            {/* Page Header */}
            <section className="forecast-header">
                <h1 className="forecast-title">Stay Ahead with Hyperlocal Forecasts</h1>
                <p className="forecast-subtitle">Accurate, real-time weather predictions anytime, anywhere</p>
            </section>

            {/* Location Button */}
            <div className="location-btn-wrapper">
                <button
                    className="location-btn"
                    onClick={getCurrentLocation}
                    disabled={loading}
                >
                    <MapPin size={20} />
                    <span>{loading ? 'Getting location...' : 'Use My Location'}</span>
                </button>
            </div>

            {/* Search Section */}
            <section className="search-section">
                <h2 className="section-label">Search for a city</h2>
                <div className="search-wrapper">
                    <input 
                        type="text" 
                        className="search-bar" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter city name..." 
                    />
                    <button 
                        className="search-button"
                        onClick={handleSearch}
                        disabled={loading}
                    >
                        <Search size={20} color="white" />
                    </button>
                </div>
            </section>

            {/* Error Message */}
            {error && <div className="error-message">⚠️ {error}</div>}

            {/* Loading State */}
            {loading && <div className="loading-message">Loading weather data...</div>}

            {/* Current Weather Card */}
            {weather && (
                <section className="current-weather-section">
                    <h2 className="section-heading">Current Weather</h2>
                    <p className="location-subtitle">{weather.name}, {weather.sys.country}</p>
                    
                    <div className="main-weather-card">
                        <div className="weather-icon">{getWeatherIcon(weather.weather[0].main)}</div>
                        <div className="temperature">{Math.round(weather.main.temp)}°C</div>
                        <p className="weather-description">{weather.weather[0].description}</p>
                        
                        <div className="weather-details">
                            <div className="detail-item">
                                <span>Feels like</span>
                                <strong>{Math.round(weather.main.feels_like)}°C</strong>
                            </div>
                            <div className="detail-item">
                                <span>Humidity</span>
                                <strong>{weather.main.humidity}%</strong>
                            </div>
                            <div className="detail-item">
                                <span>Wind Speed</span>
                                <strong>{weather.wind.speed} m/s</strong>
                            </div>
                            <div className="detail-item">
                                <span>Pressure</span>
                                <strong>{weather.main.pressure} hPa</strong>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 5-Day Forecast */}
            {forecast && forecast.length > 0 && (
                <section className="forecast-section">
                    <h2 className="section-heading">5-Day Forecast</h2>
                    <p className="section-subheading">Extended weather outlook</p>
                    
                    <div className="forecast-grid">
                        {forecast.map((day, index) => (
                            <div key={index} className="forecast-card">
                                <h3 className="forecast-day">{getDayName(day.dt)}</h3>
                                <div className="forecast-icon">{getWeatherIcon(day.weather[0].main)}</div>
                                <div className="forecast-temp">{Math.round(day.main.temp)}°C</div>
                                <p className="forecast-desc">{day.weather[0].description}</p>
                                <div className="forecast-details">
                                    <span>💧 {day.pop ? Math.round(day.pop * 100) : 0}%</span>
                                    <span>💨 {day.wind.speed} m/s</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Weather Highlights */}
            {weather && (
                <section className="highlights-section">
                    <h2 className="section-heading">Weather Details</h2>
                    <p className="section-subheading">Additional atmospheric conditions</p>
                    
                    <div className="highlights-grid">
                        <div className="highlight-card">
                            <div className="highlight-icon">🌡️</div>
                            <div className="highlight-label">Feels Like</div>
                            <div className="highlight-value">{Math.round(weather.main.feels_like)}°C</div>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">💧</div>
                            <div className="highlight-label">Humidity</div>
                            <div className="highlight-value">{weather.main.humidity}%</div>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">💨</div>
                            <div className="highlight-label">Wind Speed</div>
                            <div className="highlight-value">{weather.wind.speed} m/s</div>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">🧭</div>
                            <div className="highlight-label">Wind Direction</div>
                            <div className="highlight-value">{weather.wind.deg}°</div>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">🌡️</div>
                            <div className="highlight-label">Pressure</div>
                            <div className="highlight-value">{weather.main.pressure} hPa</div>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">👁️</div>
                            <div className="highlight-label">Visibility</div>
                            <div className="highlight-value">{(weather.visibility / 1000).toFixed(1)} km</div>
                        </div>
                    </div>
                </section>
            )}

            <footer className="footer">
                <p>© 2025 AeroAb by Chinyere. All rights reserved.</p>
            </footer>

        </div>
    )
}

export default ForeCast;