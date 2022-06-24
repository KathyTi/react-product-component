import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IProduct, IPrice, ICharacteristic} from "./types/types";
import ProductDetailsComponent from "./components/ProductDetailsComponent";

    //"https://ipac67.ru/image/cache/data/product/iPhone/iPhone-13-pro/green13pro-700x700.jpg",
    //"https://ipac67.ru/image/cache/data/product/xiaomi/fd172cd0c6e5797cd3662bc88f8a8699-700x700.jpg",
    //"https://ipac67.ru/image/cache/data/product/homepod/homebl-700x700.png",
    //"https://ipac67.ru/image/cache/data/product/Charge/zashhitnoe-steklo-apple-ipad-air-2019-700x700.jpg",
    //"https://ipac67.ru/image/cache/data/product/ipad/pencil21-700x700.jpg",
    //"https://ipac67.ru/image/cache/data/product/xiaomi/70mai_dash_cam_a400_seriy4-800x800-1-700x700.jpg",
    //"https://ipac67.ru/image/cache/data/product/xiaomi/EDA001113501A-700x700.jpg",
    //"https://ipac67.ru/image/cache/data/li/aks/17340663-700x700.jpeg",
    //"https://ipac67.ru/image/cache/data/product/iPhone/airtag/1111-700x700.jpg",
    //"https://ipac67.ru/image/cache/data/product/ipad/aks/%20Smart%20Keyboard_1-700x700.jpeg",
    //"https://ipac67.ru/image/cache/data/li/default/%20Xiaomi%20-700x700.png"

const product: IProduct = {
    id: 1,
    name: "item-name",
    price: {
        retail_price: 1000
    },
    characteristics: [
        {
            id: 11,
            title: "title-string1",
            type: "characteristic-type-string1",
            value: 'characteristic-value1',
            meta: 'characteristic-meta1'
        },
        {
            id: 22,
            title: "title-string2",
            type: "characteristic-type-string2",
            value: 'characteristic-value2',
            meta: 'characteristic-meta2'
        },
        {
            id: 33,
            title: "title-string3",
            type: "characteristic-type-string3",
            value: 'characteristic-value3',
            meta: 'characteristic-meta3'
        },
    ],
    description: "Товарищи! Дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Товарищи! постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности позволяет оценить значение соответствующий условий активизации.",
    media: [
        {
            id: 111,
            name: "media-name-string1",
            format: "png",
            path: "https://ipac67.ru/image/cache/data/product/iPhone/iPhone-13-pro/green13pro-700x700.jpg",
        },
        {
            id: 222,
            name: "media-name-string2",
            format: "png",
            path: "https://ipac67.ru/image/cache/data/product/xiaomi/fd172cd0c6e5797cd3662bc88f8a8699-700x700.jpg",
        },
        {
            id: 333,
            name: "media-name-string3",
            format: "png",
            path: "https://ipac67.ru/image/cache/data/product/homepod/homebl-700x700.png",
        },
        {
            id: 444,
            name: "media-name-string3",
            format: "png",
            path: "https://ipac67.ru/image/cache/data/product/Charge/zashhitnoe-steklo-apple-ipad-air-2019-700x700.jpg",
        },
        {
            id: 555,
            name: "media-name-string3",
            format: "png",
            path: "https://ipac67.ru/image/cache/data/product/ipad/pencil21-700x700.jpg",
        },
        {
            id: 666,
            name: "media-name-string3",
            format: "png",
            path: "https://ipac67.ru/image/cache/data/product/xiaomi/70mai_dash_cam_a400_seriy4-800x800-1-700x700.jpg",
        },
    ],
    categories: [
        {
            id: 1111,
            name: "category-name-string1",
        },
        {
            id: 2222,
            name: "category-name-string2",
        },
    ],
    tags: [
        {
            id: 11111,
            name: "tag-name-string1",
        },
        {
            id: 22222,
            name: "tag-name-string2",
        },
        {
            id: 33333,
            name: "tag-name-string3",
        },
    ],
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App>
        <ProductDetailsComponent productItem={product}/>
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
