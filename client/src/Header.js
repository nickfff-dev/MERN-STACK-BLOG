import React from "react";
import {BrowserRouter as Router,  Link} from "react-router-dom";







class Header extends React.Component{
    constructor(props){
        super(props)

        this.openSideDrawer = this.openSideDrawer.bind(this)
        this.closeSideDrawer = this.closeSideDrawer.bind(this)


}


openSideDrawer() {
    document.getElementById("side-drawer").style.left = "0";
    document.getElementById("side-drawer-void").classList.add("d-block");
    document.getElementById("side-drawer-void").classList.remove("d-none");
}
closeSideDrawer() {
    document.getElementById("side-drawer").style.left = "-336px";
    document.getElementById("side-drawer-void").classList.add("d-none");
    document.getElementById("side-drawer-void").classList.remove("d-block");
}




render(){
    return(
        <div className="row heads"> 
            <div className="col-sm-3"> 
                <button className="menu"  type="button" onClick={this.openSideDrawer}> 
                    <i className="fas fa-bars"></i>
                </button>

            </div>
            <div className="col-sm-6">
                <ul className="topmenu ">




                    <li>
                        
                        <Link to="/"><span className="border-left p-2 border-dark border-dark ">Start</span></Link> 
                        
                        
                    </li> 

                    <li><Link to="/faqs"><span className="border-left  p-2 border-dark">About us</span></Link>  
                        
                    </li>

                    <li>
                        <div className="dropdown ">  
                            <span className="dropbtn border-left p-2 border-dark">Dropdown</span>
                            <div className="dropdown-content">
                                <Link to="/signin">Login</Link>
                                <Link to="/signup" >Create account</Link>
                            </div>
                        </div>
                        
                    </li>



                    <li><Link to="/faqs"><span className="border-left p-2 border-dark">Faq</span></Link>
                        
                    </li>

                    <li><Link to="/faqs" ><span className="border-left p-2 border-dark">Order</span></Link> 
                        
                    </li>

                    <li> <Link to="/faqs" ><span className="border-left p-2 border-dark">Contact us</span></Link> 
                        
                    </li>

                    <li> <Link to="/faqs" > <span className="border-left p-2 border-dark">End your Baldness</span></Link> 
                        
                    </li>

                </ul>

            </div>
            <div className="col-sm-3 drp"> 
                <div className="dropdown"> 
                    <button className="dropbtn " aria-labelledby="navbarDropdown">Dropdown</button> 
                    <div className="dropdown-content drp2"> 
                        <Link to="/faqs"><span> Brian</span></Link> 
                        <Link to="/faqs"><span> Terry</span></Link>
                        <Link to="/faqs"><span> O'Brian</span></Link>
                    </div>
                </div>
            </div> 
                
           
            <div id="side-drawer" className="position-fixed">
                <div className="h-100 bg-white">
                   
                    <div className="p-4 modalhome">
                        <Link to="/faqs" >
                            <h1 className="text-white">Home</h1>
                        </Link>
                    </div>
                 
                    <ul id="links" className="list-group" onClick={this.closeSideDrawer}>
                        <Link to='/faqs' id="link-structure" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Start</Link>
                        <a id="link-css" 
                            className="list-group-item list-group-item-action border-0 rounded-0">News</a>
                        <a id="link-javascript" 
                            className="list-group-item list-group-item-action border-0 rounded-0">.Net</a>
                        <a id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Demo Page</a>
                        <a id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Demo Page2</a>
                        <a id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Demo Page3</a>
                        <a id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0 active">Close Sidebar</a>


                    </ul>
                </div> 
            </div> 
          
        </div> 
    )
}
}


export default Header