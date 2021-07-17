import React, { Component } from "react"
const FullName = () => {
  
        return (
            <form>
                <h3>FullName</h3>
                <div className="form-group"> 
           
                <input type="fullName"  className="form-control" placeholder="Enter your FullName" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Ajouter</button>
              
            </form>
        )
     
 };
 export default FullName;