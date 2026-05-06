Eres un experto en accesibilidad web y auditoría bajo las WCAG 2.1. Tu tarea es analizar el código que te proporciono y generar un informe completo en formato Markdown (.md), con un nivel de detalle profesional similar a herramientas como TAW.

## 🎯 Objetivo

Evaluar si el código cumple con el nivel AA de las WCAG 2.1 y proporcionar un análisis claro, estructurado y accionable.

---

## 📌 INPUTS

### 1. Código a analizar:

```
fitness-boostrap/index.html
```

### 2. Informe TAW de referencia:

Utiliza el informe como referencia nunca como fuente de verdad, ya que suele dar muchos falsos positivos

```
Correo de FPLlefià	Frank Villar Redondo <villarredondofrank@fpllefia.com>
[TAWDIS] Detalle del análisis https://m0615-daw-2-dise-o-yrmu.vercel.app/fitness-boostrap/index.html
info@tawdis.net <info@tawdis.net>	6 de mayo de 2026 a las 20:26
Para: villarredondofrank@fpllefia.com
Si no visualiza correctamente este email, puede acceder al informe detallado desde su navegador
TAW | Informe WCAG 2.1

Test accesibilidad web
¡Ayúdanos a mantener TAW! Desde hace 15 años el proyecto TAW fomenta la accesibilididad de la Web de forma gratuita. Donar TAW

Información del análisis
Recurso: https://m0615-daw-2-dise-o-yrmu.vercel.app/fitness-boostrap/index.html
Fecha: 06/05/2026 18:26
Pautas WCAG 2.0
Nivel del análisis: AA
Tecnologías: HTML, CSS
Perceptible
La información y los componentes de la interfaz de usuario deben ser presentados a los usuarios de modo que puedan percibirlos.
Tipología	Comprobación	Técnicas	Resultado	Incidencias	Números de Lineas
1.1.1-Contenido no textual
Imágenes	Imágenes que pueden requerir descripción larga Ayuda	H45	Desconocido
12	17 73 83 88 291 294 311 314 343 346 362 365
Imágenes con alt vacio Ayuda	H67	Desconocido
5	164 177 190 374 377
1.3.3-Características sensoriales
Presentación	Características sensoriales Ayuda	G96	Sin revisar
1	
1.4.1-Uso del color
Presentación	Información mediante color Ayuda	G14 G122 G182 G183	Sin revisar
1	
1.4.3-Contraste (Mínimo)
Presentación	Contraste Ayuda	G18 G148 G174	Sin revisar
1	
Contraste para fuentes grandes Ayuda	G145 G148 G174	Sin revisar
1	
1.4.4-Redimensionamiento del texto
Presentación	Utilización de medidas absolutas en elementos de bloque Ayuda	C28 G146	Desconocido
8	291 294 311 314 343 346 362 365
1.4.5-Imágenes de texto
Imágenes	Imágenes susceptibles de ser sustituidas por marcado Ayuda	C22 C30 G140	Sin revisar
1	
Operable
Los componentes de la interfaz de usuario y la navegación deben ser operables.
Tipología	Comprobación	Técnicas	Resultado	Incidencias	Números de Lineas
2.1.1-Teclado
Scripts	Movimiento automático del foco Ayuda	G90	Sin revisar
1	
2.1.2-Sin bloqueos de teclado
Página web	Movimiento del foco mediante teclado Ayuda	G21	Sin revisar
1	
2.2.1-Tiempo ajustable
Página web	Límite de tiempo de sesión Ayuda	G133 G198	Sin revisar
1	
Limite de tiempo controlado mediante un script Ayuda	G198 G180 SCR16	Sin revisar
1	
Lectura de textos en movimiento Ayuda	G4 G198 SCR33 SCR36	Sin revisar
1	
2.2.2-Pausar, detener, ocultar
Página web	Contenido en movimiento o parpadeante Ayuda	G4 SCR33 G187 G152 SCR22 G186 G191	Sin revisar
1	
2.3.1-Umbral de tres destellos o menos
Presentación	Destellos por debajo del umbral límite. Ayuda	G19 G176 G15	Sin revisar
1	
2.4.1-Evitar bloques
Navegación	Saltar bloques de contenido repetidos Ayuda	G1 G123 G124	Sin revisar
1	
Bloques de contenido Ayuda	H50 H70 SCR28	Sin revisar
1	
2.4.2-Páginas tituladas
Página web	Página con título descriptivo Ayuda	G88	Desconocido
1	4
2.4.3-Orden del foco
Navegación	Orden lógico de navegación Ayuda	G59 H4 SCR26 SCR37 SCR27	Sin revisar
1	
2.4.5-Múltiples vías
Sitio web	Múltiples médios de localización Ayuda	G125 G64 G63 G161 G126 G185	Sin revisar
1	
2.4.6-Encabezados y etiquetas
Estructura y semántica	Contenido adecuado de encabezados y etiquetas. Ayuda	G130 G131	Desconocido
25	54 79 97 158 166 179 192 209 214 235 258 284 292 312 344 363 385 389 404 419 434 453 464 469 475
2.4.7-Foco visible
Scripts	Cambio de foco con el evento 'onfocus' Ayuda	F55	Sin revisar
1	
Comprensible
La información y el manejo de la interfaz de usuario debe ser comprensible.
Tipología	Comprobación	Técnicas	Resultado	Incidencias	Números de Lineas
3.1.2-Idioma de las partes
Página web	Cambios en el idioma Ayuda	H58	Sin revisar
1	
3.2.1-Al recibir el foco
Scripts	Cambio de contenidos con el evento 'onfocus' Ayuda	G107	Sin revisar
1	
Cambios inesperados del foco en el evento 'onfocus' Ayuda	F55	Sin revisar
1	
Apertura de ventana al cambiar el foco Ayuda	G107	Sin revisar
1	
Apertura de ventana con el evento 'onload' Ayuda	F52	Sin revisar
1	
Página web	Cambio de contenidos con el evento 'onfocus' Ayuda	G107	Sin revisar
1	
3.2.2-Al introducir datos
Formularios	Cambios causados por el evento 'onChange' en un selector Ayuda	H84	Sin revisar
1	
3.2.3-Navegación consistente
Sitio web	Navegación consistente Ayuda	G61	Sin revisar
1	
3.2.4-Identificación consistente
Sitio web	Denominación consistente Ayuda	G197	Sin revisar
1	
3.3.1-Identificación de errores
Formularios	Identifique los valores erróneos en formularios Ayuda	G83 SCR18	Desconocido
1	462
Identifique los valores que deben indicarse con formatos especiales Ayuda	G84 G85 SCR18 SCR32	Desconocido
1	462
3.3.3-Sugerencias ante errores
Formularios	Proporcione sugerencias para valores erróneos en formularios Ayuda	G83 G84 G85 G177 SCR18 SCR32	Desconocido
1	462
3.3.4-Prevención de errores (legales, financieros, datos)
Formularios	Prevención de errores para formularios legales, financieros o de datos Ayuda	G164 G98 G155	Desconocido
1	462
Prevención de errores en acciones de borrado para formularios legales, financieros o de datos Ayuda	G99 G168 G155	Desconocido
1	462
Prevención de errores en exámenes Ayuda	G98 G168	Desconocido
1	462
Robusto
El contenido debe ser suficientemente robusto como para ser interpretado de forma fiable por una amplia variedad de agentes de usuario, incluyendo las ayudas técnicas.
Tipología	Comprobación	Técnicas	Resultado	Incidencias	Números de Lineas
4.1.2-Nombre, función, valor
Página web	Nombre, rol y valor Ayuda	G108 SCR21 G135 G10	Sin revisar
1	
Código fuente
HTML
CSS
Global
Características sensoriales
 Información mediante color
 Contraste
 Contraste para fuentes grandes 
 Movimiento automático del foco
 Movimiento del foco mediante teclado
 Límite de tiempo de sesión
 Limite de tiempo controlado mediante un script
 Lectura de textos en movimiento
 Contenido en movimiento o parpadeante
 Destellos por debajo del umbral límite.
 Saltar bloques de contenido repetidos
 Bloques de contenido
 Orden lógico de navegación
 Cambio de contenidos con el evento 'onfocus'
 Cambio de contenidos con el evento 'onfocus'
 Cambios inesperados del foco en el evento 'onfocus'
 Apertura de ventana al cambiar el foco
 Apertura de ventana con el evento 'onload'
 Cambios causados por el evento 'onChange' en un selector
 Nombre, rol y valor
 Imágenes susceptibles de ser sustituidas por marcado
 Múltiples médios de localización
 Cambio de foco con el evento 'onfocus'
 Cambios en el idioma
 Navegación consistente
 Denominación consistente
 Contraste mejorado
 Contraste mejorado para fuentes grandes
 Colores de fondo y primer plano en bloques de texto
 Ancho en caracteres de bloques de texto
 Alineación de bloques de texto
 Espacio de lineas en bloques texto
 Redimensionamiento de bloques de texto
 Imagenes de texto
 Limitación de tiempo
 Caducidad de la información de autenticación
 Destellos
 Ubicación
 Palabras con significados inusuales
 Abreviaturas y acrónimos
 Nivel de lectura
 Pronunciación
Código fuente : https://m0615-daw-2-dise-o-yrmu.vercel.app/fitness-boostrap/index.html
1. <!DOCTYPE html><html lang="en"><head>
2. <meta charset="UTF-8">
3. <meta name="viewport" content="width=device-width, initial-scale=1.0">
4. Error manual de prioridad 1 <title>Fitness Online – Home</title>
5. <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
6. <link rel="preconnect" href="https://fonts.googleapis.com">
7. <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
8. <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet">
9. <link rel="stylesheet" href="style.css">
....
12. </head>
13. <body>
14. <nav class="navbar navbar-expand-xl navbar-dark position-absolute w-100" style="top: 0; z-index: 1000;">
15. <div class="container">
16. <a class="navbar-brand d-flex align-items-center" href="#home">
17. Error manual de prioridad 1 <img src="media/icono.svg" alt="Fitness Online Logo" width="35" height="35" class="me-2">
18. <span class="fw-light me-1">fitness</span><span class="fw-bold">online</span>
19. </a>
....
21. <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
22. <span class="navbar-toggler-icon" aria-hidden="true"></span>
23. </button>
....
25. <div class="collapse navbar-collapse" id="navbarNav">
26. <ul class="navbar-nav ms-auto text-center">
27. <li class="nav-item">
28. <a class="nav-link" href="#about">About Us</a>
29. </li>
30. <li class="nav-item">
31. <a class="nav-link" href="#how-to-start">How To Start</a>
32. </li>
33. <li class="nav-item">
34. <a class="nav-link" href="#features">Features</a>
35. </li>
36. <li class="nav-item">
37. <a class="nav-link" href="#pricing">Pricing</a>
38. </li>
39. <li class="nav-item">
40. <a class="nav-link" href="#feedback">Feedback</a>
41. </li>
42. <li class="nav-item">
43. <a class="nav-link" href="#faq" title="Frequently Asked Questions" aria-label="Frequently Asked Questions">FAQ</a>
44. </li>
45. </ul>
46. </div>
47. </div>
48. </nav>
....
50. <section id="home" class="container-fluid p-0">
51. <div class="row g-0 hero-row">
52. <div class="col-12 col-xl-6 bg-primary text-white hero-text-col position-relative">
53. <div>
54. Error manual de prioridad 2 <h1 class="display-3 fw-bold mb-4">
55. Online Workout Personal Program
56. </h1>
57. <p class="fs-4 fw-light mb-5 opacity-75">
58. Start training online with your personal coach and become healthy
59. </p>
....
61. <div class="d-none d-xl-block">
62. <a href="#contact" id="hero-cta-desktop" class="btn btn-training btn-lg shadow-lg" aria-label="Start training from hero section" role="button" aria-hidden="false">Start Training – Hero</a>
63. </div>
64. </div>
....
66. <!-- Mobile CTA -->
67. <div class="d-xl-none position-absolute start-50 translate-middle" style="top: 100%; z-index: 10">
68. <a href="#contact" id="hero-cta-mobile" class="btn btn-training shadow-lg text-nowrap py-3 px-5 fs-4" aria-label="Start training from mobile hero section" aria-hidden="true" tabindex="-1">Start Training</a>
69. </div>
70. </div>
....
72. <div class="col-12 col-xl-6">
73. Error manual de prioridad 1 <img src="media/home/photo.png" alt="Athletic person working out" class="hero-img">
74. </div>
75. </div>
76. </section>
77. <section id="about" class="bg-light-section text-center">
78. <div class="container">
79. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-5">About Us</h2>
80. <div class="row g-4 justify-content-center">
81. <div class="col-12 col-md-6">
82. <div class="card card-custom overflow-hidden shadow">
83. Error manual de prioridad 1 <img src="media/about/simulacionVideo.jpg" alt="Person doing fitness exercises in a video demonstration" class="img-fluid w-100">
84. </div>
85. </div>
86. <div class="col-12 col-md-6">
87. <div class="card card-custom overflow-hidden shadow">
88. Error manual de prioridad 1 <img src="media/about/simulacionVideO2.jpg" alt="Another person doing fitness exercises in a video demonstration" class="img-fluid w-100">
89. </div>
90. </div>
91. </div>
92. </div>
93. </section>
....
95. <section id="how-to-start" class="bg-primary text-white py-11">
96. <div class="container text-center">
97. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-3">How To Start</h2>
98. <p class="fs-4 fw-light mb-5 mx-auto opacity-75">
99. It’s easy to start training right now without going anywhere, just in
100. your room, without missing important things and coach advices.
101. </p>
....
103. <div class="row g-4 gx-lg-5 text-start justify-content-center mt-5">
104. <div class="col-12 col-lg-4 position-relative step-item">
105. <div class="d-flex align-items-center gap-3 pe-lg-4">
106. <span class="display-1 fw-bold lh-1" style="font-size: 5rem">
107. 1
108. </span>
109. <p class="fs-6 fw-light mb-0 opacity-75">
110. Sign up in Fitness Online with your phone number. No spam
111. guaranteed. You can skip at any moment.
112. </p>
113. </div>
114. <!-- Flecha Estilizada (Dotted) -->
115. <div class="position-absolute top-50 start-100 translate-middle d-none d-lg-block pe-none" style="z-index: 10; margin-left: -10px">
116. <svg width="60" height="20" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
117. <path d="M70 10L85 20L70 30" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
118. <path d="M10 20H75" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 6"></path>
119. </svg>
120. </div>
121. </div>
....
123. <div class="col-12 col-lg-4 position-relative step-item">
124. <div class="d-flex align-items-center gap-3 pe-lg-4">
125. <span class="display-1 fw-bold lh-1" style="font-size: 5rem">
126. 2
127. </span>
128. <p class="fs-6 fw-light mb-0 opacity-75">
129. We will immediately add you in our chat bot, where you will be
130. able to pay chosen plan.
131. </p>
132. </div>
133. <!-- Flecha Estilizada (Dotted) -->
134. <div class="position-absolute top-50 start-100 translate-middle d-none d-lg-block pe-none" style="z-index: 10; margin-left: -10px">
135. <svg width="60" height="20" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
136. <path d="M70 10L85 20L70 30" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
137. <path d="M10 20H75" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 6"></path>
138. </svg>
139. </div>
140. </div>
....
142. <div class="col-12 col-lg-4 step-item">
143. <div class="d-flex align-items-center gap-3">
144. <span class="display-1 fw-bold lh-1" style="font-size: 5rem">
145. 3
146. </span>
147. <p class="fs-6 fw-light mb-0 opacity-75">
148. In 24 hours your trainer will contact you to get acquainted and
149. make a training program.
150. </p>
151. </div>
152. </div>
153. </div>
154. </div>
155. </section>
156. <section id="features" class="bg-light-section">
157. <div class="container text-center">
158. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-5">Features</h2>
....
160. <div class="row g-4 justify-content-center">
161. <div class="col-12 col-md-6 col-lg-4">
162. <div class="card card-custom h-100 p-4">
163. <div class="mb-3">
164. Error manual de prioridad 1 <img src="media/featues/listItems/item1.svg" alt="" aria-hidden="true" width="60" height="60">
165. </div>
166. Error manual de prioridad 2 <h3 class="fw-bold">Comfortable Place</h3>
167. <p class="text-muted small">
168. Train where it is convenient for you. You don’t need to go to
169. gym anymore.
170. </p>
171. </div>
172. </div>
....
174. <div class="col-12 col-md-6 col-lg-4">
175. <div class="card card-custom h-100 p-4">
176. <div class="mb-3">
177. Error manual de prioridad 1 <img src="media/featues/listItems/item3.svg" alt="" aria-hidden="true" width="60" height="60">
178. </div>
179. Error manual de prioridad 2 <h3 class="fw-bold">Professional Trainers</h3>
180. <p class="text-muted small">
181. Our trainers are professionals with years of experience in
182. fitness and sports.
183. </p>
184. </div>
185. </div>
....
187. <div class="col-12 col-md-6 col-lg-4">
188. <div class="card card-custom h-100 p-4">
189. <div class="mb-3">
190. Error manual de prioridad 1 <img src="media/featues/listItems/item2.svg" alt="" aria-hidden="true" width="60" height="60">
191. </div>
192. Error manual de prioridad 2 <h3 class="fw-bold">Individual Approach</h3>
193. <p class="text-muted small">
194. You will have a training program that fits exactly you and your
195. goals.
196. </p>
197. </div>
198. </div>
199. </div>
....
201. <div class="mt-5">
202. <a href="#contact" id="features-cta" class="btn btn-training btn-lg" aria-label="Start training from features section">Get Started<span class="visually-hidden"> (features)</span></a>
203. </div>
204. </div>
205. </section>
....
207. <section id="pricing" class="bg-primary text-white py-11">
208. <div class="container">
209. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-5 text-center">Pricing</h2>
210. <div class="row g-4 justify-content-center px-lg-5">
211. <!-- Start Card -->
212. <div class="col-12 col-md-4">
213. <div class="h-100 p-4 d-flex flex-column" style="background-color: #9765d7; border-radius: 8px;">
214. Error manual de prioridad 2 <h3 class="fw-bold mb-4" style="font-size: 2.5rem;">Start</h3>
215. <ul class="mb-5 ps-3" style="font-size: 0.9rem; line-height: 1.6; opacity: 0.9;">
216. <li class="mb-1">Program for 8 workouts</li>
217. <li class="mb-1">3 calls with the trainer</li>
218. <li class="mb-1">Video instructions</li>
219. </ul>
220. <div class="mt-auto">
221. <div class="d-flex align-items-baseline mb-4">
222. <span class="fw-bold" style="font-size: 2.8rem;">$5</span>
223. <span class="ms-1 pricing-month-text" style="font-size: 1rem;">/month</span>
224. </div>
225. <button class="btn btn-outline-light rounded-pill px-4 py-2 fw-bold" style="border-width: 2px; width: fit-content; min-width: 140px;" aria-label="Choose Start plan">
226. Choose
227. </button>
228. </div>
229. </div>
230. </div>
....
232. <!-- Middle Card -->
233. <div class="col-12 col-md-4">
234. <div class="h-100 p-4 d-flex flex-column" style="background-color: #9765d7; border-radius: 8px;">
235. Error manual de prioridad 2 <h3 class="fw-bold mb-4" style="font-size: 2.5rem;">Middle</h3>
236. <ul class="mb-5 ps-3" style="font-size: 0.9rem; line-height: 1.6; opacity: 0.9;">
237. <li class="mb-1">Program for 18 workouts</li>
238. <li class="mb-1">5 calls with the trainer</li>
239. <li class="mb-1">Video instructions</li>
240. <li class="mb-1">Text instructions</li>
241. <li class="mb-1">1 technique analysis</li>
242. </ul>
243. <div class="mt-auto">
244. <div class="d-flex align-items-baseline mb-4">
245. <span class="fw-bold" style="font-size: 2.8rem;">$14</span>
246. <span class="ms-1 pricing-month-text" style="font-size: 1rem;">/month</span>
247. </div>
248. <button class="btn btn-outline-light rounded-pill px-4 py-2 fw-bold" style="border-width: 2px; width: fit-content; min-width: 140px;" aria-label="Choose Middle plan">
249. Choose
250. </button>
251. </div>
252. </div>
253. </div>
....
255. <!-- Pro Card -->
256. <div class="col-12 col-md-4">
257. <div class="h-100 p-4 d-flex flex-column" style="background-color: #9765d7; border-radius: 8px;">
258. Error manual de prioridad 2 <h3 class="fw-bold mb-4" style="font-size: 2.5rem;">Pro</h3>
259. <ul class="mb-5 ps-3" style="font-size: 0.9rem; line-height: 1.6; opacity: 0.9;">
260. <li class="mb-1">Program for 40 workouts</li>
261. <li class="mb-1">15 calls with the trainer</li>
262. <li class="mb-1">Video instructions</li>
263. <li class="mb-1">Text instructions</li>
264. <li class="mb-1">5 technique analysis</li>
265. <li class="mb-1">Acces to chat with other sportsmen</li>
266. </ul>
267. <div class="mt-auto">
268. <div class="d-flex align-items-baseline mb-4">
269. <span class="fw-bold" style="font-size: 2.8rem;">$20</span>
270. <span class="ms-1 pricing-month-text" style="font-size: 1rem;">/month</span>
271. </div>
272. <button class="btn btn-outline-light rounded-pill px-4 py-2 fw-bold" style="border-width: 2px; width: fit-content; min-width: 140px;" aria-label="Choose Pro plan">
273. Choose
274. </button>
275. </div>
276. </div>
277. </div>
278. </div>
279. </div>
280. </section>
....
282. <section id="feedback" class="bg-light-section text-center">
283. <div class="container">
284. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-5">Feedback About Us</h2>
....
286. <!-- Desktop View (LG and up) -->
287. <div class="row g-4 d-none d-lg-flex">
288. <div class="col-lg-6 px-4">
289. <div class="row align-items-center g-4 text-start">
290. <div class="col-12 col-md-4 text-center">
291. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/profilephoto.png" alt="Profile photo of Sarah Kong" class="rounded-circle mb-3 shadow" style="width: 120px; height: 120px; object-fit: cover">
292. Error manual de prioridad 2 <h3 class="fw-bold mb-1">Sarah Kong</h3>
293. <div class="d-flex align-items-center justify-content-center">
294. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/insta_icon.svg" alt="Instagram" class="me-2" style="width: 18px">
295. <span style="color: #bc2a8d" class="small fw-bold">sarahkong</span>
296. </div>
297. </div>
298. <div class="col-12 col-md-8">
299. <p class="fs-5 text-secondary">
300. The most amazing fitness trainings! I’ve became true sportsman
301. with it! Trainer is really professional. The most amazing
302. fitness trainings! I’ve became true sportsman with it! Trainer
303. is really professional.The most amazing fitness trainings!
304. </p>
305. </div>
306. </div>
307. </div>
308. <div class="col-lg-6 px-4">
309. <div class="row align-items-center g-4 text-start">
310. <div class="col-12 col-md-4 text-center">
311. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/profilephoto2.png" alt="Profile photo of Russel Williams" class="rounded-circle mb-3 shadow mx-auto" style="width: 100px; height: 100px; object-fit: cover">
312. Error manual de prioridad 2 <h3 class="fw-bold mb-1">Russel Williams</h3>
313. <div class="d-flex align-items-center justify-content-center mb-3">
314. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/insta_icon.svg" alt="Instagram" class="me-2" style="width: 18px">
315. <span style="color: #bc2a8d" class="small fw-bold">russelwilliams</span>
316. </div>
317. </div>
318. <div class="col-12 col-md-8">
319. <p class="fs-5 text-secondary">
320. The most amazing fitness trainings! I’ve became true sportsman
321. with it! Trainer is really professional. The most amazing
322. fitness trainings! I’ve became true sportsman with it! Trainer
323. is really professional.The most amazing fitness trainings!
324. </p>
325. </div>
326. </div>
327. </div>
328. </div>
....
330. <!-- Mobile View (MD and below) -->
331. <div id="feedbackCarousel" class="carousel slide d-lg-none mx-auto" style="max-width: 600px" data-bs-ride="carousel">
332. <div class="carousel-inner">
333. <div class="carousel-item active">
334. <div class="row align-items-center g-4 text-start p-4">
335. <div class="col-12 text-start">
336. <p class="fs-5 text-secondary">
337. The most amazing fitness trainings! I’ve became true
338. sportsman with it! Trainer is really professional. The most
339. amazing fitness trainings! I’ve became true sportsman with
340. it! Trainer is really professional.The most amazing fitness
341. trainings!
342. </p>
343. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/profilephoto.png" alt="Sarah Kong" class="rounded-circle mb-3 shadow" style="width: 100px; height: 100px; object-fit: cover">
344. Error manual de prioridad 2 <h3 class="fw-bold mb-1">Sarah Kong</h3>
345. <div class="d-flex align-items-center mb-3">
346. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/insta_icon.svg" alt="Instagram" class="me-2" style="width: 18px">
347. <span style="color: #bc2a8d" class="small fw-bold">sarahkong</span>
348. </div>
349. </div>
350. </div>
351. </div>
352. <div class="carousel-item">
353. <div class="row align-items-center g-4 text-start p-4">
354. <div class="col-12 text-start">
355. <p class="fs-5 text-secondary">
356. The most amazing fitness trainings! I’ve became true
357. sportsman with it! Trainer is really professional. The most
358. amazing fitness trainings! I’ve became true sportsman with
359. it! Trainer is really professional.The most amazing fitness
360. trainings!
361. </p>
362. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/profilephoto2.png" alt="Russel Williams" class="rounded-circle mb-3 shadow" style="width: 100px; height: 100px; object-fit: cover">
363. Error manual de prioridad 2 <h3 class="fw-bold mb-1">Russel Williams</h3>
364. <div class="d-flex align-items-center mb-3">
365. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/insta_icon.svg" alt="Instagram" class="me-2" style="width: 18px">
366. <span style="color: #bc2a8d" class="small fw-bold">russelwilliams</span>
367. </div>
368. </div>
369. </div>
370. </div>
371. </div>
372. <!-- Custom Navigation Arrows -->
373. <button class="carousel-control-prev feedback-arrow position-absolute top-50 start-0 translate-middle-y" type="button" data-bs-target="#feedbackCarousel" data-bs-slide="prev" aria-label="Previous feedback">
374. Error manual de prioridad 1 <img src="media/feedback/arrow.svg" alt="" aria-hidden="true" style="rotate: 180deg">
375. </button>
376. <button class="carousel-control-next feedback-arrow position-absolute top-50 end-0 translate-middle-y" type="button" data-bs-target="#feedbackCarousel" data-bs-slide="next" aria-label="Next feedback">
377. Error manual de prioridad 1 <img src="media/feedback/arrow.svg" alt="" aria-hidden="true">
378. </button>
379. </div>
380. </div>
381. </section>
....
383. <section id="faq" class="bg-primary text-white">
384. <div class="container">
385. Error manual de prioridad 2 <h2 class="display-4 fw-bold text-center mb-5">FAQ</h2>
....
387. <div class="accordion accordion-custom mx-auto" id="accordionFAQ" style="max-width: 800px">
388. <div class="accordion-item">
389. Error manual de prioridad 2 <h3 class="accordion-header">
390. <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
391. <span class="faq-dot" aria-hidden="true"></span>How can I start?
392. </button>
393. </h3>
394. <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
395. <div class="accordion-body">
396. <p class="m-0">Sign up in Fitness Online with your phone number. No spam
397. guaranteed. You can skip using Fitness Online at any moment. We
398. will immediately add you in our chat bot. In 24 hours after payment your trainer will contact you to get acquainted and to make training program best for you</p>
399. </div>
400. </div>
401. </div>
....
403. <div class="accordion-item">
404. Error manual de prioridad 2 <h3 class="accordion-header">
405. <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
406. <span class="faq-dot" aria-hidden="true"></span>How much does it cost?
407. </button>
408. </h3>
409. <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
410. <div class="accordion-body">
411. <p class="m-0">Sign up in Fitness Online with your phone number. No spam
412. guaranteed. You can skip using Fitness Online at any moment. We
413. will immediately add you in our chat bot. In 24 hours after payment your trainer will contact you to get acquainted and to make training program best for you</p>
414. </div>
415. </div>
416. </div>
....
418. <div class="accordion-item">
419. Error manual de prioridad 2 <h3 class="accordion-header">
420. <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
421. <span class="faq-dot" aria-hidden="true"></span>How will I train?
422. </button>
423. </h3>
424. <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
425. <div class="accordion-body">
426. <p class="m-0">Sign up in Fitness Online with your phone number. No spam
427. guaranteed. You can skip using Fitness Online at any moment. We
428. will immediately add you in our chat bot. In 24 hours after payment your trainer will contact you to get acquainted and to make training program best for you</p>
429. </div>
430. </div>
431. </div>
....
433. <div class="accordion-item">
434. Error manual de prioridad 2 <h3 class="accordion-header">
435. <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
436. <span class="faq-dot"></span>Who are trainers?
437. </button>
438. </h3>
439. <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
440. <div class="accordion-body">
441. <p class="m-0">Sign up in Fitness Online with your phone number. No spam
442. guaranteed. You can skip using Fitness Online at any moment. We
443. will immediately add you in our chat bot. In 24 hours after payment your trainer will contact you to get acquainted and to make training program best for you</p>
444. </div>
445. </div>
446. </div>
447. </div>
448. </div>
449. </section>
....
451. <section id="contact" class="bg-light-section text-center">
452. <div class="container">
453. Error manual de prioridad 2 <h2 class="display-3 fw-bold mb-4">Start Training</h2>
454. <p class="fs-5 text-secondary mb-5 mx-auto opacity-100">
455. Leave your phone and we will send you a link to our special chat bot.
456. No spam guaranteed.
457. </p>
....
459. <div class="row justify-content-center">
460. <div class="col-12 col-md-6 col-lg-5 text-start">
461. <div class="card card-custom p-4 p-md-5">
462. Error manual de prioridad 1 Error manual de prioridad 1 Error manual de prioridad 2 Error manual de prioridad 2 Error manual de prioridad 2 Error manual de prioridad 2 <form action="#" aria-label="Start Training Form">
463. <div class="mb-4">
464. Error manual de prioridad 2 <label for="phone" class="form-label fw-bold small text-uppercase text-secondary">Your Phone</label>
465. <input type="tel" class="form-control form-control-lg bg-light border border-1" id="phone" placeholder="+1__" autocomplete="tel" aria-required="true" required="">
466. </div>
....
468. <div class="mb-4">
469. Error manual de prioridad 2 <label for="name" class="form-label fw-bold small text-uppercase text-secondary">Your Name</label>
470. <input type="text" class="form-control form-control-lg bg-light border border-1" id="name" placeholder="Your Name" autocomplete="name" aria-required="true" required="">
471. </div>
....
473. <div class="form-check mb-5">
474. <input class="form-check-input" type="checkbox" id="terms" aria-required="true" required="">
475. Error manual de prioridad 2 <label class="form-check-label text-secondary small" for="terms">
476. I accept Terms of Service
477. </label>
478. </div>
....
480. <div class="text-center">
481. <button type="submit" class="btn btn-training btn-lg w-fit shadow">
482. Start Training
483. </button>
484. </div>
485. </form>
486. </div>
487. </div>
488. </div>
489. </div>
490. </section>
....
492. <footer class="bg-primary text-white py-5">
493. <div class="container px-4 px-md-0">
494. <div class="row align-items-center">
495. <div class="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
496. <a href="#" class="text-white text-decoration-none fw-bold fs-5">Terms of Service</a>
497. </div>
498. <div class="col-12 col-md-6 text-center text-md-end opacity-75">
499. <p class="mb-0 fs-5">© Fitness Online, 2022</p>
500. </div>
501. </div>
502. </div>
503. </footer>
....
510. </body></html>
Código fuente : https://m0615-daw-2-dise-o-yrmu.vercel.app/fitness-boostrap/index.html
1. max-width: 800px
Up

```

---

## 📄 ESTRUCTURA DEL INFORME (OBLIGATORIA)

### 1. 🧾 Resumen Ejecutivo

* Nivel de accesibilidad global (A / AA / AAA / No cumple)
* Estado general: ✅ Cumple / ⚠️ Parcial / ❌ No cumple
* Número total de errores detectados
* Riesgos principales

---

### 2. 📊 Evaluación WCAG 2.1 (Nivel AA)

Divide el análisis en los 4 principios:

#### 👁️ Perceptible

#### ⌨️ Operable

#### 🧠 Comprensible

#### 🧩 Robusto

Para cada criterio:

* Código del criterio (ej: 1.1.1)
* Nombre del criterio
* Nivel (A / AA)
* Estado: ✅ / ⚠️ / ❌
* Explicación clara del problema
* Ejemplo concreto del código afectado
* Recomendación específica de solución

---

### 3. 🚨 Análisis del Informe TAW

* Resume brevemente el informe proporcionado
* Identifica todos los puntos marcados como:

  * "Error manual"
  * "Sin revisar"
  * "Desconocido"

🔴 MUY IMPORTANTE:
Haz especial énfasis en los elementos marcados con icono ⚠️ o que requieren revisión manual.

Para cada uno:

* Explica qué significa realmente ese warning según WCAG
* Indica si probablemente es un problema real o falso positivo
* Qué debería comprobar un desarrollador manualmente
* Cómo solucionarlo si aplica

---

### 4. 🛠️ Mejoras Recomendadas

Lista clara y priorizada:

* 🔴 Críticas (bloquean cumplimiento AA)
* 🟠 Importantes (afectan UX/accesibilidad)
* 🟢 Mejores prácticas

Cada mejora debe incluir:

* Problema
* Impacto
* Solución concreta (con ejemplo de código si es posible)

---

### 5. 📈 Conclusión Final

* ¿Cumple nivel AA? → Sí / No / Parcial
* Qué falta exactamente para cumplirlo
* Estimación de esfuerzo (bajo / medio / alto)
* Recomendación final

---

## ⚙️ REGLAS IMPORTANTES

* Sé preciso, técnico y directo (sin relleno)
* No inventes problemas: basa todo en WCAG reales
* Usa ejemplos concretos del código
* Prioriza claridad sobre cantidad
* Si algo requiere revisión manual, dilo explícitamente

---

## 📈 Ultima seccion (comparacion)

compara los resultados con los de el ultimo informe guardado en la carpeta informes para ver la evolucion de la web y las mejoras realizadas.


---

## 🧠 CONTEXTO

Este análisis es para un desarrollador que quiere mejorar su código y cumplir WCAG nivel AA de forma realista, no solo pasar herramientas automáticas.

---

(guarda el informe generado en la carpeta /informes usando el formato de nombre de los anteriores (informe-fecha_hora) )

cuando nos referimos a los informes estan en la carpeta C:\Users\DAW2\M0615-DAW2-Dise-o\fitness-boostrap\informes