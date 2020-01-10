import React from 'react';
import Form from './Form';
import {useSpring, animated} from 'react-spring'


function App() {

const  pageFade = useSpring({
  from: {opacity: 0 },
  to: {opacity: 1}
})

  return (
    <animated.div style={pageFade} className="App">
    <Form />
    </animated.div>
  );
}

export default App;
