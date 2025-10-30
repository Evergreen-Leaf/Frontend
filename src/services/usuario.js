import api from "@/plugins/axios";

class UsuarioService {
    async login(email, password) {
        try {
            const response = await api.post("/token/", { email, password });
            return response.data;
        } catch (error) {
            console.log("Login error:", error);
            throw error;
        }
    }

    async getUserProfile() {
        try {
            const response = await api.get("/usuarios/me/");
            return response.data;
        } catch (error) {
            console.log("Get user profile error:", error);
            throw error;
        }
    }
}

export default new UsuarioService();