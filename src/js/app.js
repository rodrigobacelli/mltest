import React from 'react';
import { Zoom } from './react-chico';

export default class App extends React.Component {
    render() {
        return (
            <article itemScope itemType="http://schema.org/Product">
                <h1 itemProp="name">Ipad Mini Apple 16 Gb Wifi Led 7.9</h1>
                <Zoom
                    image="assets/img/products/ipad.jpg"
                    imageBig="assets/img/products/ipad_big.jpg"
                />
                <div className="offer" itemScope itemType="http://schema.org/Offer">
                    <span itemProp="priceCurrency" content="USD">$</span>
                    <span itemProp="price" content="4799.99">
                        4799<small>.99</small>
                    </span>
                    <link itemprop="availability" href="http://schema.org/InStock" />
                </div>

            </article>
        );
    }
}
