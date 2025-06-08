<template>
  <div class="category-crud">
    <h1>Gerenciar Categorias</h1>

    <!-- Botões ações -->
    <div class="actions">
      <button @click="listCategories">Listar Categorias</button>
      <button @click="openCreateModal">Criar Categoria</button>
    </div>

    <!-- Lista -->
    <div v-if="categories.length" class="category-list">
      <h2>Categorias</h2>
      <table>
        <thead>
        <tr><th>ID</th><th>Nome</th><th>Descrição</th><th>Ações</th></tr>
        </thead>
        <tbody>
        <tr v-for="cat in categories" :key="cat.id">
          <td>{{ cat.id }}</td>
          <td>{{ cat.name }}</td>
          <td>{{ cat.description }}</td>
          <td>
            <button @click="openEditModal(cat)">Editar</button>
            <button @click="deleteCategory(cat.id)">Excluir</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Criar/Editar -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <h3>{{ isEditing ? 'Editar Categoria' : 'Criar Categoria' }}</h3>
        <form @submit.prevent="isEditing ? updateCategory() : createCategory()">
          <label>
            Nome:
            <input v-model="form.name" required />
          </label>
          <label>
            Descrição:
            <input v-model="form.description" required />
          </label>
          <div class="modal-actions">
            <button type="submit">{{ isEditing ? 'Salvar' : 'Criar' }}</button>
            <button type="button" @click="closeModal">Cancelar</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { ENDPOINTS } from '@/config/api'

export default {
  name: 'CategoryCrud',
  data() {
    return {
      categories: [],
      showModal: false,
      isEditing: false,
      form: {
        id: null,
        name: '',
        description: '',
      },
    }
  },
  methods: {
    async listCategories() {
      try {
        const res = await fetch(ENDPOINTS.categories)
        const json = await res.json()
        if (json.status === 'Success') {
          this.categories = json.data
        } else {
          alert('Falha ao carregar categorias.')
        }
      } catch (err) {
        alert('Erro na requisição: ' + err.message)
      }
    },

    openCreateModal() {
      this.isEditing = false
      this.form = { id: null, name: '', description: '' }
      this.showModal = true
    },

    openEditModal(cat) {
      this.isEditing = true
      this.form = { ...cat }
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
    },

    async createCategory() {
      try {
        const res = await fetch(ENDPOINTS.categories, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.form.name,
            description: this.form.description,
          }),
        })
        const json = await res.json()
        if (res.ok) {
          alert('Categoria criada com sucesso!')
          this.closeModal()
          this.listCategories()
        } else {
          alert('Erro ao criar categoria: ' + JSON.stringify(json))
        }
      } catch (err) {
        alert('Erro na requisição: ' + err.message)
      }
    },

    async updateCategory() {
      try {
        const res = await fetch(ENDPOINTS.category(this.form.id), {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.form.name,
            description: this.form.description,
          }),
        })
        const json = await res.json()
        if (res.ok) {
          alert('Categoria atualizada com sucesso!')
          this.closeModal()
          this.listCategories()
        } else {
          alert('Erro ao atualizar categoria: ' + JSON.stringify(json))
        }
      } catch (err) {
        alert('Erro na requisição: ' + err.message)
      }
    },

    async deleteCategory(id) {
      if (!confirm('Confirma exclusão da categoria?')) return

      try {
        const res = await fetch(ENDPOINTS.category(id), {
          method: 'DELETE',
        })
        if (res.ok) {
          alert('Categoria excluída com sucesso!')
          this.listCategories()
        } else {
          const json = await res.json()
          alert('Erro ao excluir categoria: ' + JSON.stringify(json))
        }
      } catch (err) {
        alert('Erro na requisição: ' + err.message)
      }
    },
  },
  mounted() {
    this.listCategories()
  },
}
</script>

<style scoped>
.category-crud {
  max-width: 800px;
  margin: 2rem auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.actions {
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background: #42b983;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #369f6b;
}

.category-list table {
  width: 100%;
  border-collapse: collapse;
}

.category-list th,
.category-list td {
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  min-width: 320px;
}

.modal-actions {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

label {
  display: block;
  margin: 0.5rem 0;
}

input {
  width: 100%;
  padding: 0.4rem;
  box-sizing: border-box;
}
</style>
