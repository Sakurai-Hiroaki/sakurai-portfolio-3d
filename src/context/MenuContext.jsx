import { createContext, useContext, useReducer } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import planePositionFloat32Array from '../attributes/plane';

const MenuContext = createContext();
const MenuDispatchContext = createContext();

const MenuProvider = ({ children }) => {

  const geometryPositions = planePositionFloat32Array;

  const menus = [
    { name: 'profile', geometry: geometryPositions[0] },
    { name: 'skill', geometry: geometryPositions[1] },
    { name: 'works', geometry: geometryPositions[2] },
    { name: 'contact', geometry: geometryPositions[3] },
  ];

  const [state, dispatch] = useReducer((prev, { type }) => {
    if (type === 'REORDER_MENU') {
      const updatedMenus = [...prev.menus];
      const firstMenu = updatedMenus.shift();

      updatedMenus.push(firstMenu);

      return updatedMenus;
    }
    return { ...prev, menus: updatedMenus };
  }, menus);

  return (
    <MenuContext.Provider value={state}>
      <MenuDispatchContext.Provider value={dispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuContext.Provider>
  );
};

const useMenu = () => {
  return useContext(MenuContext);
};

const useMenuDispatch = () => {
  return useContext(MenuDispatchContext);
};

export { MenuProvider, useMenu, useMenuDispatch };
