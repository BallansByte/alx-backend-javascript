#!/usr/bin/node

/**
 * signUpUser - Function to return a resolved promise with user details
 * @param {string} firstName - The first name of the user
 * @param {string} lastName - The last name of the user
 * @returns {Promise} - A promise that resolves to an object with firstName and lastName
 */
function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

module.exports = signUpUser;
