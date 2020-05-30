import React, { Component } from "react"

class StateExample extends Component {
   constructor(props) {
      super(props)
      this.state = {
         loading: true,
         formData: "no data",
      }
      this.handleData = this.handleData.bind(this)
      setTimeout(this.handleData, 1000)
   }
   handleData() {
      const data = "new Data"
      const { formData } = this.state
      this.setState((prevState) => ({
         loading: false,
         formData: data + prevState.formData,
      }))

      console.log("loading값", this.state.loading)
   }

   render() {
      return (
         <div>
            <span>로딩중 : {String(this.state.loading)}</span>
            <span>결과 : {this.state.formData}</span>
         </div>
      )
   }
}

export default StateExample
