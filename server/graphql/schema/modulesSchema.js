export const modulesSchema = `
type ModulesStatus {
  _id: ID,
  userId: String,
  clients: Boolean,
  orders: Boolean,
  calendar: Boolean,
  workflow: Boolean,
  projects: Boolean
}

input ModulesNewDataInput {
  _id: ID,
  userId: String,
  clients: Boolean,
  orders: Boolean,
  calendar: Boolean,
  workflow: Boolean,
  projects: Boolean
}
`
