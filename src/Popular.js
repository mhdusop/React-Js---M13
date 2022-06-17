import React, {Fragment} from "react";
import { FiBookmark } from "react-icons/fi";

class Popular extends React.Component{
    constructor(){
        super();
        this.popular = [
            ["Rules of the wild","Francesca Marciano","Random House Inc",1998],
            ["The Night Listener","Armistead Maupin","HarperCollins Publishers",2000],
            ["Wild Animus","Rich Sharpero","Too far",2004]
        ];
    }
    render(){
        let popularBook = this.popular.map((popular) =>{
            return (
                <Fragment>
                    <div class="col-lg-4 mb-4 book">
                        <div class="card text-center">
                            <div class="card-body">
                                <h2 class="card-title title">{popular[0]}</h2>
                                <p class="card-text author">{popular[1]}</p>
                                <p class="card-text text-muted publisher">{popular[2]}<small class="year"> {popular[3]}</small></p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        })
        return(
            <Fragment>
                {popularBook}
            </Fragment>
        )
    }
}

export default Popular;