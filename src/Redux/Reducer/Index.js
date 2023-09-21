import {
  GET_ALL_DOGS,
  GET_ALL_TEMPERAMENTS,
  GET_SEARCHED_DOGS,
  FILTER_DOGS,
  SORT_DOGS,
} from "../Acctions/Index";

let initialState = {
  allDogs: [],
  dogs: [],
  temperaments: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        dogs: action.payload,
        paginatedDogs: action.payload.splice(state.currentPage, state.dogPerPage),
      };

    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case GET_SEARCHED_DOGS:
      if (action.payload.length > 0) return {
        ...state,
        dogs: action.payload,
      }
      else return {
        ...state,
        dogs: [...state.allDogs],
      };

    case FILTER_DOGS:
      if (action.payload === "clear") {
        return {
          ...state,
          dogs: [...state.allDogs],
        };
      } else {
        let filtered = state.allDogs.filter((dog) => {
          let filter = false;
          dog.temperaments.forEach((temp) => {
            if (temp.name === action.payload) {
              filter = true;
            }
          });
          return filter;
        });
        
        return {
          ...state,
          dogs: [...filtered],
        };
      }

    case SORT_DOGS:
      switch (action.payload) {
        case "a:z":
          return {
            ...state,
            dogs: [...state.dogs].sort((a, b) => (a.name > b.name ? 1 : -1)),
          };
        case "z:a":
          return {
            ...state,
            dogs: [...state.dogs].sort((a, b) => (a.name > b.name ? -1 : 1)),
          };
        case "mayor":
          return {
            ...state,
            dogs: [...state.dogs].sort((a, b) =>
              a.weight[0] > b.weight[0] ? 1 : -1
            ),
          };
        case "menor":
          return {
            ...state,
            dogs: [...state.dogs].sort((a, b) =>
              a.weight[0] > b.weight[0] ? -1 : 1
            ),
          };
        default:
          break;
      }
      return {
        ...state
      }
    default:
      return {...state};
  }
};

export default rootReducer;
