import Logo from "./Logo";

const NAV_TYPE_CLASSES = {
    green: 'fixed top-0 w-full z-50 bg-[radial-gradient(circle,_rgba(4,138,129,0.2)_19%,_rgba(40,83,107,1)_100%)]',
    orange: 'fixed top-0 w-full z-50 bg-[radial-gradient(circle,_rgba(243,120,29,0.5)_77%,_rgba(255,106,106,0.5)_100%)]',
}

const Navigation = ({ children, className, navType, ...otherProps}) => {
    return (
        <div className={`${className} ${NAV_TYPE_CLASSES[navType]} w-[80%] md:w-[80%] border-b border-border_grey pt-5`}>
        {/* className="w-[80%] md:w-[80%] border-b border-border_grey"> */}
            <Logo logoType="primary" />
            {children}
        </div>
    );
};

export default Navigation;