import { useEffect, useState } from "react";
import "./singleData.css";


function SingleData(){

    const [data, setData] = useState();
    
    const [imageClick, setImageClick] = useState();

    const [varientData, setVarientData] = useState();


    const apiFetch = async()=>{
        
        try{
            let apiData = await fetch(`https://app1.crazzyhub.com/api/product-details-api/?product_id=${localStorage.getItem("id")}&variant_id=${localStorage.getItem("variant_id")}`,{
                method:"GET",
                
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":"7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj"
                },

            });

          

            let res = await apiData?.json();
            setData(res?.data);
            console.log(res);
            console.log(res?.data?.variant_images);
            setVarientData(res?.data?.variant_color_values);
        }
        catch(error){
            console.error("not fetched",error);
        }
    }

    useEffect(()=>{
        apiFetch();
    },[])


    function handleImageClick(variant_image){
        setImageClick(variant_image);
    }

    return(
        <div className="singleData">
            <div className="singleDivImage">
                <img className="singleImage" src={imageClick? imageClick:data?.variant_image} alt="Loading Image.." />
            </div>

            <div>
                <p className="singleDesc">{data?.product_variant_name}</p>
                <p className="stockText">{data?.stock_sataus}</p>
                <div className="textmrp">
                    <p className="₹">₹ {data?.price}</p>
                    <p className="mrp">M.R.P. {data?.mrp}</p>
                    <p className="concetion">0%</p>
                </div>

                <p className="color">Color</p>

                <div className="multiimage">
                    <div className="imageVarient">
                       {
                        varientData ? varientData.map((val)=>{
                            return(
                                <div onClick={()=>handleImageClick(val.variant_image)} className="borderVarient">
                                    <img  className="varientImage" src={val.variant_image} alt="" />
                                    <p className="pvalue">{val?.value}</p>
                                </div>
                            )
                        }):<p>Please wait... Loading..</p>
                       }
                    </div>
                </div>


                <p className="color">RAM</p>

                <div className="gb8">8 GB</div>


                <p className="color">Storage</p>

                <div className="storage">
                    <div className="gb8">8 GB</div>
                    <div className="gb32">{data?.storage_variant_name}</div>
                </div>


                <div className="delivery_Box">
                    <p>Delivery Options</p>

                    <input type="number" placeholder="Enter PinCode" />
                </div>



                <div className="textreplace">
                    <div className="Replacement">Replacement in 7 days</div>

                    <div className="Replacement">
                        waranty 1 year
                    </div>

                    <div className="Replacement">GST innovice</div>

                </div>

            </div>
        </div>
    )
}


export default SingleData;