// get the footer container
const footer_Container = document.querySelector("footer");

// function that helps  to pull the data inside the footer container

function footer_Content() {
    footer_Container.insertAdjacentHTML("afterbegin", `
    <div id="footer_items">
    <a href="index.html" class="footer_box">
      <img src="../assets/Moneyaard_logo.png" alt="Moneyaard logo" />
      <h3>
      Moneyaard <br />
      <span style="color: black; font-size: 15px">Make Money online</span>
    </h3>
    </a>
    <div class="footer_box">
      <h3>HELPFUL LINKS</h3>
      <a href="Pages/Privacy_policy.html">About us</a>
      <a href="Pages/Privacy_policy.html">Privacy policy</a>
      <a href="Pages/Terms_and_condition.html">Terms & Condition</a>
    </div>
    <div class="footer_box">
      <h3>GET IN TOUCH</h3>
      <a href="mailto:moneyaard@gmail.com">moneyaard@gmail.com</a>
    </div>
    <div class="footer_box">
      <h3>CONNECT WITH US</h3>
      <a href="https://www.facebook.com/manohar.anamd">Facebook</a>
      <a href="#">Twitter</a>
      <a href="https://youtu.be/Q1-4Zzfvglk">YouTube</a>
      <a href="#">Instagram</a>
      <a href="https://www.linkedin.com/in/manohar-anand-4177701b6">Linkedin</a>
    </div>
    <p>Copyright © 2023 All Right Reserved By Manoarya.</p>
  </div>
    `);
}
// call the function
footer_Content();

