import React from 'react';

class Carousel extends React.Component {

    componentDidMount() {
        var options = this.props.options;
        document.addEventListener('DOMContentLoaded', function () {
            return new ch.Carousel(ch('#chico-carousel')[0], options);
        });
    }

    render() {
        return (
            <div
                id="chico-carousel"
                className="ch-carousel"
                itemProp="isRelatedTo"
            >
                <ul>
                    {this.props.images.map((d, i)=>
                        <li
                            key={i}
                        >
                            <img
                                src={d}
                            />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

module.exports = Carousel;
