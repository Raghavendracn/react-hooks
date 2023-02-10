import React from 'react'


const DisplayComponent = (props) => {
    let renderRestaurant = ({myData})=>{
        if(myData){
            return(
                myData.map((item)=>{
                    return (
                        <div key={item.restaurant_id}>
                            <h2>
                                {item.restaurant_name}
                            </h2>
                        </div>
                    )
                })
            )
        }
    }
    return(
        <>
        <center>
            {renderRestaurant(props)}
        </center>
        </>
    )
}
export default DisplayComponent