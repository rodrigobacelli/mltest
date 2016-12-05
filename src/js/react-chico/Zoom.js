import React from 'react';
import cx from 'classnames';

class Zoom extends React.Component {

    componentDidMount() {
        return new ch.Zoom(ch('#chico-zoom')[0]);
    }

    render() {
        return (
            <a
                id="chico-zoom"
                className={cx(
                    'zoom',
                    this.props.className
                )}
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
