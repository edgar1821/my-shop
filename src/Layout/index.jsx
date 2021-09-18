import StoreName from "../components/StoreName";

function Layout({children}) {
  return (
    <div>
      <StoreName />
      {children}
    </div>
  );
}


export default Layout