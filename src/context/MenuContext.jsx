import { createContext, useContext, useReducer } from "react";

const MenuContext = createContext();
const MenuDispatchContext = createContext();

const MenuProvider = ({ children }) => {
  const menus = [
    { name: "profile", isActive: true },
    { name: "contact", isActive: false },
    { name: "skill", isActive: false },
    { name: "works", isActive: false },
  ];

  const [state, dispatch] = useReducer((prev, { type, step }) => {
    if (type === "REORDER_MENU") {
      const updatedMenus = [...prev];
      const lastMenu = updatedMenus.pop();
      updatedMenus.unshift(lastMenu);
      return updatedMenus;
    }
    return prev;
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
