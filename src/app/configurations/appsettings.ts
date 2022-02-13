import { environment } from './../../environments/environment';

export class Appsettings {
  public static VERSION = 'v0';
  public static SYSTEM_NAME = environment.nameApp;
  public static APP_NAME = environment.nameApp;
  public static BASE = environment.baseHref;
  public static API_ENDPOINT = environment.apiUrl;
  public static API_ENDPOINT_FULL = environment.apiUrl;
  public static PRIVACY_ANNOUNCEMENT = '';
}
