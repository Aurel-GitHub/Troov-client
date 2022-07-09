export const states = () => ({
  users: [],
});

export const mutations = {
  ADD_USER(state, user) {
    state.users = [{ content: user }];
  },
  REMOVE_USER(state, user) {
    state.users.splice(state.users.indexOf(user), 1);
  },
};
