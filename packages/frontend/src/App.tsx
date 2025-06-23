import { ResourceResponse } from '@react-tdd-sample/shared/src/types/api';
import useSWR from 'swr';

import './App.css';

function App() {
	const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
	const fetcher = (url: string) => fetch(`${apiBaseUrl}${url}`).then(res => res.json());
	const { data, error } = useSWR<ResourceResponse>('/resource', fetcher);

	return (
		<>
			<div className="card">
				<pre>{error ? 'エラーが発生しました' : data ? data.text : 'Loading...'}</pre>
			</div>
		</>
	);
}

export default App;
