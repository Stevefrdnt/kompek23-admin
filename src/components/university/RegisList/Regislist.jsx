import React from "react";
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Button, Input } from "reactstrap";

var BASEDIR = process.env.REACT_APP_BASEDIR;

class Regislist extends React.Component {
  render() {
    var coursesList = [];
    for (var i = 0; i < this.props.courses.length; i++) {
      coursesList.push(
        <div className="col-md-6 col-lg-6 col-sm-12" key={i}>
          <div className="team-member aside-style">
            <div className="row margin-0">
              <div className="team-img col-4">
                <img
                  className="img-fluid"
                  src={this.props.courses[i].avatar}
                  alt=""
                />
              </div>
              <div className="team-info col-8">
                <h3>
                  <NavLink to={BASEDIR + "/university/course-view"}>
                    {this.props.courses[i].name}
                  </NavLink>
                </h3>
                <span>{this.props.courses[i].position}</span>
                <p>{this.props.courses[i].msg}</p>
                <div>
                  <Button color="success">Enable</Button>
                  <Button color="danger" disabled>
                    Disable
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{coursesList}</div>;
  }
}

Regislist.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
};

export default Regislist;
