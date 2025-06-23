import { ResourceResponse } from '@react-tdd-sample/shared/src/types/api';
import { useCallback } from 'react';
import useSWR from 'swr';

import './App.css';

function App() {
	const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
	const fetcher = (url: string) => fetch(`${apiBaseUrl}${url}`).then(res => res.json());
	const { data, error } = useSWR<ResourceResponse>('/resource', fetcher);

	// /health用
	type HealthResponse = { status: string; timestamp: string };
	const {
		data: health,
		error: healthError,
		mutate,
	} = useSWR<HealthResponse>('/health', fetcher, { revalidateOnFocus: false });

	const handleHealthCheck = useCallback(() => {
		mutate(); // SWRのmutateで再取得
	}, [mutate]);

	return (
		<>
			<div className="card">
				<pre>{error ? 'エラーが発生しました' : data ? data.text : 'Loading...'}</pre>
			</div>
			<button onClick={handleHealthCheck}>Healthチェック</button>
			{health && (
				<div>
					<p>Status: {health.status}</p>
					<p>Timestamp: {health.timestamp}</p>
				</div>
			)}
			{healthError && <p>エラーが発生しました</p>}
		</>
	);
}

export default App;
