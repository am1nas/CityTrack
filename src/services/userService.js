/**
 * CityTrack - User Account Creation Service
 * SCRUM-11: Implementacija backend logike za kreiranje korisničkog naloga
 */

// Simulacija baze podataka
const users = [];

/**
 * Kreira novi korisnički nalog
 * @param {Object} userData - Podaci korisnika
 * @returns {Object} Kreirani korisnik
 */
export const createUser = (userData) => {
  // Validacija podataka
  if (!userData.email || !userData.password || !userData.firstName || !userData.lastName) {
    throw new Error('Svi podaci su obavezni');
  }

  // Provjera da li korisnik već postoji
  const existingUser = users.find(user => user.email === userData.email);
  if (existingUser) {
    throw new Error('Korisnik sa ovom email adresom već postoji');
  }

  // Kreiranje korisnika
  const newUser = {
    id: Date.now().toString(),
    ...userData,
    createdAt: new Date().toISOString(),
    isActive: true
  };

  // Dodavanje u "bazu"
  users.push(newUser);

  // Vraćamo korisnika bez lozinke
  const { password, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

/**
 * Provjera da li email već postoji
 * @param {string} email - Email adresa
 * @returns {boolean} True ako email postoji
 */
export const emailExists = (email) => {
  return users.some(user => user.email === email);
};

/**
 * Vraća sve korisnike (bez lozinki)
 * @returns {Array} Lista korisnika
 */
export const getAllUsers = () => {
  return users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
};
