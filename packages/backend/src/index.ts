import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { ResourceResponse } from '@react-tdd-sample/shared/types';
import Fastify from 'fastify';

export async function buildServer() {
	const app = Fastify({ logger: true });

	// CORS設定
	await app.register(cors, {
		origin: true,
	});

	// Swagger設定
	await app.register(swagger, {
		swagger: {
			info: {
				title: 'React TDD Sample API',
				description: 'React TDDサンプルプロジェクトのAPI',
				version: '1.0.0',
			},
			host: 'localhost:3001',
			schemes: ['http'],
			consumes: ['application/json'],
			produces: ['application/json'],
		},
	});

	await app.register(swaggerUi, {
		routePrefix: '/docs',
	});

	// ヘルスチェックエンドポイント
	app.get('/health', async (request, reply) => {
		return { status: 'ok', timestamp: new Date().toISOString() };
	});

	// リソースエンドポイント（既存のMSWモックと互換性を保つ）
	app.get('/resource', async (request, reply) => {
		const response: ResourceResponse = {
			text: 'Fastify APIからのレスポンスです！',
		};
		return response;
	});

	// GET /todos のルート（仮実装）
	app.get('/todos', async (request, reply) => {
		return [];
	});

	return app;
}

// テスト時（importで利用時）はサーバーを起動しない。開発時は常にサーバーを起動。
if (process.env.NODE_ENV !== 'test') {
	const app = await buildServer();
	app.listen({ port: 3001, host: '0.0.0.0' })
		.then(() => {
			console.log('🚀 Fastifyサーバーがポート3001で起動しました');
			console.log('📚 APIドキュメント: http://localhost:3001/docs');
		})
		.catch(err => {
			app.log.error(err);
			process.exit(1);
		});
}
