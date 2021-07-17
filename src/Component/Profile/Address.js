import  React , {Component} from "react";

const Address = () => {
    
        return (
            <form>
                <h3>Address</h3>
                <div className="form-group">
                
                <input type="address" className="form-control" placeholder="Enter votre Addresse"></input>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Ajouter</button>
                
            </form>
        );
    
};
export default Address;