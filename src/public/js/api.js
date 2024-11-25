let  url_api=window.location.origin;

function CrearRecursoApi(endpoint) {
    const url = `${url_api}${endpoint}`;
    
    return {
        async lista() {
            const response = await fetch(url);
            if (!response.ok) {
                return [];
            }
            return response.json();
        },

        async agregar(obj) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            });
            if (!response.ok) {
                return null;
            }
            return response.json();
        },

        async buscar(id) {
            const response = await fetch(`${url}/${id}`);
            if (!response.ok) {
                return null;
            }
            return response.json();
        },

        async eliminar(id) {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                return null;
            }
            return response.ok;
        },

        async editar(obj) {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            });
            if (!response.ok) {
                throw new Error('Error al editar el registro');
            }
            return response.json();
        }
    };
}


const articulos = CrearRecursoApi("/api/articulos");
const entradas = CrearRecursoApi("/api/entradas");
const salidas = CrearRecursoApi("/api/salidas");
const tipos_documento = CrearRecursoApi("/api/tipos-documento");
const unidades_medida = CrearRecursoApi("/api/unidades-medida");
 


export { articulos, entradas, salidas, tipos_documento, unidades_medida };
