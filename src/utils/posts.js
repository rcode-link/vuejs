export async function fetch_posts() {
    return await fetch(`${import.meta.env.VITE_API_URL}posts`)
        .then((response) => response.json()).then(
            data => data.map(obj => {
                return {
                    ...obj,
                    body: obj.body.substring(0, 180),
                }
            })
        );
}

export async function fetch_single_post(id) {
    return await fetch(`${import.meta.env.VITE_API_URL}posts/${id}`)
        .then((response) => response.json())
        .then((model) => {
            return {
                ...model,
            }
        });
}

export async function fetch_comments_for_post(id) {
    return await fetch(`${import.meta.env.VITE_API_URL}posts/${id}/comments`)
        .then((response) => response.json());
}