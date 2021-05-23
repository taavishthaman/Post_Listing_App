import React from "react";

const footerStyle = {
    textAlign: "center",
    fontSize: "18px",
    color: "dark-gray",
    position: "fixed",
    bottom: ".001%",
    width: "100%",
    height: "40px",
    backgroundColor: "#eee",
    padding: "2%"
}

function Footer(){
    return <footer style={footerStyle} id="footer">Copyright Bamboobox © 2021</footer>
}

export default Footer;