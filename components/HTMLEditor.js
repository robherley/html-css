import React from 'react';

export default class HTMLEditor extends React.Component {
   state = {
      code: '<h1>howdy</h1>'
   };

   viewer = React.createRef();

   handleInput = ({ target: { value: code } }) => this.setState({ code });

   render() {
      const { code } = this.state;
      return (
         <div style={{ display: 'flex', height: '600px', width: '800px' }}>
            <iframe
               ref={this.viewer}
               frameBorder="0"
               style={{
                  width: '50%',
                  height: '50%',
                  border: '3px solid #525f7f',
                  borderTopLeftRadius: '5px',
                  borderBottomLeftRadius: '5px'
               }}
               srcDoc={`<style> :root{ font-size: 1.3rem; padding: 0; }</style> ${code} `}
            />
            <textarea
               onChange={this.handleInput}
               value={code}
               spellCheck={false}
               style={{
                  width: '50%',
                  height: '50%',
                  fontSize: '28px',
                  border: 'none',
                  resize: 'none',
                  backgroundColor: '#525f7f',
                  color: 'white',
                  padding: '1rem',
                  fontFamily: 'monospace',
                  outlineWidth: 0,
                  borderTopRightRadius: '5px',
                  borderBottomRightRadius: '5px'
               }}
            />
         </div>
      );
   }
}
