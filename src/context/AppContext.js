import React, { createContext, useReducer } from "react";
import get from "lodash/get";
import set from "lodash/set";
import remove from "lodash/remove";
import { skillsArray } from "../data/skills";
import { getAbilityModifier } from "../utils";

const initialState = {
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
      items = get({ ...state }, "inventory", []);
      items.push(payload.value);

      // TODO: Functionalize
      // Re-calculate ability modifiers
      if (payload.value.effects) {
        payload.value.effects.map((effect) => {
          calculateAbility(state, `abilities.${effect.target}`, null, effect);
        });
      }

      return set({ ...state }, "inventory", items);
    case "delete_item":
      items = get({ ...state }, "inventory", []);
      remove(items, (x) => x.name === payload.key); // make this value based?

      // Re-calculate ability modifiers
      // if (payload.value.effects) {
      //   abilities = get({ ...state }, "abilities", []);
      //   payload.value.effects.map((effect) => {
      //     remove(
      //       `abilities${effect.target}.effects`,
      //       (x) => x.source === payload.key,
      //     );
      //     set({ ...state }, `abilities.${effect.target}`, strength);

      //     calculateAbility(state, `abilities.${effect.target}`, null, effect);
      //   });
      // }

      return set({ ...state }, "inventory", items);
    case "set_ability_score":
      return calculateAbility(state, payload.key, payload.value);
    case "edit_skill":
      skills = get({ ...state }, "skills", []);
      skills[payload.key].ranks = payload.value;
      return set({ ...state }, "skills", skills);
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
