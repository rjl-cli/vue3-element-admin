import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse, Method, AxiosProgressEvent } from "axios";
import { useGlobalStore } from "@/stores";

// 配置
const axiosconfig = axios.create({
  baseURL: import.meta.env.DEV ? "/api" : import.meta.env.VITE_URL,
  timeout: 30 * 1000,
});

// 请求拦截
axiosconfig.interceptors.request.use((config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
  useGlobalStore().LoadingStart();
  if (!!useGlobalStore().token) {
    config.headers.Authorization = useGlobalStore().token;
  }
  return config;
});

// 响应拦截
axiosconfig.interceptors.response.use((response: AxiosResponse<any, any>): AxiosResponse<any, any> => {
  useGlobalStore().LoadingOff();
  if ([2000].includes(response.data.code)) {
    // 成功的处理
  }

  if ([4000, 4001, 4003].includes(response.data.code)) {
    // 无权限的处理
  }

  if ([5000].includes(response.data.code)) {
    // 错误处理
  }
  return response;
});

// 封装
export const useAxios = async (method: Method, url: string, params = {}) => {
  return await axiosconfig({
    method,
    url,
    ...params,
    // 下载进度
    onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
      //   console.log("progressEvent.loaded已经下载的kb:", progressEvent.loaded);
      //   console.log("progressEvent.total总的kb :", progressEvent.total);
      //   console.log("progressEvent :", progressEvent);
      //   console.log("百分比：", Math.round((progressEvent.loaded / (progressEvent.total || progressEvent.loaded)) * 100));
    },
    // 上传进度
    onUploadProgress(progressEvent: AxiosProgressEvent) {
      //   console.log("progressEvent.loaded已经上传的kb:", progressEvent.loaded);
      //   console.log("progressEvent.total总的kb :", progressEvent.total);
      //   console.log("progressEvent :", progressEvent);
      //   console.log("百分比：", Math.round((progressEvent.loaded / (progressEvent.total || progressEvent.loaded)) * 100));
    },
  });
};
