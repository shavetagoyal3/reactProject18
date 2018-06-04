import React from "react";
import HeaderContact from "./header_contact.jsx";
import ContactContainer from "./contact_container.jsx";
import ContactPage from "./contact_page.jsx";

class Contacts extends React.Component {
  render() {
    return (
        <div>          
          <HeaderContact />
          <ContactPage />
          <ContactContainer />
        </div>
    );
  }
}

export default Contacts;