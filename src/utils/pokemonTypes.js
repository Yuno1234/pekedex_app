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
        weakness: {
            noEffect: ["ghost"],
            notEffective: [],
            superEffective: ["fighting"],
        }
    },
    fire: {
        image: fire,
        weakness: {
            noEffect: [],
            notEffective: ["fire", "grass", "ice", "bug", "steel", "fairy"],
            superEffective: ["water", "ground", "rock"],
        }
    },
    water: {
        image: water,
        weakness: {
            noEffect: [],
            notEffective: ["fire", "water", "ice", "steel"],
            superEffective: ["electric", "grass"],
        }
    },
    electric: {
        image: electric,
        weakness: {
            noEffect: [],
            notEffective: ["electric", "flying", "steel"],
            superEffective: ["ground"],
        }
    },
    grass: {
        image: grass,
        weakness: {
            noEffect: [],
            notEffective: ["water", "electric", "grass", "ground"],
            superEffective: ["fire", "ice", "poison", "flying", "bug"],
        }
    },
    ice: {
        image: ice,
        weakness: {
            noEffect: [],
            notEffective: ["ice"],
            superEffective: ["fire", "fighting", "rock", "steel"],
        }
    },
    fighting: {
        image: fighting,
        weakness: {
            noEffect: [],
            notEffective: ["bug", "rock", "dark"],
            superEffective: ["flying", "psychic", "fairy"],
        }
    },
    poison: {
        image: poison,
        weakness: {
            noEffect: [],
            notEffective: ["grass", "fighting", "poison", "bug", "fairy"],
            superEffective: ["ground", "psychic"],
        }
    },
    ground: {
        image: ground,
        weakness: {
            noEffect: ["electric"],
            notEffective: ["poison", "rock"],
            superEffective: ["water", "grass", "ice"],
        }
    },
    flying: {
        image: flying,
        weakness: {
            noEffect: ["ground"],
            notEffective: ["grass", "fighting", "bug"],
            superEffective: ["electric", "ice", "rock"],
        }
    },
    psychic: {
        image: psychic,
        weakness: {
            noEffect: [],
            notEffective: ["fighting", "psychic"],
            superEffective: ["bug", "ghost", "dark"],
        }
    },
    bug: {
        image: bug,
        weakness: {
            noEffect: [],
            notEffective: ["grass", "fighting", "ground"],
            superEffective: ["fire", "flying", "rock"],
        }
    },
    rock: {
        image: rock,
        weakness: {
            noEffect: [],
            notEffective: ["normal", "fire", "poison", "flying"],
            superEffective: ["water", "grass", "fighting", "ground", "steel"],
        }
    },
    ghost: {
        image: ghost,
        weakness: {
            noEffect: ["normal", "fighting"],
            notEffective: ["poison", "bug"],
            superEffective: ["ghost", "dark"],
        }
    },
    dragon: {
        image: dragon,
        weakness: {
            noEffect: [],
            notEffective: ["fire", "water", "electric", "grass"],
            superEffective: ["ice", "dragon", "fairy"],
        }
    },
    dark: {
        image: dark,
        weakness: {
            noEffect: ["psychic"],
            notEffective: ["ghost", "dark"],
            superEffective: ["fighting", "bug", "fairy"],
        }
    },
    steel: {
        image: steel,
        weakness: {
            noEffect: ["poison"],
            notEffective: ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"],
            superEffective: ["fire", "fighting", "ground"],
        }
    },
    fairy: {
        image: fairy,
        weakness: {
            noEffect: ["dragon"],
            notEffective: ["fighting", "bug", "dark"],
            superEffective: ["poison", "steel"],
        }
    }
}