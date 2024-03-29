export interface AppModules {
  _id?: string,
  userId?: string,
 clients: boolean,
 orders: boolean,
 calendar: boolean,
projects: boolean
}

export interface AppModulesSchema {
  isLoading: boolean,
  data?: AppModules,
  error?: string
}

export type ModulesKey = keyof AppModules