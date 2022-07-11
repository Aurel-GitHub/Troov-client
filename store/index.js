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
  createItem(state, itemInfo) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          '/api/item/',
          {
            where: itemInfo.where,
            isLost: true,
            category: itemInfo.category,
            photo: itemInfo.photo,
            description: itemInfo.description,
            userId: itemInfo.userId,
          },
          {
            headers: {
              Authorization: `Bearer ${itemInfo.token}`,
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
