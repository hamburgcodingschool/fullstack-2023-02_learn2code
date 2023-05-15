// Task: Make this code print "42" by changing alpha and beta.
let alpha = 1;
let beta = 1;

// Do some complicated math :D
let gamma = alpha * beta + alpha / beta - beta * alpha + beta / alpha;
let delta = gamma / alpha + gamma / beta - alpha / gamma + beta / gamma;
let epsilon = (delta * gamma) / (alpha + beta) - delta / gamma;
let zeta = epsilon / delta + epsilon / gamma - delta / epsilon;
let eta = (zeta * epsilon) / (delta + gamma) - zeta / epsilon;
let theta = eta / zeta + eta / epsilon - zeta / eta + epsilon / eta;
let iota = (theta * eta) / (zeta + epsilon) - (theta / eta) * (zeta - epsilon);
let kappa = iota / theta + iota / eta - theta / iota + eta / iota;
let lambda = (kappa * iota) / (theta + eta) - (kappa / iota) * (theta - eta);
let mu = lambda / kappa + lambda / iota - kappa / lambda + iota / lambda;
let nu = (mu * lambda) / (kappa + iota) - (mu / lambda) * (kappa - iota);
let xi = nu / mu + nu / lambda - mu / nu + lambda / nu;
let omicron = (xi * nu) / (mu + lambda) - (xi / nu) * (mu + lambda);
let pi = omicron / xi + omicron / nu - xi / omicron + nu / omicron;
let rho = (pi * omicron) / (xi + nu) - (pi / omicron) * (xi - nu);
let sigma = rho / pi + rho / omicron - pi / rho + omicron / rho;
let tau = (sigma * rho) / (pi + omicron) - (sigma / rho) * (pi - omicron);
let fin = (tau * beta) / tau + rho * (sigma - sigma) + alpha * alpha;

console.log(fin);
