const ADD_CURSADO = "ADD_CURSADO";
const COMPLETE_CURSADO = "COMPLETE_CURSADO";
const DELETE_CURSADO = "DELETE_CURSADO";
const SET_LOADING = "SET_LOADING";

const stateInitial = {
  cursos: [],
  loading: false
};

export const appSelector = {
  cursos: (state) => state.cursos,
  loading: (state) => state.loading
};

export const appActions = {
  addCursado: (payload) => ({
    type: ADD_CURSADO,
    payload,
  }),
  setCompletedCursado: (payload) => ({
    type: COMPLETE_CURSADO,
    payload,
  }),
  deleteCursado: (id) => ({
    type: DELETE_CURSADO,
    id,
  }),
  setLoading: (value) => ({
    type: SET_LOADING,
    value,
  }),
};

export const appReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case ADD_CURSADO:
      return {
        ...state,
        cursos: [
          ...state.cursos,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case COMPLETE_CURSADO:
      return {
        ...state,
        cursos: state.cursos.map((c) => {
          if (c.id === action.payload.id) {
            return {
              ...c,
              completed: action.payload.completed,
            };
          }
          return c;
        }),
      };
    case DELETE_CURSADO:
      return {
        ...state,
        cursos: state.cursos.filter((c) => c.id !== action.id),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.value,
      };
    default:
      return state;
  }
};
