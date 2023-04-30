import { PORTFOLIOS_FETCH_SUCCESS } from "../action/actionType";

export function fetchPortfolios() {
  return async (dispatch, getState) => {
    try {
      const portfoliosData = [
        {
          id: 1,
          name: "The Tangerang Times",
          img: "./src/assets/images/tgr-times.png",
          description: "A News Portal website",
          link: "https://tgrtimes-d2821.web.app/",
          tags: ["React", "Redux", "TailwindCSS"],
        },
        {
          id: 2,
          name: "The Tangerang Times CMS",
          img: "./src/assets/images/tgr-times-cms.png",
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
