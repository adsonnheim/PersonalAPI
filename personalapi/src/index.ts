import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

app.get('/password/:len/:ifCase', async (c) => {
    const len = c.req.param('len')
    const ifCase = (c.req.param('ifCase').toLowerCase() === 'true')
    let str = ''
    if (ifCase == true) {
        for (let i = 0; i < parseInt(len); i++) {
            str += String.fromCharCode(randomNum())
        }
    } else {
        for (let i = 0; i < parseInt(len); i++) {
            str += String.fromCharCode(Math.random() * (123 - 97) + 97)
        }
    }
    return c.text(str)
})

function randomNum() {
    let initRand = Math.floor(Math.random() * (2 - 0) + 0)
    let actualRand;
    if (initRand == 0) {
        actualRand = Math.floor(Math.random() * (91 - 65) + 65)
    } else {
        actualRand = Math.floor(Math.random() * (123 - 97) + 97)
    }
    return actualRand
}

export default app