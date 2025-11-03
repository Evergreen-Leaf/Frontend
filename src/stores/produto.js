import { ProdutosService } from "@/services";
import { defineStore } from "pinia";
import { reactive } from "vue";



export const useProdutoStore = defineStore("produtos", () => {
    const state = reactive({
        produtos: [],
        selectedProduto: null,
        loading: false,
        error: null,
    })

    const getProdutos = async () => {
        state.loading = true;
        try {
            const response = await ProdutosService.getProdutos();
            state.produtos = response.data.results;
        } catch (error) {
            state.error = error;
        } finally {
            state.loading = false;
        }
    }

    const getProductsByCategoria = async (categoria) => {
        state.loading = true;
        state.produtos = []; // Limpa os produtos antes de carregar novos
        try {
            let currentPage = 1;
            let totalPages = 1;
            let allProducts = [];

            do {
                const response = await ProdutosService.getProdutos(currentPage);
                console.log(`Buscando página ${currentPage}:`, response.data);
                
                if (response?.data?.results && Array.isArray(response.data.results)) {
                    // Adiciona os produtos da página atual que correspondem à categoria
                    const filteredProducts = response.data.results.filter(produto =>
                        produto.categoria.some(cat =>
                            cat.nomecategoria.toLowerCase() === categoria.toLowerCase()
                        )
                    );
                    allProducts.push(...filteredProducts);
                    
                    // Atualiza informações de paginação
                    totalPages = response.data.total_pages;
                    currentPage++;
                } else {
                    console.error("Resposta inesperada da API:", response);
                    break;
                }
            } while (currentPage <= totalPages);

            state.produtos = allProducts;
            console.log(`Total de produtos encontrados para categoria ${categoria}:`, allProducts.length);
            return state.produtos;
        } catch (error) {
            state.error = error;
            console.error("Erro ao buscar produtos por categoria:", error);
            return [];
        } finally {
            state.loading = false;
        }
    }

    const getProduto = async (id) => {
        state.loading = true;
        try{
            const response  = await ProdutosService.getProduto(id);
            state.selectedProduto = response.data;
            return response;
        }
        catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }

    const createProduto = async (data) => {
        state.loading = true;
        try {
            const response = await ProdutosService.createProduto(data);
            state.produtos.push(response.data);
            return response;
        } catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }
    const deleteProduto = async (id) => {
        state.loading = true;
        try {
            const response = await ProdutosService.deleteProduto(id);
            state.produtos = state.produtos.filter(produto => produto.id !== id);
            return response;
        } catch (error) {
            state.error = error;
            console.error(error);
        } finally {
            state.loading = false;
        }
    }



    return {
        state,
        getProdutos,
        getProduto,
        createProduto,
        deleteProduto,
        getProductsByCategoria
    }

});