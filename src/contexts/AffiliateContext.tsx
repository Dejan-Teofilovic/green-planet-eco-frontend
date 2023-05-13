import React, { createContext, useEffect, useReducer } from 'react';
import { getItemOfLocalStorage, removeItemOfLocalStorage, setItemOfLocalStorage } from '../utils/functions';
import { AFFILIATE_TOKEN } from '../utils/constants';

/* --------------------------------------------------------------- */

interface IInitialState {
  affiliateToken: string;
}

interface IAction {
  type: string,
  payload: any
}

interface IProps {
  children: any
}

interface IHandlers {
  [key: string]: Function,
}

/* --------------------------------------------------------------- */

const initialState: IInitialState = {
  affiliateToken: '',
};

const handlers: IHandlers = {
  SET_AFFILIATE_TOKEN: (state: object, action: IAction) => {
    return {
      ...state,
      affiliateToken: action.payload
    };
  }
};

const reducer = (state: object, action: IAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const AffiliateContext = createContext({
  ...initialState,
  setAffiliateTokenAct: (token: string) => Promise.resolve(),
  removeAffiliateTokenAct: (token: string) => Promise.resolve()
});

let numberOfLoad = 0;

/* --------------------------------------------------------------- */

//  Provider
function AffiliateProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (numberOfLoad === 0) {
      const affiliateToken = getItemOfLocalStorage(AFFILIATE_TOKEN)
      if (affiliateToken) {
        dispatch({
          type: 'SET_AFFILIATE_TOKEN',
          payload: affiliateToken
        });
      } else {
        dispatch({
          type: 'SET_AFFILIATE_TOKEN',
          payload: ''
        });
      }
      numberOfLoad += 1
    }
  }, [])

  const setAffiliateTokenAct = (token: string) => {
    setItemOfLocalStorage(AFFILIATE_TOKEN, token)
    dispatch({
      type: 'SET_AFFILIATE_TOKEN',
      payload: token
    });
  };

  const removeAffiliateTokenAct = () => {
    removeItemOfLocalStorage(AFFILIATE_TOKEN)
    dispatch({
      type: 'SET_AFFILIATE_TOKEN',
      payload: ''
    });
  }

  return (
    <AffiliateContext.Provider
      value={{
        ...state,
        setAffiliateTokenAct,
        removeAffiliateTokenAct
      }}
    >
      {children}
    </AffiliateContext.Provider>
  );
}

export { AffiliateContext, AffiliateProvider };