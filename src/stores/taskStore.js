import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "play cricket", isFavorite: false },
      { id: 2, title: "play football", isFavorite: true },
    ],
    name: "task store",
  }),
  getters: {
    favoriteTasks() {
      return this.tasks.filter((task) => task.isFavorite);
    },
    totalFavoriteCount() {
      return this.tasks.reduce((total, current) => {
        return current.isFavorite ? total + 1 : total;
      }, 0);
    },
    totalCount: (state) => state.tasks.length,
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
    toggleFavorite(taskId) {
      const task = this.tasks.find((task) => task.id === taskId);
      task.isFavorite = !task.isFavorite;
    },
  },
});
