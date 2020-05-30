import React, { Component } from "react"

class RCC extends Component {
   constructor(props){
      super(props)
      console.log(this.props);
   }
   render() {
      var text = "따옴표"
      return <div name="name">{text}
      <input onChange={()=>{
         console.log(this.props);
         this.props.onChange()
      }}/>
      </div>
   }
}

export default RCC
