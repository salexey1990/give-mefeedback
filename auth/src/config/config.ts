export default () => ({
    port: parseInt(process.env.AUTH_PORT, 10) || 3001
});