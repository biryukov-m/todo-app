import { StorageKeys } from '../modules/common/consts/app-keys.const';

interface IFetchConfig extends RequestInit {
  url: string;
}

export class HttpService {
  baseUrl: string;

  apiVersion: string;

  fetchingService: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;

  constructor(
    baseUrl = process.env.REACT_APP_BACKEND_BASE_URL,
    apiVersion = process.env.REACT_APP_BACKEND_API_VERSION_URL,
    fetchingService = fetch
  ) {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.fetchingService = fetchingService.bind(window);
  }

  get(config: IFetchConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }

    return this.fetchingService(
      this.getFullUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  private getFullUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: `Bearer ${localStorage.getItem(StorageKeys.TOKEN)}`
    };
  }

  private extractUrlAndDataFromConfig({ body, url, ...configWithoutDataAndUrl }: IFetchConfig) {
    return configWithoutDataAndUrl;
  }

  put(config: IFetchConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    config.method = 'PUT';
    config.headers = { ...config.headers, ...{ 'Content-Type': 'application/json' } };

    return this.fetchingService(this.getFullUrl(config.url), {
      ...this.extractUrlAndDataFromConfig(config),
      body: config.body
    });
  }

  post(config: IFetchConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    config.method = 'POST';
    config.headers = { ...config.headers, ...{ 'Content-Type': 'application/json' } };

    return this.fetchingService(this.getFullUrl(config.url), {
      ...this.extractUrlAndDataFromConfig(config),
      body: config.body
    });
  }

  delete(config: IFetchConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    config.method = 'DELETE';

    return this.fetchingService(
      this.getFullUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
