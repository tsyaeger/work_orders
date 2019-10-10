import React from 'react';
import './toggle.css'

const Toggle = ({status, handleSwitch}) => {

  const checked = status == 'dsc' ? true : false

  const setToggle = () => {
    return <input
            type="checkbox"
            id="switch"
            className='toggle-span'
            onClick={handleSwitch}
            checked={checked}/>
  }

  return (
    <div className='toggle'>
      <span><p className='toggle-span' class='toggle-label'>ascending</p></span>
       <form>
          {setToggle()}
          <label id='switch-label' for="switch">Toggle</label>
       </form>
       <span><p className='toggle-span' class='toggle-label'>descending</p></span>
    </div>
  )
}

export default Toggle;
