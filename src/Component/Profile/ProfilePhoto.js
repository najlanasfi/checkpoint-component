import React, { Component } from "react"
 const ProfilePhoto = () => {
  
        return (
            <form>
                <h3>Profile Photo</h3>
                <div className="form-group"> 
                
                <img src={"/profile.png"} alt="profile" />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Ajouter</button>
            </form>
        )
    
 };
 export default ProfilePhoto;