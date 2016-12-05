import React from 'react';

export default class Tabpane extends React.Component {
    render() {
        return (
            <div className="product__tabpane ch-tabs">
                <ul className="ch-tabs-triggers">
                    <li><a href="#description" className="ch-tab">Product Description</a></li>
                    <li><a href="#questions" className="ch-tab">Questions</a></li>
                </ul>
                <div className="ch-box-lite">
                    <div id="description" itemProp="description">
                        <p>
                            O iPad é tão fino e leve que você quaseesquece que está segurando!
                        </p>
                        <p>
                            A câmera conta com recursos ópticos avançados e recursos novos.
                        </p>
                        <p>
                            O sistema operacional iOS foi criado para funcionar perfeitamente
                            com o iPad aproveitando ao máximo o aparelho.
                        </p>
                        <p>
                            Verifique com os fabricantes do produto e de seus componentes
                            eventuais limitações à utilização de todos os recursos e funcionalidades.
                        </p>
                    </div>
                    <div id="questions">
                        <ul>
                            <li>
                                <div className="ch-box-help">
                                    <h4>Buyer</h4>
                                    <p>Do you have this one in white?</p>
                                </div>
                                <div className="ch-box-info">
                                    <h4>Seller</h4>
                                    <p>No, I don't, I only have in black</p>
                                </div>
                            </li>
                            <li>
                                <div className="ch-box-help">
                                    <h4>Buyer</h4>
                                    <p>Do you have this one in white?</p>
                                </div>
                                <div className="ch-box-info">
                                    <h4>Seller</h4>
                                    <p>No, I don't, I only have in black</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
