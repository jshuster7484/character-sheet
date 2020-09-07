import React, { createContext, useReducer } from "react";
import get from "lodash/get";
import set from "lodash/set";
import remove from "lodash/remove";
import { skillsArray } from "../data/skills";
import { getAbilityModifier } from "../utils";

export const newCharacter = {
  name: "My Character",
  abilities: {
    strength: {
      score: 10,
      modifier: 0,
      effects: [],
    },
    dexterity: {
      score: 10,
      modifier: 0,
      effects: [],
    },
    constitution: {
      score: 10,
      modifier: 0,
      effects: [],
    },
    intelligence: {
      score: 10,
      modifier: 0,
      effects: [],
    },
    wisdom: {
      score: 10,
      modifier: 0,
      effects: [],
    },
    charisma: {
      score: 10,
      modifier: 0,
      effects: [],
    },
  },
  baseAttackBonus: 0,
  items: [],
  slots: {
    level1: {
      number: 5,
      spent: 0,
    },
    level2: {
      number: 0,
      spent: 0,
    },
    level3: {
      number: 0,
      spent: 0,
    },
  },
  spells: {
    powers: [],
    level0: [],
    level1: [],
    level2: [],
    level3: [],
    level4: [],
    level5: [],
    level6: [],
    level7: [],
    level8: [],
    level9: [],
  },
  weapons: [],
};

const initialState = {
  activeCharacterIndex: 0,
  characters: [newCharacter],
};

const calculateAbility = (state, abilityPath, abilityScore, effect) => {
  const { score, effects } = get({ ...state }, abilityPath);

  if (abilityScore === null) {
    abilityScore = score;
  }

  if (effect) {
    effects.push(effect);
  }

  const total = effects
    ? parseInt(abilityScore) +
      effects.reduce(function (prev, effect) {
        return prev + parseInt(effect.value);
      }, 0)
    : parseInt(abilityScore);

  return set({ ...state }, abilityPath, {
    score: abilityScore,
    modifier: getAbilityModifier(total),
    effects: effects,
  });
};

const reducer = (state, { type, payload }) => {
  let items;
  let skills;

  switch (type) {
    case "on_input":
      return set({ ...state }, payload.key, payload.value);
    case "add_item":
      items = get({ ...state }, `${payload.key}`, []);
      items.push(payload.value);
      return set({ ...state }, `${payload.key}`, items);
    case "delete_item":
      items = get({ ...state }, `${payload.key}`, []);
      remove(items, (x, index) => index === payload.value);
      return set({ ...state }, `${payload.key}`, items);
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

    // Take another look at these later
    case "set_ability_score":
      return calculateAbility(state, payload.key, payload.value);
    case "edit_skill":
      skills = get({ ...state }, "skills", []);
      skills[payload.key].ranks = payload.value;
      return set({ ...state }, "skills", skills);

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
