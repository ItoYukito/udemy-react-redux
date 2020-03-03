import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "taro",age: 10},
    {name:"hanako",age: 222},
    {name:"noname"}
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
    </div>
  )
}

const User = (props) => {
  return <div>I am {props.name}, and {props.age}</div>
}

// User.defaultProps = {
//   age: 1
// }

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
