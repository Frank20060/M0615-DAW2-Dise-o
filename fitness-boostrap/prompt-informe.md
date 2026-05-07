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
Gmail	Frank Villar <frankvillarredondo@gmail.com>
[TAWDIS] Detalle del análisis https://m0615-daw-2-dise-o-yrmu.vercel.app/fitness-boostrap/index.html
info@tawdis.net <info@tawdis.net>	7 de mayo de 2026 a las 18:54
Para: frankvillarredondo@gmail.com
Si no visualiza correctamente este email, puede acceder al informe detallado desde su navegador
TAW | Informe WCAG 2.1

Test accesibilidad web
¡Ayúdanos a mantener TAW! Desde hace 15 años el proyecto TAW fomenta la accesibilididad de la Web de forma gratuita. Donar TAW

Información del análisis
Recurso: https://m0615-daw-2-dise-o-yrmu.vercel.app/fitness-boostrap/index.html
Fecha: 07/05/2026 16:54
Pautas WCAG 2.0
Nivel del análisis: AA
Tecnologías: HTML, CSS
Perceptible
La información y los componentes de la interfaz de usuario deben ser presentados a los usuarios de modo que puedan percibirlos.
Tipología	Comprobación	Técnicas	Resultado	Incidencias	Números de Lineas
1.1.1-Contenido no textual
Imágenes	Imágenes que pueden requerir descripción larga Ayuda	H45	Desconocido
12	18 74 84 89 292 295 312 315 344 347 363 366
Imágenes con alt vacio Ayuda	H67	Desconocido
5	165 178 191 375 378
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
8	292 295 312 315 344 347 363 366
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
25	55 80 98 159 167 180 193 210 215 236 259 285 293 313 345 364 386 390 405 420 435 454 465 470 476
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
1	463
Identifique los valores que deben indicarse con formatos especiales Ayuda	G84 G85 SCR18 SCR32	Desconocido
1	463
3.3.3-Sugerencias ante errores
Formularios	Proporcione sugerencias para valores erróneos en formularios Ayuda	G83 G84 G85 G177 SCR18 SCR32	Desconocido
1	463
3.3.4-Prevención de errores (legales, financieros, datos)
Formularios	Prevención de errores para formularios legales, financieros o de datos Ayuda	G164 G98 G155	Desconocido
1	463
Prevención de errores en acciones de borrado para formularios legales, financieros o de datos Ayuda	G99 G168 G155	Desconocido
1	463
Prevención de errores en exámenes Ayuda	G98 G168	Desconocido
1	463
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
14. <a href="#home" class="visually-hidden-focusable">Skip to main content</a>
15. <nav class="navbar navbar-expand-xl navbar-dark position-absolute w-100" style="top: 0; z-index: 1000;">
16. <div class="container">
17. <a class="navbar-brand d-flex align-items-center" href="#home">
18. Error manual de prioridad 1 <img src="media/icono.svg" alt="Fitness Online Logo" width="35" height="35" class="me-2">
19. <span class="fw-light me-1">fitness</span><span class="fw-bold">online</span>
20. </a>
....
22. <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
23. <span class="navbar-toggler-icon" aria-hidden="true"></span>
24. </button>
....
26. <div class="collapse navbar-collapse" id="navbarNav">
27. <ul class="navbar-nav ms-auto text-center">
28. <li class="nav-item">
29. <a class="nav-link" href="#about">About Us</a>
30. </li>
31. <li class="nav-item">
32. <a class="nav-link" href="#how-to-start">How To Start</a>
33. </li>
34. <li class="nav-item">
35. <a class="nav-link" href="#features">Features</a>
36. </li>
37. <li class="nav-item">
38. <a class="nav-link" href="#pricing">Pricing</a>
39. </li>
40. <li class="nav-item">
41. <a class="nav-link" href="#feedback">Feedback</a>
42. </li>
43. <li class="nav-item">
44. <a class="nav-link" href="#faq" title="Frequently Asked Questions" aria-label="Frequently Asked Questions">FAQ</a>
45. </li>
46. </ul>
47. </div>
48. </div>
49. </nav>
....
51. <section id="home" class="container-fluid p-0">
52. <div class="row g-0 hero-row">
53. <div class="col-12 col-xl-6 bg-primary text-white hero-text-col position-relative">
54. <div>
55. Error manual de prioridad 2 <h1 class="display-3 fw-bold mb-4">
56. Online Workout Personal Program
57. </h1>
58. <p class="fs-4 fw-light mb-5 opacity-75">
59. Start training online with your personal coach and become healthy
60. </p>
....
62. <div class="d-none d-xl-block">
63. <a href="#contact" id="hero-cta-desktop" class="btn btn-training btn-lg shadow-lg" aria-label="Start training from hero section" role="button" aria-hidden="false">Start Training – Hero</a>
64. </div>
65. </div>
....
67. <!-- Mobile CTA -->
68. <div class="d-xl-none position-absolute start-50 translate-middle" style="top: 100%; z-index: 10">
69. <a href="#contact" id="hero-cta-mobile" class="btn btn-training shadow-lg text-nowrap py-3 px-5 fs-4" aria-label="Start training from mobile hero section" aria-hidden="true" tabindex="-1">Start Training</a>
70. </div>
71. </div>
....
73. <div class="col-12 col-xl-6">
74. Error manual de prioridad 1 <img src="media/home/photo.png" alt="Athletic person working out" class="hero-img">
75. </div>
76. </div>
77. </section>
78. <section id="about" class="bg-light-section text-center">
79. <div class="container">
80. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-5">About Us</h2>
81. <div class="row g-4 justify-content-center">
82. <div class="col-12 col-md-6">
83. <div class="card card-custom overflow-hidden shadow">
84. Error manual de prioridad 1 <img src="media/about/simulacionVideo.jpg" alt="Person doing fitness exercises in a video demonstration" class="img-fluid w-100">
85. </div>
86. </div>
87. <div class="col-12 col-md-6">
88. <div class="card card-custom overflow-hidden shadow">
89. Error manual de prioridad 1 <img src="media/about/simulacionVideO2.jpg" alt="Another person doing fitness exercises in a video demonstration" class="img-fluid w-100">
90. </div>
91. </div>
92. </div>
93. </div>
94. </section>
....
96. <section id="how-to-start" class="bg-primary text-white py-11">
97. <div class="container text-center">
98. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-3">How To Start</h2>
99. <p class="fs-4 fw-light mb-5 mx-auto opacity-75">
100. It’s easy to start training right now without going anywhere, just in
101. your room, without missing important things and coach advices.
102. </p>
....
104. <div class="row g-4 gx-lg-5 text-start justify-content-center mt-5">
105. <div class="col-12 col-lg-4 position-relative step-item">
106. <div class="d-flex align-items-center gap-3 pe-lg-4">
107. <span class="display-1 fw-bold lh-1" style="font-size: 5rem">
108. 1
109. </span>
110. <p class="fs-6 fw-light mb-0 opacity-75">
111. Sign up in Fitness Online with your phone number. No spam
112. guaranteed. You can skip at any moment.
113. </p>
114. </div>
115. <!-- Flecha Estilizada (Dotted) -->
116. <div class="position-absolute top-50 start-100 translate-middle d-none d-lg-block pe-none" style="z-index: 10; margin-left: -10px">
117. <svg width="60" height="20" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
118. <path d="M70 10L85 20L70 30" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
119. <path d="M10 20H75" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 6"></path>
120. </svg>
121. </div>
122. </div>
....
124. <div class="col-12 col-lg-4 position-relative step-item">
125. <div class="d-flex align-items-center gap-3 pe-lg-4">
126. <span class="display-1 fw-bold lh-1" style="font-size: 5rem">
127. 2
128. </span>
129. <p class="fs-6 fw-light mb-0 opacity-75">
130. We will immediately add you in our chat bot, where you will be
131. able to pay chosen plan.
132. </p>
133. </div>
134. <!-- Flecha Estilizada (Dotted) -->
135. <div class="position-absolute top-50 start-100 translate-middle d-none d-lg-block pe-none" style="z-index: 10; margin-left: -10px">
136. <svg width="60" height="20" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
137. <path d="M70 10L85 20L70 30" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
138. <path d="M10 20H75" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 6"></path>
139. </svg>
140. </div>
141. </div>
....
143. <div class="col-12 col-lg-4 step-item">
144. <div class="d-flex align-items-center gap-3">
145. <span class="display-1 fw-bold lh-1" style="font-size: 5rem">
146. 3
147. </span>
148. <p class="fs-6 fw-light mb-0 opacity-75">
149. In 24 hours your trainer will contact you to get acquainted and
150. make a training program.
151. </p>
152. </div>
153. </div>
154. </div>
155. </div>
156. </section>
157. <section id="features" class="bg-light-section">
158. <div class="container text-center">
159. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-5">Features</h2>
....
161. <div class="row g-4 justify-content-center">
162. <div class="col-12 col-md-6 col-lg-4">
163. <div class="card card-custom h-100 p-4">
164. <div class="mb-3">
165. Error manual de prioridad 1 <img src="media/featues/listItems/item1.svg" alt="" aria-hidden="true" width="60" height="60">
166. </div>
167. Error manual de prioridad 2 <h3 class="fw-bold">Comfortable Place</h3>
168. <p class="text-muted small">
169. Train where it is convenient for you. You don’t need to go to
170. gym anymore.
171. </p>
172. </div>
173. </div>
....
175. <div class="col-12 col-md-6 col-lg-4">
176. <div class="card card-custom h-100 p-4">
177. <div class="mb-3">
178. Error manual de prioridad 1 <img src="media/featues/listItems/item3.svg" alt="" aria-hidden="true" width="60" height="60">
179. </div>
180. Error manual de prioridad 2 <h3 class="fw-bold">Professional Trainers</h3>
181. <p class="text-muted small">
182. Our trainers are professionals with years of experience in
183. fitness and sports.
184. </p>
185. </div>
186. </div>
....
188. <div class="col-12 col-md-6 col-lg-4">
189. <div class="card card-custom h-100 p-4">
190. <div class="mb-3">
191. Error manual de prioridad 1 <img src="media/featues/listItems/item2.svg" alt="" aria-hidden="true" width="60" height="60">
192. </div>
193. Error manual de prioridad 2 <h3 class="fw-bold">Individual Approach</h3>
194. <p class="text-muted small">
195. You will have a training program that fits exactly you and your
196. goals.
197. </p>
198. </div>
199. </div>
200. </div>
....
202. <div class="mt-5">
203. <a href="#contact" id="features-cta" class="btn btn-training btn-lg" aria-label="Start training from features section">Get Started<span class="visually-hidden"> (features)</span></a>
204. </div>
205. </div>
206. </section>
....
208. <section id="pricing" class="bg-primary text-white py-11">
209. <div class="container">
210. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-5 text-center">Pricing</h2>
211. <div class="row g-4 justify-content-center px-lg-5">
212. <!-- Start Card -->
213. <div class="col-12 col-md-4">
214. <div class="h-100 p-4 d-flex flex-column pricing-card-purple">
215. Error manual de prioridad 2 <h3 class="fw-bold mb-4" style="font-size: 2.5rem;">Start</h3>
216. <ul class="mb-5 ps-3" style="font-size: 0.9rem; line-height: 1.6;">
217. <li class="mb-1">Program for 8 workouts</li>
218. <li class="mb-1">3 calls with the trainer</li>
219. <li class="mb-1">Video instructions</li>
220. </ul>
221. <div class="mt-auto">
222. <div class="d-flex align-items-baseline mb-4">
223. <span class="fw-bold" style="font-size: 2.8rem;">$5</span>
224. <span class="ms-1 pricing-month-text" style="font-size: 1rem;">/month</span>
225. </div>
226. <button class="btn btn-outline-light rounded-pill px-4 py-2 fw-bold" style="border-width: 2px; width: fit-content; min-width: 140px;" aria-label="Choose Start plan">
227. Choose
228. </button>
229. </div>
230. </div>
231. </div>
....
233. <!-- Middle Card -->
234. <div class="col-12 col-md-4">
235. <div class="h-100 p-4 d-flex flex-column pricing-card-purple">
236. Error manual de prioridad 2 <h3 class="fw-bold mb-4" style="font-size: 2.5rem;">Middle</h3>
237. <ul class="mb-5 ps-3" style="font-size: 0.9rem; line-height: 1.6;">
238. <li class="mb-1">Program for 18 workouts</li>
239. <li class="mb-1">5 calls with the trainer</li>
240. <li class="mb-1">Video instructions</li>
241. <li class="mb-1">Text instructions</li>
242. <li class="mb-1">1 technique analysis</li>
243. </ul>
244. <div class="mt-auto">
245. <div class="d-flex align-items-baseline mb-4">
246. <span class="fw-bold" style="font-size: 2.8rem;">$14</span>
247. <span class="ms-1 pricing-month-text" style="font-size: 1rem;">/month</span>
248. </div>
249. <button class="btn btn-outline-light rounded-pill px-4 py-2 fw-bold" style="border-width: 2px; width: fit-content; min-width: 140px;" aria-label="Choose Middle plan">
250. Choose
251. </button>
252. </div>
253. </div>
254. </div>
....
256. <!-- Pro Card -->
257. <div class="col-12 col-md-4">
258. <div class="h-100 p-4 d-flex flex-column pricing-card-purple">
259. Error manual de prioridad 2 <h3 class="fw-bold mb-4" style="font-size: 2.5rem;">Pro</h3>
260. <ul class="mb-5 ps-3" style="font-size: 0.9rem; line-height: 1.6;">
261. <li class="mb-1">Program for 40 workouts</li>
262. <li class="mb-1">15 calls with the trainer</li>
263. <li class="mb-1">Video instructions</li>
264. <li class="mb-1">Text instructions</li>
265. <li class="mb-1">5 technique analysis</li>
266. <li class="mb-1">Acces to chat with other sportsmen</li>
267. </ul>
268. <div class="mt-auto">
269. <div class="d-flex align-items-baseline mb-4">
270. <span class="fw-bold" style="font-size: 2.8rem;">$20</span>
271. <span class="ms-1 pricing-month-text" style="font-size: 1rem;">/month</span>
272. </div>
273. <button class="btn btn-outline-light rounded-pill px-4 py-2 fw-bold" style="border-width: 2px; width: fit-content; min-width: 140px;" aria-label="Choose Pro plan">
274. Choose
275. </button>
276. </div>
277. </div>
278. </div>
279. </div>
280. </div>
281. </section>
....
283. <section id="feedback" class="bg-light-section text-center">
284. <div class="container">
285. Error manual de prioridad 2 <h2 class="display-4 fw-bold mb-5">Feedback About Us</h2>
....
287. <!-- Desktop View (LG and up) -->
288. <div class="row g-4 d-none d-lg-flex">
289. <div class="col-lg-6 px-4">
290. <div class="row align-items-center g-4 text-start">
291. <div class="col-12 col-md-4 text-center">
292. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/profilephoto.png" alt="Profile photo of Sarah Kong" class="rounded-circle mb-3 shadow" style="width: 120px; height: 120px; object-fit: cover">
293. Error manual de prioridad 2 <h3 class="fw-bold mb-1">Sarah Kong</h3>
294. <div class="d-flex align-items-center justify-content-center">
295. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/insta_icon.svg" alt="Instagram" class="me-2" style="width: 18px">
296. <span style="color: #bc2a8d" class="small fw-bold">sarahkong</span>
297. </div>
298. </div>
299. <div class="col-12 col-md-8">
300. <p class="fs-5 text-secondary">
301. The most amazing fitness trainings! I’ve became true sportsman
302. with it! Trainer is really professional. The most amazing
303. fitness trainings! I’ve became true sportsman with it! Trainer
304. is really professional.The most amazing fitness trainings!
305. </p>
306. </div>
307. </div>
308. </div>
309. <div class="col-lg-6 px-4">
310. <div class="row align-items-center g-4 text-start">
311. <div class="col-12 col-md-4 text-center">
312. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/profilephoto2.png" alt="Profile photo of Russel Williams" class="rounded-circle mb-3 shadow mx-auto" style="width: 100px; height: 100px; object-fit: cover">
313. Error manual de prioridad 2 <h3 class="fw-bold mb-1">Russel Williams</h3>
314. <div class="d-flex align-items-center justify-content-center mb-3">
315. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/insta_icon.svg" alt="Instagram" class="me-2" style="width: 18px">
316. <span style="color: #bc2a8d" class="small fw-bold">russelwilliams</span>
317. </div>
318. </div>
319. <div class="col-12 col-md-8">
320. <p class="fs-5 text-secondary">
321. The most amazing fitness trainings! I’ve became true sportsman
322. with it! Trainer is really professional. The most amazing
323. fitness trainings! I’ve became true sportsman with it! Trainer
324. is really professional.The most amazing fitness trainings!
325. </p>
326. </div>
327. </div>
328. </div>
329. </div>
....
331. <!-- Mobile View (MD and below) -->
332. <div id="feedbackCarousel" class="carousel slide d-lg-none mx-auto" style="max-width: 600px" data-bs-ride="carousel">
333. <div class="carousel-inner">
334. <div class="carousel-item active">
335. <div class="row align-items-center g-4 text-start p-4">
336. <div class="col-12 text-start">
337. <p class="fs-5 text-secondary">
338. The most amazing fitness trainings! I’ve became true
339. sportsman with it! Trainer is really professional. The most
340. amazing fitness trainings! I’ve became true sportsman with
341. it! Trainer is really professional.The most amazing fitness
342. trainings!
343. </p>
344. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/profilephoto.png" alt="Sarah Kong" class="rounded-circle mb-3 shadow" style="width: 100px; height: 100px; object-fit: cover">
345. Error manual de prioridad 2 <h3 class="fw-bold mb-1">Sarah Kong</h3>
346. <div class="d-flex align-items-center mb-3">
347. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/insta_icon.svg" alt="Instagram" class="me-2" style="width: 18px">
348. <span style="color: #bc2a8d" class="small fw-bold">sarahkong</span>
349. </div>
350. </div>
351. </div>
352. </div>
353. <div class="carousel-item">
354. <div class="row align-items-center g-4 text-start p-4">
355. <div class="col-12 text-start">
356. <p class="fs-5 text-secondary">
357. The most amazing fitness trainings! I’ve became true
358. sportsman with it! Trainer is really professional. The most
359. amazing fitness trainings! I’ve became true sportsman with
360. it! Trainer is really professional.The most amazing fitness
361. trainings!
362. </p>
363. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/profilephoto2.png" alt="Russel Williams" class="rounded-circle mb-3 shadow" style="width: 100px; height: 100px; object-fit: cover">
364. Error manual de prioridad 2 <h3 class="fw-bold mb-1">Russel Williams</h3>
365. <div class="d-flex align-items-center mb-3">
366. Error manual de prioridad 1 Error manual de prioridad 2 <img src="media/feedback/insta_icon.svg" alt="Instagram" class="me-2" style="width: 18px">
367. <span style="color: #bc2a8d" class="small fw-bold">russelwilliams</span>
368. </div>
369. </div>
370. </div>
371. </div>
372. </div>
373. <!-- Custom Navigation Arrows -->
374. <button class="carousel-control-prev feedback-arrow position-absolute top-50 start-0 translate-middle-y" type="button" data-bs-target="#feedbackCarousel" data-bs-slide="prev" aria-label="Previous feedback">
375. Error manual de prioridad 1 <img src="media/feedback/arrow.svg" alt="" aria-hidden="true" style="rotate: 180deg">
376. </button>
377. <button class="carousel-control-next feedback-arrow position-absolute top-50 end-0 translate-middle-y" type="button" data-bs-target="#feedbackCarousel" data-bs-slide="next" aria-label="Next feedback">
378. Error manual de prioridad 1 <img src="media/feedback/arrow.svg" alt="" aria-hidden="true">
379. </button>
380. </div>
381. </div>
382. </section>
....
384. <section id="faq" class="bg-primary text-white">
385. <div class="container">
386. Error manual de prioridad 2 <h2 class="display-4 fw-bold text-center mb-5">FAQ</h2>
....
388. <div class="accordion accordion-custom mx-auto" id="accordionFAQ" style="max-width: 800px">
389. <div class="accordion-item">
390. Error manual de prioridad 2 <h3 class="accordion-header">
391. <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
392. <span class="faq-dot" aria-hidden="true"></span>How can I start?
393. </button>
394. </h3>
395. <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
396. <div class="accordion-body">
397. <p class="m-0">Sign up in Fitness Online with your phone number. No spam
398. guaranteed. You can skip using Fitness Online at any moment. We
399. will immediately add you in our chat bot. In 24 hours after payment your trainer will contact you to get acquainted and to make training program best for you</p>
400. </div>
401. </div>
402. </div>
....
404. <div class="accordion-item">
405. Error manual de prioridad 2 <h3 class="accordion-header">
406. <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
407. <span class="faq-dot" aria-hidden="true"></span>How much does it cost?
408. </button>
409. </h3>
410. <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
411. <div class="accordion-body">
412. <p class="m-0">Sign up in Fitness Online with your phone number. No spam
413. guaranteed. You can skip using Fitness Online at any moment. We
414. will immediately add you in our chat bot. In 24 hours after payment your trainer will contact you to get acquainted and to make training program best for you</p>
415. </div>
416. </div>
417. </div>
....
419. <div class="accordion-item">
420. Error manual de prioridad 2 <h3 class="accordion-header">
421. <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
422. <span class="faq-dot" aria-hidden="true"></span>How will I train?
423. </button>
424. </h3>
425. <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
426. <div class="accordion-body">
427. <p class="m-0">Sign up in Fitness Online with your phone number. No spam
428. guaranteed. You can skip using Fitness Online at any moment. We
429. will immediately add you in our chat bot. In 24 hours after payment your trainer will contact you to get acquainted and to make training program best for you</p>
430. </div>
431. </div>
432. </div>
....
434. <div class="accordion-item">
435. Error manual de prioridad 2 <h3 class="accordion-header">
436. <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
437. <span class="faq-dot"></span>Who are trainers?
438. </button>
439. </h3>
440. <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
441. <div class="accordion-body">
442. <p class="m-0">Sign up in Fitness Online with your phone number. No spam
443. guaranteed. You can skip using Fitness Online at any moment. We
444. will immediately add you in our chat bot. In 24 hours after payment your trainer will contact you to get acquainted and to make training program best for you</p>
445. </div>
446. </div>
447. </div>
448. </div>
449. </div>
450. </section>
....
452. <section id="contact" class="bg-light-section text-center">
453. <div class="container">
454. Error manual de prioridad 2 <h2 class="display-3 fw-bold mb-4">Start Training</h2>
455. <p class="fs-5 text-secondary mb-5 mx-auto opacity-100">
456. Leave your phone and we will send you a link to our special chat bot.
457. No spam guaranteed.
458. </p>
....
460. <div class="row justify-content-center">
461. <div class="col-12 col-md-6 col-lg-5 text-start">
462. <div class="card card-custom p-4 p-md-5">
463. Error manual de prioridad 1 Error manual de prioridad 1 Error manual de prioridad 2 Error manual de prioridad 2 Error manual de prioridad 2 Error manual de prioridad 2 <form action="#" aria-label="Start Training Form">
464. <div class="mb-4">
465. Error manual de prioridad 2 <label for="phone" class="form-label fw-bold small text-uppercase text-secondary">Your Phone</label>
466. <input type="tel" class="form-control form-control-lg bg-light border border-1" id="phone" placeholder="+1__" autocomplete="tel" aria-required="true" required="">
467. </div>
....
469. <div class="mb-4">
470. Error manual de prioridad 2 <label for="name" class="form-label fw-bold small text-uppercase text-secondary">Your Name</label>
471. <input type="text" class="form-control form-control-lg bg-light border border-1" id="name" placeholder="Your Name" autocomplete="name" aria-required="true" required="">
472. </div>
....
474. <div class="form-check mb-5">
475. <input class="form-check-input" type="checkbox" id="terms" aria-required="true" required="">
476. Error manual de prioridad 2 <label class="form-check-label text-secondary small" for="terms">
477. I accept Terms of Service
478. </label>
479. </div>
....
481. <div class="text-center">
482. <button type="submit" class="btn btn-training btn-lg w-fit shadow">
483. Start Training
484. </button>
485. </div>
486. </form>
487. </div>
488. </div>
489. </div>
490. </div>
491. </section>
....
493. <footer class="bg-primary text-white py-5">
494. <div class="container px-4 px-md-0">
495. <div class="row align-items-center">
496. <div class="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
497. <a href="#" class="text-white text-decoration-none fw-bold fs-5">Terms of Service</a>
498. </div>
499. <div class="col-12 col-md-6 text-center text-md-end opacity-75">
500. <p class="mb-0 fs-5">© Fitness Online, 2022</p>
501. </div>
502. </div>
503. </div>
504. </footer>
....
511. </body></html>
Código fuente : https://m0615-daw-2-dise-o-yrmu.vercel.app/fitness-boostrap/index.html
1. max-width: 800px
Up

```
En la imagen se puede ver como la web a pasado el informe de Axe DevTools para los contrastes sin problemas.
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