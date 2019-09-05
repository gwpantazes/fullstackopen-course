import React from 'react'

const Weather = ({ city, weather }) => {
    return !weather
        ? <></>
        : (
            <div>
                <h2>Weather in {city}</h2>
                <p><strong>Temperature:</strong> &nbsp; {weather.current.temp_c}&deg; Celsius</p>
                <div>
                    <img 
                        src={`https:${weather.current.condition.icon}`}
                        alt={weather.current.condition.text}
                        title={weather.current.condition.text}
                    />
                </div>
                <p><strong>wind:</strong> &nbsp; 
                    {weather.current.wind_kph} kph
                    direction {weather.current.wind_dir}
                </p>
            </div>
        )
}

export default Weather