import { defineStore } from 'pinia'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('AuthStore', {
  state: () => {
    return {
      auth: null,
      user: null
      // isLoggedIn: false
    }
  },
  getters: {
    isLoggedIn() {
      // console.log('loggedin: ' + this.user != true)
      return this.user != null
    }
  },
  actions: {
    setAuth() {
      this.auth = getAuth()
    },
    setUser(user) {
      this.user = user
    },
    async register(email, password) {
      const res = createUserWithEmailAndPassword(this.auth, email, password)
        .then((data) => {
          return true
        })
        .catch((error) => {
          return false
          // alert('Something went wrong, please try again.')
        })
      console.log(res)
    },
    signIn(email, password) {
      return signInWithEmailAndPassword(this.auth, email, password).then(() => {
        this.user = this.auth.currentUser
        // this.isLoggedIn = true
      })
    },
    signOut() {
      this.user = null
      this.auth.signOut()
      this.auth = null
      console.log(this.user)
    }
  }
})
