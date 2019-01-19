export default config;

/**
 * Type declarations for
 *    import config from './config/environment'
 *
 * For now these need to be managed by the developer
 * since different ember addons can materialize new entries.
 */
declare const config: {
  environment: any;
  lintOnBuild: boolean;
  testsEnabled: boolean;
  sourcemapsEnabled: boolean;
  modulePrefix: string;
  locationType: string;
  rootURL: string;
  assetsPrefix: string;
  sentryDSN: string | null;
  sentryOptions: {
    release?: string;
    ignoreErrors: string[];
  };
  EmberENV: {
    FEATURES: {};
    EXTEND_PROTOTYPES: {
      Date: boolean;
    };
  };
  APP: {};
}