import '../css/Footer.css'
function Footer(){
    return(
<footer className="footer">
    <div className="footer-content">
      <p>© {new Date().getFullYear()} Sagar T. All rights reserved.</p>  
    <div className="footer-links">
          <a href="mailto:sagar@example.com">Contact</a>
    </div>
    </div>
</footer>
    );
}
export default Footer;