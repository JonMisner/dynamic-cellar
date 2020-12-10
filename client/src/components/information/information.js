import React from 'react';
import "./information.css";

export default class Information extends React.Component {

    render() {
        return(
        <div>
         <h1>Raventos i Blanc</h1>
         <h4> 2017 Blanc de Blanc</h4>
         <hr className="my-4"/>
         <p>
            <strong>Varietal:</strong> Xarello, Macabeo, Parellada
         </p>
         <p>
            <strong>Vinyards:</strong> From the plots La Barbera, La Plana and El Viader which have deep calcareous soils with a sand-rich loamy texture giving freshness and elegance and El Llac, a 40-year-old plot with marine fossils providing structure and complexity. Biodynamic viticulture.
         </p>
         <p>
            <strong>Winemaking:</strong>  Made in the traditional method. Vinification in stainless steel tanks followed by blending and secondary fermentation in the bottle, aged for a minimum of 18 months. Extra Brut.
         </p>
         <p>
         <strong>Tasting Notes:</strong> A structured, fresh and complex wine with white floral notes on the nose. The wine is impeccably balanced with a marked minerality, soft and fresh fruit flavors, and some nutty notes. The small, nicely integrated bubbles and saline qualities are in perfect harmony with the slightly creamy texture.
         </p>
      </div>   
        )
    }

}