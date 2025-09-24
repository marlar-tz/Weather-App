import logo from './assets/images/logo.svg';
import units from './assets/images/icon-units.svg';
import dropdown from './assets/images/icon-dropdown.svg';

const Header = (props) => {
    return (
        <div className="flex justify-between items-center mx-[120px] py-16">
            <img src={logo} alt="logo" />
            
            <button className="flex px-4 py-2 text-lg text-white rounded-lg bg-neutral-800">
            <img src={units} className="mr-2" alt="units"/>Units
            <img src={dropdown} className="ml-2" alt="dropdown"/>
            </button>

           
        </div>
    )
}

export default Header;