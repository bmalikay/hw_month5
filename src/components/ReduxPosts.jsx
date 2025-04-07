import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';

export default function ReduxPosts() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.posts);

    return (
        <div>
            <h2>Redux Toolkit</h2>
            <button onClick={() => dispatch(fetchPosts())}>Загрузить</button>
            {loading && <p>Загрузка...</p>}
            {error && <p style={{color: 'red'}}>Ошибка: {error}</p>}
            <ul>
                {data.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}
