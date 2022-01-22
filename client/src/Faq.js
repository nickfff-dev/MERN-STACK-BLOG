import React, { Fragment } from "react";
import Question from "./Questions";
import data from "./data";
import Header from "./Header";
import './Questions.css'

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div className="faqs">
      <div className="container-fluid varanda">
        <div className="row">
            <div className="accordion small-ques">
              {this.state.data.map(item => (
                <Question
                  key={item.id}
                  title={item.title}
                  info={item.info}
                />
              ))}
            </div>
          
        </div>
      </div>
      </div>
    );
  }
}

export default Faq;