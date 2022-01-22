import React from 'react';


class Socials extends React.Component{
constructor(props){
    super(props)

}
render (){
    return (
        <div className="row socialf">
                    
                    <div className="col-sm-12">
                        
                        <ul className="socials">
                            <li><a href=""> <i className="fab fa-discord" aria-hidden="true"></i></a></li>
                            <li><a href=""> <i className="fab fa-facebook-square" aria-hidden="true"></i></a></li>
                            <li><a href=""> <i className="fab fa-twitter-square" aria-hidden="true"></i></a></li>
                        </ul>
                        
                    </div>
                    
                </div>
    )
}

}

export default Socials;