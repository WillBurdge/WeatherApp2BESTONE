        const API_KEY = "94e96cc86d4be9891bedd82d600ff902"; 
        const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

        const locationInput = document.getElementById("location");
        const temperature = document.getElementById("temperature");
        const description = document.getElementById("description");
        const error = document.getElementById("error");

        locationInput.addEventListener("keydown", async (event) => {
            if (event.key === "Enter") {
                event.preventDefault();

                const location = locationInput.value.trim();
                if (location === "") {
                    error.textContent = "Please enter a location";
                    temperature.textContent = "";
                    description.textContent = "";
                } else {
                    error.textContent = "";
                    try {
                        const response = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
                        const data = await response.json();
                        temperature.textContent = `${data.main.temp} °C`;
                        description.textContent = data.weather[0].description;
                    } catch (e) {
                        error.textContent = "Could not retrieve weather data";
                        temperature.textContent = "";
                        description.textContent = "";
                    }
                }
            }
        });