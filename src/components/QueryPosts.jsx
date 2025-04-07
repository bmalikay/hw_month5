import { useQuery } from '@tanstack/react-query';

// Функция для загрузки постов
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('Ошибка при загрузке');
    return await res.json();
};

export default function QueryPosts() {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts
    });

    return (
        <div>
            <h2>React Query</h2>
            <button onClick={refetch}>Загрузить</button>
            {isLoading && <p>Загрузка...</p>}
            {isError && <p style={{color: 'red'}}>Ошибка: {error.message}</p>}
            <ul>
                {data?.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}
