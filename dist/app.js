var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { apiKey, apiUrl } from './config.js';
import { updateBackgroundImage } from './imageUtils.js';
const inputElement = document.querySelector('.form input');
const searchButton = document.querySelector('.form button');
const temperatureElement = document.querySelector('.temp-value');
const description = document.querySelector('.description');
const humidityElement = document.querySelector('.info-umidade span');
const windElement = document.querySelector('.info-vento span');
const iconElement = document.querySelector('.weather img');
const weatherBox = document.querySelector('.weather-box');
const erroContainer = document.querySelector('.erro-container');
const erroText = document.querySelector('.text-erro');
function getWeatherData(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
        if (!response.ok) {
            throw new Error('Cidade não encontrada');
        }
        return yield response.json();
    });
}
function writenWeatherData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const temp = parseInt(data.main.temp);
        temperatureElement.innerText = temp.toString();
        description.innerText = data.weather[0].description;
        humidityElement.innerText = `${data.main.humidity}%`;
        windElement.innerText = `${data.wind.speed}Km/h`;
        iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}
searchButton.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    const city = inputElement.value.trim();
    if (city) {
        try {
            const weatherData = yield getWeatherData(city);
            weatherBox === null || weatherBox === void 0 ? void 0 : weatherBox.classList.remove('active');
            showWeatherBox();
            erroContainer === null || erroContainer === void 0 ? void 0 : erroContainer.classList.add('active');
            yield writenWeatherData(weatherData);
            yield updateBackgroundImage(city);
        }
        catch (error) {
            weatherBox === null || weatherBox === void 0 ? void 0 : weatherBox.classList.add('active');
            erroContainer === null || erroContainer === void 0 ? void 0 : erroContainer.classList.remove('active');
            showErrorContainer();
            erroText.innerText = `Cidade Não Encontrada`;
        }
    }
    else {
        weatherBox === null || weatherBox === void 0 ? void 0 : weatherBox.classList.add('active');
        erroContainer === null || erroContainer === void 0 ? void 0 : erroContainer.classList.remove('active');
        showErrorContainer();
        erroText.innerText = `Insira uma localização`;
    }
}));
inputElement.addEventListener("keyup", (e) => __awaiter(void 0, void 0, void 0, function* () {
    if (e.code === 'Enter' || e.key === 'Enter') {
        const city = e.target.value.trim();
        if (city) {
            try {
                const weatherData = yield getWeatherData(city);
                weatherBox === null || weatherBox === void 0 ? void 0 : weatherBox.classList.remove('active');
                showWeatherBox();
                erroContainer === null || erroContainer === void 0 ? void 0 : erroContainer.classList.add('active');
                yield writenWeatherData(weatherData);
                yield updateBackgroundImage(city);
            }
            catch (error) {
                weatherBox === null || weatherBox === void 0 ? void 0 : weatherBox.classList.add('active');
                erroContainer === null || erroContainer === void 0 ? void 0 : erroContainer.classList.remove('active');
                showErrorContainer();
                erroText.innerText = `Cidade não encontrada`;
            }
        }
        else {
            weatherBox === null || weatherBox === void 0 ? void 0 : weatherBox.classList.add('active');
            erroContainer === null || erroContainer === void 0 ? void 0 : erroContainer.classList.remove('active');
            showErrorContainer();
            erroText.innerText = `Insira uma localização`;
        }
    }
}));
function showWeatherBox() {
    weatherBox.style.opacity = '0';
    weatherBox.style.transform = 'translateY(-50%)';
    weatherBox.offsetHeight;
    // Animação de transição
    weatherBox.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    weatherBox.style.opacity = '1';
    weatherBox.style.transform = 'translateY(0)';
}
// Função para mostrar a caixa de erro com animação
function showErrorContainer() {
    erroContainer.style.opacity = '0';
    erroContainer.style.transform = 'translateY(-50%)';
    // Força uma reflow para garantir que as mudanças anteriores sejam aplicadas
    erroContainer.offsetHeight;
    erroContainer.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    erroContainer.style.opacity = '1';
    erroContainer.style.transform = 'translateY(0)';
}
