
const initState = {
  loading: false,
  dataSource: {
    list: [],
    pagination: {
      pageSize: 10,
      current: 1,
    },
  },
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'saveAssetsLoading':
      return {
        ...state,
        loading: action.payload,
      }


    default:
      return {
        ...state,
      }
  }
}

export default reducer