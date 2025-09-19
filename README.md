### Guía de Flujo de Trabajo en Git para el Equipo

Hola a todos, esta guía les servirá como referencia para que podamos colaborar de manera eficiente y sin conflictos. ¡Por favor, lean y sigan los pasos\!

---

## 1\. Configuración Inicial (Solo una vez)

Si eres nuevo en el proyecto, necesitas clonar el repositorio en tu computadora. Este paso solo se hace una vez.

1.  **Asegúrate de que Git está instalado en tu máquina**. Si no es así, puedes descargarlo de su [página oficial](https://git-scm.com/).
2.  **Configura tu información de usuario en Git**. Esto es importante para que tus `commits` se identifiquen correctamente.
    ```bash
    git config --global user.name "Tu Nombre"
    git config --global user.email "tu.correo@ejemplo.com"
    ```
3.  **Clona el repositorio**. Ve a la carpeta donde quieras tener el proyecto y ejecuta el siguiente comando en tu terminal. Te recomiendo usar la URL **SSH**, que encontrarás en la página principal del repositorio en GitHub, bajo el botón verde **Code**.
    ```bash
    git clone <URL_del_repositorio>
    ```
4.  **Navega a la carpeta del proyecto** que se acaba de crear:
    ```bash
    cd nombre_del_repositorio
    ```

---

## 2\. Flujo de Trabajo Diario

Este es el ciclo que debes seguir cada vez que vayas a trabajar en una tarea. Sincronizar, programar y subir son los tres pasos clave.

### A) Sincroniza y actualiza tu rama ⬇️

Antes de empezar a programar, asegúrate de que tu rama de trabajo esté actualizada. Esto evita conflictos y garantiza que trabajes con la versión más reciente del código.

1.  **Cambia a la rama principal de desarrollo (`principal`)**:
    ```bash
    git checkout principal
    ```
2.  **Descarga y fusiona los últimos cambios de `principal`**:
    ```bash
    git pull origin principal
    ```
3.  **Cambia a tu rama de trabajo** (la que te asignaron, como `feature/juan-tarea`):
    ```bash
    git checkout <nombre-de-tu-rama>
    ```
4.  **Fusiona los cambios de `principal` en tu rama**:
    ```bash
    git merge principal
    ```
    **¡Importante\!** Si hay un **conflicto de fusión**, resuélvelo en tu editor de código. Git te mostrará los archivos conflictivos.

### B) Programa y guarda tu progreso ✍️

A medida que avanzas en tu tarea, guarda tu progreso con _commits_ frecuentes y descriptivos.

1.  **Guarda tus archivos modificados**:
    ```bash
    git add .
    ```
    Si quieres agregar solo un archivo específico, usa `git add <nombre_del_archivo>`.
2.  **Confirma los cambios con un mensaje claro**:
    ```bash
    git commit -m "feat: agrego el formulario de registro de usuario"
    ```
    **Convención para los mensajes de _commit_**: Usa prefijos como **`feat:`** para una nueva característica, **`fix:`** para una corrección de error y **`chore:`** para cambios en la configuración.

### C) Sube tus cambios a GitHub ⬆️

Cuando tu tarea esté completa, o quieras guardar el progreso en el repositorio remoto, sube tus cambios.

1.  **Sube tu rama al repositorio remoto**:
    ```bash
    git push origin <nombre-de-tu-rama>
    ```

### D) Crea un Pull Request 🤝

Una vez que tu rama esté en GitHub, crea un Pull Request (PR) para que podamos revisar tus cambios.

1.  **Ve a la página del repositorio en GitHub**.
2.  Si has subido cambios, verás un botón **"Compare & pull request"**. Haz clic en él.
3.  Asegúrate de que la rama de origen sea la tuya (`<nombre-de-tu-rama>`) y la de destino sea `principal`.
4.  Escribe una descripción de los cambios y **crea el PR**.

---

## 3\. Referencia Rápida de Comandos

Esta es una lista de los comandos esenciales para consultar de forma rápida.

- **`git clone`**: Descarga el repositorio por primera vez.
- **`git pull`**: Descarga los cambios de la rama remota a tu rama local.
- **`git checkout`**: Te cambia a una rama diferente.
- **`git add`**: Agrega tus archivos modificados para ser guardados.
- **`git commit`**: Guarda tus cambios de forma permanente con un mensaje.
- **`git push`**: Sube tus cambios al repositorio en GitHub.
- **`git merge`**: Combina los cambios de otra rama en tu rama actual.
