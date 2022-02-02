import { useState } from "react";

const useAllState = () => {
    const [active,setActive]= useState('grid');
    return{
        active,
        setActive
    }
};

export default useAllState;