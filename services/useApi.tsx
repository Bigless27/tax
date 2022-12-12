import { useCallback, useState } from 'react';
//not used
interface APIpayload {
    method: string;
    endpoint: string;
    onSuccess?: (response: any) => any;
    onError?: (error: string) => any;
}

type UseAPIVars<T> = [(data?: T) => Promise<any>, boolean];

export function useAPI<T>(
    payload: APIpayload,
): UseAPIVars<T> {
    const { method, endpoint, onSuccess, onError } = payload;
    const [loading, setLoading] = useState(false);

    const apiCall = useCallback(
        async (data?: T) => {
            let headers: HeadersInit;
            headers = {
                'content-type': 'application/json',
            };
            try {
                setLoading(true);
                const url = `http://localhost:3000/${endpoint}`;

                const res = await fetch(url, {
                    method,
                    headers,
                    body: JSON.stringify(data),
                });

                if (res.status >= 200 && res.status < 400) {
                    const response = await res.json();
                    setLoading(false);
                    onSuccess && onSuccess(response);
                    return response;
                } else {
                    throw res;
                }
            } catch (e: any) {
                setLoading(false);
                onError && onError(e);
                throw e;
            }
        },
        [
            method,
            endpoint,
            onSuccess,
            onError,
        ]
    );

    return [apiCall, loading];
}
