import { defineStore } from "pinia";
import indexedDocs from "../assets/json/indexed_docs_directory.json";

export const useMainStore = defineStore("main", {
  state: () => ({
    app: {
      loadingSpinner: false
    },
    search: {
      state: false,
      values: indexedDocs.map((section) => section.links).flat(1),
      recentSearch: JSON.parse(`${localStorage.getItem("recentSearch") || "[]"}`)
    }
  }),
  getters: {
    getLoadingSpinnerState: (state) => state.app.loadingSpinner,
    getSearchState: (state) => state.search.state,
    getSearchValues: (state) => state.search.values,
    getSearchRecentSearch: (state) => state.search.recentSearch
  },
  actions: {
    toggleLoadingSpinner() {
      this.app.loadingSpinner = !this.app.loadingSpinner;
    },
    openSearch() {
      this.search.state = true;
    },
    closeSearch() {
      this.search.state = false;
    }
  }
});
