import React from 'react';

class Zoom extends React.Component {
    render() {
        return (
            <a
                id="zoom-default"
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
