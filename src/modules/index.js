import react from "react";
import Login from "./login";
import Signup from "./signUp";
import Navigation from "../shared/components/navigation";
import Header from "../shared/components/header";
import SellerNavbar from "../shared/components/sellerNavbar";
export default function Modules(){
    return(
        <div>
            {/* <Navigation /> */}
            {/* <SellerNavbar /> */}
            {/* <Login />    */}
            <Signup />
        </div>
    )
}