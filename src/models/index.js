import AV, {User} from 'leancloud-storage'

AV.init({
  appId: 'G7YeAs0W0AErUtOkw7OLJ1j6-9Nh9j0Va',
  appKey: 'egmTpN6sgYaJNkqu3P9owTo7',
  serverURL: 'https://g7yeas0w.lc-cn-e1-shared.com'
})
const Auth = {
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },

  login(username, password) {
    console.log('------')
    console.log(username, password)
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },

  logout() {
    User.logOut()
  },

  getCurrentUser() {
    return User.current()
  }

}

export {Auth}