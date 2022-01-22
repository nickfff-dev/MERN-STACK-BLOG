import React from "react";




class Bodytxt extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="row body-texts">
                <h3 className="p-4">PRQ is globally known for</h3>
                
                    <div className="col-sm-4">
                        <h5>Refugee hosting</h5>
                        <p>
                            Our boundless commitment to free speech has been tested and proven over and over again.<br />
                            If it is legal in Sweden, we will host it, and will keep it up regardless of any pressure to
                            take it
                            down.
                            We have ZERO tolerance against SPAM and related services!

                        </p>
                    </div>
                    <div className="col-sm-4">
                        <h5>Confidentiality</h5>
                        <p>
                            We defend your integrity to the end.
                            With our discreet customer relations  policy we don't even have
                            to know who you are, and if we do, we will keep that knowledge strictly confidential.
                        </p>

                    </div>
                    <div className="col-sm-4">
                        <h5>Technical proficiency</h5>
                        <p>
                            The PRQ team has a solid background in computer networking, security, hardware, and software.

                            Most of us have been online for over 10 years.
                            We can assist you with almost anything - keeping your
                            servers secure, or keeping your high-traffic websites up and running smoothly.
                            To make this possible, we run our own fully multi-homed backbone network (AS33837),
                            with the capacity needed both to handle large DDoS attacks and to provide excellent
                            connectivity to
                            customers
                            with bandwidth utilization ranging from a few Mbps to several hundred.
                        </p>
                    </div>



















               

            </div>




        )
    }

}


export default Bodytxt