
import * as React from "react";
import { render } from "react-dom";
import createClass from 'create-react-class';


import NavArea from './NavArea';
import PageContent from './PageContent';

import faq from './faq';




var Menu = createClass({
    getInitialState: function() {
      return {
        page: 0,
        title: faq[0].title,
        openPage: null,
        openIndex: null
      };
    },
    handleNavClick: function(event) {
      // Get current index and title
      var page = event.target.dataset.index;
      var title = faq[page].title;
      // Set state
      this.setState({ page: page, title: title });
    },
    toggle: function(event) {
      var page = event.target.parentNode.dataset.page;
      var index = event.target.parentNode.dataset.index;
      if (
        page === this.state.openPage && 
        index === this.state.openIndex
      ) {
        this.setState({
          openPage: null,
          openIndex: null
        });
      } else {
        this.setState({
          openPage: page,
          openIndex: index
        });
      }
    },
    render: function() {   
      return (
        <div style={{width:"70%", marginTop: "100px",
        marginBottom: "100px"}}>
            <h2 className="heading" style={{textAlign:"center", 
            fontSize:"26px",
            fontWeight:"600px",
            fontFamily: "Inter,sans-serif",marginBottom:"10px"

        }}>Kasko Teminatları ve İndirimleri Nelerdir?</h2>
          <nav className="faq_nav">
            <ol>
            <NavArea update={this.handleNavClick}/>
            </ol>
          </nav>
          
          <PageContent 
            toggle={this.toggle} 
            openIndex={this.state.openIndex} 
            openPage={this.state.openPage} 
            page={this.state.page} />
          
        </div>
      );
    }
  });

export default Menu