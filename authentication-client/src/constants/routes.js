const nodeURL = process.env.REACT_NODE_URL || 'http://localhost:3001';

export const loginURL = nodeURL + '/auth/login';

export const signupURL = nodeURL + '/auth/signup';

export const logOutURL = nodeURL + '/auth/logout';

export const dashboardURL = nodeURL + '/user/details';

export const authCheckURL = nodeURL + '/user/isAuthenticated';
