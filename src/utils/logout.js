const logout = () => {
  localStorage.clear();
  window.location.pathname = "/";
};

export default logout;
