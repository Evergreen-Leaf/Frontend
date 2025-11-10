<script setup>

const props = defineProps({
  formData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:formData', 'prev', 'submit']);

const updateField = (field, value) => {
  emit('update:formData', { ...props.formData, [field]: value });
};

const handlePrev = () => {
  emit('prev');
};

const handleSubmit = () => {
  emit('submit');
};
</script>

<template>
  <div class="form-container">
    <div class="logo">
      <img src="/public/Logo.png" alt="Evergreen Logo" @click="$router.push('/')" style="cursor: pointer;">
      <p>FAÇA SEU CADASTRO</p>
    </div>

    <div class="form">
      <div class="input-area">
        <div class="input-wrapper">
          <input type="text" placeholder="Estado" :value="formData.estado"
            @input="updateField('estado', $event.target.value)" />
        </div>

        <div class="input-wrapper">
          <input type="text" placeholder="Cidade" :value="formData.cidade"
            @input="updateField('cidade', $event.target.value)" />
        </div>

        <div class="input-wrapper">
          <input type="text" placeholder="Rua" :value="formData.rua" @input="updateField('rua', $event.target.value)" />
        </div>

        <div class="input-wrapper">
          <input type="text" placeholder="CEP" :value="formData.cep" @input="updateField('cep', $event.target.value)" />
        </div>

        <div class="input-wrapper">
          <input type="text" placeholder="Número" :value="formData.numero"
            @input="updateField('numero', $event.target.value)" />
        </div>

        <div class="input-wrapper">
          <input type="text" placeholder="Complemento" :value="formData.complemento"
            @input="updateField('complemento', $event.target.value)" />
        </div>
      </div>

      <button type="button" class="btn-voltar" @click="handlePrev">
        VOLTAR
      </button>
      <button type="button" class="btn-entrar" @click="handleSubmit">
        PRÓXIMO
      </button>

      <div class="ja-possui">
        <router-link to="/login">Já possui conta?</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lexend Deca', sans-serif;

}

.logo {
  text-align: center;
  margin-bottom: 60px;
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
  width: 100%;
}

.input-area {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.input-wrapper input {
  width: 100%;
  padding: 16px;
  border: 2px solid #E5E7EB;
  border-radius: 15px;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 15px;
  color: #374151;
  background-color: #ffffff;
  transition: all 0.3s ease;
}

.input-wrapper input::placeholder {
  color: #9CA3AF;
  font-weight: 400;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #6B9F3E;
  box-shadow: 0 0 0 3px rgba(107, 159, 62, 0.1);
}

.btn-entrar {
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #6B9F3E 0%, #82BC4A 100%);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(107, 159, 62, 0.25);
}

.btn-entrar:hover {
  background: linear-gradient(135deg, #5D8735 0%, #6B9F3E 100%);
  box-shadow: 0 6px 16px rgba(107, 159, 62, 0.35);
  transform: translateY(-2px);
}

.btn-entrar:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(107, 159, 62, 0.25);
}

.btn-voltar {
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #F2C53D 0%, #D9A441 100%);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(242, 197, 61, 0.25);
  margin-bottom: .5rem;
}

.btn-voltar:hover {
  background: linear-gradient(135deg, #D9A441 0%, #F2C53D 100%);
  box-shadow: 0 6px 16px rgba(242, 197, 61, 0.35);
  transform: translateY(-2px);
}

.btn-voltar:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(242, 197, 61, 0.25);
}

.ja-possui {
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  color: #9E9E9E;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
}

a {
  color: #9E9E9E;
  font-weight: 800;
  text-decoration: none;
}
</style>