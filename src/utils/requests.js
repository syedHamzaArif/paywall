import api from "./api";
import { apiRoutes } from "@/config/routes";

export const verifyToken = async () => {
  return api.get(apiRoutes.verifyToken);
};

export const login = async (credentials) => {
  return api.post(apiRoutes.login, credentials);
};

export const signup = async (credentials) => {
  return api.post(apiRoutes.signup, credentials);
};

export const logout = async () => {
  return api.post(apiRoutes.logout);
};

export const subscribe = async (data) => {
  return api.post(apiRoutes.payment, data);
};

