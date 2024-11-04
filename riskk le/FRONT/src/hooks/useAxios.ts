import axios, { AxiosInstance } from 'axios';
import { useEffect, useState } from 'react';
import config from '../config';

/**
 * Creates a pre-configured axios wrapper that also talks with
 * the keycloak instance.
 *
 * **FIXME:** Fix the type casting by manually checking the instance in the
 * consumers or better yet, use a different approach to create the instance.
 */
export const useAxios = () => {
    const [axiosInstance, setAxiosInstance] = useState({});
    const baseURL = config.API_BK;

    useEffect(() => {
        const instance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
        });

        setAxiosInstance({ instance });

        return () => {
            setAxiosInstance({});
        };
    }, [baseURL]);

    return (axiosInstance as any).instance as AxiosInstance;
};

/**
 * Helper method to correctly map Map values into a JSON format
 * which can be understood by the Spring Boot backend
 *
 * @param key
 * @param value
 * @returns The given value as JSON
 */
export const replacer = (key: any, value: any) => {
    if (value instanceof Map) {
        let targetObject = {};
        value.forEach((value, key) => (targetObject = { ...targetObject, [key]: value }));
        return targetObject;
    } else if (value instanceof Set) {
        const targetObject: any[] = [];
        value.forEach((value, key) => targetObject.push(value));
        return targetObject;
    } else {
        return value;
    }
};
