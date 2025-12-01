<script setup>
import { useUsuarioStore } from '@/stores/usuario';
import { computed, ref } from "vue";

const usuarioStore = useUsuarioStore();
const user = computed(() => usuarioStore.state.user);

defineProps({
    scrolled: Boolean
});

function handleLogout() {
    usuarioStore.logout();
}

const isDropdownOpen = ref(false);
</script>

<template>
    <div class="container">
        <router-link class="icon-button" to="/carrinho">
            <img v-if="!scrolled" src="/cart-icon.png" />
            <img v-else src="/cart-icon-black.png" />
        </router-link>

        <div 
            id="profile-wrapper"
            @mouseenter="isDropdownOpen = true"
            @mouseleave="isDropdownOpen = false"
        >
            <router-link 
                v-if="!user" 
                class="icon-button" 
                to="/login"
            >
                <img v-if="!scrolled" src="/profile-icon.png" />
                <img v-else src="/profile-icon-black.png" />
            </router-link>

            <div v-if="user" class="icon-button">
                <img v-if="!scrolled" src="/profile-icon.png" />
                <img v-else src="/profile-icon-black.png" />
            </div>

            <div 
                v-if="user && isDropdownOpen" 
                class="dropdown"
            >
                <p class="dropdown-user">{{ user.name || 'Usuário' }}</p>

                <button class="dropdown-logout" @click="handleLogout">
                    Sair
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

.icon-button:hover {
    scale: 1.07;
}

#profile-wrapper {
    position: relative;
}

/* Dropdown */
.dropdown {
    width: 100px;
    height: 90px;
    position: absolute;
    top: 28px;
    right: 0;
    background: white;
    border-radius: 8px;
    padding: 12px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.12);
    z-index: 999;
    border: 1px solid #00000046;
}

.dropdown-user {
    font-size: 16px;
    color: #374151;
    font-weight: 600;
}
.dropdown-user::first-letter {
    text-transform: uppercase;
}

.dropdown-logout {
    background: #ef4444;
    border: none;
    padding: 8px 10px;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
}

.dropdown-logout:hover {
    background-color: white;
    border: 2px solid #ef4444;
    color: #ef4444;
}

@media screen and (max-width: 1024px) {
    #profile-wrapper {
        display: none;
    }
    .container {
        justify-content: center;
    }
}
</style>
