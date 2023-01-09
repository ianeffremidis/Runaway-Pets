import React from "react";
import petpic from "../../img/dogprofile.png";
import { PetComponent } from "./PetComponent";

export const PetCard = () => {
  return (
    <div className="container d-flex flex-column mt-5 marginbottom align-items-center">

      <div>
        <h3 className="mb-5">Hello, John! Here are your best friends</h3>
      </div>

     
      <div className="d-flex justify-content-left petcard align-items-center mb-4 mr-4 ml-3">
        <div className="col col-2 d-flex flex-column ">
          <img className="petpiccard mr-5" src={petpic}></img>
        </div>

        <div className="col col-6 d-flex flex-column align-items-left ml-5">
          <h2>Marley</h2>
          <h3>Dog</h3>
        </div>
      </div>

      <PetComponent />
      <PetComponent />
      <PetComponent />

      <div>
        <a className="purplebutton" href="register-pet">Add a new pet</a>
      </div>
    </div>
  );
};
