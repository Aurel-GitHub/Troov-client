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

export const actions = {
  async createUser(state, userInfo) {
    const res = await this.$axios.$post('/api/auth/signup', {
      email: 'dqsdoqe@sdf',
      password: 'sdfsdf',
      firstname: 'sfsdf',
      lastname: 'sdfsd',
    });
    state.users = [{ content: res.userId }];
    console.log('res', res.userId, state);
  },
};
