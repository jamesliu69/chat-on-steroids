/**
 * Typed surface for the shared launcher path policy, which the headless server imports
 * directly so the data-directory rule has exactly one implementation.
 */
export declare function validateServerLaunchPath(value: string, label: string): string;
export declare function serverDataDirectory(env?: NodeJS.ProcessEnv): string;
