import { useEffect, useState } from "react";
import Card from "../Card/card";

import "./home.css";
import { useNavigate } from "react-router-dom";


function Home(){

    const [data, setData] = useState();

    const navigate = useNavigate();


    const fetchData = async()=>{
        const requestData = {
            category_id: '28',
            brand_id: '226',
            color_id:""
        };

        try{
            let apiData = await fetch("https://app1.crazzyhub.com/api/all-filter-product-list",{
                method:"POST",
                
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":"7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj"
                },

                body:JSON.stringify(requestData),
            });

          

            let res = await apiData?.json();
            setData(res?.data?.product_list);
            console.log(res?.data?.product_list);
        
        }
        catch(error){
            console.error(error);
        }
    }


    useEffect(()=>{
        fetchData();
    },[]);
    

    function handleClick(id, variant_id){
        console.log("id is", id, "vid", variant_id);

        localStorage.setItem("id", id);
        localStorage.setItem("variant_id", variant_id);
        navigate("/singleData");
    }




    return(
        <div className="home">


            <div>

                <div className="text_variety">
                    MOBILES AND TABLETS + 
                </div>

                <div className="dataflex">

                {
                
                data ? data.map((val)=>{
                    return(
                        <>
                        
                        <div className="ParentDiv" onClick={()=>handleClick(val.id, val.variant_id)}>
                            <div className="imageData">
                                <img src={val?.image} alt="image"/>
                                <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" height="17px"><path d="M12.541 21.325l-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014h1.082zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.418 6.418 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z"></path></svg>
                                </div>
                            </div>


                            <div>
                                <p className="description">{val?.variant_name}</p>
                                <p className="stock">{val?.stock_sataus}</p>

                                <p className="rs">₹ {val?.price}</p>


                                <div className="offer">
                                    <p className="price">₹ 393909</p>
                                    <p className="off">0.0% Off</p>
                                </div>

                            </div>
                        </div>
                        </>
                    )
                }):<p>Please wait....Data is loading....</p>
            }
                </div>
            </div>

           
        </div>
    )
}

export default Home;