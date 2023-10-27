import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./loginregister.css";

function Register(){
    return(
        <section className="lrbackg">
     <div className="container mt-4">
    <div className="row justify-content-center">
        <div className="col-md-4">
        <br/>
            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="Enter Name"/>
                        </div><br />
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="Phone number or email"/>
                        </div><br />
                        <div className="form-group">
                            <input type="password" class="form-control" id="password" placeholder="Password"/>
                        </div><br />
                        <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <br/>
        </div>
    </div>
</div>
</section>
    );
};
export default Register;