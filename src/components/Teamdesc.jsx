import React from "react";

export default function Teamdesc(props) {
  return (
    <div className="teamdesc">
      <div className="row">
        <div className="col-md-6">
          <img src={props.img} alt="" />
        </div>
        <div className="col-md-6">
          <p>
              <small>Hello I am {props.name}</small><br/>
              {props.desc}
            <br/>
            <strong>{props.name} <br/>{props.pos} </strong>
            <br/>
          </p>
        </div>
      </div>
    </div>
  );
}
