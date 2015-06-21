var React   = require('react');
var BS      = require('react-bootstrap');
var Col = BS.Col;

var Footer  = React.createClass({
  render: function() {
    return (
      <footer>
        <div className='footerContainer'>
          <Col md={4}>
          </Col>
          <Col md={4}>
            <ul className='footerUl'>
              <li>© 2015 Coodict.com</li>
              <li><a href="#">About</a></li>
              <li><a href="#">Donation</a></li>
              <li><a href="#">Github</a></li>
            </ul>
          </Col>
          <Col md={4}>
          </Col>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
