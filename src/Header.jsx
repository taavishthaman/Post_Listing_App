import React from "react";

const headerStyle = {
    backgroundColor: "#f5ba13",
    height: "40px",
    fontSize: "30px",
    fontFamily: " 'Comic Sans MS', 'Comic Sans', cursive",
    color: "white",
    padding: "16px 32px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)"
}

const subHeaderStyle = {
    fontSize: "15px",
}

function Header(){
    return <div id="topHeader" style={headerStyle}>
        <div>Bamboobox <span style={subHeaderStyle}>(  Post Listing App)</span>
        </div>
    </div>
}

export default Header;