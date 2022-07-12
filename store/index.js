const userObject = {
  userId: '',
  firstname: '',
  token: '',
};
export const states = () => ({
  status: '',
  user: userObject,
  items: [],
});

export const mutations = {
  setStatus(state, status) {
    state.status = status;
  },
  logUser(state, user) {
    this.$axios.setHeader('Authorization', user.token);
    this.$axios.setToken(user.token, 'Bearer', [
      'post',
      'delete',
      'put',
      'patch',
    ]);
    localStorage.setItem('user', JSON.stringify(user));
    state.user = user;
  },
  logout(state) {
    state.user = userObject;
    state.status = 'logout';
    localStorage.clear();
  },
  setItems(state, items) {
    state.items = items;
  },
  setOneItem(state, item) {
    state.items.push(item);
  },
  deleteOneItem(state, itemId) {
    state.items = state.items.filter((elt) => elt._id !== itemId);
  },
  updateOneItem(state, item) {
    const indexItem = state.items.findIndex((elt) => elt._id === item._id);
    state.items[indexItem] = item;
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
  logoutUser() {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('/api/auth/logout')
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
  getItems(state) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('/api/item/')
        .then((res) => {
          resolve(res);
        })
        .catch((error) => reject(error));
    });
  },
  createItem(state, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          '/api/item/',
          {
            where: data.form.where,
            isLost: true,
            category: data.form.category,
            photo: data.form.photo,
            description: data.form.description,
            userId: data.userId,
          },
          {
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          }
        )
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
  deleteItem(state, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$delete(`api/item/${data.itemId}`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
  updateItem(state, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .put(
          `api/item/${data.form._id}`,
          {
            where: data.form.where,
            isLost: true,
            category: data.form.category,
            photo: data.form.photo,
            description: data.form.description,
          },
          {
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          }
        )
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
  // updateItem() {
  //   /**
  //    * put - /api/item/idItem

  //   xios.get('https://api.github.com/user', {
  //   headers: {
  //     'Authorization': `token ${access_token}`
  //   }
  // })
  //    */
  // },
  // deleteItem() {
  //   /**
  //    * delete - /api/item/idItem
  //    */
  // },
};
