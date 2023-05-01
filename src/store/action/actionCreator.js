import { PORTFOLIOS_FETCH_SUCCESS } from "../action/actionType";

export function fetchPortfolios() {
  return async (dispatch, getState) => {
    try {
      const portfoliosData = [
        {
          id: 1,
          name: "The Tangerang Times",
          img: "https://firebasestorage.googleapis.com/v0/b/portfolio-71585.appspot.com/o/images%2Ftgr-times.png?alt=media&token=ba70af7a-be8c-4c66-bf7b-77e979748b5a",
          description: "A News Portal website",
          link: "https://tgrtimes-d2821.web.app/",
          tags: ["React", "Redux", "TailwindCSS"],
        },
        {
          id: 2,
          name: "The Tangerang Times CMS",
          img: "https://firebasestorage.googleapis.com/v0/b/portfolio-71585.appspot.com/o/images%2Ftgr-times-cms.png?alt=media&token=2fae476b-e039-46c4-90d8-0051adeb8079",
          description: "This is The Tangerang Times CMS website",
          link: "",
          tags: ["React", "Redux", "TailwindCSS"],
        },
      ];
      dispatch({ type: PORTFOLIOS_FETCH_SUCCESS, payload: portfoliosData });
    } catch (error) {
      throw error;
    }
  };
}
