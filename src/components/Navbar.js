import MenuItems from './MenuItems';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const menuItems = useSelector(state => state.menu.menuItems);
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
