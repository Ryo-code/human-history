export const selectEra = (eraId) => {
  return {
    type: "select_era",
    payload: eraId
  };
};