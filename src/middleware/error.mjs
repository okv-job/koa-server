export default async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.type = 'html';
        ctx.body = '<p>Something <em>exploded</em>, please contact Oleg.</p>';
        ctx.app.emit('error', err, ctx);
    }
}