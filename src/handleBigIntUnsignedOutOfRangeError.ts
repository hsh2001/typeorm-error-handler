import { QueryFailedError } from 'typeorm';

/**
 * Handles the error that occurs when a BIGINT UNSIGNED value is out of range in a query.
 * If the error matches the specified condition, it either calls the `onError` function or throws the error created by `createError`.
 * Otherwise, it rethrows the original error.
 *
 * @param callback - The callback function to execute.
 * @param createError - Optional. A function that creates an error object based on the original error.
 * @param onError - Optional. A function to handle the error and return a value.
 * @returns A promise that resolves to the return value of the callback function.
 */

export async function handleBigIntUnsignedOutOfRangeError<ReturnType>({
  callback,
  createError,
  onError,
}: {
  callback: () => Promise<ReturnType>;
  createError?: (error: unknown) => Error;
  onError?: (error: unknown) => Promise<ReturnType>;
}): Promise<ReturnType> {
  try {
    return await callback();
  } catch (error) {
    if (
      error instanceof QueryFailedError &&
      error.message.includes('BIGINT UNSIGNED value is out of range in')
    ) {
      if (onError) {
        return onError(error);
      } else {
        throw createError?.(error) ?? error;
      }
    }

    throw error;
  }
}
