import React from 'react';
import { Zoom, Carousel } from './react-chico';

import BuyForm from './components/BuyForm';
import Tabpane from './components/Tabpane';

var relatedImages = [
    'assets/img/products/ipad_related_1.jpg',
    'assets/img/products/ipad_related_2.jpg',
    'assets/img/products/ipad_related_3.jpg',
    'assets/img/products/ipad_related_4.jpg',
    'assets/img/products/ipad_related_5.jpg'
];

export default class App extends React.Component {
    render() {
        return (
            <article className="product" itemScope itemType="http://schema.org/Product">
                <h1 itemProp="name">Ipad Mini Apple 16 Gb Wifi Led 7.9</h1>
                <Zoom
                    className="product__image"
                    image="assets/img/products/ipad.jpg"
                    imageBig="assets/img/products/ipad_big.jpg"
                />
                <div className="product__offer" itemScope itemType="http://schema.org/Offer">
                    <span
                        className="product__currency"
                        itemProp="priceCurrency"
                        content="USD"
                    >
                        $
                    </span>
                    <span
                        className="product__price"
                        itemProp="price"
                        content="4799.99"
                    >
                        4799<small>.99</small>
                    </span>
                    <link itemProp="availability" href="http://schema.org/InStock" />
                </div>
                <BuyForm />
                <span className="product__notice">
                    MercadoLibre isn't the owner of this product.
                </span>
                <div className="product__related">
                    <h3>More products like this</h3>
                    <Carousel
                        images={relatedImages}
                        options={{
                            autoHeight: true,
                            limitPerPage: 3
                        }}
                    />
                </div>
                <hr />
                <Tabpane />
            </article>
        );
    }
}
