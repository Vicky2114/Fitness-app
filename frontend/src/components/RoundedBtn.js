import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import "../assets/css/RoundedBtn.css"

const RoundedBtn = ({children}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <span className={isFocused ?'roundedBtnFocused':'roundedBtnBlur'} onFocus={handleFocus} onBlur={handleBlur}>
      <Link className='btnText'>{children}</Link>
    </span>
  )
}

export default RoundedBtn
