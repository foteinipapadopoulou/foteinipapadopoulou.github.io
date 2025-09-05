import React, { useState } from 'react';

const LuxembourgTrip = () => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    {
      date: "Παρασκευή 5 Σεπτεμβρίου",
      title: "Άφιξη & Εξερεύνηση Κέντρου",
      color: "from-blue-500 to-purple-600",
      activities: [
        {
          time: "19:30",
          activity: "Άφιξη στον σιδηροδρομικό σταθμό του Λουξεμβούργου",
          location: "Gare Centrale",
          info: "Ο κεντρικός σιδηροδρομικός σταθμός του Λουξεμβούργου άνοιξε το 1859 και είναι ο κύριος σιδηροδρομικός κόμβος της χώρας. Το σύγχρονο κτίριο ολοκληρώθηκε το 2017 με σχεδιασμό του αρχιτέκτονα José Rafael Moneo. Ο σταθμός εξυπηρετεί περίπου 50.000 επιβάτες ημερησίως.",
          budget: "Μετάβαση: ΔΩΡΕΑΝ με δημόσιες συγκοινωνίες",
          wikipedia: "https://en.wikipedia.org/wiki/Luxembourg_railway_station",
          googleMaps: "https://maps.app.goo.gl/hbppGKwnZtLGKrP79"
        },
        {
          time: "20:00",
          activity: "Check-in στο ξενοδοχείο Pax, περιοχή Bonnevoie",
          location: "Bonnevoie",
          info: "Η Bonnevoie είναι μια παραδοσιακή περιοχή στο νότιο τμήμα της πόλης του Λουξεμβούργου. Αναπτύχθηκε τον 19ο αιώνα ως βιομηχανική περιοχή. Το Théâtre Ouvert είναι ένας σημαντικός πολιτιστικός χώρος που φιλοξενεί θεατρικές παραστάσεις και εκδηλώσεις. Η περιοχή συνδέεται με το κέντρο με τις γραμμές λεωφορείων 16, 18.",
          budget: "",
          googleMaps: "https://maps.app.goo.gl/yMr6KM2c9YeG6rf16"
        },
        {
          time: "20:30",
          activity: "Βραδινό φαγητό στην Place d'Armes",
          location: "Place d'Armes",
          info: "Η Place d'Armes είναι η κεντρική πλατεία της πόλης του Λουξεμβούργου, δημιουργήθηκε τον 19ο αιώνα. Περιβάλλεται από κτίρια νεοκλασικής αρχιτεκτονικής και φιλοξενεί το περίπτερο μουσικής από το 1889. Κάθε εβδομάδα διοργανώνονται συναυλίες και εκδηλώσεις.",
          budget: "€15-25 ανά άτομο",
          restaurants: [
            {
              name: "Am Tiirmschen",
              cuisine: "Λουξεμβουργιανή",
              recommended: "Bouneschlupp (σούπα φασολιών), Judd mat Gaardebounen (καπνιστό χοιρινό με φασόλια)",
              price: "€18-24"
            },
            {
              name: "Pizzeria Da Vinci",
              cuisine: "Ιταλική/Pizza",
              recommended: "Pizza Margherita, Pizza Quattro Stagioni, Pasta Carbonara",
              price: "€12-18"
            },
            {
              name: "Urban Bar & Kitchen",
              cuisine: "Burgers",
              recommended: "Classic Beef Burger, Chicken Deluxe, Sweet Potato Fries",
              price: "€14-20"
            }
          ],
          wikipedia: "https://en.m.wikipedia.org/wiki/Place_d%27Armes_(Luxembourg",
          googleMaps: "https://maps.app.goo.gl/Jx8tA5UGaZjCQ8WC7"
        }
      ],
      publicTransport: "https://maps.app.goo.gl/Xy9TNbLeuZTz5UMr6?g_st=ac"
    },
    {
      date: "Σάββατο 6 Σεπτεμβρίου",
      title: "Ιστορικό Κέντρο & Παλιά Πόλη",
      color: "from-green-500 to-teal-600",
      activities: [
        {
          time: "08:00",
          activity: "Πρωινό στο ξενοδοχείο",
          location: "Hotel",
          info: "Ξεκινήστε τη μέρα σας με ένα χορταστικό πρωινό για ενέργεια. Τα περισσότερα ξενοδοχεία στο Λουξεμβούργο προσφέρουν continental breakfast με τοπικά προϊόντα.",
          budget: "Περιλαμβάνεται",
          googleMaps: ""
        },
        {
          time: "09:30",
          activity: "Επίσκεψη στο Μεγάλο Δουκικό Παλάτι",
          location: "Palais Grand-Ducal",
          info: "Το Μεγάλο Δουκικό Παλάτι είναι η επίσημη κατοικία του Μεγάλου Δούκα του Λουξεμβούργου. Χτισμένο αρχικά ως Δημαρχείο το 1572-1574, μετατράπηκε σε δουκικό παλάτι το 1890. Η πρόσοψη στυλ Αναγέννησης προστέθηκε το 1891-1894. Το παλάτι έχει 158 δωμάτια και φιλοξενεί επίσημες τελετές και συναντήσεις κρατών.",
          budget: "Εξωτερική θέαση: Δωρεάν, Ξεναγήσεις (Ιούλιος-Αύγουστος): €12",
          wikipedia: "https://en.wikipedia.org/wiki/Grand_Ducal_Palace,_Luxembourg",
          googleMaps: "https://maps.google.com/maps?q=Grand+Ducal+Palace+Luxembourg"
        },
        {
          time: "10:30",
          activity: "Εξερεύνηση της Παλιάς Πόλης (UNESCO)",
          location: "Vieille Ville",
          info: "Η Παλιά Πόλη και οι Οχυρώσεις του Λουξεμβούργου αναγνωρίστηκαν ως Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO το 1994. Τα οχυρώματα χτίστηκαν από τον Vauban τον 17ο αιώνα και θεωρούνταν το 'Γιβραλτάρ του Βορρά'. Η παλιά πόλη διατηρεί τη μεσαιωνική της διάταξη με στενά καλντερίμια και ιστορικά κτίρια από τον 17ο-19ο αιώνα.",
          budget: "Δωρεάν περπάτημα",
          wikipedia: "https://en.wikipedia.org/wiki/Old_Quarters_and_Fortifications_of_Luxembourg",
          googleMaps: "https://maps.google.com/maps?q=Old+Town+Luxembourg+City+UNESCO"
        },
        {
          time: "12:30",
          activity: "Μεσημεριανό στη Corniche",
          location: "Chemin de la Corniche",
          info: "Το Chemin de la Corniche αποκαλείται 'το πιο όμορφο μπαλκόνι της Ευρώπης' από τον συγγραφέα Batty Weber. Αυτός ο πεζόδρομος χτίστηκε στις αρχαίες οχυρώσεις του 17ου αιώνα και προσφέρει εκπληκτική πανοραμική θέα στην κοιλάδα Alzette, το Grund και την Abbaye de Neumünster. Το μήκος του είναι περίπου 1 χιλιόμετρο.",
          budget: "€15-22 ανά άτομο",
          restaurants: [
            {
              name: "Brasserie Wenzel",
              cuisine: "Λουξεμβουργιανή",
              recommended: "Gromperekichelcher (τηγανητές κροκέτες πατάτας), Rieslingspaschtéit (πάστα με κρασί Riesling)",
              price: "€16-24"
            },
            {
              name: "Pizza Express Luxembourg",
              cuisine: "Pizza",
              recommended: "Pizza Sloppy Giuseppe, Pizza American Hot, Dough Balls",
              price: "€13-19"
            }
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Chemin_de_la_Corniche",
          googleMaps: "https://maps.google.com/maps?q=Chemin+de+la+Corniche+Luxembourg"
        },
        {
          time: "14:00",
          activity: "Κατακόμβες Bock (Casemates du Bock)",
          location: "Bock Casemates",
          info: "Οι Κατακόμβες Bock είναι υπόγειοι διάδρομοι και αίθουσες χαραγμένες στον βράχο ασβεστόλιθου από το 1644. Δημιουργήθηκαν από τους Ισπανούς και επεκτάθηκαν από τους Αυστριακούς και Γάλλους. Το σύνολο των υπόγειων διαδρόμων έφτανε τα 23 χιλιόμετρα σε βάθος 40 μέτρων. Χρησιμοποιήθηκαν ως καταφύγιο για 35.000 κατοίκους κατά τον Β' Παγκόσμιο Πόλεμο.",
          budget: "€8 ενήλικες, €6 φοιτητές",
          wikipedia: "https://en.wikipedia.org/wiki/Bock_(Luxembourg)",
          googleMaps: "https://maps.google.com/maps?q=Bock+Casemates+Luxembourg"
        },
        {
          time: "16:00",
          activity: "Καφές στο Grund",
          location: "Grund Quarter",
          info: "Το Grund είναι το πιο γραφικό τμήμα της πόλης του Λουξεμβούργου, στις όχθες του ποταμού Alzette. Αυτή η συνοικία αναπτύχθηκε τον Μεσαίωνα ως περιοχή βιοτεχνών και μυλωνάδων. Σήμερα φιλοξενεί το πολιτιστικό κέντρο Abbaye de Neumünster (1606), που ήταν αρχικά Βενεδικτινή Αβαεία. Η πρόσβαση γίνεται με το δημόσιο ασανσέρ Pfaffenthal-Kirchberg ή με σκάλες.",
          budget: "€5-10 ανά άτομο",
          wikipedia: "https://en.wikipedia.org/wiki/Grund,_Luxembourg",
          googleMaps: "https://maps.google.com/maps?q=Grund+Luxembourg+City"
        },
        {
          time: "19:00",
          activity: "Βραδινό φαγητό στη Rue des Bains",
          location: "Grund - Rue des Bains",
          info: "Η Rue des Bains στο Grund είναι γεμάτη παραδοσιακά εστιατόρια σε ιστορικά κτίρια. Η οδός πήρε το όνομά της από τα δημόσια λουτρά που λειτουργούσαν εκεί τον 19ο αιώνα. Σήμερα αποτελεί ένα από τα πιο ρομαντικά μέρη για φαγητό στην πόλη.",
          budget: "€18-28 ανά άτομο",
          restaurants: [
            {
              name: "Um Plateau",
              cuisine: "Λουξεμβουργιανή",
              recommended: "Träipen (μαύρο πουτίγκα), Kniddelen (κλωστές ζυμαρικών), Quetschentaart (τάρτα δαμάσκηνου)",
              price: "€20-28"
            },
            {
              name: "Scott's Pub",
              cuisine: "Burgers",
              recommended: "Highland Burger, Haggis Burger, Fish & Chips",
              price: "€15-22"
            }
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Grund,_Luxembourg",
          googleMaps: "https://maps.google.com/maps?q=Rue+des+Bains+Grund+Luxembourg"
        }
      ],
      publicTransport: "Λεωφορείο 16 → Κέντρο, μετά περπάτημα. Επιστροφή με δημόσιο ασανσέρ από Grund"
    },
    {
      date: "Κυριακή 7 Σεπτεμβρίου",
      title: "Μουσεία & Σύγχρονο Λουξεμβούργο",
      color: "from-red-500 to-pink-600",
      activities: [
        {
          time: "08:00",
          activity: "Πρωινό στο ξενοδοχείο",
          location: "Hotel",
          info: "Τρίτη και τελευταία μέρα εξερεύνησης - φροντίστε να έχετε καλό πρωινό για τις δραστηριότητες της ημέρας!",
          budget: "Περιλαμβάνεται",
          googleMaps: ""
        },
        {
          time: "09:30",
          activity: "Musée National d'Histoire et d'Art",
          location: "MNHA - Marché-aux-Poissons",
          info: "Το Εθνικό Μουσείο Ιστορίας και Τέχνης στεγάζεται σε ένα συγκρότημα ιστορικών κτιρίων από τον 17ο-19ο αιώνα στην παλιά αγορά ψαριών. Ιδρύθηκε το 1845 και περιέχει συλλογές από την προϊστορία έως τη σύγχρονη εποχή, συμπεριλαμβανομένων γαλλο-ρωμαϊκών αρχαίων, μεσαιωνικής τέχνης και έργων Λουξεμβουργιανών καλλιτεχνών όπως ο Joseph Kutter.",
          budget: "€7 ενήλικες, €5 φοιτητές (δωρεάν πρώτο Σάββατο κάθε μήνα)",
          wikipedia: "https://en.wikipedia.org/wiki/National_Museum_of_History_and_Art",
          googleMaps: "https://maps.google.com/maps?q=National+Museum+History+Art+Luxembourg"
        },
        {
          time: "11:30",
          activity: "Περίπατος στο Plateau de Kirchberg",
          location: "Kirchberg Plateau",
          info: "Το Plateau de Kirchberg αναπτύχθηκε από τη δεκαετία του 1960 ως το σύγχρονο τμήμα του Λουξεμβούργου. Φιλοξενεί τα κτίρια των ευρωπαϊκών θεσμών: Ευρωπαϊκό Δικαστήριο Δικαιοσύνης (1973), Ευρωπαϊκή Τράπεζα Επενδύσεων (1977), και Ευρωπαϊκό Ελεγκτικό Συνέδριο (1977). Η αρχιτεκτονική είναι εντυπωσιακή με σύγχρονα γυάλινα κτίρια και πράσινους χώρους.",
          budget: "Δωρεάν περπάτημα",
          wikipedia: "https://en.wikipedia.org/wiki/Kirchberg,_Luxembourg",
          googleMaps: "https://maps.google.com/maps?q=Kirchberg+Plateau+Luxembourg"
        },
        {
          time: "12:30",
          activity: "Μεσημεριανό στο MUDAM Café",
          location: "MUDAM (Musée d'Art Moderne)",
          info: "Το MUDAM (Musée d'Art Moderne Grand-Duc Jean) σχεδιάστηκε από τον διάσημο αρχιτέκτονα Ieoh Ming Pei και άνοιξε το 2006. Χτισμένο πάνω στα θεμέλια του ιστορικού Fort Thüngen, το μουσείο έχει έκταση 4.500 τετραγωνικά μέτρα εκθεσιακού χώρου. Φιλοξενεί σύγχρονη τέχνη από τον 1960 μέχρι σήμερα, με έργα καλλιτεχνών όπως οι Andy Warhol, Bruce Nauman και Sophie Calle.",
          budget: "€12-18 ανά άτομο",
          restaurants: [
            {
              name: "MUDAM Café",
              cuisine: "Σύγχρονη Ευρωπαϊκή",
              recommended: "Quiche Lorraine, Caesar Salad, Croque Monsieur",
              price: "€12-18"
            }
          ],
          wikipedia: "https://en.wikipedia.org/wiki/Musée_d%27Art_Moderne_Grand-Duc_Jean",
          googleMaps: "https://maps.google.com/maps?q=MUDAM+Luxembourg"
        },
        {
          time: "14:00",
          activity: "Επίσκεψη στο Parc Dräi Eechelen",
          location: "Fort Thüngen - Parc Dräi Eechelen",
          info: "Το Fort Thüngen, γνωστό και ως Dräi Eechelen (Τρεις Βελανίδια), χτίστηκε το 1732-1733 από τους Αυστριακούς. Οι τρεις χαρακτηριστικοί πύργοι του έδωσαν το παρατσούκλι. Το οχυρό φιλοξενεί το Μουσείο της Φρουράς (Musée Dräi Eechelen) που αφηγείται την ιστορία των οχυρώσεων του Λουξεμβούργου. Το πάρκο γύρω από το οχυρό έχει έκταση 50 εκτάρια και προσφέρει υπέροχη θέα στην πόλη.",
          budget: "Πάρκο: Δωρεάν, Μουσείο: €5 ενήλικες",
          wikipedia: "https://en.wikipedia.org/wiki/Fort_Th%C3%BCngen",
          googleMaps: "https://maps.google.com/maps?q=Fort+Thungen+Drai+Eechelen+Luxembourg"
        },
        {
          time: "16:00",
          activity: "Shopping στη Avenue de la Liberté",
          location: "Avenue de la Liberté",
          info: "Η Avenue de la Liberté είναι η κύρια εμπορική αρτηρία του Λουξεμβούργου, δημιουργήθηκε στα τέλη του 19ου αιώνα. Συνδέει τον κεντρικό σταθμό με την Place d'Armes και χαρακτηρίζεται από αρχιτεκτονική Belle Époque. Φιλοξενεί πολυκαταστήματα, μπουτίκ μόδας, καφετέριες και το ιστορικό Grand Théâtre (1964).",
          budget: "€5-15 για καφέ/σνακ",
          wikipedia: "https://en.wikipedia.org/wiki/Avenue_de_la_Libert%C3%A9_(Luxembourg_City)",
          googleMaps: "https://maps.google.com/maps?q=Avenue+de+la+Liberte+Luxembourg"
        },
        {
          time: "17:30",
          activity: "Αναχώρηση προς το ξενοδοχείο",
          location: "Επιστροφή στη Bonnevoie",
          info: "Επιστροφή στο ξενοδοχείο για να προετοιμαστείτε για τη συνέχεια του βραδιού ή για ξεκούραση.",
          budget: "ΔΩΡΕΑΝ με δημόσιες συγκοινωνίες",
          googleMaps: "https://maps.google.com/maps?q=Bonnevoie+Luxembourg"
        }
      ],
      publicTransport: "Λεωφορείο 16 → Κέντρο, μετά Tram προς Kirchberg, επιστροφή με λεωφορείο 16"
    }
  ];

  const totalBudget = {
    food: "€60-95 ανά άτομο (3 ημέρες)",
    attractions: "€20-30 ανά άτομο",
    transport: "ΔΩΡΕΑΝ - Όλες οι συγκοινωνίες",
    souvenirs: "€10-25 ανά άτομο"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
          🇱🇺 Ταξίδι στο Λουξεμβούργο
        </h1>
        <p className="text-xl opacity-90">5-7 Σεπτεμβρίου 2024 | 3 Ημέρες Εξερεύνησης</p>
        <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <h3 className="font-bold text-yellow-300">Φαγητό</h3>
              <p>{totalBudget.food}</p>
            </div>
            <div>
              <h3 className="font-bold text-green-300">Αξιοθέατα</h3>
              <p>{totalBudget.attractions}</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-300">Μεταφορά</h3>
              <p>{totalBudget.transport}</p>
            </div>
            <div>
              <h3 className="font-bold text-pink-300">Σουβενίρ</h3>
              <p>{totalBudget.souvenirs}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Day Navigation */}
      <div className="flex justify-center mb-8 px-4">
        <div className="flex space-x-2 bg-white/10 backdrop-blur-lg rounded-full p-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeDay === index 
                  ? 'bg-white text-purple-900 shadow-lg transform scale-105' 
                  : 'hover:bg-white/20'
              }`}
            >
              {index === 0 ? 'Παρασκευή' : index === 1 ? 'Σάββατο' : 'Κυριακή'}
            </button>
          ))}
        </div>
      </div>

      {/* Day Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className={`bg-gradient-to-r ${days[activeDay].color} rounded-3xl p-8 mb-8 transform transition-all duration-500`}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">{days[activeDay].date}</h2>
            <p className="text-xl opacity-90 mb-4">{days[activeDay].title}</p>
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4">
              <h3 className="font-bold text-yellow-300 mb-2">🚌 Δημόσιες Συγκοινωνίες</h3>
              <p className="text-white">{days[activeDay].publicTransport}</p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="space-y-6">
          {days[activeDay].activities.map((activity, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full font-bold min-w-fit">
                  {activity.time}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-yellow-300">{activity.activity}</h3>
                  <p className="text-lg mb-2 text-blue-300">📍 {activity.location}</p>
                  <p className="text-gray-300 mb-3 leading-relaxed">{activity.info}</p>
                  
                  {/* Links Section */}
                  <div className="flex flex-wrap gap-3 mb-3">
                    {activity.wikipedia && (
                      <a 
                        href={activity.wikipedia}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500/20 border border-blue-500/30 rounded-lg px-3 py-2 text-sm text-blue-300 hover:bg-blue-500/30 transition-all"
                      >
                        📖 Wikipedia
                      </a>
                    )}
                    {activity.googleMaps && (
                      <a 
                        href={activity.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-2 text-sm text-green-300 hover:bg-green-500/30 transition-all"
                      >
                        🗺️ Google Maps
                      </a>
                    )}
                  </div>

                  {activity.budget && (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-3">
                      <span className="font-semibold text-green-300">💰 Κόστος: </span>
                      <span className="text-green-200">{activity.budget}</span>
                    </div>
                  )}
                  {activity.restaurants && (
                    <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3">
                      <span className="font-semibold text-orange-300">🍽️ Προτεινόμενα Εστιατόρια: </span>
                      <div className="mt-3 space-y-3">
                        {activity.restaurants.map((restaurant, idx) => (
                          <div key={idx} className="bg-orange-500/10 rounded-lg p-3 border-l-4 border-orange-500">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-orange-200">{restaurant.name}</h4>
                              <span className="text-sm bg-orange-600/30 px-2 py-1 rounded text-orange-200">{restaurant.price}</span>
                            </div>
                            <p className="text-sm text-gray-300 mb-2">{restaurant.cuisine}</p>
                            <p className="text-sm text-orange-100"><strong>Προτείνουμε:</strong> {restaurant.recommended}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black/30 backdrop-blur-lg py-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-yellow-300">Χρήσιμες Πληροφορίες</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-bold text-blue-300 mb-2">🚌 Δημόσιες Συγκοινωνίες</h4>
            <p className="text-sm">Όλες οι συγκοινωνίες στο Λουξεμβούργο είναι ΔΩΡΕΑΝ! Λεωφορεία, tram, τρένα - όλα δωρεάν για κατοίκους και τουρίστες.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-bold text-green-300 mb-2">💶 Νόμισμα & Πληρωμές</h4>
            <p className="text-sm">Ευρώ (€) - Δέχονται κάρτες παντού. Contactless πληρωμές ευρέως διαθέσιμες.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-bold text-pink-300 mb-2">🗣️ Γλώσσες</h4>
            <p className="text-sm">Λουξεμβουργιανά (επίσημη), Γαλλικά, Γερμανικά. Αγγλικά ευρέως κατανοητά.</p>
          </div>
        </div>
        
        <div className="mt-8 max-w-2xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-500/30">
            <h4 className="font-bold text-purple-300 mb-3">💡 Συμβουλές για το Ταξίδι</h4>
            <div className="text-left space-y-2 text-sm">
              <p>• Κατεβάστε την εφαρμογή "mobilité.lu" για δημόσιες συγκοινωνίες</p>
              <p>• Τα μουσεία κλείνουν Δευτέρα - ελέγξτε ωράριο πριν την επίσκεψη</p>
              <p>• Φιλοδώρημα 10% σε εστιατόρια είναι συνηθισμένο αλλά όχι υποχρεωτικό</p>
              <p>• Οι περισσότεροι χώροι έχουν Wi-Fi δωρεάν</p>
              <p>• Το Λουξεμβούργο είναι πολύ ασφαλές - μπορείτε να περπατάτε παντού</p>
            </div>
          </div>
        </div>
        
        <p className="mt-6 text-gray-400">Καλό ταξίδι και αξέχαστες εμπειρίες! 🎒✨</p>
      </div>
    </div>
  );
};

export default LuxembourgTrip;
                
