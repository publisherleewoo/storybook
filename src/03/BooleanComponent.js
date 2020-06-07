import React, { Component } from 'react';

class BooleanComponent extends Component {
   render() {
      console.log(this.props.bored);
      const messgage = this.props.bored ? '놀러가자' : '하던 일 열심히 마무리하기'
      return (
         <div>
            {messgage}
         </div>
      );
   }
}

export default BooleanComponent;