// import logo from "../assets/svg/logo.svg";
import logoWhite from "../assets/svg/logo-white.svg";

const LOGO_TYPE_CLASSES = {
    primary: '',
    logoWhite: 'pl-5 md:pl-20 lg:pl-50 xl:pl-60 2xl:pl-40'
}

const Logo = ({children, className, logoType, ...otherProps}) => {
    return (
        <>
            {/* <img src={logo} alt="logo" className={`${className} ${LOGO_TYPE_CLASSES[logoType]}`}/> */}
            <img src={logoWhite} alt="logo" className={`${className} ${LOGO_TYPE_CLASSES[logoType]}`}/>

        </>

    );
};

export default Logo;