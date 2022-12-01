export async function fetch_users() {
    return fetch(`${import.meta.env.VITE_API_URL}users`)
        .then(response => response.json());
}