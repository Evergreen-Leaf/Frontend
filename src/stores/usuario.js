import { defineStore } from 'pinia'
import UsuarioService from '@/services/usuario'
import { useLocalStorage } from '@vueuse/core'

export const useUsuarioStore = defineStore('usuario', () => {
  const state = useLocalStorage('usuario_state', {
    user: null,
    token: null,
    refreshToken: null,
  })

  const login = async (email, password) => {
    try {
      const response = await UsuarioService.login(email, password)
      state.value.token = response.access
      state.value.refreshToken = response.refresh

      const meData = await UsuarioService.getUserProfile(response.access)
      state.value.user = meData
    } catch (error) {
      console.log('Login error:', error)
      throw error
    }
  }

  const me = async (token = state.value.token) => {
    try {
      const meData = await UsuarioService.getUserProfile(token)
      state.value.user = meData
    } catch (error) {
      console.log('Get user profile error:', error)
      throw error
    }
  }

  const logout = () => {
    state.value.user = null
    state.value.token = null
  }

  return {
    state,
    login,
    logout,
    me
  }
})