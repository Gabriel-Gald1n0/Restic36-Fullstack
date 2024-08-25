var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { imgApiKey, imgApiUrl } from './config.js';
function getCityImage(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${imgApiUrl}?query=${city}&per_page=1`, {
            headers: {
                Authorization: imgApiKey
            }
        });
        if (!response.ok) {
            throw new Error('Não foi possível buscar a imagem da cidade');
        }
        const data = yield response.json();
        if (data.photos && data.photos.length > 0) {
            return data.photos[0].src.original; // URL da imagem
        }
        else {
            throw new Error('Nenhuma imagem encontrada para a cidade');
        }
    });
}
export function updateBackgroundImage(city) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imageUrl = yield getCityImage(city);
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
        }
        catch (error) {
            document.body.style.backgroundImage = `url('./src/img/background3.jpg')`;
            document.body.style.display = '';
        }
    });
}
