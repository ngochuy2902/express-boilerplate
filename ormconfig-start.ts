module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/src/entity/*.entity{.ts,.js}'],
  migrations: ['dist/src/database/migration/*{.ts,.js}'],
  seeds: ['dist/src/database/seed/*{.ts,.js}'],
  cli: {
    migrationsDir: 'dist/src/database/migration',
    entitiesDir: 'dist/src/entity',
  },
  timezone: 'Z',
  dateStrings: true,
  charset: 'utf8mb4',
  synchronize: false,
  logging: process.env.NODE_ENV === 'dev' ? ['query', 'error'] : false,
};
