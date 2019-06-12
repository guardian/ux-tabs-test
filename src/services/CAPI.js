import searchJSON from "./fixtures/search";
import sportJSON from "./fixtures/sport";
import travelJSON from "./fixtures/travel";

// Introduce an random default of up to 500ms before returning the value
const network = response =>
  new Promise(res => setTimeout(() => res(response), Math.random() * 500));

const all = async () => network(searchJSON);
const sport = async () => network(sportJSON);
const travel = async () => network(travelJSON);

export { sport, all, travel };
