class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return /*#__PURE__*/(
        React.createElement("div", null, /*#__PURE__*/
          React.createElement(Menu, null), /*#__PURE__*/
          React.createElement(MainContent, null)));
  
  
    }
  }
  
  const Menu = () => {
    return /*#__PURE__*/(
      React.createElement("div", { id: "menu-bar", class: "menu-bar" }, /*#__PURE__*/
        React.createElement("span", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg", alt: "Spotify Logo" }))), /*#__PURE__*/
        React.createElement("nav", { class: "navbar" }, /*#__PURE__*/
          React.createElement("ul", null, /*#__PURE__*/
            React.createElement("li", null, /*#__PURE__*/React.createElement("a", { class: "active", href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { d: "M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z", fill: "currentColor" })), "Home")), /*#__PURE__*/
            React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { d: "M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z", fill: "currentColor", "fill-rule": "evenodd" })), "Search")), /*#__PURE__*/
            React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { d: "M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z", fill: "currentColor" })), "Your Library")))), /*#__PURE__*/
  
  
  
        React.createElement("nav", { class: "user-collection" }, /*#__PURE__*/
          React.createElement("ul", null, /*#__PURE__*/
            React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-plus-square fa-lg", "aria-hidden": "true" }), "Create Playlist")), /*#__PURE__*/
            React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-heart fa-lg", "aria-hidden": "true" }), "Liked Songs")), /*#__PURE__*/
            React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-podcast fa-lg", "aria-hidden": "true" }), "Your Episodes")))), /*#__PURE__*/
  
  
  
        React.createElement("span", { class: "install-app" }, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-arrow-circle-down fa-lg", "aria-hidden": "true" }), "Install App"))));
  
  
  };
  
  const MainContent = () => {
    return /*#__PURE__*/(
      React.createElement("div", { class: "main-content" }, /*#__PURE__*/
        React.createElement(Header, null), /*#__PURE__*/
        React.createElement(Body, null)));
  
  
  };
  
  const Header = () => {
    const [profileVisibility, setProfileVisibility] = React.useState('hidden');
    const handleClick = () => {
      if (profileVisibility == 'hidden') {
        setProfileVisibility('visible');
      } else {
        setProfileVisibility('hidden');
      }
    };
  
    const [menuBarVisibility, setMenuBarVisibility] = React.useState('visible');
    const handleMenuBar = () => {
      if (menuBarVisibility == 'hidden') {
        setMenuBarVisibility('visible');
        document.getElementById('bar1').style.transform = 'none';
        document.getElementById('bar1').style.transition = 'transform .4s ease';
        document.getElementById('bar2').style.opacity = 1;
        document.getElementById('bar2').style.transition = 'opacity .5s ease';
        document.getElementById('bar3').style.transform = 'none';
        document.getElementById('bar3').style.transition = 'transform .4s ease';
        document.getElementById('menu-bar').style.transition = 'visibility .2s ease-in-out';
      } else {
        setMenuBarVisibility('hidden');
        document.getElementById('bar1').style.transform = 'rotate(-45deg) translate(-9px, 6px)';
        document.getElementById('bar1').style.transition = 'transform .4s ease';
        document.getElementById('bar2').style.opacity = 0;
        document.getElementById('bar2').style.transition = 'opacity .5s ease';
        document.getElementById('bar3').style.transform = 'rotate(45deg)translate(-5px, -3px)';
        document.getElementById('bar3').style.transition = 'transform .4s ease';
        document.getElementById('menu-bar').style.transition = 'visibility .2s ease-n-out';
  
      }
      document.getElementById('menu-bar').style.visibility = menuBarVisibility;
    };
    return /*#__PURE__*/(
      React.createElement("header", null, /*#__PURE__*/
        React.createElement("div", null, /*#__PURE__*/
          React.createElement("div", { onClick: handleMenuBar, class: "hamburger" }, /*#__PURE__*/
            React.createElement("div", { id: "bar1", class: "bar1" }), /*#__PURE__*/
            React.createElement("div", { id: "bar2", class: "bar2" }), /*#__PURE__*/
            React.createElement("div", { id: "bar3", class: "bar3" })), /*#__PURE__*/
  
          React.createElement("div", { class: "dropdown" }, /*#__PURE__*/
            React.createElement("button", { onClick: handleClick }, /*#__PURE__*/
              React.createElement("i", { class: "fa fa-user-circle fa-lg", "aria-hidden": "true" }), "SOUPTIK", /*#__PURE__*/
  
              React.createElement("i", { className: `fa fa-caret-${profileVisibility == 'hidden' ? 'down' : 'up'}`, "aria-hidden": "true" })), /*#__PURE__*/
  
            React.createElement("ul", { style: { visibility: `${profileVisibility}` } }, /*#__PURE__*/
              React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#", target: "_blank" }, "Account", /*#__PURE__*/React.createElement("i", { class: "fa fa-external-link", "aria-hidden": "true" }))), /*#__PURE__*/
  
              React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Profile")), /*#__PURE__*/
              React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Log Out")))))));
  
  
  
  
  
  };
