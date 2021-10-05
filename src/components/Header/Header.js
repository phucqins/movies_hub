
import './Header.css'

const Header = () => {
  return (
      <div onClick={()=>window.scroll(0,0)} className='header'>
        <span>Alophim.com</span>
      </div>
  );
};

export default Header;