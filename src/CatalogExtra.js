import React, {Fragment} from "react";
import CatalogItem from "./CatalogItem"

class Catalog extends React.Component{
    constructor(){
        super();
        this.items = [
            ["Classical Mythology","Mark P. O. Morford","Oxford University Press",2002],
            ["Rules of the wild","Francesca Marciano","Random House Inc",1998],
            ["Clara Callan","Richard Bruce Wright","HarperFalmingo Canada",2001],
            ["Wild Animus","Rich Sharpero","Too far",2004],
            ["Tage der Unschuld","Richard North Patterson","Goldmann",2000],
            ["The Hellfire Club","Peter Straub","Random House Inc",1996],
            ["The Night Listener","Armistead Maupin","HarperCollins Publishers",2000],
            ["Night Tales","Nora Roberts","Silhouette",2000],
        ];
    }
    render(){
        let allItem = this.items.map((item) => {
            return (
                <Fragment>
                    <div class="col-lg-4 mb-4 book">
                        <CatalogItem item={item} />
                    </div>
                </Fragment>
            )
        })
        return(
            <Fragment>
                {allItem}
            </Fragment>
        )
    }
}

export default Catalog;