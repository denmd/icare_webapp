import "../Opticals/Optical.css"
import Header from "../../components/Header";
import {ReactComponent as Location}  from "../../logos/location.svg";
import {ReactComponent as Pharmacyicon}  from "../../logos/pharmacy.svg";
import {ReactComponent as Phoneicon}  from "../../logos/phone.svg";

function  Optical(){

    return(
        <div className="optical_ParentDiv">
          <div className="headerdiv">
            <Header></Header>
          </div>
        <div className="optical_banner">
         <div className="headline">
         <h1 className="h1">Nearby Optical Shops</h1>
         </div>
         <div className="location">
            <span className="location_icon"><Location></Location></span>
            <h3 className="loaction_detail">You are currently at Kottyam</h3>
         </div>
         <div className="main_opt__box">
            <div className="sub_box_1">
            <div className="left_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="opt_name">Apollo Opticals</span>
            </div>
            <div className="address_phone">
            <span className="opt_details"><Location></Location>Thirunnakara, Kottayam</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>9846536879</span>
            </div>
            </div>
            <div className="right_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="opt_name">DR. Agarwal Eye Hospital</span>
            </div>
            <div className="address_phone">
            <span className="opt_details"><Location></Location>Sastri Rd, Kottayam</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>9998788</span>
            </div>
            </div>
            </div>
            <div className="sub_box_2">
            <div className="left_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="opt_name">DR. Agarwal Eye Hospital</span>
            </div>
            <div className="address_phone">
            <span className="opt_details"><Location></Location>Sastri Rd, Kottayam</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>9998788</span>
            </div>
            </div>
            <div className="right_1_box">
            <div className="name_icon">
            <span className="pha_icon"><Pharmacyicon></Pharmacyicon></span>
            <span className="opt_name">DR. Agarwal Eye Hospital</span>
            </div>
            <div className="address_phone">
            <span className="opt_details"><Location></Location>Sastri Rd, Kottayam</span>
            <span className="pho_icon"><Phoneicon></Phoneicon>9998788</span>
            </div>
            </div>
            </div>

         </div>
         </div>
        </div>
        
      );
    }
    
    export default Optical;