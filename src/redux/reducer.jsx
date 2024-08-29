import { ACTIONS } from './actions';

const initialState = {
  products: [],
  allProducts: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA:
      return { 
        products: [...state.products, ...action.payload], 
        allProducts: [...state.allProducts, ...action.payload],
      };

    case ACTIONS.SEARCH:
      if (!action.payload.trim()) {
        return { ...state, products: state.allProducts };
      }
      const filteredData = state.allProducts.filter(item =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, products: filteredData };

    default:
      return state;
  }
};

export default counterReducer;
