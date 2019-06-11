import { qs } from "../utils/qs";

const API_KEY = "test";

const getCAPISearchString = (
  path,
  params = {},
  baseURL = "https://content.guardianapis.com/",
  apiKey = API_KEY
) =>
  `${baseURL}${path}${qs({
    ...params,
    "api-key": apiKey
  })}`;

const fetchJSON = path => fetch(path).then(res => res.json());

const all = async () => fetchJSON(getCAPISearchString("search"));
const sport = async () => fetchJSON(getCAPISearchString("sport"));
const travel = async () => fetchJSON(getCAPISearchString("travel"));

export { sport, all, travel };
