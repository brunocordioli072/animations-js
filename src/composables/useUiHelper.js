import { computed, reactive } from "vue";

const state = reactive({
  pages: ["Particles"],
  currentPage: "Particles",
});

export const useUiHelper = () => {
  const changeCurrentPage = (newPage) => {
    state.currentPage = newPage;
  };

  return {
    pages: computed(() => state.pages),
    changeCurrentPage,
    currentPage: computed(() => state.currentPage),
  };
};
  