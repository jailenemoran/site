// Seleccionar elementos del DOM
const postContainer = document.getElementById("post-container");
const postForm = document.getElementById("post-form");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

// Cargar publicaciones almacenadas al iniciar
document.addEventListener("DOMContentLoaded", loadPosts);

// Manejar el envío del formulario
postForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title && content) {
    const newPost = {
      id: Date.now(), // ID único
      title,
      content,
    };

    savePost(newPost);
    renderPost(newPost);

    // Limpiar el formulario
    titleInput.value = "";
    contentInput.value = "";
  }
});

// === FUNCIÓN PARA GUARDAR UN POST EN LOCALSTORAGE ===
function savePost(post) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
}

// === FUNCIÓN PARA CARGAR PUBLICACIONES AL INICIAR ===
function loadPosts() {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach(post => renderPost(post));
}

// === FUNCIÓN PARA RENDERIZAR UN POST EN EL DOM ===
function renderPost(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");
  postElement.setAttribute("data-id", post.id);
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    <button class="edit-btn">✏️ Editar</button>
    <button class="delete-btn">🗑️ Eliminar</button>
  `;

  postContainer.appendChild(postElement);

  // Agregar eventos a los botones de editar y eliminar
  postElement.querySelector(".edit-btn").addEventListener("click", () => editPost(post.id));
  postElement.querySelector(".delete-btn").addEventListener("click", () => deletePost(post.id));
}

// === FUNCIÓN PARA ELIMINAR UN POST ===
function deletePost(postId) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts = posts.filter(post => post.id !== postId);
  localStorage.setItem("posts", JSON.stringify(posts));

  // Eliminar del DOM
  document.querySelector(`[data-id="${postId}"]`).remove();
}

// === FUNCIÓN PARA EDITAR UN POST ===
function editPost(postId) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  const post = posts.find(p => p.id === postId);

  if (post) {
    titleInput.value = post.title;
    contentInput.value = post.content;

    // Eliminar el post viejo antes de guardar el editado
    deletePost(postId);

    titleInput.focus(); // Poner el cursor en el título
  }
}

// === TOGGLE SECCIÓN SOBRE MÍ ===
const aboutSection = document.getElementById("about");
const aboutToggleBtn = document.createElement("button");

aboutToggleBtn.textContent = "Mostrar/Ocultar Sobre Mí";
aboutToggleBtn.style.marginBottom = "1rem";
aboutToggleBtn.style.padding = "0.75rem";
aboutToggleBtn.style.border = "none";
aboutToggleBtn.style.borderRadius = "5px";
aboutToggleBtn.style.background = "#CCA9DD";
aboutToggleBtn.style.color = "#F5F5F5";
aboutToggleBtn.style.cursor = "pointer";
aboutToggleBtn.style.fontSize = "1rem";
aboutToggleBtn.style.fontWeight = "bold";

aboutSection.parentNode.insertBefore(aboutToggleBtn, aboutSection);

aboutToggleBtn.addEventListener("click", function () {
  aboutSection.style.display = aboutSection.style.display === "none" ? "block" : "none";
});

// === VALIDACIÓN FORMULARIO CONTACTO ===
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Por favor, completa todos los campos.");
      return;
    }

    if (!validateEmail(email)) {
      alert("⚠️ Ingresa un correo válido.");
      return;
    }

    alert("✅ Mensaje enviado con éxito.");
    contactForm.reset();
  });
}

// === FUNCIÓN PARA VALIDAR EMAIL ===
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Cargar publicaciones almacenadas al iniciar
document.addEventListener("DOMContentLoaded", loadPosts);

// Manejar el envío del formulario
postForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title && content) {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };

    savePost(newPost);
    renderPost(newPost);

    // Limpiar el formulario
    titleInput.value = "";
    contentInput.value = "";
  }
});

// === FUNCIÓN PARA GUARDAR UN POST EN LOCALSTORAGE ===
function savePost(post) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
}

// === FUNCIÓN PARA CARGAR PUBLICACIONES AL INICIAR ===
function loadPosts() {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach(post => renderPost(post));
}

// === FUNCIÓN PARA RENDERIZAR UN POST EN EL DOM ===
function renderPost(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");
  postElement.setAttribute("data-id", post.id);
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    <div class="btn-container">
      <button class="edit-btn">✏️ Editar</button>
      <button class="delete-btn">🗑️ Eliminar</button>
    </div>
  `;

  postContainer.appendChild(postElement);

  // Agregar eventos a los botones de editar y eliminar
  postElement.querySelector(".edit-btn").addEventListener("click", () => editPost(post.id));
  postElement.querySelector(".delete-btn").addEventListener("click", () => deletePost(post.id));
}

// === FUNCIÓN PARA ELIMINAR UN POST ===
function deletePost(postId) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts = posts.filter(post => post.id !== postId);
  localStorage.setItem("posts", JSON.stringify(posts));

  document.querySelector(`[data-id="${postId}"]`).remove();
}

// === FUNCIÓN PARA EDITAR UN POST ===
function editPost(postId) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  const post = posts.find(p => p.id === postId);

  if (post) {
    titleInput.value = post.title;
    contentInput.value = post.content;

    // Eliminar el post viejo antes de guardar el editado
    deletePost(postId);

    titleInput.focus(); // Poner el cursor en el título
  }
}
