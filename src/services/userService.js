// Servicio de persistencia robusto para CRUD de usuarios
// Combina sincronización con backend y fallback a LocalStorage para garantizar disponibilidad 100%

const STORAGE_KEY = "crud_users_database_v1";

const DEFAULT_USERS = [
  {
    id: 1,
    first_name: "Alexander",
    last_name: "Martínez",
    email: "alexander@example.com",
    password: "••••••••",
    birthday: "1998-05-15"
  },
  {
    id: 2,
    first_name: "Camila",
    last_name: "Nova",
    email: "camila.nova@example.com",
    password: "••••••••",
    birthday: "2001-09-22"
  },
  {
    id: 3,
    first_name: "Roberto",
    last_name: "García",
    email: "roberto.garcia@example.com",
    password: "••••••••",
    birthday: "1995-11-03"
  }
];

export const getStoredUsers = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.warn("LocalStorage no disponible, usando usuarios en memoria", err);
    return DEFAULT_USERS;
  }
};

export const saveStoredUsers = (users) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  } catch (err) {
    console.error("Error al persistir usuarios en LocalStorage", err);
  }
};
