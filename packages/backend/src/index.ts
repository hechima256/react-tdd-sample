import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { ResourceResponse } from '@react-tdd-sample/shared/types';
import Fastify from 'fastify';

const fastify = Fastify({
	logger: true,
});

// CORS設定
await fastify.register(cors, {
	origin: true,
});

// Swagger設定
await fastify.register(swagger, {
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

await fastify.register(swaggerUi, {
	routePrefix: '/docs',
});

// ヘルスチェックエンドポイント
fastify.get('/health', async (request, reply) => {
	return { status: 'ok', timestamp: new Date().toISOString() };
});

// リソースエンドポイント（既存のMSWモックと互換性を保つ）
fastify.get('/resource', async (request, reply) => {
	const response: ResourceResponse = {
		text: 'Fastify APIからのレスポンスです！',
	};
	return response;
});

// サーバー起動
try {
	await fastify.listen({ port: 3001, host: '0.0.0.0' });
	console.log('🚀 Fastifyサーバーがポート3001で起動しました');
	console.log('📚 APIドキュメント: http://localhost:3001/docs');
} catch (err) {
	fastify.log.error(err);
	process.exit(1);
}
