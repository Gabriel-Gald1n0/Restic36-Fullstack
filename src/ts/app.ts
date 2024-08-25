import { apiKey, apiUrl } from './config';
import { updateBackgroundImage } from './imageUtils';

const inputElement = document.querySelector('.form input') as HTMLInputElement;
const searchButton = document.querySelector('.form button') as HTMLButtonElement;
const temperatureElement = document.querySelector('.temp-value') as HTMLElement;
const description = document.querySelector('.description') as HTMLElement;
const humidityElement = document.querySelector('.info-umidade span') as HTMLElement;
const windElement = document.querySelector('.info-vento span') as HTMLElement;
const iconElement = document.querySelector('.weather img') as HTMLImageElement;
const weatherBox = document.querySelector('.weather-box') as HTMLElement;
const erroContainer = document.querySelector('.erro-container') as HTMLElement;
const erroText = document.querySelector('.text-erro') as HTMLElement;

async function getWeatherData(city:string): Promise<any> {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);    

    if(!response.ok){
        throw new Error('Cidade não encontrada');
    }
    return await response.json();
}

async function writenWeatherData(data: any) {
    const temp = parseInt(data.main.temp);
    temperatureElement.innerText = temp.toString();
    description.innerText = data.weather[0].description;
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}Km/h`;
    iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

searchButton.addEventListener("click", async (e) =>{
    const city = inputElement.value.trim();
    if(city) {
        try {
            const weatherData = await getWeatherData(city);
            weatherBox?.classList.remove('active');
            showWeatherBox();
            erroContainer?.classList.add('active');
            await writenWeatherData(weatherData);
            await updateBackgroundImage(city);
        } catch (error: any) {
            weatherBox?.classList.add('active');
            erroContainer?.classList.remove('active');
            showErrorContainer();
            erroText.innerText = `Cidade Não Encontrada`;
        }
    } else  {
        weatherBox?.classList.add('active');
        erroContainer?.classList.remove('active');
        showErrorContainer();
        erroText.innerText = `Insira uma localização`;
    }
});

inputElement.addEventListener("keyup", async (e) => {
    if( e.code === 'Enter' || e.key === 'Enter')
    {
        const city = (e.target as HTMLInputElement).value.trim();
        if (city) {
            try {
                const weatherData = await getWeatherData(city);
                weatherBox?.classList.remove('active');
                showWeatherBox();
                erroContainer?.classList.add('active');
                await writenWeatherData(weatherData);
                await updateBackgroundImage(city);
            } catch (error: any) {
                weatherBox?.classList.add('active');
                erroContainer?.classList.remove('active');
                showErrorContainer();
                erroText.innerText = `Cidade não encontrada`;
            }
        } else {
            weatherBox?.classList.add('active');
            erroContainer?.classList.remove('active');
            showErrorContainer();
            erroText.innerText = `Insira uma localização`;
        }
    }
});

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
