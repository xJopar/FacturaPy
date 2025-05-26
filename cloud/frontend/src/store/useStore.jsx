import { create } from "zustand";

export const useStore = create((set) => ({
  // Usuario actual
  user: null,

  // Función para setear el usuario (simulación de login)
  setUser: (userData) => set({ user: userData }),

  // Limpieza de sesión
  logout: () => set({ user: null }),

  // Lectura del medidor
  reading: "",

  setReading: (value) => set({ reading: value }),

  // Resultado del cálculo
  result: null,

  setResult: (value) => set({ result: value }),
}));
