export const states = () => ({
  status: '',
  user: {
    userId: '',
    token: '',
    firstname: '',
  },
  items: [],
});

export const mutations = {
  ADD_USER(state, user) {
    state.users = [{ content: user }];
  },
  REMOVE_USER(state, user) {
    state.users.splice(state.users.indexOf(user), 1);
  },
  setStatus(state, status) {
    state.status = status;
  },
  logUser(state, user) {
    state.user = user;
  },
  setItems(state, items) {
    state.items = items;
  },
};

export const actions = {
  createUser(state, userInfo) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('/api/auth/signup', {
          email: userInfo.email,
          password: userInfo.password,
          firstname: userInfo.firstname,
          lastname: userInfo.lastname,
        })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
  loginUser(state, userInfo) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('/api/auth/login', {
          email: userInfo.email,
          password: userInfo.password,
        })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
  getItems(state) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('/api/item/')
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
};
