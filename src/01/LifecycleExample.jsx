import React, { Component } from "react"

class LifecycleExample extends Component {
   static getDrivedStateFromProps() {
      console.log("getDrivedStateFromProps 호출")
      return
   }

   constructor(props) {
      super(props)
      this.state = {}
      console.log("constructor 호출")
   }

   componentDidMount() {
      console.log("componentDidMount 호출")
   }
   componentDidUpdate() {
      console.log("componentDidUpdate 호출")
   }
   componentWillMount() {
      console.log("componentWillMount 호출")
   }
   getSnapshotBeforeUpdate() {
      console.log("getSnapshotBeforeUpdate 호출")
      return {}
   }
   shouldComponentUpdate() {
      console.log("shouldComponentUpdate 호출")
      return true
   }

   render() {
      console.log("랜더 호출");
      return <div></div>
   }
}

export default LifecycleExample
