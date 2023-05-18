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
        color: "#919aa2",
        weakness: {
            noEffect: ["ghost"],
            notEffective: [],
            superEffective: ["fighting"],
        }
    },
    fire: {
        image: fire,
        color: "#ff9d53",
        weakness: {
            noEffect: [],
            notEffective: ["fire", "grass", "ice", "bug", "steel", "fairy"],
            superEffective: ["water", "ground", "rock"],
        }
    },
    water: {
        image: water,
        color: "#3692dc",
        weakness: {
            noEffect: [],
            notEffective: ["fire", "water", "ice", "steel"],
            superEffective: ["electric", "grass"],
        }
    },
    electric: {
        image: electric,
        color: "#fbd100",
        weakness: {
            noEffect: [],
            notEffective: ["electric", "flying", "steel"],
            superEffective: ["ground"],
        }
    },
    grass: {
        image: grass,
        color: "#60ba53",
        weakness: {
            noEffect: [],
            notEffective: ["water", "electric", "grass", "ground"],
            superEffective: ["fire", "ice", "poison", "flying", "bug"],
        }
    },
    ice: {
        image: ice,
        color: "#4cd1c0",
        weakness: {
            noEffect: [],
            notEffective: ["ice"],
            superEffective: ["fire", "fighting", "rock", "steel"],
        }
    },
    fighting: {
        image: fighting,
        color: "#e0306a",
        weakness: {
            noEffect: [],
            notEffective: ["bug", "rock", "dark"],
            superEffective: ["flying", "psychic", "fairy"],
        }
    },
    poison: {
        image: poison,
        color: "#b567ce",
        weakness: {
            noEffect: [],
            notEffective: ["grass", "fighting", "poison", "bug", "fairy"],
            superEffective: ["ground", "psychic"],
        }
    },
    ground: {
        image: ground,
        color: "#e87236",
        weakness: {
            noEffect: ["electric"],
            notEffective: ["poison", "rock"],
            superEffective: ["water", "grass", "ice"],
        }
    },
    flying: {
        image: flying,
        color: "#8fa8dd",
        weakness: {
            noEffect: ["ground"],
            notEffective: ["grass", "fighting", "bug"],
            superEffective: ["electric", "ice", "rock"],
        }
    },
    psychic: {
        image: psychic,
        color: "#ff6675",
        weakness: {
            noEffect: [],
            notEffective: ["fighting", "psychic"],
            superEffective: ["bug", "ghost", "dark"],
        }
    },
    bug: {
        image: bug,
        color: "#90c12d",
        weakness: {
            noEffect: [],
            notEffective: ["grass", "fighting", "ground"],
            superEffective: ["fire", "flying", "rock"],
        }
    },
    rock: {
        image: rock,
        color: "#c8b686",
        weakness: {
            noEffect: [],
            notEffective: ["normal", "fire", "poison", "flying"],
            superEffective: ["water", "grass", "fighting", "ground", "steel"],
        }
    },
    ghost: {
        image: ghost,
        color: "#5469ad",
        weakness: {
            noEffect: ["normal", "fighting"],
            notEffective: ["poison", "bug"],
            superEffective: ["ghost", "dark"],
        }
    },
    dragon: {
        image: dragon,
        color: "#096ac1",
        weakness: {
            noEffect: [],
            notEffective: ["fire", "water", "electric", "grass"],
            superEffective: ["ice", "dragon", "fairy"],
        }
    },
    dark: {
        image: dark,
        color: "#5b5466",
        weakness: {
            noEffect: ["psychic"],
            notEffective: ["ghost", "dark"],
            superEffective: ["fighting", "bug", "fairy"],
        }
    },
    steel: {
        image: steel,
        color: "#5a8ea2",
        weakness: {
            noEffect: ["poison"],
            notEffective: ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"],
            superEffective: ["fire", "fighting", "ground"],
        }
    },
    fairy: {
        image: fairy,
        color: "#5a8ea2",
        weakness: {
            noEffect: ["dragon"],
            notEffective: ["fighting", "bug", "dark"],
            superEffective: ["poison", "steel"],
        }
    }
}