import { route, handleLocation } from "./router.js";
import { cekToken } from "./services/auth.service.js";

const app = async () => {
  cekToken();
  handleLocation();
};
app();
