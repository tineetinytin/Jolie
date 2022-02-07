import React from "react";

function Footer() {
  return (
    <div class="footer">
      <div class="finalCName">
        <h1>J O L I E</h1>
      </div>
      <div class="lower">
        <div class="lowerbox two">Newsletter</div>
        <div class="lowerbox three">Contact</div>
        <div class="lowerbox four">Apps</div>
        <div class="lowerbox five">Follow Us</div>
        <div class="lowerbox six">Legal &amp; Privacy</div>
        <div class="lowerbox seven">Cookies</div>
        <div class="lowerbox eight">Jobs</div>
        <div class="lowerbox nine">Sitemap</div>
      </div>
      <div class="copyright">
        Copyright &copy; {new Date().getFullYear()}{" "}
        {/* Dynamic year using js */} Christine Akers
      </div>
    </div>
  );
}

export default Footer;