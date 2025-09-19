import { ref } from 'vue';

// ejemplo
export function useAuth() {
  const user = ref(null);
  const login = () => {
    /* ... */
  };
  const logout = () => {
    /* ... */
  };
  return { user, login, logout };
}
