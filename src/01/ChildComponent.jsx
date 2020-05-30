import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ChildComponent extends Component {
   render() {
      const {
         booleanValue,
         numValue,
         arrayValue,
         objValue,
         nodeValue,
         funcValue
      } = this.props;
      return (
         <div>
            <span>불리언값 : {booleanValue}</span><br/>
            <span>숫자값 : {numValue}</span><br/>
            <span>배열값 : {arrayValue}</span><br/>
            <span>객체값 : {String(objValue)}</span><br/>
            <span>노드값 : {nodeValue}</span><br/>
            <span>함수값 : {funcValue}</span>
         </div>
      );
   }
}

ChildComponent.propTypes={
   boolValue:PropTypes.bool,
   numValue:PropTypes.number,
   arrayValue:PropTypes.arrayOf(PropTypes.number),
   objValue:PropTypes.object,
   nodeValue:PropTypes.node,
   funcValue:PropTypes.func,
}

export default ChildComponent;