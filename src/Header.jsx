import logo from './assets/images/logo.svg';

const Header = (props) => {
    return (
        <div className="flex">
            <img src={logo} alt="logo image" />
            <button>Units</button>
        </div>
    )
}

export default Header;