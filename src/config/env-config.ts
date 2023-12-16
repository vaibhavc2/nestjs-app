export const envConfig: EnvConfig = {
  dev: {
    nodeEnv: process.env.NODE_ENV,
    port: Number(process.env.PORT),
  },
};
