import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./loginregister.css";
const Login=()=>{
    return(
        <section className="lrbackg">
     <div className="container mt-4">
    <div className="row justify-content-center">
        <div className="col-md-4">
        <br/><br/>
            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <form>
                        <div className="form-group"> 
                            <input type="text" className="form-control" placeholder="Enter your username"/>
                        </div><br />
                        <div className="form-group">
                            <input type="password" class="form-control" placeholder="Enter your password"/>
                        </div><br />
                        <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </div> 
                    </form>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    </div>
</div>
    </section>
    );
};
export default Login;

/* <div className="borde border-primary-subtle p-2 mb-2">
        <input type="text"  placeholder="username"/>
        <br /><br />
        <input type="password" placeholder="password" />
        <br /><br />
        <button className="btn btn-primary mx-1">Login</button>
        </div> */