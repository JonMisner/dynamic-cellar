import React from 'react';
import "./list.css";

export default class List extends React.Component {

    render() {
        return(
            <div>
                <h4>Menti "Roncaie Sui Lieviti"</h4>
                <h6>2018 Sparkling, Vento</h6>
                    <hr className="my-0"/>
                <h4>Raventos i Blanc "Blanc de Blanc"</h4>
                <h6>2017 Cava, Spain</h6>
                    <hr className="my-0"/>
                <h4>Mirco Mariotti "Set e Mez"</h4>
                <h6>NV Sparkling, Italy</h6>
                    <hr className="my-0"/>
                <h4>Ameztoi "Getariako"</h4>
                <h6>2019 Txakolina, Spain</h6>
                    <hr className="my-0"/>
                <h4>Domaine Mercouri "Vin des Letinon"</h4>
                <h6>2017 Red Blend, Greece</h6>
                    <hr className="my-0"/>



            </div>
        )
    }

}