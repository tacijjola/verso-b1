import React, { useState, useEffect } from 'react';

// Complete curriculum data
const curriculum = {
  A0: {
    name: "Principiante Assoluto",
    description: "Start from zero - greetings, numbers, and first words",
    color: "#E07A5F",
    lessons: [
      {
        id: "a0-1",
        title: "Ciao! Greetings & Introductions",
        scenario: "Meeting people for the first time",
        vocabulary: [
          { italian: "Ciao", english: "Hi / Bye (informal)", example: "Ciao, come stai?" },
          { italian: "Buongiorno", english: "Good morning / Good day", example: "Buongiorno, signora!" },
          { italian: "Buonasera", english: "Good evening", example: "Buonasera a tutti!" },
          { italian: "Arrivederci", english: "Goodbye (formal)", example: "Arrivederci e grazie!" },
          { italian: "Mi chiamo", english: "My name is", example: "Mi chiamo Marco." },
          { italian: "Come ti chiami?", english: "What's your name? (informal)", example: "Ciao! Come ti chiami?" },
          { italian: "Piacere", english: "Nice to meet you", example: "Piacere di conoscerti!" },
          { italian: "Come stai?", english: "How are you? (informal)", example: "Ciao Maria, come stai?" },
          { italian: "Sto bene", english: "I'm fine", example: "Sto bene, grazie!" },
          { italian: "Grazie", english: "Thank you", example: "Grazie mille!" },
          { italian: "Prego", english: "You're welcome", example: "Prego, di niente!" },
          { italian: "Sì", english: "Yes", example: "Sì, certo!" },
          { italian: "No", english: "No", example: "No, grazie." }
        ],
        dialogue: {
          title: "At a party",
          lines: [
            { speaker: "Marco", text: "Ciao! Mi chiamo Marco. E tu, come ti chiami?" },
            { speaker: "Sofia", text: "Ciao Marco! Mi chiamo Sofia. Piacere!" },
            { speaker: "Marco", text: "Piacere mio! Come stai?" },
            { speaker: "Sofia", text: "Sto bene, grazie! E tu?" },
            { speaker: "Marco", text: "Molto bene, grazie!" }
          ]
        },
        grammar: "In Italian, 'Ciao' is used for both hello AND goodbye, but only with friends and family. Use 'Buongiorno' (morning/afternoon) or 'Buonasera' (evening) in formal situations.",
        multipleChoice: [
          { question: "How do you say 'Good morning' in Italian?", options: ["Buonasera", "Buongiorno", "Ciao", "Arrivederci"], correct: 1 },
          { question: "What does 'Mi chiamo' mean?", options: ["How are you?", "Nice to meet you", "My name is", "Goodbye"], correct: 2 },
          { question: "'Piacere' is used when...", options: ["Saying goodbye", "Meeting someone", "Ordering food", "Asking directions"], correct: 1 },
          { question: "How do you respond to 'Grazie'?", options: ["Ciao", "Prego", "Sì", "Buongiorno"], correct: 1 },
          { question: "Which greeting is informal?", options: ["Buongiorno", "Arrivederci", "Ciao", "Buonasera"], correct: 2 }
        ],
        matching: [
          { italian: "Ciao", english: "Hi/Bye" },
          { italian: "Grazie", english: "Thank you" },
          { italian: "Piacere", english: "Nice to meet you" },
          { italian: "Sto bene", english: "I'm fine" },
          { italian: "Arrivederci", english: "Goodbye" }
        ]
      },
      {
        id: "a0-2",
        title: "Numbers & Basic Questions",
        scenario: "Counting and asking simple questions",
        vocabulary: [
          { italian: "uno", english: "one", example: "Un caffè, per favore." },
          { italian: "due", english: "two", example: "Due biglietti." },
          { italian: "tre", english: "three", example: "Tre persone." },
          { italian: "quattro", english: "four", example: "Quattro stagioni." },
          { italian: "cinque", english: "five", example: "Cinque minuti." },
          { italian: "sei", english: "six", example: "Sei euro." },
          { italian: "sette", english: "seven", example: "Sette giorni." },
          { italian: "otto", english: "eight", example: "Otto ore." },
          { italian: "nove", english: "nine", example: "Nove mesi." },
          { italian: "dieci", english: "ten", example: "Dieci anni." },
          { italian: "Quanti?", english: "How many?", example: "Quanti anni hai?" },
          { italian: "Quanto costa?", english: "How much does it cost?", example: "Quanto costa questo?" },
          { italian: "Che cos'è?", english: "What is it?", example: "Che cos'è questo?" }
        ],
        dialogue: {
          title: "At a market stall",
          lines: [
            { speaker: "Cliente", text: "Buongiorno! Quanto costa questo?" },
            { speaker: "Venditore", text: "Buongiorno! Costa cinque euro." },
            { speaker: "Cliente", text: "Va bene. Due, per favore." },
            { speaker: "Venditore", text: "Sono dieci euro in tutto." },
            { speaker: "Cliente", text: "Ecco a lei. Grazie!" }
          ]
        },
        grammar: "Italian numbers 1-10 are essential building blocks. Notice how 'uno' changes to 'un' before masculine nouns (un caffè) and 'una' before feminine nouns (una pizza).",
        multipleChoice: [
          { question: "What is 'sette' in English?", options: ["Six", "Seven", "Eight", "Five"], correct: 1 },
          { question: "How do you ask 'How much does it cost?'", options: ["Quanti?", "Che cos'è?", "Quanto costa?", "Come stai?"], correct: 2 },
          { question: "What number is 'quattro'?", options: ["3", "4", "5", "6"], correct: 1 },
          { question: "'Dieci' means...", options: ["Eight", "Nine", "Ten", "Eleven"], correct: 2 },
          { question: "Which is the correct order?", options: ["uno, tre, due", "uno, due, tre", "due, uno, tre", "tre, due, uno"], correct: 1 }
        ],
        matching: [
          { italian: "tre", english: "three" },
          { italian: "otto", english: "eight" },
          { italian: "cinque", english: "five" },
          { italian: "nove", english: "nine" },
          { italian: "sei", english: "six" }
        ]
      },
      {
        id: "a0-3",
        title: "Days, Months & Time",
        scenario: "Making appointments and talking about schedules",
        vocabulary: [
          { italian: "lunedì", english: "Monday", example: "Ci vediamo lunedì." },
          { italian: "martedì", english: "Tuesday", example: "Martedì ho lezione." },
          { italian: "mercoledì", english: "Wednesday", example: "Mercoledì è festa." },
          { italian: "giovedì", english: "Thursday", example: "Giovedì lavoro." },
          { italian: "venerdì", english: "Friday", example: "Venerdì sera usciamo!" },
          { italian: "sabato", english: "Saturday", example: "Sabato vado al mare." },
          { italian: "domenica", english: "Sunday", example: "Domenica riposo." },
          { italian: "oggi", english: "today", example: "Oggi è lunedì." },
          { italian: "domani", english: "tomorrow", example: "Domani piove." },
          { italian: "ieri", english: "yesterday", example: "Ieri era bello." },
          { italian: "Che giorno è?", english: "What day is it?", example: "Che giorno è oggi?" },
          { italian: "Che ore sono?", english: "What time is it?", example: "Scusa, che ore sono?" }
        ],
        dialogue: {
          title: "Making plans",
          lines: [
            { speaker: "Anna", text: "Ciao! Che giorno ci vediamo?" },
            { speaker: "Luca", text: "Che ne dici di venerdì?" },
            { speaker: "Anna", text: "Venerdì non posso. E sabato?" },
            { speaker: "Luca", text: "Sabato va bene! A che ora?" },
            { speaker: "Anna", text: "Alle tre del pomeriggio?" },
            { speaker: "Luca", text: "Perfetto! A sabato!" }
          ]
        },
        grammar: "Days of the week in Italian are NOT capitalized (unlike English). They're all masculine except 'domenica' (feminine). Use 'il' before days to mean 'on Mondays' regularly: 'il lunedì lavoro' = 'I work on Mondays'.",
        multipleChoice: [
          { question: "What day comes after giovedì?", options: ["Mercoledì", "Venerdì", "Sabato", "Martedì"], correct: 1 },
          { question: "'Domani' means...", options: ["Yesterday", "Today", "Tomorrow", "Next week"], correct: 2 },
          { question: "Which day is the weekend?", options: ["Lunedì", "Mercoledì", "Giovedì", "Sabato"], correct: 3 },
          { question: "How do you ask 'What day is it?'", options: ["Che ore sono?", "Che giorno è?", "Come stai?", "Quanto costa?"], correct: 1 },
          { question: "'Ieri' in English is...", options: ["Today", "Tomorrow", "Yesterday", "Now"], correct: 2 }
        ],
        matching: [
          { italian: "lunedì", english: "Monday" },
          { italian: "venerdì", english: "Friday" },
          { italian: "domenica", english: "Sunday" },
          { italian: "oggi", english: "today" },
          { italian: "domani", english: "tomorrow" }
        ]
      },
      {
        id: "a0-4",
        title: "Colors & Descriptions",
        scenario: "Describing things you see",
        vocabulary: [
          { italian: "rosso", english: "red", example: "La mela è rossa." },
          { italian: "blu", english: "blue", example: "Il cielo è blu." },
          { italian: "verde", english: "green", example: "L'erba è verde." },
          { italian: "giallo", english: "yellow", example: "Il sole è giallo." },
          { italian: "nero", english: "black", example: "Il caffè è nero." },
          { italian: "bianco", english: "white", example: "La neve è bianca." },
          { italian: "grande", english: "big", example: "Una casa grande." },
          { italian: "piccolo", english: "small", example: "Un bambino piccolo." },
          { italian: "bello", english: "beautiful", example: "Che bella giornata!" },
          { italian: "buono", english: "good", example: "Questo è buono!" },
          { italian: "nuovo", english: "new", example: "Ho un telefono nuovo." },
          { italian: "vecchio", english: "old", example: "Un palazzo vecchio." }
        ],
        dialogue: {
          title: "Shopping for clothes",
          lines: [
            { speaker: "Cliente", text: "Mi piace questa maglietta!" },
            { speaker: "Commesso", text: "È bella, vero? C'è anche in rosso." },
            { speaker: "Cliente", text: "Preferisco il blu. È grande?" },
            { speaker: "Commesso", text: "No, è piccola. Vuole una taglia più grande?" },
            { speaker: "Cliente", text: "Sì, grazie!" }
          ]
        },
        grammar: "Italian adjectives change based on gender and number. Most adjectives ending in -o become -a for feminine: 'rosso' (m) → 'rossa' (f). Adjectives ending in -e stay the same: 'grande' works for both.",
        multipleChoice: [
          { question: "What color is 'verde'?", options: ["Red", "Blue", "Green", "Yellow"], correct: 2 },
          { question: "How do you say 'beautiful' in Italian?", options: ["Buono", "Bello", "Grande", "Nuovo"], correct: 1 },
          { question: "'Piccolo' is the opposite of...", options: ["Nuovo", "Vecchio", "Grande", "Bello"], correct: 2 },
          { question: "The feminine of 'bianco' is...", options: ["Bianco", "Bianca", "Bianchi", "Bianche"], correct: 1 },
          { question: "'Nero' means...", options: ["White", "Gray", "Black", "Brown"], correct: 2 }
        ],
        matching: [
          { italian: "rosso", english: "red" },
          { italian: "giallo", english: "yellow" },
          { italian: "grande", english: "big" },
          { italian: "vecchio", english: "old" },
          { italian: "bello", english: "beautiful" }
        ]
      },
      {
        id: "a0-5",
        title: "Family & Relationships",
        scenario: "Talking about your family",
        vocabulary: [
          { italian: "la famiglia", english: "the family", example: "La mia famiglia è grande." },
          { italian: "la madre / la mamma", english: "mother / mom", example: "Mia madre si chiama Rosa." },
          { italian: "il padre / il papà", english: "father / dad", example: "Mio padre lavora molto." },
          { italian: "il fratello", english: "brother", example: "Ho un fratello." },
          { italian: "la sorella", english: "sister", example: "Mia sorella ha vent'anni." },
          { italian: "i genitori", english: "parents", example: "I miei genitori vivono a Roma." },
          { italian: "il figlio / la figlia", english: "son / daughter", example: "Hanno due figli." },
          { italian: "il marito", english: "husband", example: "Mio marito è italiano." },
          { italian: "la moglie", english: "wife", example: "Mia moglie è americana." },
          { italian: "il nonno / la nonna", english: "grandfather / grandmother", example: "I nonni sono anziani." },
          { italian: "sposato/a", english: "married", example: "Sei sposato?" },
          { italian: "single", english: "single", example: "Sono single." }
        ],
        dialogue: {
          title: "Talking about family",
          lines: [
            { speaker: "Maria", text: "Hai fratelli o sorelle?" },
            { speaker: "Paolo", text: "Sì, ho due sorelle e un fratello." },
            { speaker: "Maria", text: "Che bella famiglia grande! Io sono figlia unica." },
            { speaker: "Paolo", text: "I tuoi genitori dove vivono?" },
            { speaker: "Maria", text: "Vivono a Milano con mia nonna." }
          ]
        },
        grammar: "Possessive adjectives agree with the noun they modify, not the owner: 'mia madre' (my mother - feminine), 'mio padre' (my father - masculine). With close family members, you don't use 'il/la': 'mia madre' NOT 'la mia madre'.",
        multipleChoice: [
          { question: "'Fratello' means...", options: ["Sister", "Brother", "Father", "Son"], correct: 1 },
          { question: "How do you say 'parents'?", options: ["I figli", "I nonni", "I genitori", "La famiglia"], correct: 2 },
          { question: "'Moglie' is...", options: ["Husband", "Wife", "Daughter", "Mother"], correct: 1 },
          { question: "The correct form is...", options: ["La mia madre", "Mia madre", "Il mia madre", "Mio madre"], correct: 1 },
          { question: "'Figlia' means...", options: ["Son", "Daughter", "Sister", "Wife"], correct: 1 }
        ],
        matching: [
          { italian: "madre", english: "mother" },
          { italian: "fratello", english: "brother" },
          { italian: "nonno", english: "grandfather" },
          { italian: "marito", english: "husband" },
          { italian: "figlia", english: "daughter" }
        ]
      }
    ]
  },
  A1: {
    name: "Elementare",
    description: "Build foundations - present tense, daily situations",
    color: "#81B29A",
    lessons: [
      {
        id: "a1-1",
        title: "Al Bar - At the Café",
        scenario: "Ordering coffee and snacks like a local",
        vocabulary: [
          { italian: "un caffè", english: "an espresso", example: "Un caffè, per favore." },
          { italian: "un cappuccino", english: "a cappuccino", example: "Vorrei un cappuccino." },
          { italian: "un cornetto", english: "a croissant", example: "Un cornetto alla crema." },
          { italian: "il conto", english: "the bill", example: "Il conto, per favore." },
          { italian: "vorrei", english: "I would like", example: "Vorrei un tè." },
          { italian: "per favore", english: "please", example: "Un'acqua, per favore." },
          { italian: "bere", english: "to drink", example: "Cosa vuoi bere?" },
          { italian: "mangiare", english: "to eat", example: "Voglio mangiare qualcosa." },
          { italian: "caldo", english: "hot", example: "Il caffè è caldo." },
          { italian: "freddo", english: "cold", example: "Un tè freddo, grazie." },
          { italian: "con", english: "with", example: "Caffè con latte." },
          { italian: "senza", english: "without", example: "Senza zucchero." }
        ],
        dialogue: {
          title: "Morning at the bar",
          lines: [
            { speaker: "Barista", text: "Buongiorno! Cosa prende?" },
            { speaker: "Cliente", text: "Buongiorno! Vorrei un cappuccino e un cornetto." },
            { speaker: "Barista", text: "Cornetto vuoto o ripieno?" },
            { speaker: "Cliente", text: "Alla crema, grazie." },
            { speaker: "Barista", text: "Subito! Sono quattro euro e cinquanta." },
            { speaker: "Cliente", text: "Ecco a lei. Grazie mille!" }
          ]
        },
        grammar: "'Vorrei' (I would like) is the polite way to order. It comes from 'volere' (to want). Use 'Prendo...' (I'll have...) for a more casual order. Remember: Italians drink cappuccino only in the morning!",
        multipleChoice: [
          { question: "How do you politely order in Italian?", options: ["Voglio", "Vorrei", "Ho", "Prendo"], correct: 1 },
          { question: "'Senza' means...", options: ["With", "Without", "More", "Less"], correct: 1 },
          { question: "What is 'il conto'?", options: ["The coffee", "The bill", "The table", "The waiter"], correct: 1 },
          { question: "'Freddo' is the opposite of...", options: ["Grande", "Piccolo", "Caldo", "Buono"], correct: 2 },
          { question: "A 'cornetto' is a...", options: ["Coffee", "Croissant", "Sandwich", "Juice"], correct: 1 }
        ],
        matching: [
          { italian: "vorrei", english: "I would like" },
          { italian: "bere", english: "to drink" },
          { italian: "caldo", english: "hot" },
          { italian: "senza", english: "without" },
          { italian: "il conto", english: "the bill" }
        ]
      },
      {
        id: "a1-2",
        title: "Shopping & Bigger Numbers",
        scenario: "Buying things and understanding prices",
        vocabulary: [
          { italian: "venti", english: "twenty", example: "Costa venti euro." },
          { italian: "trenta", english: "thirty", example: "Ho trent'anni." },
          { italian: "quaranta", english: "forty", example: "Quaranta minuti." },
          { italian: "cinquanta", english: "fifty", example: "Cinquanta per cento." },
          { italian: "cento", english: "one hundred", example: "Cento grammi." },
          { italian: "comprare", english: "to buy", example: "Voglio comprare questo." },
          { italian: "pagare", english: "to pay", example: "Posso pagare con carta?" },
          { italian: "lo sconto", english: "the discount", example: "C'è uno sconto?" },
          { italian: "il negozio", english: "the shop", example: "Quel negozio è bello." },
          { italian: "troppo", english: "too much", example: "È troppo caro!" },
          { italian: "economico", english: "cheap/affordable", example: "È molto economico." },
          { italian: "costoso", english: "expensive", example: "Questa borsa è costosa." }
        ],
        dialogue: {
          title: "At a clothing store",
          lines: [
            { speaker: "Cliente", text: "Scusi, quanto costa questa giacca?" },
            { speaker: "Commesso", text: "Costa ottanta euro." },
            { speaker: "Cliente", text: "È un po' cara. C'è uno sconto?" },
            { speaker: "Commesso", text: "Oggi c'è il venti per cento di sconto!" },
            { speaker: "Cliente", text: "Perfetto! Allora la prendo. Posso pagare con carta?" },
            { speaker: "Commesso", text: "Certo, nessun problema!" }
          ]
        },
        grammar: "Numbers 20-100: venti, trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta, cento. For 21, 28, etc., drop the final vowel: ventuno, ventotto. Use 'euro' (never 'euros') and 'centesimi' for cents.",
        multipleChoice: [
          { question: "What is 'cinquanta'?", options: ["40", "50", "60", "70"], correct: 1 },
          { question: "'Costoso' means...", options: ["Cheap", "Expensive", "Beautiful", "New"], correct: 1 },
          { question: "How do you say 'to buy'?", options: ["Pagare", "Vendere", "Comprare", "Prendere"], correct: 2 },
          { question: "'Troppo' means...", options: ["Very", "A little", "Too much", "Enough"], correct: 2 },
          { question: "What is 21 in Italian?", options: ["Ventiuno", "Ventuno", "Duodeventi", "Venti-uno"], correct: 1 }
        ],
        matching: [
          { italian: "trenta", english: "thirty" },
          { italian: "cento", english: "one hundred" },
          { italian: "pagare", english: "to pay" },
          { italian: "lo sconto", english: "the discount" },
          { italian: "economico", english: "cheap" }
        ]
      },
      {
        id: "a1-3",
        title: "Present Tense Verbs",
        scenario: "Talking about what you do",
        vocabulary: [
          { italian: "parlare", english: "to speak", example: "Parlo italiano." },
          { italian: "lavorare", english: "to work", example: "Lavoro a Milano." },
          { italian: "abitare", english: "to live", example: "Abito in Italia." },
          { italian: "studiare", english: "to study", example: "Studio medicina." },
          { italian: "scrivere", english: "to write", example: "Scrivo una email." },
          { italian: "leggere", english: "to read", example: "Leggo un libro." },
          { italian: "vedere", english: "to see", example: "Vedo un film." },
          { italian: "dormire", english: "to sleep", example: "Dormo otto ore." },
          { italian: "partire", english: "to leave/depart", example: "Parto domani." },
          { italian: "capire", english: "to understand", example: "Capisco tutto!" },
          { italian: "sempre", english: "always", example: "Mangio sempre pasta." },
          { italian: "mai", english: "never", example: "Non bevo mai caffè." }
        ],
        dialogue: {
          title: "Getting to know someone",
          lines: [
            { speaker: "Giulia", text: "Che lavoro fai?" },
            { speaker: "Tom", text: "Lavoro come insegnante. E tu?" },
            { speaker: "Giulia", text: "Studio architettura all'università." },
            { speaker: "Tom", text: "Interessante! Parli altre lingue?" },
            { speaker: "Giulia", text: "Sì, parlo inglese e un po' di spagnolo." },
            { speaker: "Tom", text: "Anch'io parlo spagnolo!" }
          ]
        },
        grammar: "Italian has 3 verb groups: -ARE (parlare), -ERE (scrivere), -IRE (dormire). Present tense endings for -ARE: io parlo, tu parli, lui/lei parla, noi parliamo, voi parlate, loro parlano. The patterns are similar for -ERE and -IRE.",
        multipleChoice: [
          { question: "'Parlo' means...", options: ["You speak", "I speak", "We speak", "They speak"], correct: 1 },
          { question: "Which is an -ERE verb?", options: ["Parlare", "Dormire", "Scrivere", "Abitare"], correct: 2 },
          { question: "'Capisco' comes from...", options: ["Capare", "Capere", "Capire", "Capo"], correct: 2 },
          { question: "'Non... mai' means...", options: ["Not always", "Never", "Sometimes", "Often"], correct: 1 },
          { question: "The 'noi' form of 'abitare' is...", options: ["Abito", "Abitate", "Abitiamo", "Abitano"], correct: 2 }
        ],
        matching: [
          { italian: "parlare", english: "to speak" },
          { italian: "leggere", english: "to read" },
          { italian: "dormire", english: "to sleep" },
          { italian: "capire", english: "to understand" },
          { italian: "sempre", english: "always" }
        ]
      },
      {
        id: "a1-4",
        title: "Directions & The City",
        scenario: "Finding your way around town",
        vocabulary: [
          { italian: "dov'è...?", english: "where is...?", example: "Scusi, dov'è la stazione?" },
          { italian: "a destra", english: "on the right", example: "Gira a destra." },
          { italian: "a sinistra", english: "on the left", example: "È a sinistra." },
          { italian: "dritto / sempre dritto", english: "straight ahead", example: "Vai sempre dritto." },
          { italian: "vicino", english: "near", example: "È vicino al parco." },
          { italian: "lontano", english: "far", example: "Non è lontano." },
          { italian: "la via / la strada", english: "the street", example: "In via Roma." },
          { italian: "la piazza", english: "the square", example: "Ci vediamo in piazza." },
          { italian: "la stazione", english: "the station", example: "Vado alla stazione." },
          { italian: "il supermercato", english: "the supermarket", example: "Devo andare al supermercato." },
          { italian: "la farmacia", english: "the pharmacy", example: "C'è una farmacia qui vicino?" },
          { italian: "l'ospedale", english: "the hospital", example: "Dov'è l'ospedale?" }
        ],
        dialogue: {
          title: "Asking for directions",
          lines: [
            { speaker: "Turista", text: "Scusi, dov'è la stazione?" },
            { speaker: "Signora", text: "Vada sempre dritto, poi giri a sinistra." },
            { speaker: "Turista", text: "È lontano?" },
            { speaker: "Signora", text: "No, sono cinque minuti a piedi." },
            { speaker: "Turista", text: "Grazie mille!" },
            { speaker: "Signora", text: "Prego! Buona giornata!" }
          ]
        },
        grammar: "Use 'a' + article for locations: 'al supermercato' (to the supermarket), 'alla stazione' (to the station), 'all'ospedale' (to the hospital). 'In' is used with street names: 'in via Roma', 'in piazza Duomo'.",
        multipleChoice: [
          { question: "'A destra' means...", options: ["Left", "Right", "Straight", "Behind"], correct: 1 },
          { question: "How do you ask 'Where is...?'", options: ["Che cos'è?", "Dov'è?", "Come è?", "Quando è?"], correct: 1 },
          { question: "'Vicino' is the opposite of...", options: ["Grande", "Lontano", "Piccolo", "Dritto"], correct: 1 },
          { question: "Complete: 'Vai sempre ___'", options: ["destra", "sinistra", "dritto", "vicino"], correct: 2 },
          { question: "'La piazza' is...", options: ["The street", "The square", "The station", "The shop"], correct: 1 }
        ],
        matching: [
          { italian: "a sinistra", english: "on the left" },
          { italian: "vicino", english: "near" },
          { italian: "la stazione", english: "the station" },
          { italian: "la farmacia", english: "the pharmacy" },
          { italian: "sempre dritto", english: "straight ahead" }
        ]
      },
      {
        id: "a1-5",
        title: "Daily Routine",
        scenario: "Describing your typical day",
        vocabulary: [
          { italian: "svegliarsi", english: "to wake up", example: "Mi sveglio alle sette." },
          { italian: "alzarsi", english: "to get up", example: "Mi alzo presto." },
          { italian: "lavarsi", english: "to wash oneself", example: "Mi lavo la faccia." },
          { italian: "vestirsi", english: "to get dressed", example: "Mi vesto velocemente." },
          { italian: "fare colazione", english: "to have breakfast", example: "Faccio colazione al bar." },
          { italian: "andare", english: "to go", example: "Vado al lavoro." },
          { italian: "tornare", english: "to return", example: "Torno a casa alle sei." },
          { italian: "cenare", english: "to have dinner", example: "Ceno con la famiglia." },
          { italian: "la mattina", english: "in the morning", example: "La mattina bevo caffè." },
          { italian: "il pomeriggio", english: "in the afternoon", example: "Il pomeriggio lavoro." },
          { italian: "la sera", english: "in the evening", example: "La sera guardo la TV." },
          { italian: "la notte", english: "at night", example: "La notte dormo bene." }
        ],
        dialogue: {
          title: "A typical day",
          lines: [
            { speaker: "Marco", text: "A che ora ti svegli di solito?" },
            { speaker: "Sara", text: "Mi sveglio alle sei e mezza." },
            { speaker: "Marco", text: "Così presto! E poi cosa fai?" },
            { speaker: "Sara", text: "Mi alzo, mi lavo e faccio colazione." },
            { speaker: "Marco", text: "Io non faccio mai colazione la mattina!" },
            { speaker: "Sara", text: "Male! La colazione è importante!" }
          ]
        },
        grammar: "Reflexive verbs (svegliarsi, alzarsi, lavarsi) use reflexive pronouns: mi (myself), ti (yourself), si (himself/herself), ci (ourselves), vi (yourselves), si (themselves). The pronoun goes before the verb: 'Mi sveglio' (I wake up).",
        multipleChoice: [
          { question: "'Mi alzo' means...", options: ["I wake up", "I get up", "I go", "I sleep"], correct: 1 },
          { question: "Which is a reflexive verb?", options: ["Mangiare", "Parlare", "Vestirsi", "Andare"], correct: 2 },
          { question: "'La sera' means...", options: ["The morning", "The afternoon", "The evening", "The night"], correct: 2 },
          { question: "Complete: '___ colazione alle otto'", options: ["Ho", "Faccio", "Sono", "Vado"], correct: 1 },
          { question: "The reflexive pronoun for 'noi' is...", options: ["mi", "ti", "ci", "vi"], correct: 2 }
        ],
        matching: [
          { italian: "svegliarsi", english: "to wake up" },
          { italian: "vestirsi", english: "to get dressed" },
          { italian: "tornare", english: "to return" },
          { italian: "la mattina", english: "in the morning" },
          { italian: "cenare", english: "to have dinner" }
        ]
      }
    ]
  },
  A2: {
    name: "Pre-Intermedio",
    description: "Express yourself - past tense, plans, opinions",
    color: "#F2CC8F",
    lessons: [
      {
        id: "a2-1",
        title: "The Past (Passato Prossimo)",
        scenario: "Talking about what you did",
        vocabulary: [
          { italian: "ieri", english: "yesterday", example: "Ieri ho lavorato molto." },
          { italian: "la settimana scorsa", english: "last week", example: "La settimana scorsa sono andato a Roma." },
          { italian: "ho mangiato", english: "I ate", example: "Ho mangiato una pizza." },
          { italian: "ho bevuto", english: "I drank", example: "Ho bevuto un caffè." },
          { italian: "ho visto", english: "I saw", example: "Ho visto un bel film." },
          { italian: "sono andato/a", english: "I went", example: "Sono andato al mare." },
          { italian: "sono stato/a", english: "I was / I have been", example: "Sono stato in Italia." },
          { italian: "ho fatto", english: "I did / I made", example: "Cosa hai fatto ieri?" },
          { italian: "già", english: "already", example: "Ho già mangiato." },
          { italian: "ancora", english: "yet / still", example: "Non ho ancora finito." },
          { italian: "mai", english: "ever / never", example: "Sei mai stato a Venezia?" },
          { italian: "appena", english: "just", example: "Sono appena arrivato." }
        ],
        dialogue: {
          title: "Catching up",
          lines: [
            { speaker: "Lucia", text: "Ciao! Come è andato il weekend?" },
            { speaker: "Marco", text: "Benissimo! Sono andato a Firenze." },
            { speaker: "Lucia", text: "Che bello! Cosa hai fatto?" },
            { speaker: "Marco", text: "Ho visitato gli Uffizi e ho mangiato la bistecca fiorentina." },
            { speaker: "Lucia", text: "Sei mai stato a Siena?" },
            { speaker: "Marco", text: "No, non sono mai stato. La prossima volta!" }
          ]
        },
        grammar: "Passato Prossimo uses 'avere' or 'essere' + past participle. Most verbs use 'avere' (ho parlato). Movement/state verbs use 'essere' and agree in gender/number: 'sono andato' (m) / 'sono andata' (f). Common irregular past participles: fatto (fare), visto (vedere), stato (essere).",
        multipleChoice: [
          { question: "Which auxiliary does 'andare' use?", options: ["Avere", "Essere", "Both", "Neither"], correct: 1 },
          { question: "'Ho mangiato' means...", options: ["I eat", "I will eat", "I ate", "I was eating"], correct: 2 },
          { question: "The past participle of 'vedere' is...", options: ["Veduto", "Visto", "Vedato", "Vedere"], correct: 1 },
          { question: "For a woman: 'I went' is...", options: ["Sono andato", "Sono andata", "Ho andato", "Ho andata"], correct: 1 },
          { question: "'Già' means...", options: ["Never", "Yet", "Already", "Still"], correct: 2 }
        ],
        matching: [
          { italian: "ho fatto", english: "I did" },
          { italian: "sono stato", english: "I was" },
          { italian: "ho visto", english: "I saw" },
          { italian: "già", english: "already" },
          { italian: "appena", english: "just" }
        ]
      },
      {
        id: "a2-2",
        title: "Al Ristorante - Restaurant",
        scenario: "Ordering a full meal in Italian",
        vocabulary: [
          { italian: "il menù", english: "the menu", example: "Il menù, per favore." },
          { italian: "l'antipasto", english: "appetizer/starter", example: "Come antipasto, prendo il prosciutto." },
          { italian: "il primo", english: "first course (pasta/soup)", example: "Di primo, vorrei la pasta." },
          { italian: "il secondo", english: "main course (meat/fish)", example: "Di secondo, il pesce." },
          { italian: "il contorno", english: "side dish", example: "Con contorno di verdure." },
          { italian: "il dolce", english: "dessert", example: "Come dolce, il tiramisù." },
          { italian: "il vino", english: "wine", example: "Un bicchiere di vino rosso." },
          { italian: "prenotare", english: "to book/reserve", example: "Vorrei prenotare un tavolo." },
          { italian: "consigliare", english: "to recommend", example: "Cosa mi consiglia?" },
          { italian: "vegetariano/a", english: "vegetarian", example: "Sono vegetariano." },
          { italian: "allergico/a", english: "allergic", example: "Sono allergico alle noci." },
          { italian: "il conto", english: "the bill", example: "Il conto, per favore." }
        ],
        dialogue: {
          title: "Dinner at a restaurant",
          lines: [
            { speaker: "Cameriere", text: "Buonasera! Avete prenotato?" },
            { speaker: "Cliente", text: "Sì, a nome Rossi, per due persone." },
            { speaker: "Cameriere", text: "Perfetto. Ecco il menù. Da bere?" },
            { speaker: "Cliente", text: "Una bottiglia d'acqua naturale e il vino della casa." },
            { speaker: "Cameriere", text: "Siete pronti per ordinare?" },
            { speaker: "Cliente", text: "Sì. Di primo, due spaghetti alle vongole." }
          ]
        },
        grammar: "Italian meals have a specific order: antipasto → primo (pasta/risotto/soup) → secondo (meat/fish) + contorno (vegetables) → dolce → caffè. You don't have to order everything! 'Di primo...' 'Di secondo...' 'Come dolce...' are useful phrases.",
        multipleChoice: [
          { question: "'Il primo' is typically...", options: ["Dessert", "Appetizer", "Pasta/Soup", "Meat/Fish"], correct: 2 },
          { question: "How do you ask for a recommendation?", options: ["Cosa vuole?", "Cosa mi consiglia?", "Cosa ha?", "Cosa prende?"], correct: 1 },
          { question: "'Contorno' means...", options: ["Main course", "Appetizer", "Side dish", "Drink"], correct: 2 },
          { question: "'Prenotare' means...", options: ["To order", "To pay", "To reserve", "To eat"], correct: 2 },
          { question: "Which comes first in an Italian meal?", options: ["Secondo", "Dolce", "Primo", "Antipasto"], correct: 3 }
        ],
        matching: [
          { italian: "il primo", english: "first course" },
          { italian: "il contorno", english: "side dish" },
          { italian: "prenotare", english: "to reserve" },
          { italian: "consigliare", english: "to recommend" },
          { italian: "il dolce", english: "dessert" }
        ]
      },
      {
        id: "a2-3",
        title: "Making Plans & Future",
        scenario: "Talking about what you will do",
        vocabulary: [
          { italian: "domani", english: "tomorrow", example: "Domani andrò al mare." },
          { italian: "la prossima settimana", english: "next week", example: "La prossima settimana parto." },
          { italian: "andrò", english: "I will go", example: "Andrò in vacanza." },
          { italian: "farò", english: "I will do/make", example: "Farò una festa." },
          { italian: "sarò", english: "I will be", example: "Sarò a casa." },
          { italian: "avrò", english: "I will have", example: "Avrò tempo domani." },
          { italian: "pensare di", english: "to think of (doing)", example: "Penso di partire presto." },
          { italian: "sperare di", english: "to hope to", example: "Spero di vederti." },
          { italian: "avere intenzione di", english: "to intend to", example: "Ho intenzione di studiare." },
          { italian: "probabilmente", english: "probably", example: "Probabilmente verrò." },
          { italian: "forse", english: "maybe", example: "Forse resto a casa." },
          { italian: "sicuramente", english: "definitely", example: "Sicuramente ci sarò!" }
        ],
        dialogue: {
          title: "Planning the weekend",
          lines: [
            { speaker: "Anna", text: "Cosa farai questo weekend?" },
            { speaker: "Luca", text: "Sabato andrò al concerto. E tu?" },
            { speaker: "Anna", text: "Non ho ancora deciso. Forse verrò anch'io!" },
            { speaker: "Luca", text: "Fantastico! Ci saranno anche Marco e Giulia." },
            { speaker: "Anna", text: "Perfetto! A che ora sarà?" },
            { speaker: "Luca", text: "Inizierà alle nove. Ti mando i dettagli!" }
          ]
        },
        grammar: "The future tense (futuro semplice) is formed by adding endings to the infinitive stem: -ò, -ai, -à, -emo, -ete, -anno. Some verbs have irregular stems: andare→andr-, fare→far-, essere→sar-, avere→avr-. For near future, you can also use 'present tense + time word': 'Domani vado a Roma.'",
        multipleChoice: [
          { question: "'Andrò' is the future of...", options: ["Avere", "Andare", "Arrivare", "Aspettare"], correct: 1 },
          { question: "'Forse' expresses...", options: ["Certainty", "Uncertainty", "Past", "Command"], correct: 1 },
          { question: "The future stem of 'essere' is...", options: ["esser-", "sar-", "star-", "ess-"], correct: 1 },
          { question: "'La prossima settimana' means...", options: ["Last week", "This week", "Next week", "Every week"], correct: 2 },
          { question: "Complete: 'Domani ___ una festa' (fare, io)", options: ["faccio", "ho fatto", "farò", "facevo"], correct: 2 }
        ],
        matching: [
          { italian: "andrò", english: "I will go" },
          { italian: "sarò", english: "I will be" },
          { italian: "forse", english: "maybe" },
          { italian: "sperare di", english: "to hope to" },
          { italian: "probabilmente", english: "probably" }
        ]
      },
      {
        id: "a2-4",
        title: "Health & At the Doctor",
        scenario: "Explaining symptoms and understanding medical advice",
        vocabulary: [
          { italian: "stare male", english: "to feel sick", example: "Sto male da ieri." },
          { italian: "avere mal di...", english: "to have a ... ache", example: "Ho mal di testa." },
          { italian: "la febbre", english: "fever", example: "Ho la febbre alta." },
          { italian: "il raffreddore", english: "cold", example: "Ho preso il raffreddore." },
          { italian: "la tosse", english: "cough", example: "Ho una brutta tosse." },
          { italian: "il dolore", english: "pain", example: "Sento un forte dolore qui." },
          { italian: "la ricetta", english: "prescription", example: "Le do una ricetta." },
          { italian: "la medicina", english: "medicine", example: "Prenda questa medicina." },
          { italian: "riposarsi", english: "to rest", example: "Deve riposarsi." },
          { italian: "prendere", english: "to take", example: "Prenda due compresse." },
          { italian: "la visita", english: "check-up/visit", example: "Vorrei fissare una visita." },
          { italian: "urgente", english: "urgent", example: "È urgente!" }
        ],
        dialogue: {
          title: "At the doctor's",
          lines: [
            { speaker: "Dottore", text: "Buongiorno, come si sente?" },
            { speaker: "Paziente", text: "Non sto bene. Ho mal di gola e la febbre." },
            { speaker: "Dottore", text: "Da quanto tempo?" },
            { speaker: "Paziente", text: "Da tre giorni. Ho anche la tosse." },
            { speaker: "Dottore", text: "Apra la bocca... È un'infezione. Le do una ricetta." },
            { speaker: "Paziente", text: "Devo prendere degli antibiotici?" },
            { speaker: "Dottore", text: "Sì, e deve riposarsi per qualche giorno." }
          ]
        },
        grammar: "'Avere mal di...' + body part: mal di testa (headache), mal di stomaco (stomachache), mal di gola (sore throat), mal di schiena (backache). Use 'stare' for temporary states: 'sto bene/male'. Doctors use formal 'Lei': 'Come si sente?' 'Prenda questa medicina.'",
        multipleChoice: [
          { question: "'Ho mal di testa' means...", options: ["I have a stomachache", "I have a headache", "I have a fever", "I have a cold"], correct: 1 },
          { question: "'La ricetta' is...", options: ["The recipe", "The prescription", "The medicine", "The visit"], correct: 1 },
          { question: "How do you say 'I feel sick'?", options: ["Sono malato", "Ho male", "Sto male", "Faccio male"], correct: 2 },
          { question: "'Riposarsi' means...", options: ["To take medicine", "To rest", "To visit", "To recover"], correct: 1 },
          { question: "'La febbre' is...", options: ["Cough", "Cold", "Fever", "Pain"], correct: 2 }
        ],
        matching: [
          { italian: "la febbre", english: "fever" },
          { italian: "il raffreddore", english: "cold" },
          { italian: "la tosse", english: "cough" },
          { italian: "la ricetta", english: "prescription" },
          { italian: "riposarsi", english: "to rest" }
        ]
      },
      {
        id: "a2-5",
        title: "Travel & Transportation",
        scenario: "Getting around Italy by train, bus, and more",
        vocabulary: [
          { italian: "il treno", english: "train", example: "Prendo il treno per Milano." },
          { italian: "l'autobus", english: "bus", example: "L'autobus arriva alle dieci." },
          { italian: "l'aereo", english: "plane", example: "Viaggio in aereo." },
          { italian: "il biglietto", english: "ticket", example: "Un biglietto per Roma, per favore." },
          { italian: "andata e ritorno", english: "round trip", example: "Un biglietto andata e ritorno." },
          { italian: "solo andata", english: "one way", example: "Solo andata, grazie." },
          { italian: "il binario", english: "platform", example: "Il treno parte dal binario 3." },
          { italian: "in ritardo", english: "late/delayed", example: "Il treno è in ritardo." },
          { italian: "in orario", english: "on time", example: "L'aereo è in orario." },
          { italian: "la coincidenza", english: "connection", example: "Ho perso la coincidenza!" },
          { italian: "prenotare", english: "to book", example: "Devo prenotare un posto." },
          { italian: "la valigia", english: "suitcase", example: "Ho due valigie." }
        ],
        dialogue: {
          title: "At the train station",
          lines: [
            { speaker: "Viaggiatore", text: "Buongiorno. Un biglietto per Firenze, per favore." },
            { speaker: "Bigliettaio", text: "Andata e ritorno o solo andata?" },
            { speaker: "Viaggiatore", text: "Andata e ritorno. A che ora parte il prossimo treno?" },
            { speaker: "Bigliettaio", text: "C'è un treno alle 14:30, binario 5." },
            { speaker: "Viaggiatore", text: "È diretto o devo cambiare?" },
            { speaker: "Bigliettaio", text: "È diretto. Sono ventidue euro." }
          ]
        },
        grammar: "Travel verbs: 'prendere' (to take) for transport, 'partire' (to depart), 'arrivare' (to arrive), 'cambiare' (to change/transfer). Use 'in' for modes of transport: 'in treno', 'in aereo', 'in macchina'. But: 'a piedi' (on foot).",
        multipleChoice: [
          { question: "'Andata e ritorno' means...", options: ["One way", "Round trip", "Direct", "Connection"], correct: 1 },
          { question: "'Il binario' is...", options: ["The ticket", "The train", "The platform", "The station"], correct: 2 },
          { question: "How do you say 'The train is late'?", options: ["Il treno è in orario", "Il treno è in ritardo", "Il treno parte", "Il treno arriva"], correct: 1 },
          { question: "'La coincidenza' in travel means...", options: ["Coincidence", "Connection", "Ticket", "Delay"], correct: 1 },
          { question: "Which preposition for 'by train'?", options: ["Con treno", "A treno", "In treno", "Per treno"], correct: 2 }
        ],
        matching: [
          { italian: "il binario", english: "platform" },
          { italian: "andata e ritorno", english: "round trip" },
          { italian: "in ritardo", english: "delayed" },
          { italian: "la coincidenza", english: "connection" },
          { italian: "la valigia", english: "suitcase" }
        ]
      }
    ]
  },
  B1: {
    name: "Intermedio",
    description: "Become fluent - complex grammar, real conversations",
    color: "#3D405B",
    lessons: [
      {
        id: "b1-1",
        title: "Imperfect Tense & Stories",
        scenario: "Describing the past and telling stories",
        vocabulary: [
          { italian: "quando ero piccolo/a", english: "when I was little", example: "Quando ero piccolo, abitavo in campagna." },
          { italian: "una volta", english: "once upon a time / once", example: "Una volta c'era un re." },
          { italian: "mentre", english: "while", example: "Mentre dormivo, è arrivato." },
          { italian: "sempre", english: "always (used to)", example: "Andavo sempre al mare d'estate." },
          { italian: "di solito", english: "usually", example: "Di solito mi svegliavo tardi." },
          { italian: "c'era / c'erano", english: "there was / there were", example: "C'era una bella casa." },
          { italian: "faceva", english: "it was (weather) / he did", example: "Faceva freddo quella notte." },
          { italian: "sembrava", english: "it seemed", example: "Sembrava impossibile." },
          { italian: "nel frattempo", english: "meanwhile", example: "Nel frattempo, lui aspettava." },
          { italian: "all'improvviso", english: "suddenly", example: "All'improvviso, tutto è cambiato." },
          { italian: "ricordare", english: "to remember", example: "Ricordo quando eravamo giovani." },
          { italian: "a quei tempi", english: "in those days", example: "A quei tempi, la vita era diversa." }
        ],
        dialogue: {
          title: "Childhood memories",
          lines: [
            { speaker: "Nonna", text: "Quando ero giovane, la vita era molto diversa." },
            { speaker: "Nipote", text: "Come era, nonna?" },
            { speaker: "Nonna", text: "Non c'erano i telefoni. Scrivevamo lettere." },
            { speaker: "Nipote", text: "E cosa facevi per divertirti?" },
            { speaker: "Nonna", text: "Giocavo all'aperto con i miei amici. Eravamo sempre fuori!" },
            { speaker: "Nipote", text: "Sembra bello! A volte vorrei vivere così." }
          ]
        },
        grammar: "The Imperfetto describes ongoing past states, habits, and background actions. Endings: -ARE: -avo, -avi, -ava, -avamo, -avate, -avano. -ERE: -evo, -evi, -eva, -evamo, -evate, -evano. -IRE: -ivo, -ivi, -iva, -ivamo, -ivate, -ivano. Use Imperfetto for 'used to' and background; Passato Prossimo for completed actions.",
        multipleChoice: [
          { question: "Imperfetto is used for...", options: ["Completed actions", "Habits in the past", "Future plans", "Commands"], correct: 1 },
          { question: "'Mentre dormivo' uses Imperfetto because...", options: ["It's completed", "It's ongoing background", "It's a fact", "It's future"], correct: 1 },
          { question: "The Imperfetto of 'essere' (io) is...", options: ["sono stato", "sarò", "ero", "sia"], correct: 2 },
          { question: "'C'era una volta' means...", options: ["There will be", "There is", "Once upon a time", "There has been"], correct: 2 },
          { question: "Which sentence needs Imperfetto?", options: ["Ieri ho mangiato pizza", "Da bambino mangiavo sempre pizza", "Ho appena mangiato", "Mangerò pizza domani"], correct: 1 }
        ],
        matching: [
          { italian: "mentre", english: "while" },
          { italian: "c'era", english: "there was" },
          { italian: "all'improvviso", english: "suddenly" },
          { italian: "di solito", english: "usually" },
          { italian: "a quei tempi", english: "in those days" }
        ]
      },
      {
        id: "b1-2",
        title: "Conditional & Polite Requests",
        scenario: "Making polite requests and hypothetical statements",
        vocabulary: [
          { italian: "vorrei", english: "I would like", example: "Vorrei un'informazione." },
          { italian: "potrei", english: "I could / could I", example: "Potrei avere il menù?" },
          { italian: "dovrei", english: "I should", example: "Dovrei studiare di più." },
          { italian: "sarebbe", english: "it would be", example: "Sarebbe perfetto!" },
          { italian: "mi piacerebbe", english: "I would like (to)", example: "Mi piacerebbe visitare Venezia." },
          { italian: "Le dispiacerebbe", english: "Would you mind", example: "Le dispiacerebbe aiutarmi?" },
          { italian: "se fossi", english: "if I were", example: "Se fossi ricco, viaggerei." },
          { italian: "al posto tuo", english: "in your place", example: "Al posto tuo, accetterei." },
          { italian: "secondo me", english: "in my opinion", example: "Secondo me, dovresti andare." },
          { italian: "magari", english: "maybe / I wish", example: "Magari potessimo restare!" },
          { italian: "volentieri", english: "gladly / willingly", example: "Lo farei volentieri!" },
          { italian: "purtroppo", english: "unfortunately", example: "Purtroppo non posso." }
        ],
        dialogue: {
          title: "At a hotel",
          lines: [
            { speaker: "Ospite", text: "Buongiorno. Vorrei prenotare una camera." },
            { speaker: "Receptionist", text: "Certamente. Per quante notti?" },
            { speaker: "Ospite", text: "Tre notti. Sarebbe possibile avere una vista mare?" },
            { speaker: "Receptionist", text: "Mi dispiace, le camere vista mare sono occupate." },
            { speaker: "Ospite", text: "Peccato. Potrei almeno avere una camera tranquilla?" },
            { speaker: "Receptionist", text: "Certo! Le darei la 302 all'ultimo piano." }
          ]
        },
        grammar: "The Conditional (Condizionale) is used for polite requests (vorrei, potrei), advice (dovresti), and hypotheticals. Form it by adding: -ei, -esti, -ebbe, -emmo, -este, -ebbero to the future stem. Irregulars keep their future stems: vorr-, potr-, dovr-, sar-, avr-.",
        multipleChoice: [
          { question: "'Vorrei' is more polite than...", options: ["Mi piacerebbe", "Desidero", "Voglio", "Gradirei"], correct: 2 },
          { question: "The conditional of 'potere' (tu) is...", options: ["puoi", "potrai", "potresti", "potevi"], correct: 2 },
          { question: "'Mi piacerebbe' expresses...", options: ["Certainty", "Obligation", "Desire/wish", "Past action"], correct: 2 },
          { question: "'Dovrei' means...", options: ["I must", "I should", "I can", "I want"], correct: 1 },
          { question: "Which is a polite request?", options: ["Dammi l'acqua!", "Voglio l'acqua", "Potrei avere dell'acqua?", "Ho bisogno d'acqua"], correct: 2 }
        ],
        matching: [
          { italian: "vorrei", english: "I would like" },
          { italian: "potrei", english: "could I" },
          { italian: "dovrei", english: "I should" },
          { italian: "mi piacerebbe", english: "I would like to" },
          { italian: "volentieri", english: "gladly" }
        ]
      },
      {
        id: "b1-3",
        title: "Opinions & Discussions",
        scenario: "Expressing and defending your views",
        vocabulary: [
          { italian: "penso che", english: "I think that", example: "Penso che sia importante." },
          { italian: "credo che", english: "I believe that", example: "Credo che tu abbia ragione." },
          { italian: "secondo me", english: "in my opinion", example: "Secondo me, è sbagliato." },
          { italian: "sono d'accordo", english: "I agree", example: "Sono completamente d'accordo!" },
          { italian: "non sono d'accordo", english: "I disagree", example: "Non sono d'accordo con te." },
          { italian: "hai ragione", english: "you're right", example: "Sì, hai ragione." },
          { italian: "dipende", english: "it depends", example: "Dipende dalla situazione." },
          { italian: "da un lato... dall'altro", english: "on one hand... on the other", example: "Da un lato capisco, dall'altro non approvo." },
          { italian: "tuttavia", english: "however", example: "È difficile, tuttavia possibile." },
          { italian: "infatti", english: "in fact / indeed", example: "Infatti, hai ragione tu." },
          { italian: "comunque", english: "anyway / however", example: "Comunque, è una bella idea." },
          { italian: "a mio parere", english: "in my view", example: "A mio parere, dovremmo aspettare." }
        ],
        dialogue: {
          title: "Discussing work-life balance",
          lines: [
            { speaker: "Marco", text: "Secondo me, dovremmo lavorare meno ore." },
            { speaker: "Giulia", text: "Sono d'accordo, ma dipende dal lavoro." },
            { speaker: "Marco", text: "Credo che tutti meritino più tempo libero." },
            { speaker: "Giulia", text: "Da un lato sì, dall'altro l'economia ne soffrirebbe." },
            { speaker: "Marco", text: "Tuttavia, i paesi nordici dimostrano che funziona." },
            { speaker: "Giulia", text: "Hai ragione. Comunque, è un tema complesso." }
          ]
        },
        grammar: "Expressions of opinion (penso che, credo che, mi sembra che) trigger the Subjunctive mood. For now, focus on using them with common subjunctive forms: sia (be), abbia (have), possa (can). 'Secondo me' and 'per me' don't require subjunctive and are good alternatives.",
        multipleChoice: [
          { question: "'Penso che' is usually followed by...", options: ["Indicative", "Subjunctive", "Infinitive", "Conditional"], correct: 1 },
          { question: "How do you say 'I agree'?", options: ["Ho ragione", "Sono d'accordo", "Penso di sì", "Va bene"], correct: 1 },
          { question: "'Tuttavia' means...", options: ["Therefore", "However", "Also", "Finally"], correct: 1 },
          { question: "'Dipende' expresses...", options: ["Agreement", "Disagreement", "Uncertainty/nuance", "Strong opinion"], correct: 2 },
          { question: "Which avoids the subjunctive?", options: ["Credo che sia bello", "Penso che abbia ragione", "Secondo me, è bello", "Mi sembra che sia vero"], correct: 2 }
        ],
        matching: [
          { italian: "sono d'accordo", english: "I agree" },
          { italian: "dipende", english: "it depends" },
          { italian: "tuttavia", english: "however" },
          { italian: "infatti", english: "in fact" },
          { italian: "a mio parere", english: "in my view" }
        ]
      },
      {
        id: "b1-4",
        title: "Work & Professional Life",
        scenario: "Talking about careers and workplace situations",
        vocabulary: [
          { italian: "il lavoro", english: "work / job", example: "Cerco un nuovo lavoro." },
          { italian: "l'azienda", english: "company", example: "Lavoro per una grande azienda." },
          { italian: "il collega", english: "colleague", example: "I miei colleghi sono simpatici." },
          { italian: "il capo", english: "boss", example: "Il mio capo è esigente." },
          { italian: "la riunione", english: "meeting", example: "Ho una riunione alle tre." },
          { italian: "il colloquio", english: "job interview", example: "Ho un colloquio domani." },
          { italian: "lo stipendio", english: "salary", example: "Lo stipendio è buono." },
          { italian: "le ferie", english: "vacation days", example: "Quando prendi le ferie?" },
          { italian: "lavorare da casa", english: "to work from home", example: "Lavoro da casa due giorni." },
          { italian: "fare carriera", english: "to advance career", example: "Vuole fare carriera." },
          { italian: "licenziarsi", english: "to quit/resign", example: "Mi sono licenziato." },
          { italian: "essere assunto", english: "to be hired", example: "Sono stato assunto ieri!" }
        ],
        dialogue: {
          title: "Talking about a new job",
          lines: [
            { speaker: "Sara", text: "Ho sentito che hai cambiato lavoro!" },
            { speaker: "Pietro", text: "Sì! Sono stato assunto da una startup." },
            { speaker: "Sara", text: "Complimenti! Com'è l'ambiente?" },
            { speaker: "Pietro", text: "Molto dinamico. Posso lavorare da casa tre giorni." },
            { speaker: "Sara", text: "E lo stipendio?" },
            { speaker: "Pietro", text: "Meglio di prima, e ho più ferie!" }
          ]
        },
        grammar: "Professional vocabulary often uses reflexive verbs: licenziarsi (to quit), trasferirsi (to transfer/relocate), occuparsi di (to deal with). Passive voice is common: 'essere assunto' (to be hired), 'essere promosso' (to be promoted). Use 'fare' for many work expressions: fare carriera, fare straordinari.",
        multipleChoice: [
          { question: "'Il colloquio' is...", options: ["A meeting", "A job interview", "A presentation", "A contract"], correct: 1 },
          { question: "'Licenziarsi' means...", options: ["To be fired", "To quit", "To be hired", "To retire"], correct: 1 },
          { question: "'Le ferie' are...", options: ["Holidays (public)", "Vacation days", "Sick days", "Weekends"], correct: 1 },
          { question: "How do you say 'to be hired'?", options: ["Assumere", "Essere assunto", "Licenziarsi", "Lavorare"], correct: 1 },
          { question: "'Il capo' is...", options: ["The colleague", "The boss", "The employee", "The office"], correct: 1 }
        ],
        matching: [
          { italian: "l'azienda", english: "company" },
          { italian: "il colloquio", english: "job interview" },
          { italian: "lo stipendio", english: "salary" },
          { italian: "le ferie", english: "vacation days" },
          { italian: "licenziarsi", english: "to resign" }
        ]
      },
      {
        id: "b1-5",
        title: "Italian Culture & Idioms",
        scenario: "Understanding expressions and cultural nuances",
        vocabulary: [
          { italian: "In bocca al lupo!", english: "Good luck! (lit. In the wolf's mouth)", example: "Hai l'esame? In bocca al lupo!" },
          { italian: "Crepi!", english: "Thanks! (response, lit. May it die)", example: "In bocca al lupo! – Crepi!" },
          { italian: "Che figata!", english: "How cool! (slang)", example: "Hai vinto? Che figata!" },
          { italian: "Non vedo l'ora!", english: "I can't wait!", example: "Non vedo l'ora di vederti!" },
          { italian: "Boh!", english: "I dunno / Who knows", example: "Viene stasera? Boh!" },
          { italian: "Dai!", english: "Come on! / Go on!", example: "Dai, raccontami!" },
          { italian: "Mamma mia!", english: "Oh my! / Wow!", example: "Mamma mia, che caldo!" },
          { italian: "fare bella figura", english: "to make a good impression", example: "Voglio fare bella figura." },
          { italian: "fare brutta figura", english: "to make a bad impression", example: "Non voglio fare brutta figura." },
          { italian: "il dolce far niente", english: "the sweetness of doing nothing", example: "Mi godo il dolce far niente." },
          { italian: "piano piano", english: "slowly slowly / little by little", example: "Piano piano imparo." },
          { italian: "Che ne so?", english: "How should I know?", example: "Dov'è Marco? Che ne so?" }
        ],
        dialogue: {
          title: "Casual conversation among friends",
          lines: [
            { speaker: "Marco", text: "Domani ho il colloquio di lavoro." },
            { speaker: "Lucia", text: "In bocca al lupo!" },
            { speaker: "Marco", text: "Crepi! Sono nervoso." },
            { speaker: "Lucia", text: "Dai, andrà benissimo! Farai bella figura." },
            { speaker: "Marco", text: "Speriamo! Non vedo l'ora che finisca." },
            { speaker: "Lucia", text: "Piano piano, tutto si risolve. Poi festeggiamo!" }
          ]
        },
        grammar: "'Fare bella/brutta figura' is central to Italian culture - it's about how others perceive you. Italian has many idiomatic expressions with 'fare': fare finta (to pretend), fare a meno di (to do without), farcela (to manage/succeed). 'Crepi!' as response to 'In bocca al lupo' is tradition - never say 'grazie'!",
        multipleChoice: [
          { question: "The correct response to 'In bocca al lupo' is...", options: ["Grazie!", "Crepi!", "Prego!", "Anche a te!"], correct: 1 },
          { question: "'Fare bella figura' means...", options: ["To look beautiful", "To make a good impression", "To be famous", "To dress well"], correct: 1 },
          { question: "'Boh' expresses...", options: ["Agreement", "Excitement", "Uncertainty", "Anger"], correct: 2 },
          { question: "'Non vedo l'ora' literally means...", options: ["I can't see the hour", "I don't have time", "I'm late", "I'm watching"], correct: 0 },
          { question: "'Il dolce far niente' celebrates...", options: ["Sweets", "Hard work", "Pleasant idleness", "Italian desserts"], correct: 2 }
        ],
        matching: [
          { italian: "In bocca al lupo!", english: "Good luck!" },
          { italian: "Non vedo l'ora!", english: "I can't wait!" },
          { italian: "Dai!", english: "Come on!" },
          { italian: "fare bella figura", english: "make a good impression" },
          { italian: "piano piano", english: "little by little" }
        ]
      }
    ]
  }
};

// Main App Component
export default function VersoB1() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonTab, setLessonTab] = useState('vocabulary');
  const [progress, setProgress] = useState({});
  const [exerciseState, setExerciseState] = useState({
    multipleChoice: { current: 0, answers: [], showResults: false },
    matching: { selected: null, matched: [], showResults: false }
  });

  // Load progress from state
  useEffect(() => {
    const saved = localStorage?.getItem?.('versoB1Progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const saveProgress = (lessonId, type) => {
    const newProgress = { ...progress, [`${lessonId}-${type}`]: true };
    setProgress(newProgress);
    try {
      localStorage?.setItem?.('versoB1Progress', JSON.stringify(newProgress));
    } catch (e) {}
  };

  const getLevelProgress = (level) => {
    const lessons = curriculum[level].lessons;
    let completed = 0;
    lessons.forEach(lesson => {
      if (progress[`${lesson.id}-multipleChoice`] && progress[`${lesson.id}-matching`]) {
        completed++;
      }
    });
    return Math.round((completed / lessons.length) * 100);
  };

  const resetExercises = () => {
    setExerciseState({
      multipleChoice: { current: 0, answers: [], showResults: false },
      matching: { selected: null, matched: [], showResults: false }
    });
  };

  const handleMultipleChoiceAnswer = (answerIndex) => {
    const { current, answers } = exerciseState.multipleChoice;
    const newAnswers = [...answers, answerIndex];
    const questions = selectedLesson.multipleChoice;
    
    if (current + 1 >= questions.length) {
      setExerciseState(prev => ({
        ...prev,
        multipleChoice: { ...prev.multipleChoice, answers: newAnswers, showResults: true }
      }));
      const correct = newAnswers.filter((a, i) => a === questions[i].correct).length;
      if (correct >= 3) saveProgress(selectedLesson.id, 'multipleChoice');
    } else {
      setExerciseState(prev => ({
        ...prev,
        multipleChoice: { current: current + 1, answers: newAnswers, showResults: false }
      }));
    }
  };

  const handleMatchingSelect = (type, index) => {
    const { selected, matched } = exerciseState.matching;
    
    if (selected === null) {
      setExerciseState(prev => ({
        ...prev,
        matching: { ...prev.matching, selected: { type, index } }
      }));
    } else if (selected.type === type) {
      setExerciseState(prev => ({
        ...prev,
        matching: { ...prev.matching, selected: { type, index } }
      }));
    } else {
      const pairs = selectedLesson.matching;
      let italianIdx = type === 'italian' ? index : selected.index;
      let englishIdx = type === 'english' ? index : selected.index;
      
      if (pairs[italianIdx].english === pairs[englishIdx].english) {
        const newMatched = [...matched, italianIdx];
        if (newMatched.length === pairs.length) {
          setExerciseState(prev => ({
            ...prev,
            matching: { selected: null, matched: newMatched, showResults: true }
          }));
          saveProgress(selectedLesson.id, 'matching');
        } else {
          setExerciseState(prev => ({
            ...prev,
            matching: { selected: null, matched: newMatched, showResults: false }
          }));
        }
      } else {
        setExerciseState(prev => ({
          ...prev,
          matching: { ...prev.matching, selected: null }
        }));
      }
    }
  };

  // Shuffle array helper
  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledEnglish, setShuffledEnglish] = useState([]);
  
  useEffect(() => {
    if (selectedLesson?.matching) {
      setShuffledEnglish(shuffleArray(selectedLesson.matching.map((p, i) => ({ ...p, originalIndex: i }))));
    }
  }, [selectedLesson]);

  // Render functions
  const renderHome = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #FDF6EC 0%, #FFF9F0 100%)' }}>
      {/* Hero */}
      <div style={{ 
        background: 'linear-gradient(135deg, #E07A5F 0%, #C96A52 100%)',
        padding: '60px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5
        }} />
        <h1 style={{ 
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '3.5rem',
          color: 'white',
          margin: 0,
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          position: 'relative'
        }}>
          Verso B1
        </h1>
        <p style={{ 
          fontFamily: "'Source Sans Pro', -apple-system, sans-serif",
          fontSize: '1.25rem',
          color: 'rgba(255,255,255,0.9)',
          marginTop: '12px',
          position: 'relative'
        }}>
          Il tuo viaggio verso l'italiano • Your journey to Italian
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,255,255,0.2)',
          padding: '8px 20px',
          borderRadius: '30px',
          marginTop: '20px',
          position: 'relative'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🇮🇹</span>
          <span style={{ color: 'white', fontWeight: '500' }}>From zero to B1 certification</span>
        </div>
      </div>

      {/* Level Cards */}
      <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ 
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.75rem',
          color: '#3D405B',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Choose Your Level
        </h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          {Object.entries(curriculum).map(([key, level]) => {
            const prog = getLevelProgress(key);
            return (
              <div
                key={key}
                onClick={() => { setSelectedLevel(key); setCurrentView('level'); }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `3px solid ${level.color}`,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: level.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  flexShrink: 0
                }}>
                  {key}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '1.25rem',
                    color: '#3D405B',
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}>
                    {level.name}
                  </h3>
                  <p style={{ 
                    margin: '4px 0 12px', 
                    color: '#666',
                    fontSize: '0.95rem'
                  }}>
                    {level.description}
                  </p>
                  <div style={{ 
                    background: '#f0f0f0', 
                    borderRadius: '10px', 
                    height: '8px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      background: level.color,
                      height: '100%',
                      width: `${prog}%`,
                      transition: 'width 0.5s ease'
                    }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#888', marginTop: '4px', display: 'block' }}>
                    {prog}% complete • {level.lessons.length} lessons
                  </span>
                </div>
                <div style={{ color: level.color, fontSize: '1.5rem' }}>→</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        padding: '30px 20px',
        color: '#888',
        fontSize: '0.9rem',
        borderTop: '1px solid #eee',
        marginTop: '20px'
      }}>
        <p style={{ margin: 0 }}>
          Inspired by <a href="https://school.teacherstefano.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#E07A5F' }}>Teacher Stefano</a>
        </p>
        <p style={{ margin: '8px 0 0', fontSize: '0.85rem' }}>
          Built with ❤️ for Italian learners everywhere
        </p>
      </div>
    </div>
  );

  const renderLevel = () => {
    const level = curriculum[selectedLevel];
    return (
      <div style={{ minHeight: '100vh', background: '#FDF6EC' }}>
        {/* Header */}
        <div style={{ 
          background: level.color,
          padding: '30px 20px',
          color: 'white'
        }}>
          <button
            onClick={() => setCurrentView('home')}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              marginBottom: '16px',
              fontWeight: '500'
            }}
          >
            ← Back to levels
          </button>
          <h1 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '2.5rem',
            margin: 0
          }}>
            {selectedLevel} - {level.name}
          </h1>
          <p style={{ margin: '8px 0 0', opacity: 0.9 }}>{level.description}</p>
        </div>

        {/* Lessons */}
        <div style={{ padding: '30px 20px', maxWidth: '700px', margin: '0 auto' }}>
          {level.lessons.map((lesson, idx) => {
            const mcDone = progress[`${lesson.id}-multipleChoice`];
            const matchDone = progress[`${lesson.id}-matching`];
            const isComplete = mcDone && matchDone;
            
            return (
              <div
                key={lesson.id}
                onClick={() => {
                  setSelectedLesson(lesson);
                  setLessonTab('vocabulary');
                  resetExercises();
                  setCurrentView('lesson');
                }}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  border: isComplete ? `2px solid ${level.color}` : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)'}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: isComplete ? level.color : '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: isComplete ? 'white' : '#666',
                  flexShrink: 0
                }}>
                  {isComplete ? '✓' : idx + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, color: '#3D405B', fontSize: '1.1rem' }}>{lesson.title}</h3>
                  <p style={{ margin: '4px 0 0', color: '#888', fontSize: '0.9rem' }}>{lesson.scenario}</p>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <span style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    background: mcDone ? '#81B29A' : '#ddd' 
                  }} />
                  <span style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    background: matchDone ? '#81B29A' : '#ddd' 
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderLesson = () => {
    const level = curriculum[selectedLevel];
    const tabs = ['vocabulary', 'dialogue', 'grammar', 'exercises'];
    
    return (
      <div style={{ minHeight: '100vh', background: '#FDF6EC' }}>
        {/* Header */}
        <div style={{ 
          background: level.color,
          padding: '20px',
          color: 'white'
        }}>
          <button
            onClick={() => setCurrentView('level')}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              padding: '6px 14px',
              borderRadius: '16px',
              cursor: 'pointer',
              marginBottom: '12px',
              fontSize: '0.9rem'
            }}
          >
            ← Back to {selectedLevel}
          </button>
          <h1 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.75rem',
            margin: 0
          }}>
            {selectedLesson.title}
          </h1>
          <p style={{ margin: '6px 0 0', opacity: 0.9, fontSize: '0.95rem' }}>
            {selectedLesson.scenario}
          </p>
        </div>

        {/* Tabs */}
        <div style={{ 
          display: 'flex', 
          background: 'white',
          borderBottom: '1px solid #eee',
          overflow: 'auto'
        }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => { setLessonTab(tab); if(tab === 'exercises') resetExercises(); }}
              style={{
                flex: 1,
                padding: '14px 10px',
                border: 'none',
                background: lessonTab === tab ? level.color : 'transparent',
                color: lessonTab === tab ? 'white' : '#666',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.9rem',
                textTransform: 'capitalize',
                transition: 'all 0.2s ease',
                minWidth: '80px'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
          {lessonTab === 'vocabulary' && (
            <div>
              <h2 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#3D405B',
                marginTop: 0 
              }}>
                Vocabulary
              </h2>
              <div style={{ display: 'grid', gap: '12px' }}>
                {selectedLesson.vocabulary.map((word, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'white',
                      borderRadius: '10px',
                      padding: '16px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      borderLeft: `4px solid ${level.color}`
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: '600',
                        color: '#3D405B'
                      }}>
                        {word.italian}
                      </span>
                      <span style={{ 
                        color: '#666',
                        fontSize: '0.95rem'
                      }}>
                        {word.english}
                      </span>
                    </div>
                    <p style={{ 
                      margin: '8px 0 0',
                      color: '#888',
                      fontSize: '0.9rem',
                      fontStyle: 'italic'
                    }}>
                      "{word.example}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lessonTab === 'dialogue' && (
            <div>
              <h2 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#3D405B',
                marginTop: 0 
              }}>
                {selectedLesson.dialogue.title}
              </h2>
              <div style={{ 
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
              }}>
                {selectedLesson.dialogue.lines.map((line, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '16px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div style={{
                      background: idx % 2 === 0 ? level.color : '#81B29A',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      flexShrink: 0
                    }}>
                      {line.speaker}
                    </div>
                    <p style={{ 
                      margin: 0,
                      color: '#3D405B',
                      lineHeight: 1.5
                    }}>
                      {line.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lessonTab === 'grammar' && (
            <div>
              <h2 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#3D405B',
                marginTop: 0 
              }}>
                Grammar Notes
              </h2>
              <div style={{ 
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                lineHeight: 1.7,
                color: '#444'
              }}>
                <div style={{
                  background: `${level.color}15`,
                  borderLeft: `4px solid ${level.color}`,
                  padding: '16px',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>💡</span>
                  <strong>Tip</strong>
                </div>
                <p style={{ margin: 0 }}>{selectedLesson.grammar}</p>
              </div>
            </div>
          )}

          {lessonTab === 'exercises' && (
            <div>
              <h2 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#3D405B',
                marginTop: 0,
                marginBottom: '24px'
              }}>
                Practice Exercises
              </h2>

              {/* Multiple Choice */}
              <div style={{ 
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                marginBottom: '24px'
              }}>
                <h3 style={{ margin: '0 0 16px', color: '#3D405B' }}>
                  Multiple Choice
                  {progress[`${selectedLesson.id}-multipleChoice`] && 
                    <span style={{ color: '#81B29A', marginLeft: '8px' }}>✓</span>
                  }
                </h3>
                
                {!exerciseState.multipleChoice.showResults ? (
                  <div>
                    <p style={{ 
                      color: '#666',
                      marginBottom: '16px'
                    }}>
                      Question {exerciseState.multipleChoice.current + 1} of {selectedLesson.multipleChoice.length}
                    </p>
                    <p style={{ 
                      fontSize: '1.1rem',
                      color: '#3D405B',
                      marginBottom: '16px',
                      fontWeight: '500'
                    }}>
                      {selectedLesson.multipleChoice[exerciseState.multipleChoice.current].question}
                    </p>
                    <div style={{ display: 'grid', gap: '10px' }}>
                      {selectedLesson.multipleChoice[exerciseState.multipleChoice.current].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleMultipleChoiceAnswer(idx)}
                          style={{
                            padding: '14px 16px',
                            border: `2px solid ${level.color}40`,
                            borderRadius: '8px',
                            background: 'white',
                            cursor: 'pointer',
                            textAlign: 'left',
                            fontSize: '1rem',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = `${level.color}15`;
                            e.currentTarget.style.borderColor = level.color;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.borderColor = `${level.color}40`;
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div style={{
                      background: '#81B29A15',
                      padding: '20px',
                      borderRadius: '10px',
                      textAlign: 'center',
                      marginBottom: '16px'
                    }}>
                      <p style={{ fontSize: '2rem', margin: 0 }}>
                        {exerciseState.multipleChoice.answers.filter(
                          (a, i) => a === selectedLesson.multipleChoice[i].correct
                        ).length} / {selectedLesson.multipleChoice.length}
                      </p>
                      <p style={{ color: '#666', margin: '8px 0 0' }}>correct answers</p>
                    </div>
                    <button
                      onClick={resetExercises}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: level.color,
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '500'
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>

              {/* Matching */}
              <div style={{ 
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
              }}>
                <h3 style={{ margin: '0 0 16px', color: '#3D405B' }}>
                  Match the Words
                  {progress[`${selectedLesson.id}-matching`] && 
                    <span style={{ color: '#81B29A', marginLeft: '8px' }}>✓</span>
                  }
                </h3>
                
                {!exerciseState.matching.showResults ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '10px' }}>Italian</p>
                      {selectedLesson.matching.map((pair, idx) => {
                        const isMatched = exerciseState.matching.matched.includes(idx);
                        const isSelected = exerciseState.matching.selected?.type === 'italian' && 
                                          exerciseState.matching.selected?.index === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => !isMatched && handleMatchingSelect('italian', idx)}
                            disabled={isMatched}
                            style={{
                              width: '100%',
                              padding: '12px',
                              marginBottom: '8px',
                              border: isSelected ? `2px solid ${level.color}` : '2px solid #eee',
                              borderRadius: '8px',
                              background: isMatched ? '#81B29A' : isSelected ? `${level.color}15` : 'white',
                              color: isMatched ? 'white' : '#3D405B',
                              cursor: isMatched ? 'default' : 'pointer',
                              fontWeight: '500',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {pair.italian}
                          </button>
                        );
                      })}
                    </div>
                    <div>
                      <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '10px' }}>English</p>
                      {shuffledEnglish.map((pair, idx) => {
                        const isMatched = exerciseState.matching.matched.includes(pair.originalIndex);
                        const isSelected = exerciseState.matching.selected?.type === 'english' && 
                                          exerciseState.matching.selected?.index === pair.originalIndex;
                        return (
                          <button
                            key={idx}
                            onClick={() => !isMatched && handleMatchingSelect('english', pair.originalIndex)}
                            disabled={isMatched}
                            style={{
                              width: '100%',
                              padding: '12px',
                              marginBottom: '8px',
                              border: isSelected ? `2px solid ${level.color}` : '2px solid #eee',
                              borderRadius: '8px',
                              background: isMatched ? '#81B29A' : isSelected ? `${level.color}15` : 'white',
                              color: isMatched ? 'white' : '#3D405B',
                              cursor: isMatched ? 'default' : 'pointer',
                              fontWeight: '500',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {pair.english}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div style={{
                    background: '#81B29A15',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}>
                    <p style={{ fontSize: '2rem', margin: 0 }}>🎉</p>
                    <p style={{ color: '#3D405B', fontWeight: '500', margin: '8px 0' }}>
                      Perfetto! All matched!
                    </p>
                    <button
                      onClick={resetExercises}
                      style={{
                        padding: '10px 24px',
                        background: level.color,
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        marginTop: '8px'
                      }}
                    >
                      Play Again
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@400;500;600&display=swap');
          * { box-sizing: border-box; }
          body { margin: 0; }
          button { font-family: inherit; }
        `}
      </style>
      {currentView === 'home' && renderHome()}
      {currentView === 'level' && renderLevel()}
      {currentView === 'lesson' && renderLesson()}
    </div>
  );
}
