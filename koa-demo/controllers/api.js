const products = [{
    name: 'iPhone',
    price: 6999,
}, {
    name: 'Kindle',
    price: 999,
}]

module.exports = {
    'GET /api/products': async (ctx, next) => {
        // 设置Content-Type:
        ctx.response.type = 'application/json';
        // 设置Response Body:
        // 查询操作
        let data = { data: products }
        ctx.response.body = data
        // jsonp
        // ctx.response.body = `success_jsonp(${JSON.stringify(data)});`
    },
    'POST /api/products': async (ctx, next) => {
        // 获取post过来的数据
        let p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price,
        }
        // 创建操作
        products.push(p)
        ctx.response.type = 'application/json'
        ctx.response.body = products
    },
    'DELETE /api/products:id': async (ctx, next) => {
        const id = ctx.params.id
        console.log(id)
        // 删除操作
        products.splice(1, id)

        ctx.response.type = 'application/json'
        ctx.response.body = products
    },
    'PUT /api/products:id': async (ctx, next) => {
        const id = ctx.params.id
        // 根据id查询该产品
        let product = products[id]
        
        // 获取post过来的数据
        let p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price,
        }
        
        Object.keys(p).forEach(key => {
            if (product[key] !== p[key]) {
                product[key] = p[key]
            }
        })

        ctx.response.type = 'application/json'
        ctx.response.body = products
    },

}