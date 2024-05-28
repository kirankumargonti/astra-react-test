import {MdOutlineLightMode, MdNightlightRound} from 'react-icons/md'
import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import {RootState} from '../Redux/store'

// Redux slice
import {toggleTheme} from '../Redux/Slices/themeSlice'

// Styles
import {Switcher} from '../Styles/commonStyles'

const ThemeSwitcher: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch()

  return (
    <Switcher onClick={() => dispatch(toggleTheme())}>
      {theme === 'light' ? <MdNightlightRound /> : <MdOutlineLightMode />}
    </Switcher>
  )
}

export default ThemeSwitcher
