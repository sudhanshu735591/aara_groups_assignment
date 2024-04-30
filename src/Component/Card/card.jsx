import "./card.css";

function Card(props){
    const {data} = props;
    console.log("data is", data);
    return(
        <div className="ParentDiv">
            <div>
                <img src="https://crazzyhub.s3.amazonaws.com/media/product_variant/C3_LITE_GREY_jOO9bqL_V2AQ7Sz.jpg" alt="image"/>
            </div>


            <div>
                <p className="description">Lorem,it amet conscorporis, alias illum odio. Ea rem, magnam saepe quis sapiente facilis esse ullam.</p>
                <p className="stock">In-Stock</p>

                <p className="rs">Rs. 33949</p>


                <div className="offer">
                    <p className="price">Rs.393909</p>
                    <p className="off">0.0% Off</p>
                </div>

            </div>
        </div>
    )
}


export default Card;