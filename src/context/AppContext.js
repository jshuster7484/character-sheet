import React, { createContext, useReducer } from "react";
import get from "lodash/get";
import set from "lodash/set";
import remove from "lodash/remove";
import { skillsArray } from "../data/skills";

const initialState = {
  abilityModifiers: {
    strength: 0,
    dexterity: 0,
    consitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  abilityScores: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  armorClass: 0,
  character: {},
  characterClass: "Fighter",
  cmb: 0,
  edit: false,
  fortitude: 0,
  initiative: 0,
  inventory: [],
  modifiers: [],
  name: "My Character",
  race: "Human",
  reflex: 0,
  skills: skillsArray,
  skillFilter: null,
  speed: 30,
  will: 0,
};

const reducer = (state, { type, payload }) => {
  let items;
  let skills;

  switch (type) {
    case "add_item":
      items = get({ ...state }, "inventory", []);
      items.push(payload.value);
      // Re-calculate ability modifiers
      return set({ ...state }, "inventory", items);
    case "delete_item":
      items = get({ ...state }, "inventory", []);
      remove(items, (x) => x.name === payload.key); // make this value based?
      // Re-calculate ability modifiers
      return set({ ...state }, "inventory", items);
    case "on_input":
      return set({ ...state }, payload.key, payload.value);
    case "edit_skill": {
      skills = get({ ...state }, "skills", []);
      skills[payload.key].ranks = payload.value;
      return set({ ...state }, "skills", skills);
    }
    case "save_data":
      localStorage.setItem("state", JSON.stringify(state));
      return state;
    case "import_data":
      if (payload === null) return initialState;

      return {
        ...state,
        ...payload,
        edit: false,
      };
    default:
      return state;
  }
};

const AppContext = createContext(initialState);
const { Provider } = AppContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const AppProvider = StateProvider;
export const AppConsumer = AppContext.Consumer;

export default AppContext;
