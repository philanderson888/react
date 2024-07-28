import React from 'react';
import NavbarComponents from './NavbarComponents';
class MouseTracker extends React.Component {
  constructor(){
    super()
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state={x:0,y:0}
  }
  handleMouseMove(event){
    this.setState({ 
      x:event.clientX,
      y:event.clientY, 
    })
  }
  render() {
    return (
        <div>
            <NavbarComponents />
            <h2>Mouse Tracker - coordinates at ({this.state.x},{this.state.y})</h2>
            <div style={{height:'40vh',backgroundColor:'#e4f2e8'}} onMouseMove={this.handleMouseMove}></div>
        </div>
    )
  }
}
export default MouseTracker