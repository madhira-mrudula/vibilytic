import logo from '../assets/logo.png';
export const Navbar = () => {
    return ( 
        <>
        <div className="grid grid-cols-1">
          {/* logo */}
          <img src={logo} alt='logo' style={{ height: "90px", width: "90px" }} />
        </div>
        </>
     );
}
 
