import React from 'react'
import Search from './Search'

export default function Weather() {

    return (
        <div class="body-section border">
            <section>
                <div id='search-form'>
                    <Search />
                </div>
                {/* <div id="search-form">
                    <input type="text" placeholder="Enter city......" id="search-input" class="" />
                    <button id="search-btn">Search</button>
                    <button id="current-btn">Current</button>
                </div> */}
                <div class="container-flex mt-4">
                    <div class="flex degrees">
                        <div>
                            <img src="" alt="clear" id="icon" />
                        </div>
                        <div class="values flex-col">
                            <div class="cloudy">
                                <div style={{ fontSize: '40px' }}>
                                    <strong id="temperature"></strong><span class="units"> <a href="/" id="celsius-link"
                                        class='active'>°C</a> | <a href="/" id="fahrenheit-link">°F</a></span>
                                </div>
                                <h3 id='description'>''</h3>
                            </div>
                            <div>
                                <p>
                                    Humidity: <span id="humidity"></span>%
                                </p>
                                <p>
                                    Wind: <span id="wind"></span>km/h
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="city">
                        <h2 id="city" class="display-text">Lagos, Nigeria</h2>
                        <p class="date"></p>
                    </div>
                </div>
            </section>
            <section class="section1">
                <div class="mt-4 mb-3 weather-forecast" id="forecast">

                </div>
                <small class="below">Ope source Code by Benedicta. Source code in <a href="https://github.com/BenedictaUche/React-weather-app"
                    target='_blank' rel='noreferrer'>Github</a></small>
            </section>
        </div>
    )
}


