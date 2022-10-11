import axios from "axios";
import ApiConfig from "../configs/ApiConfig";

const create = (baseURL = ApiConfig.baseURL) => {
  const api = axios.create({
    baseURL,
    headers: ApiConfig.headers,
    timeout: ApiConfig.timeOut,
  });

  function checkAppVersion(accessToken: string) {
    return api.get(`api/app/check-demo-app`, {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  //   const createNewFeed = (payload: any) => {
  //     return api.post(`/teacher/active`, payload, {
  //       headers: {
  //         Authorization: `Bearer ${tokens.access_token}`,
  //       },
  //     });
  //   };

  return {
    checkAppVersion,
  };
};

export default {
  create,
};
