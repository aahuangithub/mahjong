import React from 'react';
import io from 'socket.io-client'
import {socketConnect} from 'socket.io-react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const styles = {
  root: {
    width: "100%",
    maxWidth: "900px",
    textAlign: "center"
  }
}
const events = ['board update', 'base', "reset", "player update"] 
//base event simply shows text in middle of game; reset removes ALL data; player update updates player attributes; board update updates board attributes

const emits = ['get players', 'get board']
//gets all player attributes; gets all board attributes

class App extends React.Component {
  constructor(props){
    super(props)
    events.map((obj, i)=>{
      props.socket.on(obj, (data)=>{console.log(data)})
    })
    this.state = {

    }
  }
  render() {
    return (
      <div className="root" style={styles.root}>
        hi
      </div>
    );
  }
}

export default socketConnect(App);
