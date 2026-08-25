const destinationData = [
    {
        id: 1,
        location: "Hawaii",
        country: "United States",
        tripTotal: 1760,
        lengthOfStayDays: 7,
        timeZone: "HST (UTC−10)",
        bestTimeToVisit: "April–May & September–October",
        about: "Hawaii is a tropical paradise known for its beautiful beaches, lush landscapes, volcanic scenery, and rich island culture. Whether you’re looking to relax by the ocean, explore scenic hiking trails, try local food, or experience an unforgettable adventure, Hawaii has something for every traveler.",
        image: "https://ik.imagekit.io/fbon0i47u/hawaii2.jpg",
        image2: "https://ik.imagekit.io/fbon0i47u/hawaii7.jpg",
        image3: "https://ik.imagekit.io/fbon0i47u/hawaii6.jpg",
        image4: "https://ik.imagekit.io/fbon0i47u/hawaii5.jpg",
        image5: "https://ik.imagekit.io/fbon0i47u/hawaii4.avif",
        image6: "https://ik.imagekit.io/fbon0i47u/hawaii3.jpg",
        image7: "https://ik.imagekit.io/fbon0i47u/hawaii.png",
        flightDetails: {
            airline: "Delta",
            flightCost: 650,
        },
        hotelDetails: {
            hotelName: "Hilton Waikiki",
            hotelCost: 900,
        },
        excursions: [
            {
                id: 1,
                title: "Surfing",
                description: "Catch the waves and experience Waikiki from the water with a guided surfing excursion perfect for beginners and experienced surfers alike. Learn the basics from a local instructor, then ride the iconic waves while taking in beautiful views of Diamond Head and the Waikiki coastline.",
                durationHours: 2.5,
                cost: 125
            },
            {
                id: 2,
                title: "Swimming with Turtles",
                description: "Swim alongside Hawaiian green sea turtles in the crystal-clear waters off Waikiki on this unforgettable snorkeling adventure. Explore colorful marine life and enjoy an up-close look at one of Hawaii's most beloved ocean residents.",
                durationHours: 4,
                cost: 215
            },
            {
                id: 3,
                title: "Sunset Boat Cruise",
                description: "Cruise along the Waikiki coastline as the sun sets over the Pacific, with beautiful views of Diamond Head and the Honolulu skyline. Relax on the water and take in the warm island breeze and colorful Hawaiian sunset.",
                durationHours: 2,
                cost: 150
            }
        ]  
    },
    {
        id: 2,
        location: "Amalfi Coast",
        country: "Italy",
        tripTotal: 3950,
        lengthOfStayDays: 9,
        timeZone: "CET / CEST (UTC+1 / UTC+2)",
        bestTimeToVisit: "May–June & September–October",
        about: "Escape to the Amalfi Coast for breathtaking ocean views, colorful seaside towns, and classic Italian charm. Spend your days exploring picturesque villages, relaxing along the Mediterranean, enjoying fresh Italian cuisine, or taking a scenic boat ride along the coast.",
        image: "https://ik.imagekit.io/fbon0i47u/italy.png",
        image2: "https://ik.imagekit.io/fbon0i47u/amlfi1.jpg",
        image3: "https://ik.imagekit.io/fbon0i47u/amalfi2.jpg",
        image4: "https://ik.imagekit.io/fbon0i47u/amalfi3.jpg",
        image5: "https://ik.imagekit.io/fbon0i47u/amalfi4.jpg",
        image6: "https://ik.imagekit.io/fbon0i47u/amalfi5.jpg",
        image7: "https://ik.imagekit.io/fbon0i47u/amalfi6.jpg",
        flightDetails: {
            airline: "United",
            flightCost: 1200,
        },
        hotelDetails: {
            hotelName: "Hotel Marina Riviera",
            hotelCost: 1335,
        },
        excursions: [
    {
        id: 1,
        title: "Amalfi Coast Boat Tour",
        description: "Cruise along the stunning Amalfi Coast and take in views of colorful cliffside villages, hidden coves, and sparkling Mediterranean waters. Stop for a swim and enjoy time exploring the beautiful coastline from the water.",
        durationHours: 4,
        cost: 150
    },
    {
        id: 2,
        title: "Path of the Gods Hike",
        description: "Hike one of the Amalfi Coast's most famous trails while enjoying breathtaking views of the Mediterranean Sea and surrounding mountains. Follow a local guide along scenic paths overlooking Positano and the coastal villages below.",
        durationHours: 3.5,
        cost: 75
    },
    {
        id: 3,
        title: "Italian Cooking Class",
        description: "Learn how to prepare traditional Italian dishes during a hands-on cooking class with a local chef. Make fresh pasta and classic regional favorites before sitting down to enjoy the meal you created.",
        durationHours: 3,
        cost: 110
    }
        ]  
    },
    {
        id: 3,
        location: "Paris",
        country: "France",
        tripTotal: 3650,
        lengthOfStayDays: 7,
        timeZone: "CET / CEST (UTC+1 / UTC+2)",
        bestTimeToVisit: "April–May & September–October",
        about: "Experience the magic of Paris with iconic landmarks, charming streets, and unforgettable French culture. Spend your days exploring museums, relaxing at sidewalk cafés, strolling along the Seine, or enjoying delicious pastries and classic French cuisine.",
        image: "https://ik.imagekit.io/fbon0i47u/paris.png",
        image2: "https://ik.imagekit.io/fbon0i47u/paris1.jpg",
        image3: "https://ik.imagekit.io/fbon0i47u/paris2.jpg",
        image4: "https://ik.imagekit.io/fbon0i47u/paris3.jpg",
        image5: "https://ik.imagekit.io/fbon0i47u/paris4.jpg",
        image6: "https://ik.imagekit.io/fbon0i47u/paris5.jpg",
        image7: "https://ik.imagekit.io/fbon0i47u/paris6.jpg",
        flightDetails: {
            airline: "Air France",
            flightCost: 1050,
        },
        hotelDetails: {
            hotelName: "Hotel Le Six",
            hotelCost: 1475,
        },
        excursions: [
            {
                id: 1,
                title: "Seine River Dinner Cruise",
                description: "Cruise along the Seine River while taking in beautiful views of Paris landmarks including the Eiffel Tower, Notre-Dame, and the Louvre. Enjoy a French dinner on board as the city lights up around you.",
                durationHours: 2.5,
                cost: 135
            },
            {
                id: 2,
                title: "Versailles Palace & Gardens Tour",
                description: "Spend the day exploring the magnificent Palace of Versailles and its famous gardens with a guided tour. Walk through the Hall of Mirrors, learn about French royal history, and enjoy time wandering through the beautifully landscaped grounds.",
                durationHours: 6,
                cost: 120
            },
            {
                id: 3,
                title: "Montmartre Food Tour",
                description: "Explore the charming streets of Montmartre while sampling classic French favorites from local bakeries, cafés, and specialty shops. Taste fresh pastries, cheeses, chocolates, and other Parisian treats while learning about the history of the neighborhood.",
                durationHours: 3,
                cost: 95
            }
        ]
    },
{
    id: 4,
    location: "Tokyo",
    country: "Japan",
    tripTotal: 4200,
    lengthOfStayDays: 8,
    timeZone: "JST (UTC+9)",
    bestTimeToVisit: "March–May & October–November",
    about: "Discover Tokyo, where modern city life meets centuries of Japanese tradition. Spend your days exploring colorful neighborhoods, visiting historic temples, trying incredible local food, or taking in the bright lights and energy of the city.",
    image: "https://ik.imagekit.io/fbon0i47u/japan.png",
    image2: "https://ik.imagekit.io/fbon0i47u/tokyo5.jpg",
    image3: "https://ik.imagekit.io/fbon0i47u/tokyo.jpg",
    image4: "https://ik.imagekit.io/fbon0i47u/tokyo1.jpg",
    image5: "https://ik.imagekit.io/fbon0i47u/tokyo2.jpg",
    image6: "https://ik.imagekit.io/fbon0i47u/tokyo3.jpg",
    image7: "https://ik.imagekit.io/fbon0i47u/tokyo4.jpeg",
    flightDetails: {
        airline: "Japan Airlines",
        flightCost: 1350,
    },
    hotelDetails: {
        hotelName: "Shibuya Excel Hotel Tokyu",
        hotelCost: 1520,
    },
    excursions: [
        {
            id: 1,
            title: "Mount Fuji Day Trip",
            description: "Escape Tokyo for a day and experience the incredible scenery surrounding Mount Fuji. Visit scenic viewpoints, explore the nearby lakes, and take in unforgettable views of Japan's most famous mountain.",
            durationHours: 10,
            cost: 120
        },
        {
            id: 2,
            title: "Tokyo Food Tour",
            description: "Explore Tokyo's exciting food scene with a guided tour through local neighborhoods and hidden restaurants. Sample favorites like sushi, ramen, yakitori, and traditional Japanese sweets along the way.",
            durationHours: 3,
            cost: 105
        },
        {
            id: 3,
            title: "Traditional Tea Ceremony",
            description: "Experience an authentic Japanese tea ceremony and learn about the traditions behind preparing and serving matcha. Enjoy traditional Japanese sweets while discovering the history and etiquette of this centuries-old practice.",
            durationHours: 1.5,
            cost: 65
        }
    ]
},
{
    id: 5,
    location: "Santorini",
    country: "Greece",
    tripTotal: 3900,
    lengthOfStayDays: 7,
    timeZone: "EET / EEST (UTC+2 / UTC+3)",
    bestTimeToVisit: "May–June & September–October",
    about: "Escape to Santorini for stunning ocean views, whitewashed villages, and unforgettable sunsets. Spend your days exploring charming streets, relaxing on unique beaches, enjoying fresh Greek cuisine, or taking a scenic boat ride around the island.",
    image: "https://ik.imagekit.io/fbon0i47u/greece.png",
    image2: "https://ik.imagekit.io/fbon0i47u/sant6.jpg",
    image3: "https://ik.imagekit.io/fbon0i47u/sant1.jpg",
    image4: "https://ik.imagekit.io/fbon0i47u/sant2.jpg",
    image5: "https://ik.imagekit.io/fbon0i47u/sant3.jpg",
    image6: "https://ik.imagekit.io/fbon0i47u/sant4.jpg",
    image7: "https://ik.imagekit.io/fbon0i47u/sant5.jpg",
    flightDetails: {
        airline: "Delta",
        flightCost: 1250,
    },
    hotelDetails: {
        hotelName: "Aressana Spa Hotel & Suites",
        hotelCost: 1450,
    },
    excursions: [
        {
            id: 1,
            title: "Santorini Sunset Catamaran Cruise",
            description: "Sail around the beautiful coastline of Santorini aboard a catamaran while enjoying views of the island's dramatic cliffs and whitewashed villages. Swim in the Aegean Sea before watching the famous Santorini sunset from the water.",
            durationHours: 5,
            cost: 145
        },
        {
            id: 2,
            title: "Santorini Wine Tasting Tour",
            description: "Visit local wineries and discover the unique wines produced from grapes grown in Santorini's volcanic soil. Sample several Greek wines while learning about the island's winemaking traditions and enjoying beautiful vineyard views.",
            durationHours: 4,
            cost: 110
        },
        {
            id: 3,
            title: "Volcano & Hot Springs Tour",
            description: "Take a boat to Santorini's volcanic islands and hike across the dramatic volcanic landscape. After exploring the crater, cool off with a swim in the naturally warm waters of the nearby hot springs.",
            durationHours: 6,
            cost: 75
        }
    ]
},
{
    id: 6,
    location: "Banff",
    country: "Canada",
    tripTotal: 3200,
    lengthOfStayDays: 6,
    timeZone: "Mountain Time (UTC−7 / UTC−6)",
    bestTimeToVisit: "June–September",
    about: "Escape to Banff for breathtaking mountain views, turquoise lakes, and endless outdoor adventures. Spend your days hiking scenic trails, exploring Banff National Park, relaxing by the lake, or taking in the beauty of the Canadian Rockies.",
    image: "https://ik.imagekit.io/fbon0i47u/banff.png",
    image2: "https://ik.imagekit.io/fbon0i47u/banff6.jpg",
    image3: "https://ik.imagekit.io/fbon0i47u/banff1.jpg",
    image4: "https://ik.imagekit.io/fbon0i47u/banff2.jpg",
    image5: "https://ik.imagekit.io/fbon0i47u/banff3.jpg",
    image6: "https://ik.imagekit.io/fbon0i47u/banff4.jpg",
    image7: "https://ik.imagekit.io/fbon0i47u/banff5.jpg",
    flightDetails: {
        airline: "Air Canada",
        flightCost: 650,
    },
    hotelDetails: {
        hotelName: "Banff Caribou Lodge & Spa",
        hotelCost: 1380,
    },
    excursions: [
        {
            id: 1,
            title: "Lake Louise & Moraine Lake Tour",
            description: "Spend the day exploring two of Banff National Park's most breathtaking alpine lakes. Take in the turquoise waters, towering mountain peaks, and scenic walking trails surrounding Lake Louise and Moraine Lake.",
            durationHours: 6,
            cost: 110
        },
        {
            id: 2,
            title: "Banff Gondola",
            description: "Ride the Banff Gondola to the top of Sulphur Mountain for incredible panoramic views of the Canadian Rockies. Explore the mountaintop boardwalk and observation decks while taking in the surrounding mountain scenery.",
            durationHours: 2.5,
            cost: 65
        },
        {
            id: 3,
            title: "Kananaskis River Rafting",
            description: "Experience the Canadian Rockies from the water on an exciting guided rafting adventure along the Kananaskis River. Navigate fun rapids while surrounded by forests, mountain peaks, and beautiful wilderness scenery.",
            durationHours: 4,
            cost: 125
        }
    ]
},
{
    id: 7,
    location: "Bali",
    country: "Indonesia",
    tripTotal: 3100,
    lengthOfStayDays: 9,
    timeZone: "WITA (UTC+8)",
    bestTimeToVisit: "April–October",
    about: "Escape to Bali for tropical beaches, lush landscapes, and rich island culture. Spend your days exploring beautiful temples, relaxing by the ocean, discovering waterfalls and rice terraces, or enjoying delicious local food and unforgettable sunsets.",
    image: "https://ik.imagekit.io/fbon0i47u/bali.png",
    image2: "https://ik.imagekit.io/fbon0i47u/bali1.jpg",
    image3: "https://ik.imagekit.io/fbon0i47u/bali6.jpg",
    image4: "https://ik.imagekit.io/fbon0i47u/bali2.jpg",
    image5: "https://ik.imagekit.io/fbon0i47u/bali3.jpg",
    image6: "https://ik.imagekit.io/fbon0i47u/bali4.jpg",
    image7: "https://ik.imagekit.io/fbon0i47u/bali5.jpg",
    flightDetails: {
        airline: "Singapore Airlines",
        flightCost: 1400,
    },
    hotelDetails: {
        hotelName: "Adiwana Resort Jembawan",
        hotelCost: 900,
    },
    excursions: [
        {
            id: 1,
            title: "Ubud Temples & Rice Terraces Tour",
            description: "Explore the cultural heart of Bali with visits to beautiful temples, traditional villages, and the famous Tegallalang Rice Terraces. Take in the lush scenery while learning about Balinese culture and traditions from a local guide.",
            durationHours: 8,
            cost: 75
        },
        {
            id: 2,
            title: "Mount Batur Sunrise Hike",
            description: "Start your morning with a guided hike to the summit of Mount Batur before sunrise. Watch the sun rise over Bali's mountains and Lake Batur before making your way back down the volcano.",
            durationHours: 6,
            cost: 65
        },
        {
            id: 3,
            title: "Nusa Penida Island Tour",
            description: "Take a boat to Nusa Penida and spend the day exploring dramatic cliffs, turquoise water, and beautiful beaches. Visit famous spots like Kelingking Beach and Crystal Bay with plenty of opportunities for amazing photos.",
            durationHours: 10,
            cost: 115
        }
    ]
},
{
    id: 8,
    location: "New York City",
    tripTotal: 2850,
    lengthOfStayDays: 5,
    timeZone: "Eastern Time (UTC-5 / UTC-4)",
    bestTimeToVisit: "April - June & September - November",
    about: "Experience the energy of New York City with iconic landmarks, vibrant neighborhoods, and endless things to see and do. Spend your days exploring Central Park, visiting world-famous museums, catching a Broadway show, or discovering incredible restaurants and shops throughout the city.",
    image: "https://ik.imagekit.io/fbon0i47u/newYork.png",
    image2: "https://ik.imagekit.io/fbon0i47u/newyork1.jpg",
    image3: "https://ik.imagekit.io/fbon0i47u/newyork2.jpg",
    image4: "https://ik.imagekit.io/fbon0i47u/newyork3.jpg",
    image5: "https://ik.imagekit.io/fbon0i47u/ny4.jpg",
    image6: "https://ik.imagekit.io/fbon0i47u/ny5.jpg",
    image7: "https://ik.imagekit.io/fbon0i47u/ny6.jpg",
    flightDetails: {
        airline: "Delta",
        flightCost: 450,
    },
    hotelDetails: {
        hotelName: "Arlo Midtown",
        hotelCost: 1250,
    },
    excursions: [
        {
            id: 1,
            title: "Statue of Liberty & Ellis Island Tour",
            description: "Take a ferry across New York Harbor to visit the Statue of Liberty and Ellis Island. Explore two of the city's most famous landmarks while learning about their history and enjoying views of the Manhattan skyline.",
            durationHours: 4.5,
            cost: 65
        },
        {
            id: 2,
            title: "Broadway Show",
            description: "Experience the excitement of New York City's Theater District with an evening Broadway performance. Enjoy world-class acting, music, and entertainment in one of the city's iconic theaters.",
            durationHours: 2.5,
            cost: 175
        },
        {
            id: 3,
            title: "New York Food & Neighborhood Tour",
            description: "Explore some of Manhattan's most famous neighborhoods while sampling classic New York favorites along the way. Try pizza, bagels, and other local specialties while discovering hidden spots and learning about the city's history.",
            durationHours: 3,
            cost: 90
        }
    ]
},
]

export default destinationData;