import APIError from "../../typings/APIError";
import { HTTPMethods } from "../../typings/MethodEnum";
import ClockifyClient from "../client/Client";

export default class RequestHandler {
    public apiURLs = {
        api: "https://api.clockify.me/api/v1",
        reports: "https://reports.api.clockify.me/v1",
    };

    public constructor(public client: ClockifyClient, config: { apiURL?: string }) {}

    public get<T>(path: string, apiType: keyof RequestHandler["apiURLs"]): Promise<T> {
        return this.make({ path, method: HTTPMethods.GET, apiType }).then((x) => x[1] as T);
    }

    public post<T, D extends Record<string, any>>(
        path: string,
        body: D,
        apiType: keyof RequestHandler["apiURLs"],
    ): Promise<T> {
        return this.make({ path, method: HTTPMethods.POST, body, apiType }).then((x) => x[1] as T);
    }

    public put<T, D extends Record<string, any>>(
        path: string,
        body: D,
        apiType: keyof RequestHandler["apiURLs"],
    ): Promise<T> {
        return this.make({ path, method: HTTPMethods.PUT, body, apiType }).then((x) => x[1] as T);
    }

    public patch<T, D extends Record<string, any>>(
        path: string,
        body: D,
        apiType: keyof RequestHandler["apiURLs"],
    ): Promise<T> {
        return this.make({ path, method: HTTPMethods.PATCH, body, apiType }).then((x) => x[1] as T);
    }

    public delete<T, D extends Record<string, any>>(
        path: string,
        body: D,
        apiType: keyof RequestHandler["apiURLs"],
    ): Promise<T> {
        return this.make({ path, method: HTTPMethods.DELETE, body, apiType }).then((x) => x[1] as T);
    }

    private async make({
        body,
        path,
        apiType,
        method,
    }: {
        body?: Record<string, any>;
        path: string;
        query?: Record<string, string>;
        apiType: keyof RequestHandler["apiURLs"];
        method: HTTPMethods;
    }): Promise<[Response, Record<string, any>]> {
        let request;

        try {
            request = await fetch(`${this.apiURLs[apiType]}${path}`, {
                method,
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!request.ok) {
                const error_body = await request.json().catch(() => ({}));

                throw new APIError(path, method, request.status, error_body.message ?? error_body ?? "");
            }

            return [request, request.json()];
        } catch (e) {
            throw e;
        }
    }
}
