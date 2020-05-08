import React from 'react'
import { RoomsList } from "./RoomsList"
import  RoomsFilter from "./RoomsFilter"
import { RoomConsumer } from "../Context"
import {Loading} from "./Loading"
import {withRoomConsumer} from "../Context" 

const  RoomsContainer=({context})=>{
    const { loading, sortedRooms, rooms } = context
    console.log("room consumer");
    if (loading) {
        return <Loading />
    } else  {
        return (
            <div>
                
                <RoomsFilter rooms={rooms} />
                <RoomsList rooms={sortedRooms} />
            </div>)
    }

    
}

export default withRoomConsumer(RoomsContainer);
// export const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
                    
//                         )
//                     }
//                 }}
//         </RoomConsumer>

//     )
// }
