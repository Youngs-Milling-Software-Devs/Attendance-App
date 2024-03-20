import { AxiosError } from "axios";
import { APIResponse } from "./generic";

export type ThunkResponse<T> = APIResponse<T> | AxiosError<APIResponse<T>, any>;

export interface InitialStates<T> {
  data: T;
  isLoading: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  message?: string;
}

/**
 * @Guard for payload and error return
 * @param data
 * @returns data array
 */
export const isPayload = <T>(
  data: ThunkResponse<T>
): data is APIResponse<T> => {
  return !data.isAxiosError;
};

export const isError = <T>(
  data: ThunkResponse<T>
): data is AxiosError<APIResponse<T>, any> => {
  return data.isAxiosError;
};
