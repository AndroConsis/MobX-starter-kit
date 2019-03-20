import axios from "axios";
import { baseUrl, endPoint } from "../Url";

const url = baseUrl + endPoint.FACTS;
const fetchFacts = () => axios.get(`${url}`);

export default {
  fetchFacts
};
