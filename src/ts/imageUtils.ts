import { imgApiKey, imgApiUrl } from './config';

async function getCityImage(city: string): Promise<string> {
    const response = await fetch(`${imgApiUrl}?query=${city}&per_page=1`,{ 
        headers: {
            Authorization: imgApiKey
        }
    });
    if (!response.ok) {
        throw new Error('Não foi possível buscar a imagem da cidade');
    }
    const data = await response.json();
    if (data.photos && data.photos.length > 0) {
        return data.photos[0].src.original; // URL da imagem
    } else {
        throw new Error('Nenhuma imagem encontrada para a cidade');
    }
}

export async function updateBackgroundImage(city: string) {
    try {
        const imageUrl = await getCityImage(city);
        
        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
            document.body.style.backgroundImage = `url(${imageUrl})`;
            document.body.style.display = ''; // Mostrar o corpo da página
        };

        img.onerror = () => {
            document.body.style.backgroundImage = `url('./src/img/background3.jpg')`;
            document.body.style.display = '';
        };

    } catch (error: any) {
        document.body.style.backgroundImage = `url('./src/img/background3.jpg')`;
        document.body.style.display = '';
    }
}