import { strength } from "./data/abilities";

enum Race {
  Human,
  Aasimar,
  Kitsune,
}

enum Job {
  Paladin,
  Oracle,
  Rogue,
  Summoner,
}

interface Ability {
  name: string;
  value: number;
  mod: number;
}

interface Skill {
  name: string;
  ranks: number;
  ability: Ability;
  classSkill: boolean;
}

interface Modifier {
  name: string;
  source: string;
  target: string;
  value: number;
}

interface Character {
  name: string;
  race: Race;
  job: Job;
  level: number;
  abilities: Ability[];
  skills: Skill[];
  modifiers: Modifier[];
}
