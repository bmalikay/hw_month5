import { usePostsStore } from '../zustand/postsStore';

export default function ZustandPosts() {
    const { posts, loading, error, fetchPosts } = usePostsStore();

    return (
        <div>
            <h2>Zustand</h2>
            <button onClick={fetchPosts}>Загрузить</button>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{color: 'red'}}>Ошибка: {error}</p>}
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}
