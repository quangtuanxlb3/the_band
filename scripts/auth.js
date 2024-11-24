const USERS_LOCALSTORAGE_KEY = "w3s-users";
const CURRENT_USER_LOCALSTORAGE_KEY = "w3s-current-user";
const USERS = getUsersFromLocalStorage() || [];
let currentUser = getCurrentUserFromLocalStorage() || null;

function login(email, password) {
  const existingUser = USERS.find((user) => user.email === email);
  if (!existingUser || existingUser.password !== password) {
    return false;
  }
  saveCurrentUserToLocalStorage(existingUser);
  return existingUser;
}

function register(email, password) {
  const existingUser = USERS.find((user) => user.email === email);

  if (existingUser) {
    return false;
  }

  USERS.push({ email, password });
  saveUsersToLocalStorage();
  return { email, password };
}

function saveUsersToLocalStorage() {
  localStorage.setItem(USERS_LOCALSTORAGE_KEY, JSON.stringify(USERS));
}

function getUsersFromLocalStorage() {
  const usersJSON = localStorage.getItem(USERS_LOCALSTORAGE_KEY);
  if (usersJSON) {
    return JSON.parse(usersJSON);
  }
  return [];
}

function saveCurrentUserToLocalStorage(user) {
  localStorage.setItem(CURRENT_USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}

function getCurrentUserFromLocalStorage() {
  const userJSON = localStorage.getItem(CURRENT_USER_LOCALSTORAGE_KEY);
  if (userJSON) {
    return JSON.parse(userJSON);
  }
  return null;
}
