import Koa from 'koa'
import cors from 'koa-cors'
import { API_PREFIX, SERVER_PORT } from './config'
import router from './routes'
import printInfo from './utils/print_utils'
import { setResponseHeaders } from './middlewares'

const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())
app.use(setResponseHeaders())
app.use(cors())

app.listen(SERVER_PORT, () => {
  printInfo(`server is running at http://localhost:${SERVER_PORT}${API_PREFIX}`)
})
