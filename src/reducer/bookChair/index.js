const initialState = {
  bookingChairList: [],
};
export const bookingChairListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_CHAIR": {
      let newChoosingChairList = [...state.bookingChairList];
      let index = newChoosingChairList.findIndex(
        (choseChair) => choseChair.maGhe === action.choosingChair.maGhe
      );
      if (index !== -1) {
        newChoosingChairList.splice(index, 1);
      } else {
        newChoosingChairList.push(action.gheDangDat);
      }
      state.danhSachGheDangDat = newChoosingChairList;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
