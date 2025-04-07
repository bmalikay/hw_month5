import { create } from 'zustand';

export const usePostsStore = create(set => ({
    posts: [],
    loading: false,
    error: null,
    fetchPosts: async () => {
        set({ loading: true, error: null });
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!res.ok) throw new Error('Ошибка при загрузке');
            const data = await res.json();
            set({ posts: data, loading: false });
        } catch (e) {
            set({ error: e.message, loading: false });
        }
    }
}));
