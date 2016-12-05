import React from 'react';
import _ from 'lodash';

export default class BuyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityValue: '1',
            paymentsValue: '1'
        };

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleQuantityChange(event) {
        this.setState({ quantityValue: event.target.value });
    }

    render() {
        return (
            <form className="product__add-to-cart">
                <label htmlFor="product__quantity">
                    Quantity:
                    <input
                        type="number"
                        id="product__quantity"
                        className="product__quantity"
                        name="product__quantity"
                        min="1"
                        max="99"
                        placeholder="1"
                        value={this.state.quantityValue}
                        onChange={this.handleQuantityChange}
                    />
                </label>
                <label htmlFor="product__quantity">
                    Payments:
                    <select
                        id="product__payments"
                        className="product__payments"
                        name="product__payments"
                    >
                        {_.range(1, 13).map((d) =>
                            <option
                                value={d}
                                key={d}
                            >
                                {d}
                            </option>)}
                    </select>
                </label>
                <input
                    type="submit"
                    value="Buy"
                    className="ch-btn ch-btn-large"
                />
            </form>
        );
    }
}
