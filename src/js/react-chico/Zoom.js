import React from 'react';

class Zoom extends React.Component {

    componentDidMount() {
        return new ch.Zoom(ch('#chico-zoom')[0]);
    }

    render() {
        return (
            <a
                id="chico-zoom"
                className="zoom"
                href={this.props.imageBig}
                target="_blank"
                itemProp="url"
            >
                <img
                    src={this.props.image}
                    alt="Ipad Big"
                    itemProp="image"
                />
            </a>
        );
    }
}

module.exports = Zoom;
