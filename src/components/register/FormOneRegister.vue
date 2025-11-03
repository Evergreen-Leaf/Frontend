<script setup>
const props = defineProps({
  formData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:formData', 'next']);

const updateField = (field, value) => {
  emit('update:formData', { ...props.formData, [field]: value });
};

const handleNext = () => {
  emit('next');
};
</script>

<template>
  <div class="form-container">
    <div class="logo">
      <img src="/public/Logo.png" alt="Evergreen Logo">
      <p>FAÇA SEU CADASTRO</p>
    </div>

    <div class="form">
      <div class="input-wrapper">
        <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" stroke="#9CA3AF" stroke-width="1.5"/>
          <path d="M17.0833 17.5C17.0833 14.2783 13.8567 11.6667 10 11.6667C6.14328 11.6667 2.91667 14.2783 2.91667 17.5" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <input
          type="text"
          placeholder="Nome de usuário"
          :value="formData.nome"
          @input="updateField('nome', $event.target.value)"
        />
      </div>

      <div class="date-section">
        <label class="date-label">Data de nascimento</label>
        <div class="date-inputs">
          <select 
            :value="formData.dia"
            @change="updateField('dia', $event.target.value)"
            class="date-select"
          >
            <option value="">Dia</option>
            <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
          </select>
          
          <select 
            :value="formData.mes"
            @change="updateField('mes', $event.target.value)"
            class="date-select"
          >
            <option value="">Mês</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
          
          <select 
            :value="formData.ano"
            @change="updateField('ano', $event.target.value)"
            class="date-select"
          >
            <option value="">Ano</option>
            <option v-for="y in 100" :key="y" :value="2024 - y + 1">{{ 2024 - y + 1 }}</option>
          </select>
        </div>
      </div>

      <div class="input-wrapper">
        <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6.66667 5.83333H13.3333M6.66667 10H13.3333M6.66667 14.1667H10M15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <input
          type="text"
          placeholder="CPF"
          :value="formData.cpf"
          @input="updateField('cpf', $event.target.value)"
        />
      </div>

      <div class="input-wrapper">
        <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.33334 5.83333L10 10.8333L16.6667 5.83333M3.33334 14.1667H16.6667C17.5871 14.1667 18.3333 13.4205 18.3333 12.5V5.83333C18.3333 4.91286 17.5871 4.16667 16.6667 4.16667H3.33334C2.41286 4.16667 1.66667 4.91286 1.66667 5.83333V12.5C1.66667 13.4205 2.41286 14.1667 3.33334 14.1667Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input
          type="email"
          placeholder="Email"
          :value="formData.email"
          @input="updateField('email', $event.target.value)"
        />
      </div>

      <div class="input-wrapper">
        <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5.83333 9.16667V6.66667C5.83333 4.36548 7.69881 2.5 10 2.5C12.3012 2.5 14.1667 4.36548 14.1667 6.66667V9.16667M10 12.0833V13.75M6.66667 17.5H13.3333C14.2538 17.5 15 16.7538 15 15.8333V10.8333C15 9.91286 14.2538 9.16667 13.3333 9.16667H6.66667C5.74619 9.16667 5 9.91286 5 10.8333V15.8333C5 16.7538 5.74619 17.5 6.66667 17.5Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input
          type="password"
          placeholder="Senha"
          :value="formData.senha"
          @input="updateField('senha', $event.target.value)"
        />
      </div>

      <div class="input-wrapper">
      <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7933 17.8349C17.6222 17.9918 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5167 18.2667C13.9523 17.988 11.489 17.1118 9.32498 15.7083C7.31151 14.4288 5.60443 12.7218 4.32498 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48334C1.74583 3.25289 1.77321 3.02067 1.84707 2.80139C1.92092 2.58211 2.03963 2.38064 2.19562 2.2096C2.35162 2.03855 2.54149 1.90201 2.75314 1.80869C2.9648 1.71536 3.19348 1.66724 3.42498 1.66667H5.92498C6.32941 1.66269 6.72148 1.80595 7.02812 2.06965C7.33476 2.33334 7.53505 2.69954 7.59165 3.1C7.69717 3.90006 7.89286 4.68562 8.17498 5.44167C8.28709 5.73992 8.31137 6.06409 8.24491 6.37577C8.17844 6.68745 8.02404 6.97347 7.79998 7.2L6.74165 8.25834C7.92795 10.3446 9.65536 12.072 11.7416 13.2583L12.8 12.2C13.0265 11.9759 13.3125 11.8215 13.6242 11.7551C13.9359 11.6886 14.26 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6913 18.3333 14.1Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <input
          type="tel"
          placeholder="Telefone"
          :value="formData.telefone"
          @input="updateField('telefone', $event.target.value)"
        />
      </div>

      <button type="button" class="btn-proximo" @click="handleNext">
        PRÓXIMO
      </button>

      <router-link class="ja-possui" to="/login">Já possui conta?</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap');

.form-container {
  width: 100%;
  font-family: 'Lexend Deca', sans-serif;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 2rem;
}

.logo img {
  width: 336px;
  height: auto;
  margin-bottom: 12px;
}

.logo p {
  font-size: 20px;
  font-weight: 800;
  color: #6B9F3E;
  letter-spacing: 1px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
}

.input-wrapper input {
  width: 100%;
  padding: 14px 16px 14px 48px;
  border: 2px solid #E5E7EB;
  border-radius: 15px;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;
  color: #374151;
  background-color: #ffffff;
  transition: all 0.3s ease;
}

.input-wrapper input::placeholder {
  color: #9CA3AF;
  font-weight: 800;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #6B9F3E;
  box-shadow: 0 0 0 3px rgba(107, 159, 62, 0.1);
}

.date-section {
  margin: 4px 0;
}

.date-label {
  display: block;
  font-size: 13px;
  color: #6B7280;
  margin-bottom: 8px;
  font-weight: 800;
}

.date-inputs {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 10px;
}

.date-select {
  padding: 14px 12px;
  border: 2px solid #E5E7EB;
  border-radius: 15px;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;  
  color: #374151;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.date-select:focus {
  outline: none;
  border-color: #6B9F3E;
  box-shadow: 0 0 0 3px rgba(107, 159, 62, 0.1);
}

.btn-proximo {
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #6B9F3E 0%, #82BC4A 100%);
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(107, 159, 62, 0.25);
  margin-top: 10px;
}

.btn-proximo:hover {
  background: linear-gradient(135deg, #5D8735 0%, #6B9F3E 100%);
  box-shadow: 0 6px 16px rgba(107, 159, 62, 0.35);
  transform: translateY(-2px);
}

.btn-proximo:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(107, 159, 62, 0.25);
}

.ja-possui {
  text-align: center;
  margin-top: 5px;
  font-size: 15px;
  color: #9E9E9E;
  font-weight: 800;
  cursor: pointer;
    text-decoration: none;
}
</style>