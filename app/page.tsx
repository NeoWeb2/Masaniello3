"use client"

import { useState } from "react"
import { Instagram, Phone, MapPin, Clock, Home, ChevronDown, Calendar, Users, Send } from 'lucide-react'

const flags = {
  es: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/espana-wKlaFpESaP7051i7ceg5wlLxi0NLnT.png",
  en: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reino-unido-NBgZEICA7kL5BrM3RdQjZjV66M1uAM.png", 
  it: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/italia-85rVmXnj8Lnrwe3r6hyLXh3LGvLFiZ.png",
  fr: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/francia-kyTOjI9AuYj4bsXT291coOnynVKb2V.png"
}

const translations = {
es: {
  inicio: "Inicio",
  quienesSomos: "¿Quiénes somos?",
  carta: "Carta",
  ubicacion: "Ubicación",
  reserva: "Reserva",
  reservarOnline: "Reservar Online",
  autenticaPizzeria: "Auténtica Pizzería Napolitana en Barcelona",
  verCarta: "Ver Nuestra Carta",
  reservarMesa: "Reservar Mesa",
  tradicionNapolitana: "Tradición Napolitana",
  nuestraCarta: "Nuestra Carta",
  saboresNapoles: "Auténticos sabores de Nápoles",
  platos: "platos",
  masianelloTitle: "Masaniello",
  historiaHeroe: "La Historia de un Héroe",
  aboutText1: "Tommaso Aniello, conocido como Masaniello, fue un pescador napolitano que en 1647 lideró una histórica revuelta popular contra el dominio español en Nápoles. Su valentía y liderazgo lo convirtieron en un símbolo de libertad y resistencia.",
  aboutText2: "En nuestro restaurante honramos su espíritu rebelde y su amor por Nápoles, ofreciendo la auténtica cocina napolitana con la pasión y el carácter que él representaba.",
  heroeNapoles: "Héroe de Nápoles",
  direccion: "Dirección",
  horarios: "Horarios",
  contacto: "Contacto",
  lunesViernes: "Lunes - Domingo",
  nombre: "Nombre",
  telefono: "Teléfono",
  email: "Correo Electrónico",
  fecha: "Fecha",
  hora: "Hora",
  personas: "Personas",
  comentarios: "Comentarios",
  enviarReserva: "Enviar Reserva",
  enviando: "Enviando...",
  reservaEnviada: "¡Reserva enviada! Nos pondremos en contacto contigo pronto.",
  errorReserva: "Hubo un error al enviar la reserva. Por favor, inténtalo de nuevo más tarde.",
  camposRequeridos: "Por favor, complete todos los campos obligatorios.",
  autenticaCocina: "Auténtica cocina napolitana en Barcelona, honrando la tradición y el espíritu rebelde de Masaniello.",
  derechosReservados: "© 2024 Masaniello Barcelona. Todos los derechos reservados."
},
en: {
  inicio: "Home",
  quienesSomos: "About Us",
  carta: "Menu",
  ubicacion: "Location",
  reserva: "Reserve",
  reservarOnline: "Book Online",
  autenticaPizzeria: "Authentic Neapolitan Pizzeria in Barcelona",
  verCarta: "View Our Menu",
  reservarMesa: "Reserve Table",
  tradicionNapolitana: "Neapolitan Tradition",
  nuestraCarta: "Our Menu",
  saboresNapoles: "Authentic flavors from Naples",
  platos: "dishes",
  masianelloTitle: "Masaniello",
  historiaHeroe: "The Story of a Hero",
  aboutText1: "Tommaso Aniello, known as Masaniello, was a Neapolitan fisherman who in 1647 led a historic popular revolt against Spanish rule in Naples. His courage and leadership made him a symbol of freedom and resistance.",
  aboutText2: "In our restaurant we honor his rebellious spirit and his love for Naples, offering authentic Neapolitan cuisine with the passion and character he represented.",
  heroeNapoles: "Hero of Naples",
  direccion: "Address",
  horarios: "Hours",
  contacto: "Contact",
  lunesViernes: "Monday - Sunday",
  nombre: "Name",
  telefono: "Phone",
  email: "Email",
  fecha: "Date",
  hora: "Time",
  personas: "People",
  comentarios: "Comments",
  enviarReserva: "Send Reservation",
  enviando: "Sending...",
  reservaEnviada: "Reservation sent! We will contact you soon.",
  errorReserva: "There was an error sending the reservation. Please try again later.",
  camposRequeridos: "Please fill in all required fields.",
  autenticaCocina: "Authentic Neapolitan cuisine in Barcelona, honoring the tradition and rebellious spirit of Masaniello.",
  derechosReservados: "© 2024 Masaniello Barcelona. All rights reserved."
},
it: {
  inicio: "Home",
  quienesSomos: "Chi Siamo",
  carta: "Menu",
  ubicacion: "Posizione",
  reserva: "Prenota",
  reservarOnline: "Prenota Online",
  autenticaPizzeria: "Autentica Pizzeria Napoletana a Barcellona",
  verCarta: "Vedi il Nostro Menu",
  reservarMesa: "Prenota Tavolo",
  tradicionNapolitana: "Tradizione Napoletana",
  nuestraCarta: "Il Nostro Menu",
  saboresNapoles: "Autentici sapori di Napoli",
  platos: "piatti",
  masianelloTitle: "Masaniello",
  historiaHeroe: "La Storia di un Eroe",
  aboutText1: "Tommaso Aniello, conosciuto come Masaniello, fu un pescatore napoletano che nel 1647 guidò una storica rivolta popolare contro il dominio spagnolo a Napoli. Il suo coraggio e la sua leadership lo resero un simbolo di libertà e resistenza.",
  aboutText2: "Nel nostro ristorante onoriamo il suo spirito ribelle e il suo amore per Napoli, offrendo l'autentica cucina napoletana con la passione e il carattere che rappresentava.",
  heroeNapoles: "Eroe di Napoli",
  direccion: "Indirizzo",
  horarios: "Orari",
  contacto: "Contatto",
  lunesViernes: "Lunedì - Domenica",
  nombre: "Nome",
  telefono: "Telefono",
  email: "Email",
  fecha: "Data",
  hora: "Ora",
  personas: "Persone",
  comentarios: "Commenti",
  enviarReserva: "Invia Prenotazione",
  enviando: "Inviando...",
  reservaEnviada: "Prenotazione inviata! Ti contatteremo presto.",
  errorReserva: "Si è verificato un errore nell'invio della prenotazione. Riprova più tardi.",
  camposRequeridos: "Si prega di compilare tutti i campi obbligatori.",
  autenticaCocina: "Autentica cucina napoletana a Barcellona, onorando la tradizione e lo spirito ribelle di Masaniello.",
  derechosReservados: "© 2024 Masaniello Barcelona. Tutti i diritti riservati."
},
fr: {
  inicio: "Accueil",
  quienesSomos: "Qui Sommes-Nous",
  carta: "Menu",
  ubicacion: "Localisation",
  reserva: "Réserver",
  reservarOnline: "Réserver en Ligne",
  autenticaPizzeria: "Authentique Pizzeria Napolitaine à Barcelone",
  verCarta: "Voir Notre Menu",
  reservarMesa: "Réserver une Table",
  tradicionNapolitaine: "Tradition Napolitaine",
  nuestraCarta: "Notre Menu",
  saboresNapoles: "Saveurs authentiques de Naples",
  platos: "plats",
  masianelloTitle: "Masaniello",
  historiaHeroe: "L'Histoire d'un Héros",
  aboutText1: "Tommaso Aniello, connu sous le nom de Masaniello, était un pêcheur napolitain qui en 1647 mena une révolte populaire historique contre la domination espagnole à Naples. Son courage et son leadership en firent un symbole de liberté et de résistance.",
  aboutText2: "Dans notre restaurant, nous honorons son esprit rebelle et son amour pour Naples, en offrant une cuisine napolitaine authentique avec la passion et le caractère qu'il représentait.",
  heroeNapoles: "Héros de Naples",
  direccion: "Adresse",
  horarios: "Horaires",
  contacto: "Contact",
  lunesViernes: "Lundi - Dimanche",
  nombre: "Nom",
  telefono: "Téléphone",
  email: "Email",
  fecha: "Date",
  hora: "Heure",
  personas: "Personnes",
  comentarios: "Commentaires",
  enviarReserva: "Envoyer la Réservation",
  enviando: "Envoi...",
  reservaEnviada: "Réservation envoyée! Nous vous contacterons bientôt.",
  errorReserva: "Une erreur s'est produite lors de l'envoi de la réservation. Veuillez réessayer plus tard.",
  camposRequeridos: "Veuillez remplir tous les champs obligatoires.",
  autenticaCocina: "Cuisine napolitaine authentique à Barcelone, honorant la tradition et l'esprit rebelle de Masaniello.",
  derechosReservados: "© 2024 Masaniello Barcelona. Tous droits réservés."
}
}

const menuSections = {
es: {
  PIZZE: [
    { name: "FOCACCIA", price: "5€", description: "" },
    { name: "MARINARA", price: "7€", description: "Tomate, ajo, orégano y albahaca" },
    { name: "MARGHERITA", price: "7€", description: "Tomate, mozzarella y albahaca" },
    { name: "FILETTO", price: "9€", description: "Tomatitos, mozzarella y albahaca" },
    { name: "BUFALA", price: "10€", description: "Tomate, mozzarella de búfala y albahaca" },
    { name: "DIAVOLA", price: "10€", description: "Tomate, mozzarella, salami picante" },
    { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Tomate, mozzarella, jamón cocido y champiñones" },
    { name: "SICILIANA", price: "10€", description: "Tomate, mozzarella, anchoas y berenjena" },
    { name: "NAPOLI", price: "10€", description: "Tomate, mozzarella, anchoas, alcaparras y aceitunas negras" },
    { name: "ORTOLANA", price: "10€", description: "Tomate, mozzarella, variedad de verduras" },
    { name: "CAPRICCIOSA", price: "10€", description: "Tomate, mozzarella, jamón cocido, alcachofa, champiñones y olivas" },
    { name: "CALZONE", price: "12.50€", description: "Tomate, mozzarella, ricotta, jamón cocido" },
    { name: "TROPEA", price: "12.50€", description: "Tomate, mozzarella, atún, cebolla roja de Tropea y olivas" },
    { name: "FLOTADOR", price: "12.50€", description: "Borde relleno de ricotta, tomate y mozzarella de búfala" },
    { name: "CATALANA", price: "13€", description: "Tomate, mozzarella, jamón cocido, huevo y champiñones" },
    { name: "CROCCHÉ", price: "12.50€", description: "Jamón cocido, provola y croquetas de patata" },
    { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Butifarra, grelos y provola" },
    { name: "CONTADINA", price: "12.50€", description: "Tomate, butifarra, champiñones, cebolla y mozzarella" },
    { name: "4 FORMAGGI", price: "12.50€", description: "Tomate, mozzarella, gorgonzola, provola y parmesano" },
    { name: "SOFIA", price: "10€", description: "Frankfurt, patatas fritas y mozzarella" },
    { name: "MARIA", price: "10€", description: "Pollo, patatas fritas y mozzarella" },
    { name: "EMIGRANTE", price: "12€", description: "Tomate, mozzarella, jamón de parma, rúcula y láminas de parmesano" },
    { name: "PARMIGIANA", price: "11€", description: "Tomate, pastel de berenjena, provola y albahaca" },
    { name: "MORTADELLA", price: "12€", description: "Tomate, mozzarella de búfala, mortadela, burrata y pistacho" },
    { name: "VESUVIO", price: "13€", description: "Pizza en forma de volcán con tomate, ricotta, salami y mozzarella" },
    { name: "ARICCIA", price: "12€", description: "Porchetta (cerdo asado), provola y berenjena" },
    { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, jamón cocido, mozzarella y tomate" },
    { name: "PIZZA MASSANIELLO", price: "12€", description: "Tomatitos, burrata y granela de pistacho" },
    { name: "MIMOSA", price: "12€", description: "Nata, jamón cocido, maíz y mozzarella" },
  ],
  ANTIPASTI: [
    { name: "Insalata Cesar", price: "12€", description: "Mezclum, cebolla, tomatitos, pollo, crutones de pan y salsa césar." },
    { name: "Insalata Primavera", price: "12€", description: "Mezclum, tomate seco, queso de cabra, miel y nueces." },
    { name: "Bruschetta", price: "6€", description: "Pan con tomatitos, ajo, orégano y albahaca." },
    { name: "Bruschetta Mista", price: "10€", description: "A gusto del chef." },
    { name: "Parmigiana di Melanzane", price: "13€", description: "Pastel de berenjena, salsa de tomate, parmesano, mozzarella y albahaca." },
    { name: "Provolone al forno", price: "11€", description: "Queso provolone, salsa de tomate y orégano." },
    { name: "Antipasto della casa", price: "20€", description: "A gusto del chef." },
    { name: "Frittura napoletana (2 personas)", price: "14€", description: "Croquetas de patata, arancini de arroz, montanare y mozzarella rebozada." },
    { name: "Polpette al sugo", price: "12€", description: "Albóndigas de ternera con ragú de tomate." },
    { name: "Tris di montanare", price: "9€", description: "Masa de pizza frita con ragú de tomate, butifarra, friarielli (brócoli), mortadella y burrata." },
    { name: "Sauté di frutti di mare", price: "18€", description: "Impepata de mejillones, almejas y picatostes." },
    { name: "Cozze alla marinara", price: "11€", description: "Mejillones, tomate, picatostes, ajo." },
    { name: "Carpaccio di bresaola", price: "12€", description: "Bresaola, rúcula, tomatitos y grana." },
    { name: "Carpaccio di manzo", price: "12€", description: "Carpaccio de ternera, rúcula y grana." },
    { name: "Frittattina", price: "4€", description: "Pastel de bucatini con guisantes, bechamel y carne picada." },
    { name: "Ciurilli (3 piezas)", price: "12€", description: "Flor de calabacín rellena de ricotta." },
  ],
  "PRIMI PIATTI": [
    { name: "Lasagna di carne", price: "13€", description: "Lasaña de carne casera." },
    { name: "Penne con polpette al sugo", price: "14€", description: "Pasta con ragú de tomate y albóndigas de ternera." },
    { name: "Spaghetti carbonara", price: "13€", description: "Spaghetti con guanciale, huevo y parmesano." },
    { name: "Rigatoni salsiccia e funghi", price: "14€", description: "Pasta con butifarra, boletus y provola." },
    { name: "Rigatoni bolognese", price: "13€", description: "Pasta con tomate, carne picada, albahaca y parmesano." },
    { name: "Paccheri Maria", price: "15€", description: "Macarrones XXL con tomatitos, burrata y granos de pistacho." },
    { name: "Penne 4 formaggi", price: "12€", description: "Pasta con cuatro quesos." },
    { name: "Paccheri frutti di mare", price: "20€", description: "Macarrones XXL con frutos del mar." },
    { name: "Rigatoni Siciliana", price: "12€", description: "Tomate, berenjena, albahaca y parmesano casero." },
    { name: "Spaghetti alle vongole", price: "16€", description: "Espaguetis con almejas." },
    { name: "Ziti genovese", price: "16€", description: "Macarrones con estofado de ternera y cebolla." },
    { name: "Pasta e patate", price: "13€", description: "Pasta mixta con patata, panceta y provola." },
    { name: "Penne pesto", price: "13€", description: "Pasta con pesto de albahaca." },
    { name: "Gnocchi Sorrentina", price: "14€", description: "Tomatitos, mozzarella y albahaca." },
    { name: "Spaghetti pomodoro fresco", price: "11€", description: "Spaghetti con tomate fresco y albahaca." },
    { name: "Penne Arrabiata", price: "12€", description: "Pasta con tomate y un toque picante." },
    { name: "Scialatielli allo scoglio", price: "20€", description: "Pasta fresca con frutos del mar." },
  ],
  "PASTA FRESCA": [
    { name: "Ravioli 4 formaggi", price: "15€", description: "Pasta fresca con 4 quesos." },
    { name: "Ravioli funghi", price: "15€", description: "Pasta fresca con boletus y aceite de trufa." },
    { name: "Ravioli burrata", price: "15€", description: "Pasta fresca con burrata, tomatitos y granos de pistacho." },
  ],
  RISOTTI: [
    { name: "Risotto ai funghi porcini", price: "14€", description: "Arroz con setas porcini" },
    { name: "Risotto alla marinara", price: "16€", description: "Arroz con frutos del mar" },
    { name: "Risotto al pomodoro e basilico", price: "12€", description: "Arroz con tomate fresco y albahaca" },
    { name: "Risotto ai quattro formaggi", price: "13€", description: "Arroz con cuatro quesos" },
  ],
  "SEGUNDOS PLATOS": [
    { name: "Scaloppine al limone", price: "16€", description: "Escalopes de ternera al limón" },
    { name: "Pollo alla parmigiana", price: "15€", description: "Pollo empanado con parmesano" },
    { name: "Salmone alla griglia", price: "18€", description: "Salmón a la plancha con verduras" },
    { name: "Bistecca alla griglia", price: "20€", description: "Bistec a la parrilla" },
  ],
  SALTIMBOCCA: [
    { name: "Saltimbocca alla romana", price: "17€", description: "Ternera con jamón de Parma y salvia" },
    { name: "Saltimbocca di pollo", price: "15€", description: "Pollo con jamón de Parma y salvia" },
    { name: "Saltimbocca di vitello", price: "18€", description: "Ternera lechal con jamón de Parma" },
  ]
},
en: {
  PIZZE: [
    { name: "FOCACCIA", price: "5€", description: "" },
    { name: "MARINARA", price: "7€", description: "Tomato, garlic, oregano and basil" },
    { name: "MARGHERITA", price: "7€", description: "Tomato, mozzarella and basil" },
    { name: "FILETTO", price: "9€", description: "Cherry tomatoes, mozzarella and basil" },
    { name: "BUFALA", price: "10€", description: "Tomato, buffalo mozzarella and basil" },
    { name: "DIAVOLA", price: "10€", description: "Tomato, mozzarella, spicy salami" },
    { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Tomato, mozzarella, cooked ham and mushrooms" },
    { name: "SICILIANA", price: "10€", description: "Tomato, mozzarella, anchovies and eggplant" },
    { name: "NAPOLI", price: "10€", description: "Tomato, mozzarella, anchovies, capers and black olives" },
    { name: "ORTOLANA", price: "10€", description: "Tomato, mozzarella, variety of vegetables" },
    { name: "CAPRICCIOSA", price: "10€", description: "Tomato, mozzarella, cooked ham, artichoke, mushrooms and olives" },
    { name: "CALZONE", price: "12.50€", description: "Tomato, mozzarella, ricotta, cooked ham" },
    { name: "TROPEA", price: "12.50€", description: "Tomato, mozzarella, tuna, Tropea red onion and olives" },
    { name: "FLOTADOR", price: "12.50€", description: "Stuffed crust with ricotta, tomato and buffalo mozzarella" },
    { name: "CATALANA", price: "13€", description: "Tomato, mozzarella, cooked ham, egg and mushrooms" },
    { name: "CROCCHÉ", price: "12.50€", description: "Cooked ham, provola and potato croquettes" },
    { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Sausage, broccoli greens and provola" },
    { name: "CONTADINA", price: "12.50€", description: "Tomato, sausage, mushrooms, onion and mozzarella" },
    { name: "4 FORMAGGI", price: "12.50€", description: "Tomato, mozzarella, gorgonzola, provola and parmesan" },
    { name: "SOFIA", price: "10€", description: "Frankfurt, French fries and mozzarella" },
    { name: "MARIA", price: "10€", description: "Chicken, French fries and mozzarella" },
    { name: "EMIGRANTE", price: "12€", description: "Tomato, mozzarella, Parma ham, arugula and parmesan shavings" },
    { name: "PARMIGIANA", price: "11€", description: "Tomato, eggplant cake, provola and basil" },
    { name: "MORTADELLA", price: "12€", description: "Tomato, buffalo mozzarella, mortadella, burrata and pistachio" },
    { name: "VESUVIO", price: "13€", description: "Volcano-shaped pizza with tomato, ricotta, salami and mozzarella" },
    { name: "ARICCIA", price: "12€", description: "Porchetta (roast pork), provola and eggplant" },
    { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, cooked ham, mozzarella and tomato" },
    { name: "PIZZA MASSANIELLO", price: "12€", description: "Cherry tomatoes, burrata and pistachio granules" },
    { name: "MIMOSA", price: "12€", description: "Cream, cooked ham, corn and mozzarella" },
  ],
  ANTIPASTI: [
    { name: "Insalata Cesar", price: "12€", description: "Mixed greens, onion, cherry tomatoes, chicken, bread croutons and Caesar sauce." },
    { name: "Insalata Primavera", price: "12€", description: "Mixed greens, dried tomato, goat cheese, honey and nuts." },
    { name: "Bruschetta", price: "6€", description: "Bread with cherry tomatoes, garlic, oregano and basil." },
    { name: "Bruschetta Mista", price: "10€", description: "Chef's choice." },
    { name: "Parmigiana di Melanzane", price: "13€", description: "Eggplant cake, tomato sauce, parmesan, mozzarella and basil." },
    { name: "Provolone al forno", price: "11€", description: "Provolone cheese, tomato sauce and oregano." },
    { name: "Antipasto della casa", price: "20€", description: "Chef's choice." },
    { name: "Frittura napoletana (2 personas)", price: "14€", description: "Potato croquettes, rice arancini, montanare and breaded mozzarella." },
    { name: "Polpette al sugo", price: "12€", description: "Beef meatballs with tomato ragù." },
    { name: "Tris di montanare", price: "9€", description: "Fried pizza dough with tomato ragù, sausage, friarielli (broccoli), mortadella and burrata." },
    { name: "Sauté di frutti di mare", price: "18€", description: "Impepata of mussels, clams and croutons." },
    { name: "Cozze alla marinara", price: "11€", description: "Mussels, tomato, croutons, garlic." },
    { name: "Carpaccio di bresaola", price: "12€", description: "Bresaola, arugula, cherry tomatoes and grana." },
    { name: "Carpaccio di manzo", price: "12€", description: "Beef carpaccio, arugula and grana." },
    { name: "Frittattina", price: "4€", description: "Bucatini cake with peas, béchamel and minced meat." },
    { name: "Ciurilli (3 piezas)", price: "12€", description: "Zucchini flower stuffed with ricotta." },
  ],
  "PRIMI PIATTI": [
    { name: "Lasagna di carne", price: "13€", description: "Homemade meat lasagna." },
    { name: "Penne con polpette al sugo", price: "14€", description: "Pasta with tomato ragù and beef meatballs." },
    { name: "Spaghetti carbonara", price: "13€", description: "Spaghetti with guanciale, egg, and parmesan." },
    { name: "Rigatoni salsiccia e funghi", price: "14€", description: "Pasta with butifarra, porcini mushrooms, and provola." },
    { name: "Rigatoni bolognese", price: "13€", description: "Pasta with tomato, minced meat, basil, and parmesan." },
    { name: "Paccheri Maria", price: "15€", description: "XXL macaroni with cherry tomatoes, burrata, and pistachio kernels." },
    { name: "Penne 4 formaggi", price: "12€", description: "Pasta with four cheeses." },
    { name: "Paccheri frutti di mare", price: "20€", description: "XXL macaroni with seafood." },
    { name: "Rigatoni Siciliana", price: "12€", description: "Tomato, eggplant, basil, and homemade parmesan." },
    { name: "Spaghetti alle vongole", price: "16€", description: "Spaghetti with clams." },
    { name: "Ziti genovese", price: "16€", description: "Macaroni with beef stew and onions." },
    { name: "Pasta e patate", price: "13€", description: "Mixed pasta with potato, pancetta, and provola." },
    { name: "Penne pesto", price: "13€", description: "Pasta with basil pesto." },
    { name: "Gnocchi Sorrentina", price: "14€", description: "Cherry tomatoes, mozzarella, and basil." },
    { name: "Spaghetti pomodoro fresco", price: "11€", description: "Spaghetti with fresh tomato and basil." },
    { name: "Penne Arrabiata", price: "12€", description: "Pasta with tomato and a spicy touch." },
    { name: "Scialatielli allo scoglio", price: "20€", description: "Fresh pasta with seafood." },
  ],
  "PASTA FRESCA": [
    { name: "Ravioli 4 formaggi", price: "15€", description: "Fresh pasta with 4 cheeses." },
    { name: "Ravioli funghi", price: "15€", description: "Fresh pasta with porcini mushrooms and truffle oil." },
    { name: "Ravioli burrata", price: "15€", description: "Fresh pasta with burrata, cherry tomatoes, and pistachio kernels." },
  ],
  RISOTTI: [
    { name: "Risotto ai funghi porcini", price: "14€", description: "Rice with porcini mushrooms" },
    { name: "Risotto alla marinara", price: "16€", description: "Rice with seafood" },
    { name: "Risotto al pomodoro e basilico", price: "12€", description: "Rice with fresh tomato and basil" },
    { name: "Risotto ai quattro formaggi", price: "13€", description: "Rice with four cheeses" },
  ],
  "SEGUNDOS PLATOS": [
    { name: "Scaloppine al limone", price: "16€", description: "Veal escalopes with lemon" },
    { name: "Pollo alla parmigiana", price: "15€", description: "Breaded chicken with parmesan" },
    { name: "Salmone alla griglia", price: "18€", description: "Grilled salmon with vegetables" },
    { name: "Bistecca alla griglia", price: "20€", description: "Grilled steak" },
  ],
  SALTIMBOCCA: [
    { name: "Saltimbocca alla romana", price: "17€", description: "Veal with Parma ham and sage" },
    { name: "Saltimbocca di pollo", price: "15€", description: "Chicken with Parma ham and sage" },
    { name: "Saltimbocca di vitello", price: "18€", description: "Veal with Parma ham" },
  ]
},
it: {
  PIZZE: [
    { name: "FOCACCIA", price: "5€", description: "" },
    { name: "MARINARA", price: "7€", description: "Pomodoro, aglio, origano e basilico" },
    { name: "MARGHERITA", price: "7€", description: "Pomodoro, mozzarella e basilico" },
    { name: "FILETTO", price: "9€", description: "Pomodorini, mozzarella e basilico" },
    { name: "BUFALA", price: "10€", description: "Pomodoro, mozzarella di bufala e basilico" },
    { name: "DIAVOLA", price: "10€", description: "Pomodoro, mozzarella, salame piccante" },
    { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Pomodoro, mozzarella, prosciutto cotto e funghi" },
    { name: "SICILIANA", price: "10€", description: "Pomodoro, mozzarella, acciughe e melanzane" },
    { name: "NAPOLI", price: "10€", description: "Pomodoro, mozzarella, acciughe, capperi e olive nere" },
    { name: "ORTOLANA", price: "10€", description: "Pomodoro, mozzarella, varietà di verdure" },
    { name: "CAPRICCIOSA", price: "10€", description: "Pomodoro, mozzarella, prosciutto cotto, carciofi, funghi e olive" },
    { name: "CALZONE", price: "12.50€", description: "Pomodoro, mozzarella, ricotta, prosciutto cotto" },
    { name: "TROPEA", price: "12.50€", description: "Pomodoro, mozzarella, tonno, cipolla rossa di Tropea e olive" },
    { name: "FLOTADOR", price: "12.50€", description: "Bordo ripieno di ricotta, pomodoro e mozzarella di bufala" },
    { name: "CATALANA", price: "13€", description: "Pomodoro, mozzarella, prosciutto cotto, uovo e funghi" },
    { name: "CROCCHÉ", price: "12.50€", description: "Prosciutto cotto, provola e crocchette di patate" },
    { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Salsiccia, friarielli e provola" },
    { name: "CONTADINA", price: "12.50€", description: "Pomodoro, salsiccia, funghi, cipolla e mozzarella" },
    { name: "4 FORMAGGI", price: "12.50€", description: "Pomodoro, mozzarella, gorgonzola, provola e parmigiano" },
    { name: "SOFIA", price: "10€", description: "Wurstel, patatine fritte e mozzarella" },
    { name: "MARIA", price: "10€", description: "Pollo, patatine fritte e mozzarella" },
    { name: "EMIGRANTE", price: "12€", description: "Pomodoro, mozzarella, prosciutto di Parma, rucola e scaglie di parmigiano" },
    { name: "PARMIGIANA", price: "11€", description: "Pomodoro, tortino di melanzane, provola e basilico" },
    { name: "MORTADELLA", price: "12€", description: "Pomodoro, mozzarella di bufala, mortadella, burrata e pistacchio" },
    { name: "VESUVIO", price: "13€", description: "Pizza a forma di vulcano con pomodoro, ricotta, salame e mozzarella" },
    { name: "ARICCIA", price: "12€", description: "Porchetta, provola e melanzane" },
    { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, prosciutto cotto, mozzarella e pomodoro" },
    { name: "PIZZA MASSANIELLO", price: "12€", description: "Pomodorini, burrata e granella di pistacchio" },
    { name: "MIMOSA", price: "12€", description: "Panna, prosciutto cotto, mais e mozzarella" },
  ],
  ANTIPASTI: [
    { name: "Insalata Cesar", price: "12€", description: "Misticanza, cipolla, pomodorini, pollo, crostini di pane e salsa cesar." },
    { name: "Insalata Primavera", price: "12€", description: "Misticanza, pomodoro secco, formaggio di capra, miele e noci." },
    { name: "Bruschetta", price: "6€", description: "Pane con pomodorini, aglio, origano e basilico." },
    { name: "Bruschetta Mista", price: "10€", description: "A gusto dello chef." },
    { name: "Parmigiana di Melanzane", price: "13€", description: "Tortino di melanzane, salsa di pomodoro, parmigiano, mozzarella e basilico." },
    { name: "Provolone al forno", price: "11€", description: "Provolone, salsa di pomodoro e origano." },
    { name: "Antipasto della casa", price: "20€", description: "A gusto dello chef." },
    { name: "Frittura napoletana (2 persone)", price: "14€", description: "Crocchette di patate, arancini di riso, montanare e mozzarella impanata." },
    { name: "Polpette al sugo", price: "12€", description: "Polpette di manzo con ragù di pomodoro." },
    { name: "Tris di montanare", price: "9€", description: "Pasta di pizza fritta con ragù di pomodoro, salsiccia, friarielli (broccoli), mortadella e burrata." },
    { name: "Sauté di frutti di mare", price: "18€", description: "Impepata di cozze, vongole e crostini." },
    { name: "Cozze alla marinara", price: "11€", description: "Cozze, pomodoro, crostini, aglio." },
    { name: "Carpaccio di bresaola", price: "12€", description: "Bresaola, rucola, pomodorini e grana." },
    { name: "Carpaccio di manzo", price: "12€", description: "Carpaccio di manzo, rucola e grana." },
    { name: "Frittattina", price: "4€", description: "Tortino di bucatini con piselli, besciamella e carne macinata." },
    { name: "Ciurilli (3 pezzi)", price: "12€", description: "Fiore di zucca ripieno di ricotta." },
  ],
  "PRIMI PIATTI": [
    { name: "Lasagna di carne", price: "13€", description: "Lasagna fatta in casa con carne." },
    { name: "Penne con polpette al sugo", price: "14€", description: "Pasta con ragù di pomodoro e polpette di manzo." },
    { name: "Spaghetti carbonara", price: "13€", description: "Spaghetti con guanciale, uovo e parmigiano." },
    { name: "Rigatoni salsiccia e funghi", price: "14€", description: "Pasta con salsiccia, funghi porcini e provola." },
    { name: "Rigatoni bolognese", price: "13€", description: "Pasta con pomodoro, carne macinata, basilico e parmigiano." },
    { name: "Paccheri Maria", price: "15€", description: "Maccheroni XXL con pomodorini, burrata e granella di pistacchio." },
    { name: "Penne 4 formaggi", price: "12€", description: "Pasta con quattro formaggi." },
    { name: "Paccheri frutti di mare", price: "20€", description: "Maccheroni XXL con frutti di mare." },
    { name: "Rigatoni Siciliana", price: "12€", description: "Pomodoro, melanzane, basilico e parmigiano fatto in casa." },
    { name: "Spaghetti alle vongole", price: "16€", description: "Spaghetti con vongole." },
    { name: "Ziti genovese", price: "16€", description: "Maccheroni con spezzatino di manzo e cipolle." },
    { name: "Pasta e patate", price: "13€", description: "Pasta mista con patate, pancetta e provola." },
    { name: "Penne pesto", price: "13€", description: "Pasta con pesto di basilico." },
    { name: "Gnocchi Sorrentina", price: "14€", description: "Pomodorini, mozzarella e basilico." },
    { name: "Spaghetti pomodoro fresco", price: "11€", description: "Spaghetti con pomodoro fresco e basilico." },
    { name: "Penne Arrabiata", price: "12€", description: "Pasta con pomodoro e un tocco piccante." },
    { name: "Scialatielli allo scoglio", price: "20€", description: "Pasta fresca con frutti di mare." },
  ],
  "PASTA FRESCA": [
    { name: "Ravioli 4 formaggi", price: "15€", description: "Pasta fresca con quattro formaggi." },
    { name: "Ravioli funghi", price: "15€", description: "Pasta fresca con funghi porcini e olio di tartufo." },
    { name: "Ravioli burrata", price: "15€", description: "Pasta fresca con burrata, pomodorini e granella di pistacchio." },
  ],
  RISOTTI: [
    { name: "Risotto ai funghi porcini", price: "14€", description: "Riso con funghi porcini" },
    { name: "Risotto alla marinara", price: "16€", description: "Riso con frutti di mare" },
    { name: "Risotto al pomodoro e basilico", price: "12€", description: "Riso con pomodoro fresco e basilico" },
    { name: "Risotto ai quattro formaggi", price: "13€", description: "Riso con quattro formaggi" },
  ],
  "SEGUNDOS PLATOS": [
    { name: "Scaloppine al limone", price: "16€", description: "Scaloppine di vitello al limone" },
    { name: "Pollo alla parmigiana", price: "15€", description: "Pollo impanato con parmigiano" },
    { name: "Salmone alla griglia", price: "18€", description: "Salmone alla griglia con verdure" },
    { name: "Bistecca alla griglia", price: "20€", description: "Bistecca alla griglia" },
  ],
  SALTIMBOCCA: [
    { name: "Saltimbocca alla romana", price: "17€", description: "Vitello con prosciutto di Parma e salvia" },
    { name: "Saltimbocca di pollo", price: "15€", description: "Pollo con prosciutto di Parma e salvia" },
    { name: "Saltimbocca di vitello", price: "18€", description: "Vitello con prosciutto di Parma" },
  ]
},
fr: {
  PIZZE: [
    { name: "FOCACCIA", price: "5€", description: "" },
    { name: "MARINARA", price: "7€", description: "Tomate, ail, origan et basilic" },
    { name: "MARGHERITA", price: "7€", description: "Tomate, mozzarella et basilic" },
    { name: "FILETTO", price: "9€", description: "Tomates cerises, mozzarella et basilic" },
    { name: "BUFALA", price: "10€", description: "Tomate, mozzarella de bufflonne et basilic" },
    { name: "DIAVOLA", price: "10€", description: "Tomate, mozzarella, salami épicé" },
    { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Tomate, mozzarella, jambon cuit et champignons" },
    { name: "SICILIANA", price: "10€", description: "Tomate, mozzarella, anchois et aubergines" },
    { name: "NAPOLI", price: "10€", description: "Tomate, mozzarella, anchois, câpres et olives noires" },
    { name: "ORTOLANA", price: "10€", description: "Tomate, mozzarella, variété de légumes" },
    { name: "CAPRICCIOSA", price: "10€", description: "Tomate, mozzarella, jambon cuit, artichauts, champignons et olives" },
    { name: "CALZONE", price: "12.50€", description: "Tomate, mozzarella, ricotta, jambon cuit" },
    { name: "TROPEA", price: "12.50€", description: "Tomate, mozzarella, thon, oignon rouge de Tropea et olives" },
    { name: "FLOTADOR", price: "12.50€", description: "Croûte farcie à la ricotta, tomate et mozzarella de bufflonne" },
    { name: "CATALANA", price: "13€", description: "Tomate, mozzarella, jambon cuit, œuf et champignons" },
    { name: "CROCCHÉ", price: "12.50€", description: "Jambon cuit, provola et croquettes de pommes de terre" },
    { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Saucisse, brocolis et provola" },
    { name: "CONTADINA", price: "12.50€", description: "Tomate, saucisse, champignons, oignon et mozzarella" },
    { name: "4 FORMAGGI", price: "12.50€", description: "Tomate, mozzarella, gorgonzola, provola et parmesan" },
    { name: "SOFIA", price: "10€", description: "Francfort, frites et mozzarella" },
    { name: "MARIA", price: "10€", description: "Poulet, frites et mozzarella" },
    { name: "EMIGRANTE", price: "12€", description: "Tomate, mozzarella, jambon de Parme, roquette et copeaux de parmesan" },
    { name: "PARMIGIANA", price: "11€", description: "Tomate, gâteau d'aubergines, provola et basilic" },
    { name: "MORTADELLA", price: "12€", description: "Tomate, mozzarella de bufflonne, mortadelle, burrata et pistache" },
    { name: "VESUVIO", price: "13€", description: "Pizza en forme de volcan avec tomate, ricotta, salami et mozzarella" },
    { name: "ARICCIA", price: "12€", description: "Porchetta (porc rôti), provola et aubergines" },
    { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, jambon cuit, mozzarella et tomate" },
    { name: "PIZZA MASSANIELLO", price: "12€", description: "Tomates cerises, burrata et éclats de pistache" },
    { name: "MIMOSA", price: "12€", description: "Crème, jambon cuit, maïs et mozzarella" },
  ],
  ANTIPASTI: [
    { name: "Insalata Cesar", price: "12€", description: "Mélange de salades, oignon, tomates cerises, poulet, croûtons et sauce césar." },
    { name: "Insalata Primavera", price: "12€", description: "Mélange de salades, tomates séchées, fromage de chèvre, miel et noix." },
    { name: "Bruschetta", price: "6€", description: "Pain avec tomates cerises, ail, origan et basilic." },
    { name: "Bruschetta Mista", price: "10€", description: "Selon l'inspiration du chef." },
    { name: "Parmigiana di Melanzane", price: "13€", description: "Gâteau d'aubergines, sauce tomate, parmesan, mozzarella et basilic." },
    { name: "Provolone al forno", price: "11€", description: "Provolone, sauce tomate et origan." },
    { name: "Antipasto della casa", price: "20€", description: "Selon l'inspiration du chef." },
    { name: "Frittura napoletana (2 personnes)", price: "14€", description: "Croquettes de pommes de terre, arancini de riz, montanare et mozzarella panée." },
    { name: "Polpette al sugo", price: "12€", description: "Boulettes de viande de bœuf avec ragoût de tomates." },
    { name: "Tris di montanare", price: "9€", description: "Pâte à pizza frite avec ragoût de tomates, saucisse, friarielli (brocolis), mortadelle et burrata." },
    { name: "Sauté di frutti di mare", price: "18€", description: "Poêlée de moules, palourdes et croûtons." },
    { name: "Cozze alla marinara", price: "11€", description: "Moules, tomates, croûtons, ail." },
    { name: "Carpaccio di bresaola", price: "12€", description: "Bresaola, roquette, tomates cerises et grana." },
    { name: "Carpaccio di manzo", price: "12€", description: "Carpaccio de boeuf, roquette et grana." },
    { name: "Frittattina", price: "4€", description: "Gâteau de bucatini aux petits pois, béchamel et viande hachée." },
    { name: "Ciurilli (3 pièces)", price: "12€", description: "Fleur de courgette farcie à la ricotta." },
  ],
  "PRIMI PIATTI": [
    { name: "Lasagna di carne", price: "13€", description: "Lasagnes maison à la viande." },
    { name: "Penne con polpette al sugo", price: "14€", description: "Pâtes avec ragoût de tomates et boulettes de viande de bœuf." },
    { name: "Spaghetti carbonara", price: "13€", description: "Spaghetti au guanciale, aux œufs et au parmesan." },
    { name: "Rigatoni salsiccia e funghi", price: "14€", description: "Pâtes avec butifarra, cèpes et provola." },
    { name: "Rigatoni bolognese", price: "13€", description: "Pâtes à la tomate, viande hachée, basilic et parmesan." },
    { name: "Paccheri Maria", price: "15€", description: "Macaronis XXL avec tomates cerises, burrata et grains de pistache." },
    { name: "Penne 4 formaggi", price: "12€", description: "Pâtes aux quatre fromages." },
    { name: "Paccheri frutti di mare", price: "20€", description: "Macaronis XXL aux fruits de mer." },
    { name: "Rigatoni Siciliana", price: "12€", description: "Tomate, aubergine, basilic et parmesan maison." },
    { name: "Spaghetti alle vongole", price: "16€", description: "Spaghettis aux palourdes." },
    { name: "Ziti genovese", price: "16€", description: "Macaronis avec ragoût de bœuf et oignons." },
    { name: "Pasta e patate", price: "13€", description: "Pâtes mixtes avec pomme de terre, pancetta et provola." },
    { name: "Penne pesto", price: "13€", description: "Pâtes au pesto de basilic." },
    { name: "Gnocchi Sorrentina", price: "14€", description: "Tomates cerises, mozzarella et basilic." },
    { name: "Spaghetti pomodoro fresco", price: "11€", description: "Spaghettis à la tomate fraîche et au basilic." },
    { name: "Penne Arrabiata", price: "12€", description: "Pâtes avec tomate et une touche épicée." },
    { name: "Scialatielli allo scoglio", price: "20€", description: "Pâtes fraîches aux fruits de mer." },
  ],
  "PASTA FRESCA": [
    { name: "Ravioli 4 formaggi", price: "15€", description: "Pâtes fraîches aux 4 fromages." },
    { name: "Ravioli funghi", price: "15€", description: "Pâtes fraîches aux cèpes et huile de truffe." },
    { name: "Ravioli burrata", price: "15€", description: "Pâtes fraîches avec burrata, tomates cerises et grains de pistache." },
  ],
  RISOTTI: [
    { name: "Risotto ai funghi porcini", price: "14€", description: "Riz aux champignons porcini" },
    { name: "Risotto alla marinara", price: "16€", description: "Riz aux fruits de mer" },
    { name: "Risotto al pomodoro e basilico", price: "12€", description: "Riz à la tomate fraîche et au basilic" },
    { name: "Risotto ai quattro formaggi", price: "13€", description: "Riz aux quatre fromages" },
  ],
  "SEGUNDOS PLATOS": [
    { name: "Scaloppine al limone", price: "16€", description: "Escalopes de veau au citron" },
    { name: "Pollo alla parmigiana", price: "15€", description: "Poulet pané au parmesan" },
    { name: "Salmone alla griglia", price: "18€", description: "Saumon grillé aux légumes" },
    { name: "Bistecca alla griglia", price: "20€", description: "Bistecca alla griglia" },
  ],
  SALTIMBOCCA: [
    { name: "Saltimbocca alla romana", price: "17€", description: "Veau au jambon de Parme et à la sauge" },
    { name: "Saltimbocca di pollo", price: "15€", description: "Poulet au jambon de Parme et à la sauge" },
    { name: "Saltimbocca di vitello", price: "18€", description: "Veau au jambon de Parme" },
  ]
}
}

export default function MasianelloRestaurant() {
const [activeSection, setActiveSection] = useState<string | null>(null)
const [currentLanguage, setCurrentLanguage] = useState<'es' | 'en' | 'it' | 'fr'>('es')
const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  people: "",
  comments: ""
})
const [isSubmitting, setIsSubmitting] = useState(false)
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

const t = translations[currentLanguage]
const currentMenuSections = menuSections[currentLanguage]

const toggleSection = (section: string) => {
  setActiveSection(activeSection === section ? null : section)
  
  // On mobile, scroll to menu section when a category is selected
  if (window.innerWidth < 768) {
    setTimeout(() => {
      const menuElement = document.getElementById("menu")
      if (menuElement) {
        const headerHeight = 80 // Account for fixed header
        const elementPosition = menuElement.offsetTop + 400 // Scroll a bit further down to show the opened section
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth"
        })
      }
    }, 100)
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

const changeLanguage = (lang: 'es' | 'en' | 'it' | 'fr') => {
  setCurrentLanguage(lang)
  setShowLanguageDropdown(false)
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time || !formData.people) {
    alert(t.camposRequeridos)
    return
  }

  setIsSubmitting(true)
  setSubmitStatus('idle')

  try {
    const response = await fetch('/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setSubmitStatus('success')
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        people: "",
        comments: ""
      })
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } else {
      setSubmitStatus('error')
    }
  } catch (error) {
    console.error('Error:', error)
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

return (
  <div className="min-h-screen bg-white font-sans">
    {/* Header */}
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20masianello.jpg-PoeJis7naMvldQQ1afu6O6i6CLFhwq.jpeg"
              alt="Masaniello Logo"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-red-600">Masaniello</h1>
              <p className="text-sm text-gray-600">Pizzería Napolitana</p>
            </div>
          </div>

          {/* Mobile Header - Language Selector and Buttons */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors font-medium bg-white border border-gray-200 rounded-lg px-3 py-2"
              >
                <img 
                  src={flags[currentLanguage] || "/placeholder.svg"} 
                  alt={`${currentLanguage} flag`}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px]">
                  {Object.entries(flags).map(([lang, flagUrl]) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang as 'es' | 'en' | 'it' | 'fr')}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-red-50 transition-colors"
                    >
                      <img 
                        src={flagUrl || "/placeholder.svg"} 
                        alt={`${lang} flag`}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium">{lang.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Reservation Buttons */}
            <div className="flex space-x-2">
              <a
                href="tel:931244912"
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/masaniellobcn/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollToSection("reservation")}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                <img 
                  src={flags[currentLanguage] || "/placeholder.svg"} 
                  alt={`${currentLanguage} flag`}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px]">
                  {Object.entries(flags).map(([lang, flagUrl]) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang as 'es' | 'en' | 'it' | 'fr')}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-red-50 transition-colors"
                    >
                      <img 
                        src={flagUrl || "/placeholder.svg"} 
                        alt={`${lang} flag`}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium">{lang.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              {t.inicio}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              {t.quienesSomos}
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              {t.carta}
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              {t.ubicacion}
            </button>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/masaniellobcn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollToSection("reservation")}
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span className="font-medium text-sm">{t.reservarOnline}</span>
              </button>
              <a
                href="tel:931244912"
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium text-sm">{t.reserva}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>

    {/* Home Section */}
    <section
      id="home"
      className="h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pizza2.jpg-UPcZ9izXd4El36ZF4w5cs5Xuof67Dp.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20masianello.jpg-PoeJis7naMvldQQ1afu6O6i6CLFhwq.jpeg"
              alt="Logo Masaniello"
              className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-red-600 shadow-xl"
            />
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/masianello.jpg-it7wy4BILI2ObOcG8gWNDE7VWHzd74.jpeg"
                alt="Masaniello Historical Portrait"
                className="w-24 h-28 md:w-36 md:h-40 rounded-lg border-4 border-red-600 shadow-xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                1647
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl mb-16 text-white font-light italic">
            {t.autenticaPizzeria}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollToSection("menu")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t.verCarta}
            </button>
            <button
              onClick={() => scrollToSection("reservation")}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              {t.reservarMesa}
            </button>
          </div>

          {/* Mobile Reservation Buttons */}
          <div className="md:hidden flex flex-col gap-4 mb-8">
            <a
              href="tel:931244912"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Llamar para Reservar
            </a>
            <button
              onClick={() => scrollToSection("reservation")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Reservar por Email
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-sm">
              <Home className="w-4 h-4 text-red-600" />
              <span className="font-medium">{t.tradicionNapolitana}</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-red-600" />
              <span className="font-medium">13:00 - 16:00 | 19:00 - 24:00</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-red-600" />
              <span className="font-medium">C/ de Galileu, 1</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Menu Section */}
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">{t.nuestraCarta}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">{t.saboresNapoles}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-8">
            {Object.entries(currentMenuSections).map(([sectionName, items]) => {
              const images = {
                PIZZE: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pizze-section-lVmB2GXXs0WZnLCAPjgtQTR15pGBMF.png",
                ANTIPASTI: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antipasti-section-u57Yi1jo0O8Wogll8MXWyojzkWwQZZ.png",
                "PRIMI PIATTI": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/primi-piatti-section-NWZLbEzsadxHhiJUnepqn7Lii4LbfK.png",
                "PASTA FRESCA": "/fresh-pasta-ravioli.png",
                RISOTTI: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/un-tazon-de-risotto-cremoso-cubierto-de-queso-parmesano-y-perejil.jpg-zKCDIAltNPswCVI88OHJkFq24EzNpJ.jpeg",
                "SEGUNDOS PLATOS": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/entrecot-de-vaca-vieja-a-la-plancha.jpg-Uo3lXgJGHvz5aakdQ9SCAxaEAye87l.jpeg",
                SALTIMBOCCA: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deliciosos-rollitos-de-pollo-rellenos-de-judias-verdes-y-zanahorias-envueltas-en-tiras-de-tocino.jpg-pJVjS0OST2TsRRkWUSDbMAWutgjWGz.jpeg",
              }

              return (
                <button
                  key={sectionName}
                  onClick={() => toggleSection(sectionName)}
                  className="bg-red-600 hover:bg-red-700 text-white p-4 md:p-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={images[sectionName as keyof typeof images] || "/placeholder.svg?height=64&width=64"}
                      alt={sectionName}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-2 md:mb-4 object-cover border-2 border-white"
                    />
                    <h3 className="text-sm md:text-xl font-bold uppercase tracking-wide text-center leading-tight">{sectionName}</h3>
                    <p className="text-red-100 text-xs md:text-sm mt-1">{items.length} {t.platos}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {activeSection && (
            <div className="border border-red-200 rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-2xl font-bold uppercase tracking-wide">{activeSection}</h3>
              </div>
              <div className="bg-white p-6">
                <div className="grid gap-3">
                  {currentMenuSections[activeSection as keyof typeof currentMenuSections].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start p-3 border-b border-red-100 last:border-b-0 hover:bg-red-50 transition-colors duration-200"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-red-600 text-base">{item.name}</h4>
                        {item.description && (
                          <p className="text-gray-600 mt-1 text-sm leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      <div className="ml-4 text-right">
                        <span className="text-lg font-bold text-red-600">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-16 bg-gradient-to-br from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">{t.masianelloTitle}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-bold text-red-600">{t.historiaHeroe}</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {t.aboutText1}
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                {t.aboutText2}
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-red-600 to-red-800 rounded-lg transform rotate-3 shadow-2xl">
                <div className="absolute inset-4 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/masianello.jpg-it7wy4BILI2ObOcG8gWNDE7VWHzd74.jpeg"
                      alt="Masaniello"
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-xl font-bold text-red-600">{t.masianelloTitle}</h4>
                    <p className="text-gray-600 mt-2">1620 - 1647</p>
                    <p className="text-sm text-gray-500 mt-1">{t.heroeNapoles}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Location Section */}
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-4">{t.ubicacion}</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4">{t.direccion}</h3>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Carrer de Galileu, 1, Barcelona</span>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4">{t.horarios}</h3>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Clock className="w-5 h-5 text-red-600" />
                  <div>
                    <p>{t.lunesViernes}</p>
                    <p>13:00 - 16:00 | 19:00 - 24:00</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4">{t.contacto}</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Phone className="w-5 h-5 text-red-600" />
                    <span>931 244 912</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Instagram className="w-5 h-5 text-red-600" />
                    <span>@masaniellobcn</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-80 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0234567890123!2d2.1234567890123456!3d41.38879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f8b8b8b8b8%3A0x1234567890123456!2sCarrer%20de%20Galileu%2C%201%2C%2008001%20Barcelona%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Masaniello - Carrer de Galileu, 1, Barcelona"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Reservation Section */}
    <section id="reservation" className="py-16 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">{t.reservarMesa}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">Completa el formulario y nos pondremos en contacto contigo</p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.nombre} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.telefono} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {t.fecha} *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {t.hora} *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">--:--</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                    <option value="22:30">22:30</option>
                    <option value="23:00">23:00</option>
                    <option value="23:30">23:30</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    {t.personas} *
                  </label>
                  <select
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar</option>
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.comentarios}
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  placeholder="Alergias, preferencias de mesa, etc."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  {t.reservaEnviada}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {t.errorReserva}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? t.enviando : t.enviarReserva}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-red-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Masaniello</h3>
            <p className="text-red-100 text-sm">
              {t.autenticaCocina}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t.contacto}</h4>
            <div className="space-y-2 text-red-100 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Carrer de Galileu, 1, Barcelona</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>931 244 912</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <span>@masaniellobcn</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t.horarios}</h4>
            <div className="space-y-1 text-red-100 text-sm">
              <p>{t.lunesViernes}</p>
              <p>13:00 - 16:00</p>
              <p>19:00 - 24:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-500 mt-6 pt-6 text-center text-red-100 text-sm">
          <p>{t.derechosReservados}</p>
        </div>
      </div>
    </footer>
  </div>
)
}
