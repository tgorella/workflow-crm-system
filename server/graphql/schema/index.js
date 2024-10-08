import { authSchema } from './authSchema.js'
import { clientSchema } from './clientSchema.js'
import { eventTypesSchema } from './eventTypesSchema.js'
import { eventsSchema } from './eventsSchema.js'
import { fileSchema } from './fileSchema.js'
import { modulesSchema } from './modulesSchema.js'
import { orderSchema } from './orderSchema.js'
import { orderStatusSchema } from './orderStatusSchema.js'
import { productSchema } from './productSchema.js'
import { projectSchema } from './projectSchema.js'
import { paymentMethodSchema } from './paymentMethodSchema.js'
import { paymentSchema } from './paymentSchema.js'
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";

const graphqlSchema = `#graphql
${authSchema}
${clientSchema}
${eventTypesSchema}
${eventsSchema}
${modulesSchema}
${orderStatusSchema}
${orderSchema}
${projectSchema}
${productSchema},
${fileSchema},
${paymentMethodSchema},
${paymentSchema}

type Query {
  user: User
  signInWithPassword(data: UserSignInInput): AuthData
  orders: [Order]
  order(id: ID): Order
  ordersByClient(id: ID): [Order]
  filteredOrders(data: String): [Order]
  projects: [Project]
  project(id: ID): Project
  clients: [Client]
  client(id: ID): Client
  filteredClients(data: String): [Client]
  events: [Event]
  event(id: ID): Event
  eventTypes: [EventType]
  orderStatuses: [OrderStatus]
  modules: ModulesStatus,
  payments: [Payment],
  paymentsByOrder(id: ID): [Payment],
  payment(id: ID): Payment,
  paymentMethods: [PaymentMethod],
  paymentMethod(id: ID): PaymentMethod,
  products: [Product],
  product(id: ID): Product,
  productsByCategory(category: String): [Product],
  filteredProducts(data: String): [Product]
},

type Mutation {
  signUp(data: UserInput): AuthData
  updateUser(data: UserNewDataInput): User,
  updatePass(pass: String): String
  deleteUser(id: ID): String
  updateToken(refreshToken: String): AuthData
  addOrder(data: OrderInput): Order
  deleteOrder(id: ID): String
  updateOrder(data: OrderNewDataInput): Order
  addClient(data: ClientInput): Client
  updateClient(data: ClientNewDataInput): Client
  deleteClient(id: ID): String
  addOrderStatus(data: OrderStatusInput): OrderStatus
  updateOrderStatus(data: OrderStatusNewDataInput): OrderStatus
  deleteOrderStatus(id: ID): String
  addEvent(data: EventInput): Event
  updateEvent(data: EventNewDataInput): Event
  deleteEvent(id: ID): String
  addEventType(data: EventTypeInput): EventType
  updateEventType(data: EventTypeNewDataInput): EventType
  deleteEventType(id: ID): String
  addProject(data: ProjectInput): Project
  updateProject(data: ProjectNewDataInput): Project
  deleteProject(id: ID): String
  addProjectStage(data: ProjectStageInput): Stage
  updateProjectStage(data: ProjectStageNewDataInput): Stage
  deleteProjectStage(id: ID): StageData
  addProjectStep(data: ProjectStepInput): Step
  updateProjectStep(data: ProjectStepNewDataInput): Step
  deleteProjectStep(id: ID): ProjectData
  addModules: ModulesStatus
  updateModules(data: ModulesNewDataInput): ModulesStatus,
  addProduct(data: ProductInput): Product,
  updateProduct(data: ProductNewDataInput): Product,
  deleteProduct(id: ID): String,
  uploadManyFiles(files: [Upload]!): [String],
  uploadBankLogo(files: [Upload]!): [String],
  uploadProductImages(files: [Upload]!): [String],
  deleteProductImage(fileName: String!): Boolean,
  addPayment(data: PaymentInput): Payment,
  updatePayment(data: PaymentNewDataInput): Payment,
  deletePayment(id: ID): String,
  addPaymentMethod(data: PaymentMethodInput): PaymentMethod,
  updatePaymentMethod(data: PaymentMethodNewDataInput): PaymentMethod,
  deletePaymentMethod(id: ID): String
}
`
export default graphqlSchema
