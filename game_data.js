const GAME_DATA = {
    config: {
        xpPerHour: 10,
        baseXP: 100,
        xpMultiplier: 1.4,
        // Probabilities (0.0 to 1.0)
        itemDropChance: 0.2, 
        eventTriggerChance: 0.2, 
        // Add this line:
        itemMilestones: [3, 5, 8, 12, 15, 20, 25, 30, 35, 40]
    },
    
        welcomeEvent: {
                id: "tutorial_start",
                title: "The Warden's Path",
                description: "You stand at the edge of a faint mist: <br><strong> The Miasma</strong><br><br> Adds vices - this identifies the miasma. Every moment you resist builds willpower. In times of doubt come back to rest before giving in. Either press on with the journey, take a break, consult the oracle, find artifacts and learn about the origin of the miasma. As you level up, the light of your lanthorn becomes stronger and drives away the mist.",
                colorClass: "glowing-gold",
                options: [
                    { 
                        label: "I am ready. Light the way.", 
                        effect: "xp", 
                        value: 10, 
                        resultText: "Your resolve hardens. The journey begins." 
                    }
                ]
            },

    // --- AUDIO PATHS ---
    // Place your .mp3 or .wav files in an 'assets/audio' folder
    audio: {
        levelUp: "assets/audio/level_up.mp3",
        itemGain: "assets/audio/item_gain.mp3",
        event: "assets/audio/event_occurred.mp3",
        uiClick: "assets/audio/ui_click.mp3",
        ambience: "assets/audio/ambience.mp3"
    },
    
    // --- LORE MAPPING ---
    viceKeywords: {
        sugar: ['sugar', 'candy', 'sweet', 'chocolate', 'soda', 'cookie', 'dessert', 'cake', 'ice cream'],
        social: ['social', 'insta', 'tiktok', 'facebook', 'twitter', 'scroll', 'reddit', 'feed', 'phone'],
        tv: ['tv', 'netflix', 'series', 'movie', 'stream', 'youtube', 'watch', 'hbo', 'disney', 'binge'],
        junk: ['junk', 'fast food', 'burger', 'pizza', 'fries', 'mcdonalds', 'kfc', 'takeout', 'grease'],
        gaming: ['game', 'entertainment','steam', 'playstation', 'xbox', 'nintendo', 'switch', 'league', 'wow', 'fortnite'],
        shopping: ['shop', 'buy', 'amazon', 'spend', 'money', 'sale', 'cart']
    },

    loreLibrary: {
        sugar: { name: "Moonlight Glimmer", icon: "droplets", desc: "A deceptive dew that crystallizes on corrupted roots." },
        social: { name: "The Siren's Mirror", icon: "cast", desc: "A glass reflecting only what you lack." },
        tv: { name: "The Twilight Spell", icon: "clapperboard", desc: "An endless haze that steals the sun." },
        junk: { name: "The Alchemist's Sludge", icon: "utensils", desc: "Coarse fuel that weighs down the soul." },
        gaming: { name: "The Gilded Labyrinth", icon: "gamepad-2", desc: "Victories that vanish like smoke upon waking." },
        shopping: { name: "The Merchant's Curse", icon: "coins", desc: "Gold that turns to dust in your hands." },
        mp: { name: "The Primeval Ruin", icon: "coins", desc: "A curse placed deep inside." },
        default: { name: "The Grey Mist", icon: "cloud-fog", desc: "A formless shape that obscures the path." }
    },

    // --- MESSAGES ---
    oracleWisdom: [
        "The urge is a guest that eventually leaves if you do not offer it a chair.",
        "The Miasma is a lie told by a tired mind.",
        "To stay awake is the greatest act of rebellion.",
        "A moment of stillness is a shield no blade can pierce.",
        "Breathe. You are the mountain, the urge is but the wind."
    ],

    falterMessages: [
        "The paladin wanderer must take a rest.",
        "A kind cleric hands you a talisman; you feel rejuvenated.",
        "The road is steep; a temporary camp is not a defeat.",
        "Rest now. The mountain will still be there at dawn.",
        "Do not judge yourself. Simply lace your boots and begin again."
    ],

    companionMessages: [
        "A fellow Warden has resisted the Moonlight Glimmer for 7 days. Their resolve warms the air.",
        "You hear a distant bell chime. Another soul has chosen to Press On.",
        "A campfire flickers on the horizon. You are not alone in this fog.",
        "Someone, somewhere, just put down the Siren's Mirror. The silence is peaceful."
    ],

    // --- ITEMS ---
    // Ensure you have these PNGs in your 'assets' folder
    artifacts: [
        { 
            id: "warden_cloak", 
            name: "Threadbare Cloak", 
            description: "Smells of campfire and old parchment.", 
            img: "assets/items/cloak.png" 
        },
        { 
            id: "silver_bell", 
            name: "Bell of Clarity", 
            description: "Its chime cuts through the thickest Miasma.", 
            img: "assets/items/bell.png" 
        },
        { 
            id: "emberslab", 
            name: "Ember Slab", 
            description: "Warm to the touch.", 
            img: "assets/items/emberslab.png" 
        },
        { 
            id: "key1", 
            name: "Ornate Key", 
            description: "Perhaps it opens a forgotten memory.", 
            img: "assets/items/key1.png" 
        },
        { 
            id: "incense", 
            name: "Sacred Incense", 
            description: "Clears the mind and the air.", 
            img: "assets/items/incense.png" 
        },
        {id: "coin1", name: "Scratched Coin", description: "Silver coin with a scratched profile.", img:"assets/items/coin1.png"},
        {id: "coin1", name: "Scratched Coin", description: "Silver coin with a scratched profile.", img:"assets/items/coin1.png"}
    ],

    // --- JOURNAL ---
    journalEntries: [
        { 
            id: "page_1", 
            unlockLevel: 2, 
            title: "Entry I: The Taste of Ash", 
            text: "Found a page from an unknown Knight. It speaks of the sugar-dew. He says the first taste is like a dream, but the tenth taste is like ash. I must remember this when the fog thickens."
        },
        { 
            id: "page_2", 
            unlockLevel: 5, 
            title: "Entry II: The Mirror", 
            text: "The Siren's Mirror does not show your face. It shows a version of you that doesn't exist. To look away is to become real again."
        }
    ],

    // --- RANDOM EVENTS ---
    // colorClass options: 'glowing-silver' (default), 'glowing-gold', 'glowing-green', 'glowing-red'
    randomEvents: [
        {
            id: "fellow_wanderer",
            title: "A Fellow Wanderer",
            description: "A hooded figure emerges from the mist, offering a strange brew.",
            colorClass: "glowing-green", 
            img: "assets/events/wanderer.png",
            options: [
                { label: "Drink the Brew", effect: "xp", value: 20, resultText: "It tastes bitter, but your mind clears. <br> +20 XP" },
                { label: "Decline and move on", effect: "momentum", value: 1, resultText: "He nods respectfully. You feel steadfast." }
            ]
        },
        {
            id: "ancient_shrine",
            title: "Ruined Shrine",
            description: "You find a moss-covered altar dedicated to forgotten gods of discipline.",
            colorClass: "glowing-green",
            img: "assets/events/shrine.png",
            options: [
                { label: "Clean the Altar", effect: "item_chance", value: 0.5, resultText: "You spend time cleaning. You feel calm." },
                { label: "Meditate", effect: "xp", value: 30, resultText: "The silence answers you. <br> +30 XP" }
            ]
        },
        {
            id: "storm_approaching",
            title: "A Storm of Whispers",
            description: "The Miasma thickens, voices tempting you to turn back.",
            colorClass: "glowing-silver",
            img: "assets/events/storm.png",
            options: [
                { label: "Light the Lanthorn", effect: "xp", value: 30, resultText: "The light burns away the voices. <br> +50 XP" },
                { label: "Stand your ground", effect: "xp", value: 20, resultText: "You weather the storm. <br> +20 XP" }
            ]
        }
    ],
    // Add this inside GAME_DATA
oracleConfig: {
    img: "assets/oracle.png",
    messages: [
        "The stars are but holes in a very large box. Do not let the light leak out.",
        "The Miasma does not hate you. A stomach does not hate the grain it digests.",
        "Your Lanthorn burns with the friction of your refusal. Keep saying 'No'."
    ]
}
};

