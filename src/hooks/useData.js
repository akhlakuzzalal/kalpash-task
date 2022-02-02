import { useContext } from "react";
import { StateContext } from "../contextApli/StateProvider";


const useData = () => {
    return useContext(StateContext);
};

export default useData;