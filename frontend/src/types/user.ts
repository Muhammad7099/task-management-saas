export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    // passwordHash здесь нет намеренно: на фронтенд он не попадает никогда
}