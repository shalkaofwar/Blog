import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'font-awesome/css/font-awesome.min.css';

export default function footer(){
    return(
        <footer className="border-top">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <center>
                        <ul className="list-inline text-center" style={{margin:"auto", position:"absolute", left:0, right:0,}}>
                            {/* <li className="list-inline-item">
                                <a href="#!">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-facebook-f fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li> */}
                            <li className="list-inline-item">
                                <a href="https://github.com/shalkaofwar/Blog">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        </center>
                        
                    </div>
                </div>
            </div>
            {/* <div className="small text-muted fst-italic" style={{position:"absoloute", textAlign: 'left'}}>Copyright &copy; Your Website 2023</div> */}
        </footer>


    )
}