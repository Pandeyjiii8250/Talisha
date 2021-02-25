import React, {useContext, useRef, useEffect, useState} from "react";
import {db} from "../../firebase";

const DataContext = React.createContext();

export function DataProvider({children}){
    
    let itemDetail = useRef([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        console.log("Hellow");
        if (itemDetail.current.length === 0){
            db.collection("Items").get().then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    // console.log(doc.data());
                    itemDetail.current.push(doc.data());
                })
                setLoading(true);
            })
        }
    }, []);

    const value={
        itemDetail,
        loading
    }
    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}


export function useDataValue(){
    return useContext(DataContext);
}