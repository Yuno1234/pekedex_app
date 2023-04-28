import normal from "../assets/types/normal.svg"
import fire from "../assets/types/fire.png"
import water from "../assets/types/water.svg"
import electric from "../assets/types/electric.svg"
import grass from "../assets/types/grass.png"
import ice from "../assets/types/ice.svg"
import fighting from "../assets/types/fighting.svg"
import poison from "../assets/types/poison.svg"
import ground from "../assets/types/ground.svg"
import flying from "../assets/types/flying.png"
import psychic from "../assets/types/psychic.svg"
import bug from "../assets/types/bug.png"
import rock from "../assets/types/rock.svg"
import ghost from "../assets/types/ghost.png"
import dragon from "../assets/types/dragon.png"
import dark from "../assets/types/dark.svg"
import steel from "../assets/types/steel.svg"
import fairy from "../assets/types/fairy.svg"

export const pokemonTypes = {
    normal: {
        image: normal,
        noEffect: [ghost],
        notEffective: [],
        superEffective: [fighting],
    },
    fire: {
        image: fire,
        noEffect: [],
        notEffective: [fire, grass, ice, bug, steel, fairy],
        superEffective: [water, ground, rock],
    },
    water: {
        image: water,
        noEffect: [],
        notEffective: [fire, water, ice, steel],
        superEffective: [electric, grass],
    },
    electric: {
        image: electric,
        noEffect: [],
        notEffective: [electric, flying, steel],
        superEffective: [ground],
    },
    grass: {
        image: grass,
        noEffect: [],
        notEffective: [water, electric, grass, ground],
        superEffective: [fire, ice, poison, flying, bug],
    },
    ice: {
        image: ice,
        noEffect: [],
        notEffective: [ice],
        superEffective: [fire, fighting, rock, steel],
    },
    fighting: {
        image: fighting,
        noEffect: [],
        notEffective: [bug, rock, dark],
        superEffective: [flying, psychic, fairy],
    },
    poison: {
        image: poison,
        noEffect: [],
        notEffective: [grass, fighting, poison, bug, fairy],
        superEffective: [ground, psychic],
    },
    ground: {
        image: ground,
        noEffect: [electric],
        notEffective: [poison, rock],
        superEffective: [water, grass, ice],
    },
    flying: {
        image: flying,
        noEffect: [ground],
        notEffective: [grass, fighting, bug],
        superEffective: [electric, ice, rock],
    },
    psychic: {
        image: psychic,
        noEffect: [],
        notEffective: [fighting, psychic],
        superEffective: [bug, ghost, dark],
    },
    bug: {
        image: bug,
        noEffect: [],
        notEffective: [grass, fighting, ground],
        superEffective: [fire, flying, rock],
    },
    rock: {
        image: rock,
        noEffect: [],
        notEffective: [normal, fire, poison, flying],
        superEffective: [water, grass, fighting, ground, steel],
    },
    ghost: {
        image: ghost,
        noEffect: [normal, fighting],
        notEffective: [poison, bug],
        superEffective: [ghost, dark],
    },
    dragon: {
        image: dragon,
        noEffect: [],
        notEffective: [fire, water, electric, grass],
        superEffective: [ice, dragon, fairy],
    },
    dark: {
        image: dark,
        noEffect: [psychic],
        notEffective: [ghost, dark],
        superEffective: [fighting, bug, fairy],
    },
    steel: {
        image: steel,
        noEffect: [poison],
        notEffective: [normal, grass, ice, flying, psychic, bug, rock, dragon, steel, fairy],
        superEffective: [fire, fighting, ground],
    },
    fairy: {
        image: fairy,
        noEffect: [dragon],
        notEffective: [fighting, bug, dark],
        superEffective: [poison, steel],
    }
}