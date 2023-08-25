const express = require("express")
const cors = require("cors")
const app = express()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Connected to backend.");
  });

app.use(cors())
app.use(express.json());

let users = [
    { 
        id: 1, 
        lastName: 'Brown', 
        firstName: 'Kate', 
        email: "brownk@gmail.com", 
        img:"../src/images/userboxProfiles/female4.jpg", 
        status: true, 
        phone: "+1 505-892-2361", 
        createdat: "01.02.2023",
        username: "Katey98",

        activities: [
            {
              text: "Katey98 purchased Bose SoundLink Bluetooth Speaker",
              time: "3 day ago",
            },
            {
              text: "Katey98 added 3 items into their wishlist",
              time: "1 week ago",
            },
            {
              text: "Katey98 purchased Sony Bravia KD-32w800",
              time: "2 weeks ago",
            },
            {
              text: "Katey98 reviewed a product",
              time: "1 month ago",
            },
            {
              text: "Katey98 added 1 items into their wishlist",
              time: "1 month ago",
            },
            {
              text: "Katey98 reviewed a product",
              time: "2 months ago",
            },
          ],
        
        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 4000,
                    Visits: 2400,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 3000,
                    Visits: 1398,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 2000,
                    Visits: 9800,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 2780,
                    Visits: 3908,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 1890,
                    Visits: 4800,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 2390,
                    Visits: 3800,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 3490,
                    Visits: 4300,
                   
                  },
            ],
          },

          
          
    },
    { 
        id: 2, 
        lastName: 'Williams', 
        firstName: 'Beth',
        email: "BethWilliams5@gmail.com", 
        img: "../src/images/userboxProfiles/femaleP1.jpg", 
        status: false,
        phone: "+1 208-274-6962",  
        createdat: "01.02.2023",
        username: "Beth98",
        activities: [
          {
            text: "Beth98 purchased iPhone 13 Pro",
            time: "4 days ago",
          },
          {
            text: "Beth98 added 2 items into their wishlist",
            time: "2 weeks ago",
          },
          {
            text: "Beth98 purchased Samsung 55-inch Smart TV",
            time: "3 weeks ago",
          },
          {
            text: "Beth98 reviewed a product",
            time: "2 months ago",
          },
          {
            text: "Beth98 added 3 items into their wishlist",
            time: "2 months ago",
          },
          {
            text: "Beth98 reviewed a product",
            time: "3 months ago",
          },
        ],

        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 5400,
                    Visits: 3030,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 5024,
                    Visits: 5400,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 3405,
                    Visits: 5600,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 6040,
                    Visits: 2000,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 3500,
                    Visits: 3000,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 4000,
                    Visits: 2000,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 3054,
                    Visits: 2990,
                   
                  },

            ],
          },

          
    },
    { 
        id: 3, 
        lastName: 'Allen', 
        firstName: 'Megan',
        email: "Allen123@gmail.com",
        img: "../src/images/userboxProfiles/femaleP2.jpg", 
        status: true, 
        phone: "+1 505-680-7804",    
        createdat: "01.02.2023",
        username: "AllenAlien",
        activities: [
          {
            text: "AllenAlien purchased MacBook Pro 13",
            time: "5 days ago",
          },
          {
            text: "AllenAlien added 1 item into their wishlist",
            time: "1 week ago",
          },
          {
            text: "AllenAlien purchased Bose QuietComfort 35 II",
            time: "2 weeks ago",
          },
          {
            text: "AllenAlien reviewed a product",
            time: "1 month ago",
          },
          {
            text: "AllenAlien added 2 items into their wishlist",
            time: "1 month ago",
          },
          {
            text: "AllenAlien reviewed a product",
            time: "2 months ago",
          },
        ],

        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 2100,
                    Visits: 1000,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 2100,
                    Visits: 1098,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 2300,
                    Visits: 4500,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 2180,
                    Visits: 3208,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 4290,
                    Visits: 1200,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 2321,
                    Visits: 2699,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 4990,
                    Visits: 3100,
                   
                  },
            ],
          },
    },
    { 
        id: 4, 
        lastName: 'Abney', 
        firstName: 'Thomas',
        email: "TomAbney94@gmail.com",
        img: "../src/images/userboxProfiles/Male2.jpg", 
        status: true, 
        phone: "+1 207-823-4274",         
        createdat: "01.02.2023",
        username: "Tommy2",
        
        activities: [
          {
            text: "Tommy2 purchased Samsung Galaxy S21",
            time: "6 days ago",
          },
          {
            text: "Tommy2 added 3 items into their wishlist",
            time: "2 weeks ago",
          },
          {
            text: "Tommy2 purchased Sony WH-1000XM4",
            time: "3 weeks ago",
          },
          {
            text: "Tommy2 reviewed a product",
            time: "1 month ago",
          },
          {
            text: "Tommy2 added 1 item into their wishlist",
            time: "1 month ago",
          },
          {
            text: "Tommy2 reviewed a product",
            time: "2 months ago",
          },
        ],

        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 1000,
                    Visits: 4400,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 2000,
                    Visits: 3398,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 4000,
                    Visits: 3800,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 1780,
                    Visits: 5908,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 2890,
                    Visits: 3800,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 2390,
                    Visits: 2200,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 1290,
                    Visits: 2900,
                   
                  },
            ],
          },
    },
    { 
        id: 5, 
        lastName: 'Green', 
        firstName: 'Phil',
        email: "Philgreen96@gmail.com",
        img: "../src/images/userboxProfiles/male3.jpg", 
        status: false, 
        phone: "+1 505-646-8683", 
        createdat: "01.02.2023",
        username: "GreenPill",

        activities: [
          {
            text: "GreenPill purchased iPhone 13 Pro Max",
            time: "5 days ago",
          },
          {
            text: "GreenPill added 2 items into their wishlist",
            time: "1 week ago",
          },
          {
            text: "GreenPill purchased Bose SoundLink Revolve",
            time: "2 weeks ago",
          },
          {
            text: "GreenPill reviewed a product",
            time: "1 month ago",
          },
          {
            text: "GreenPill added 1 item into their wishlist",
            time: "1 month ago",
          },
          {
            text: "GreenPill reviewed a product",
            time: "2 months ago",
          },
        ],
        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 1200,
                    Visits: 3200,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 4500,
                    Visits: 6598,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 2300,
                    Visits: 4500,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 1280,
                    Visits: 5608,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 1290,
                    Visits: 1200,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 2190,
                    Visits: 5300,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 3290,
                    Visits: 1200,
                   
                  },
            ],
          },
    },
    { 
        id: 6, 
        lastName: 'Elliot', 
        firstName: "Ryan",
        email: "elliot123@gmail.com",
        img: "../src/images/userboxProfiles/MaleProfile1.jpg", 
        status: true, 
        phone: "+1 505-839-1238",      
        createdat: "01.02.2023", 
        username: "Elliot23",

        activities: [
          {
            text: "Elliot23 purchased Samsung Galaxy S21",
            time: "4 days ago",
          },
          {
            text: "Elliot23 added 4 items into their wishlist",
            time: "2 weeks ago",
          },
          {
            text: "Elliot23 purchased Sony WH-1000XM4",
            time: "3 weeks ago",
          },
          {
            text: "Elliot23 reviewed a product",
            time: "1 month ago",
          },
          {
            text: "Elliot23 added 2 items into their wishlist",
            time: "1 month ago",
          },
          {
            text: "Elliot23 reviewed a product",
            time: "2 months ago",
          },
        ],

        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 2100,
                    Visits: 1200,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 2300,
                    Visits: 1298,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 1200,
                    Visits: 4000,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 1280,
                    Visits: 1208,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 1290,
                    Visits: 2300,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 1190,
                    Visits: 4200,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 2390,
                    Visits: 1100,
                   
                  },
            ],
          },
    },
    { 

        id: 7, 
        lastName: 'Clifford', 
        firstName: 'Ferrara', 
        email: "clifford97@gmail.com",
        img: "../src/images/userboxProfiles/dogProfuke.jpg", 
        status: true, 
        phone: "+1 505-656-2329",   
        createdat: "01.02.2023", 
        username: "FerClif",
        activities: [
          {
            text: "FerClif purchased Playstation Skull Candy Flex Earphones",
            time: "2 day ago",
          },
          {
            text: "FerClif added 1 items into their wishlist",
            time: "1 week ago",
          },
          {
            text: "FerClif purchased Sony Bravia KD-32w800",
            time: "2 weeks ago",
          },
          {
            text: "FerClif reviewed a product",
            time: "1 month ago",
          },
          {
            text: "FerClif added 1 items into their wishlist",
            time: "1 month ago",
          },
          {
            text: "FerClif reviewed a product",
            time: "2 months ago",
          },
        ],

        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 1000,
                    Visits: 3400,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 1000,
                    Visits: 4398,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 3000,
                    Visits: 1800,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 6780,
                    Visits: 2908,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 3890,
                    Visits: 1800,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 5390,
                    Visits: 1800,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 3490,
                    Visits: 1300,
                   
                  },
            ],
          },
    },
    { 

        id: 8, 
        lastName: 'Frances', 
        firstName: 'Rossini', 
        email: "Frossini@gmail.com" , 
        status: true, 
        phone: "+1 505-644-2476",   
        createdat: "01.02.2023", 
        username: "RossineFran",
        activities: [
          {
            text: "RossineFran purchased MacBook Air M1",
            time: "4 days ago",
          },
          {
            text: "RossineFran added 2 items into their wishlist",
            time: "1 week ago",
          },
          {
            text: "RossineFran purchased LG 27-inch 4K Monitor",
            time: "3 weeks ago",
          },
          {
            text: "RossineFran reviewed a product",
            time: "1 month ago",
          },
          {
            text: "RossineFran added 1 item into their wishlist",
            time: "1 month ago",
          },
          {
            text: "RossineFran reviewed a product",
            time: "2 months ago",
          },
        ],
        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 2354,
                    Visits: 1400,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 3000,
                    Visits: 1235,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 3882,
                    Visits: 1900,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 4002,
                    Visits: 2345,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 1599,
                    Visits: 4000,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 1250,
                    Visits: 2000,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 2000,
                    Visits: 1245,
                   
                  },
            ],
          },
    },
    { 

        id: 9, 
        lastName: 'Sanchez',
         firstName: 'Pablo',
          email: "Psanchez@gmail.com",
          img: "../src/images/userboxProfiles/male4.jpg", 
          status: true, 
          phone: "+1 223-755-5970",       
          createdat: "01.02.2023", 
          username: "Pablito23",
          activities: [
            {
              text: "Pablito23 purchased Bose QuietComfort® 45 headphones",
              time: "3 days ago",
            },
            {
              text: "Pablito23 added 1 items into their wishlist",
              time: "2 week ago",
            },
            {
              text: "Pablito23 purchased Sony Bravia KD-32w800",
              time: "2 weeks ago",
            },
            {
              text: "Pablito23 reviewed a product",
              time: "1 month ago",
            },
            {
              text: "Pablito23 added 2 items into their wishlist",
              time: "1 month ago",
            },
            {
              text: "Pablito23 reviewed a product",
              time: "2 months ago",
            },
          ],
          chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 2300,
                    Visits: 5000,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 2300,
                    Visits: 4598,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 3000,
                    Visits: 5600,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 1600,
                    Visits: 1700,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 1200,
                    Visits: 1500,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 1257,
                    Visits: 2304,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 2354,
                    Visits: 2000,
                   
                  },
            ],
          },
     },
    { 

        id: 10,
        lastName: 'Jones', 
        firstName: 'John',
         status: true, 
         phone: "+1 505-622-5153",  
         createdat: "01.02.2023",
         username: "Jhonnyjones",
         activities: [
          {
            text: "Jhonnyjones purchased Bose Noise Cancelling Headphones",
            time: "31day ago",
          },
          {
            text: "Jhonnyjones added 4 items into their wishlist",
            time: "1 week ago",
          },
          {
            text: "Jhonnyjones purchased Bose SoundLink Flex Bluetooth",
            time: "1 week ago",
          },
          {
            text: "Jhonnyjones reviewed a product",
            time: "1 month ago",
          },
          {
            text: "Jhonnyjones added 2 items into their wishlist",
            time: "2 months ago",
          },
          {
            text: "Jhonnyjones reviewed a product",
            time: "2 months ago",
          },
        ],
         chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 3000,
                    Visits: 2200,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 2345,
                    Visits: 2267,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 2356,
                    Visits: 5000,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 6312,
                    Visits: 3908,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 2354,
                    Visits: 1245,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 2345,
                    Visits: 1111,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 2312,
                    Visits: 3345,
                   
                  },
            ],
          },
    },
    { 

        id: 11,
        lastName: 'Allan', 
        firstName: 'Wake', 
        status: true, 
        phone: "+1 505-892-2361",   
        createdat: "01.02.2023",
        username: "AllanWakey23",
        activities: [
          {
            text: "AllanWakey23 purchased Bose SoundLink Micro Bluetooth® Speaker",
            time: "3 day ago",
          },
          {
            text: "AllanWakey23 added 5 items into their wishlist",
            time: "2 weeks ago",
          },
          {
            text: "AllanWakey23 purchased Sony Bravia KD-32w800",
            time: "2 weeks ago",
          },
          {
            text: "AllanWakey23 reviewed a product",
            time: "1 month ago",
          },
          {
            text: "AllanWakey23 added 3 items into their wishlist",
            time: "1 month ago",
          },
          {
            text: "AllanWakey23 reviewed a product",
            time: "2 months ago",
          },
        ],
        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 2345,
                    Visits: 2200,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 2314,
                    Visits: 1398,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 1200,
                    Visits: 3200,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 1080,
                    Visits: 2008,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 2390,
                    Visits: 1200,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 1090,
                    Visits: 2000,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 1290,
                    Visits: 2300,
                   
                  },
            ],
          },
     },
    { 

        id: 12,
        lastName: 'Roxie', 
        firstName: 'Harvey', 
        status: true,
        phone: "+1 505-892-2361",       
        createdat: "01.02.2023",
        username: "Roxie23",
        activities: [
          {
            text: "Roxie23 purchased Bose SoundLink Revolve II Bluetooth® Speaker",
            time: "5 days ago",
          },
          {
            text: "Roxie23 added 1 item into their wishlist",
            time: "1 week ago",
          },
          {
            text: "Roxie23 purchased Sony Bravia KD-32w800",
            time: "1 weeks ago",
          },
          {
            text: "Roxie23 reviewed a product",
            time: "2 months ago",
          },
          {
            text: "Roxie23 added 1 items into their wishlist",
            time: "2 months ago",
          },
          {
            text: "Roxie23 reviewed a product",
            time: "2 months ago",
          },
        ],
        chart: {
            dataKeys: [
              { name: "Visits"},
              { name: "Clicks"},
            ],
            data: [
                {
                    name: 'Mon',
                    Clicks: 2000,
                    Visits: 1000,
                    
                  },
                  {
                    name: 'Tue',
                    Clicks: 1000,
                    Visits: 1398,
                    
                  },
                  {
                    name: 'Wed',
                    Clicks: 2300,
                    Visits: 2300,
                               
                  },
                  {
                    name: 'Thu',
                    Clicks: 3180,
                    Visits: 1208,
                     
                  },
                  {
                    name: 'Fri',
                    Clicks: 1890,
                    Visits: 3200,
                    
                  },
                  {
                    name: 'Sat',
                    Clicks: 1930,
                    Visits: 3300,
                    
                  },
                  {
                    name: 'Sun',
                    Clicks: 1290,
                    Visits: 2300,
                   
                  },
            ],
          },
    },
  ];
  
  let products = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/61cXpeTSV2L.jpg",
      title: "SkullCandy Flex Wireless In-Ear Headphones",
      color: "black",
      Brand: "SkullCandy",
      price: "$69.99",
      createdAt: "05.01.2024",
      inStock: true,
      activities: [
        {
          text: "Dean Wade purchased SkullCandy Flex Wireless In-Ear Headphones",
          time: "2 days ago",
        },
        {
          text: "Jake Joseph purchased SkullCandy Flex Wireless In-Ear Headphones",
          time: "1 week ago",
        },
        {
          text: "Sienna Wall dded SkullCandy Flex Wireless In-Ear Headphones to her wishlist",
          time: "1 weeks ago",
        },
        {
          text: "Clara Summers reviewed the product",
          time: "2 months ago",
        },
        {
          text: "Jake Joseph added SkullCandy Flex Wireless In-Ear Headphones to their his",
          time: "2 months ago",
        },
        {
          text: "Maisha Crane reviewed the product",
          time: "2 months ago",
        },
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
            {
                name: 'Mon',
                Visits: 3000,
                Orders: 1200,
                
              },
              {
                name: 'Tue',
                Visits: 3200,
                Orders: 1400,
                
              },
              {
                name: 'Wed',
                Visits: 4200,
                Orders: 1230,
                           
              },
              {
                name: 'Thu',
                Visits: 3400,
                Orders: 1200,
                 
              },
              {
                name: 'Fri',
                Visits: 4400,
                Orders: 2000,
                
              },
              {
                name: 'Sat',
                Visits: 4500,
                Orders: 2200,
                
              },
              {
                name: 'Sun',
                Visits: 2312,
                Orders: 1090,
               
              },
        ],
      },
    },
    {
      id: 2,
      img: "https://www.sony.com.pe/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
      title: "Sony WH-1000XM4 Wireless Headphones",
      color: "black",
      Brand: "Sony",
      price: "$299.99",
      createdAt: "15.03.2023",
      inStock: true,
      activities: [
        {
          text: "John Doe purchased Sony WH-1000XM4 Wireless Headphones",
          time: "2 days ago"
        },
        {
          text: "Emma Johnson purchased Sony WH-1000XM4 Wireless Headphones",
          time: "1 week ago"
        },
        {
          text: "Michael Smith added Sony WH-1000XM4 Wireless Headphones to his wishlist",
          time: "1 week ago"
        },
        {
          text: "Sophia Brown reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Oliver Davis added Sony WH-1000XM4 Wireless Headphones to his wishlist",
          time: "2 months ago"
        },
        {
          text: "Ava Wilson reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 4000, Orders: 2000 },
          { name: 'Tue', Visits: 5000, Orders: 2300 },
          { name: 'Wed', Visits: 4200, Orders: 1230 },
          { name: 'Thu', Visits: 3400, Orders: 2000 },
          { name: 'Fri', Visits: 4400, Orders: 2500 },
          { name: 'Sat', Visits: 5200, Orders: 2800 },
          { name: 'Sun', Visits: 5000, Orders: 2300 }
        ],
      },
    },
    {
      id: 3,
      img: "https://www.sony.com.pe/image/c0ebc50847b507a1e788c08c0530f599?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      title: "Sony SRS-XB43 Portable Speaker",
      color: "blue",
      Brand: "Sony",
      price: "$169.99",
      createdAt: "10.04.2023",
      inStock: true,
      activities: [
        {
          text: "Ethan Martinez purchased Sony SRS-XB43 Portable Speaker",
          time: "2 days ago"
        },
        {
          text: "Sophie Anderson purchased Sony SRS-XB43 Portable Speaker",
          time: "1 week ago"
        },
        {
          text: "Matthew White added Sony SRS-XB43 Portable Speaker to his wishlist",
          time: "1 week ago"
        },
        {
          text: "Olivia Clark reviewed the product",
          time: "2 months ago"
        },
        {
          text: "James Taylor added Sony SRS-XB43 Portable Speaker to his wishlist",
          time: "2 months ago"
        },
        {
          text: "Isabella Lewis reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 4200, Orders: 2000 },
          { name: 'Tue', Visits: 5200, Orders: 2300 },
          { name: 'Wed', Visits: 4300, Orders: 1230 },
          { name: 'Thu', Visits: 3500, Orders: 2000 },
          { name: 'Fri', Visits: 4800, Orders: 2500 },
          { name: 'Sat', Visits: 5400, Orders: 2800 },
          { name: 'Sun', Visits: 5100, Orders: 2300 }
        ],
      },
    },
    {
      id: 4,
      img: "https://pesonyb2c.vtexassets.com/arquivos/ids/215800/d7b7a583061ec800dfa74bea7bc37941.jpg?v=1760819421",
      title: "Sony WF-1000XM4 True Wireless Earbuds",
      color: "silver",
      Brand: "Sony",
      price: "$199.99",
      createdAt: "05.05.2023",
      inStock: false,
      activities: [
        {
          text: "Sophie Turner purchased Sony WF-1000XM4 True Wireless Earbuds",
          time: "2 days ago"
        },
        {
          text: "Noah Miller purchased Sony WF-1000XM4 True Wireless Earbuds",
          time: "1 week ago"
        },
        {
          text: "Ella Scott added Sony WF-1000XM4 True Wireless Earbuds to her wishlist",
          time: "1 week ago"
        },
        {
          text: "Liam Thompson reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Isabella Green added Sony WF-1000XM4 True Wireless Earbuds to her wishlist",
          time: "2 months ago"
        },
        {
          text: "Mason Cooper reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 4300, Orders: 2000 },
          { name: 'Tue', Visits: 5400, Orders: 2300 },
          { name: 'Wed', Visits: 4100, Orders: 1230 },
          { name: 'Thu', Visits: 3600, Orders: 2000 },
          { name: 'Fri', Visits: 4600, Orders: 2500 },
          { name: 'Sat', Visits: 5500, Orders: 2800 },
          { name: 'Sun', Visits: 5200, Orders: 2300 }
        ],
      },
    },
    {
      id: 5,
      img: "https://www.sony.co.in/microsite/where-to-buy/on-ear-headphones/mdr-xb650bt/images/mod-img.jpg",
      title: "Sony MDR-XB650BT Wireless Headphones",
      color: "red",
      Brand: "Sony",
      price: "$99.99",
      createdAt: "20.06.2023",
      inStock: false,
      activities: [
        {
          text: "Sophia Martinez purchased Sony MDR-XB650BT Wireless Headphones",
          time: "2 days ago"
        },
        {
          text: "Ethan Adams purchased Sony MDR-XB650BT Wireless Headphones",
          time: "1 week ago"
        },
        {
          text: "Olivia Clark added Sony MDR-XB650BT Wireless Headphones to her wishlist",
          time: "1 week ago"
        },
        {
          text: "Noah Brown reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Liam Turner added Sony MDR-XB650BT Wireless Headphones to his wishlist",
          time: "2 months ago"
        },
        {
          text: "Isabella Johnson reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 4500, Orders: 2100 },
          { name: 'Tue', Visits: 5500, Orders: 2400 },
          { name: 'Wed', Visits: 4300, Orders: 1330 },
          { name: 'Thu', Visits: 3700, Orders: 2200 },
          { name: 'Fri', Visits: 4800, Orders: 2700 },
          { name: 'Sat', Visits: 5800, Orders: 2900 },
          { name: 'Sun', Visits: 5300, Orders: 2400 }
        ],
      },
    },
    {
      id: 6,
      img: "https://www.sony.co.nz/image/c4e4d96d8d27bdf4611ec5b539af91b0?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
      title: "Sony GTK-XB90 Party Speaker",
      color: "black",
      Brand: "Sony",
      price: "$399.99",
      createdAt: "01.07.2023",
      inStock: true,
      activities: [
        {
          text: "Emma Adams purchased Sony GTK-XB90 Party Speaker",
          time: "2 days ago"
        },
        {
          text: "Liam Turner purchased Sony GTK-XB90 Party Speaker",
          time: "1 week ago"
        },
        {
          text: "Oliver Clark added Sony GTK-XB90 Party Speaker to his wishlist",
          time: "1 week ago"
        },
        {
          text: "Sophia Martinez reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Noah Brown added Sony GTK-XB90 Party Speaker to his wishlist",
          time: "2 months ago"
        },
        {
          text: "Isabella Johnson reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 4100, Orders: 1900 },
          { name: 'Tue', Visits: 5000, Orders: 2200 },
          { name: 'Wed', Visits: 4400, Orders: 1330 },
          { name: 'Thu', Visits: 3800, Orders: 2100 },
          { name: 'Fri', Visits: 4900, Orders: 2600 },
          { name: 'Sat', Visits: 5700, Orders: 2700 },
          { name: 'Sun', Visits: 5100, Orders: 2200 }
        ],
      },
      
    },
    {
      id: 7,
      img: "https://www.sony.ca/image/8f499d4640b363762e66edd1a4916a10?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
      title: "Sony WH-XB900N Extra Bass Headphones",
      color: "blue",
      Brand: "Sony",
      price: "$219.99",
      createdAt: "15.08.2023",
      inStock: true,
      activities: [
        {
          text: "Oliver Turner purchased Sony WH-XB900N Extra Bass Headphones",
          time: "2 days ago"
        },
        {
          text: "Emma Clark purchased Sony WH-XB900N Extra Bass Headphones",
          time: "1 week ago"
        },
        {
          text: "Sophia Adams added Sony WH-XB900N Extra Bass Headphones to her wishlist",
          time: "1 week ago"
        },
        {
          text: "Liam Martinez reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Isabella Brown added Sony WH-XB900N Extra Bass Headphones to her wishlist",
          time: "2 months ago"
        },
        {
          text: "Noah Johnson reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 4800, Orders: 2300 },
          { name: 'Tue', Visits: 5700, Orders: 2600 },
          { name: 'Wed', Visits: 4500, Orders: 1430 },
          { name: 'Thu', Visits: 3900, Orders: 2100 },
          { name: 'Fri', Visits: 5100, Orders: 2800 },
          { name: 'Sat', Visits: 5900, Orders: 3000 },
          { name: 'Sun', Visits: 5500, Orders: 2500 }
        ],
      },
      
    },
    {
      id: 8,
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412160_sd.jpg",
      title: "Sony SRS-XB33 Portable Speaker",
      color: "black",
      Brand: "Sony",
      price: "$129.99",
      createdAt: "05.09.2023",
      inStock: false,
      activities: [
        {
          text: "Oliver Turner purchased Sony WH-XB900N Extra Bass Headphones",
          time: "2 days ago"
        },
        {
          text: "Emma Clark purchased Sony WH-XB900N Extra Bass Headphones",
          time: "1 week ago"
        },
        {
          text: "Sophia Adams added Sony WH-XB900N Extra Bass Headphones to her wishlist",
          time: "1 week ago"
        },
        {
          text: "Liam Martinez reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Isabella Brown added Sony WH-XB900N Extra Bass Headphones to her wishlist",
          time: "2 months ago"
        },
        {
          text: "Noah Johnson reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 4900, Orders: 2400 },
          { name: 'Tue', Visits: 5900, Orders: 2700 },
          { name: 'Wed', Visits: 4600, Orders: 1530 },
          { name: 'Thu', Visits: 4000, Orders: 2300 },
          { name: 'Fri', Visits: 5200, Orders: 2900 },
          { name: 'Sat', Visits: 6000, Orders: 3100 },
          { name: 'Sun', Visits: 5700, Orders: 2600 }
        ],
      },
      
    },
    {
      id: 9,
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408358ld.jpg",
      title: "Sony WF-SP800N Sports Earbuds",
      color: "black",
      Brand: "Sony",
      price: "$149.99",
      createdAt: "20.09.2023",
      inStock: true,
      activities: [
        {
          text: "Isabella Turner purchased Sony WF-SP800N Sports Earbuds",
          time: "2 days ago"
        },
        {
          text: "Noah Adams purchased Sony WF-SP800N Sports Earbuds",
          time: "1 week ago"
        },
        {
          text: "Liam Clark added Sony WF-SP800N Sports Earbuds to her wishlist",
          time: "1 week ago"
        },
        {
          text: "Olivia Johnson reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Sophia Brown added Sony WF-SP800N Sports Earbuds to his wishlist",
          time: "2 months ago"
        },
        {
          text: "Ethan Martinez reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 5200, Orders: 2500 },
          { name: 'Tue', Visits: 6100, Orders: 2900 },
          { name: 'Wed', Visits: 4700, Orders: 1630 },
          { name: 'Thu', Visits: 4200, Orders: 2400 },
          { name: 'Fri', Visits: 5300, Orders: 3000 },
          { name: 'Sat', Visits: 6200, Orders: 3200 },
          { name: 'Sun', Visits: 5900, Orders: 2700 }
        ],
      },
      
    },
    {
      id: 10,
      img: "https://m.media-amazon.com/images/I/61yVjLfgi-L.jpg",
      title: "Sony XB01 Compact Speaker",
      color: "yellow",
      Brand: "Sony",
      price: "$39.99",
      createdAt: "10.10.2023",
      inStock: false,
      activities: [
        {
          text: "Noah Clark purchased Sony XB01 Compact Speaker",
          time: "2 days ago"
        },
        {
          text: "Sophia Adams purchased Sony XB01 Compact Speaker",
          time: "1 week ago"
        },
        {
          text: "Ethan Turner added Sony XB01 Compact Speaker to her wishlist",
          time: "1 week ago"
        },
        {
          text: "Liam Johnson reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Olivia Martinez added Sony XB01 Compact Speaker to his wishlist",
          time: "2 months ago"
        },
        {
          text: "Isabella Brown reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 5000, Orders: 2200 },
          { name: 'Tue', Visits: 6000, Orders: 2700 },
          { name: 'Wed', Visits: 4800, Orders: 1730 },
          { name: 'Thu', Visits: 4300, Orders: 2200 },
          { name: 'Fri', Visits: 5400, Orders: 2800 },
          { name: 'Sat', Visits: 6300, Orders: 3300 },
          { name: 'Sun', Visits: 6000, Orders: 2800 }
        ],
      },
    
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1657223143975-d29d7959a70f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      title: "Bose QuietComfort 35 II",
      color: "black",
      Brand: "Bose",
      price: "$299.99",
      createdAt: "01.02.2023",
      inStock: true,
      activities: [
        {
          text: "Isabella Turner purchased Bose QuietComfort 35 II",
          time: "2 days ago"
        },
        {
          text: "Noah Adams purchased Bose QuietComfort 35 II",
          time: "1 week ago"
        },
        {
          text: "Sophia Clark added Bose QuietComfort 35 II to her wishlist",
          time: "1 week ago"
        },
        {
          text: "Olivia Johnson reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Liam Martinez added Bose QuietComfort 35 II to his wishlist",
          time: "2 months ago"
        },
        {
          text: "Ethan Brown reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 5300, Orders: 2600 },
          { name: 'Tue', Visits: 6200, Orders: 3000 },
          { name: 'Wed', Visits: 4900, Orders: 1830 },
          { name: 'Thu', Visits: 4400, Orders: 2500 },
          { name: 'Fri', Visits: 5500, Orders: 3100 },
          { name: 'Sat', Visits: 6400, Orders: 3400 },
          { name: 'Sun', Visits: 6100, Orders: 2900 }
        ],
      },
      
    },
    {
      id: 12,
      img: "https://assets.bosecreative.com/transform/a6282cf5-fbb1-463f-99d4-ca286fcaf26e/SLRII_Black_Ecom_1?io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit",
      title: "Bose SoundLink Revolve",
      color: "gray",
      Brand: "Bose",
      price: "$199.99",
      createdAt: "01.02.2023",
      inStock: true,
      activities: [
        {
          text: "Isabella Adams purchased Bose SoundLink Revolve",
          time: "2 days ago"
        },
        {
          text: "Ethan Johnson purchased Bose SoundLink Revolve",
          time: "1 week ago"
        },
        {
          text: "Noah Martinez added Bose SoundLink Revolve to his wishlist",
          time: "1 week ago"
        },
        {
          text: "Sophia Clark reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Olivia Turner added Bose SoundLink Revolve to her wishlist",
          time: "2 months ago"
        },
        {
          text: "Liam Brown reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 5100, Orders: 2400 },
          { name: 'Tue', Visits: 6000, Orders: 2800 },
          { name: 'Wed', Visits: 4700, Orders: 1930 },
          { name: 'Thu', Visits: 4500, Orders: 2600 },
          { name: 'Fri', Visits: 5600, Orders: 3200 },
          { name: 'Sat', Visits: 6500, Orders: 3600 },
          { name: 'Sun', Visits: 6200, Orders: 3100 }
        ],
      },
    },
    {
      id: 13,
      img: "https://m.media-amazon.com/images/I/519YHkvtutL.jpg",
      title: "Beats Solo Pro On-Ear Headphones",
      color: "black",
      Brand: "Beats",
      price: "$199.99",
      createdAt: "15.12.2023",
      inStock: false,
      activities: [
        {
          text: "Olivia Brown purchased Beats Solo Pro On-Ear Headphones",
          time: "2 days ago"
        },
        {
          text: "Noah Turner purchased Beats Solo Pro On-Ear Headphones",
          time: "1 week ago"
        },
        {
          text: "Ethan Johnson added Beats Solo Pro On-Ear Headphones to his wishlist",
          time: "1 week ago"
        },
        {
          text: "Isabella Clark reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Sophia Adams added Beats Solo Pro On-Ear Headphones to her wishlist",
          time: "2 months ago"
        },
        {
          text: "Liam Martinez reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 5400, Orders: 2700 },
          { name: 'Tue', Visits: 6300, Orders: 3100 },
          { name: 'Wed', Visits: 5000, Orders: 2030 },
          { name: 'Thu', Visits: 4600, Orders: 2700 },
          { name: 'Fri', Visits: 5700, Orders: 3300 },
          { name: 'Sat', Visits: 6600, Orders: 3800 },
          { name: 'Sun', Visits: 6300, Orders: 3300 }
        ],
      },
    },
    {
      id: 14,
      img: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/powerbeats-pro/refresh2022/pbpro-pdp-p12.png.large.2x.png",
      title: "Beats Powerbeats Pro In-Ear Earphones",
      color: "navy",
      Brand: "Beats",
      price: "$179.99",
      createdAt: "20.12.2023",
      inStock: true,
      activities: [
        {
          text: "Isabella Adams purchased Beats Powerbeats Pro In-Ear Earphones",
          time: "2 days ago"
        },
        {
          text: "Sophia Brown purchased Beats Powerbeats Pro In-Ear Earphones",
          time: "1 week ago"
        },
        {
          text: "Ethan Johnson added Beats Powerbeats Pro In-Ear Earphones to his wishlist",
          time: "1 week ago"
        },
        {
          text: "Olivia Turner reviewed the product",
          time: "2 months ago"
        },
        {
          text: "Noah Martinez added Beats Powerbeats Pro In-Ear Earphones to his wishlist",
          time: "2 months ago"
        },
        {
          text: "Liam Clark reviewed the product",
          time: "2 months ago"
        }
      ],
      chart: {
        dataKeys: [
          { name: "Visits"},
          { name: "Orders"},
        ],
        data: [
          { name: 'Mon', Visits: 5500, Orders: 2800 },
          { name: 'Tue', Visits: 6400, Orders: 3200 },
          { name: 'Wed', Visits: 5100, Orders: 2130 },
          { name: 'Thu', Visits: 4700, Orders: 2800 },
          { name: 'Fri', Visits: 5800, Orders: 3400 },
          { name: 'Sat', Visits: 6700, Orders: 3900 },
          { name: 'Sun', Visits: 6400, Orders: 3500 }
        ],
      },
    },
    
  ];

  let orders = [
    { 
        id: 1, 
        orderNumber: "112-22321",
        suplier: 'Sony', 
        brief: 'Sony Products batch 1', 
        Quantity: 1, 
        orderDate: "01.02.2023",
        delivered: true, 
        requestedBy: "Rene Page",
        img:"https://www.sony.com.pe/content/dam/sony/contents/global/common/sony-logo/Sony_logo_black_1200x630.png",    
        activities: [
          {
            text: "Order was delivered successfully and received by Rene Page",
            time: "02.20.2023"
          },
          {
            text: "Order is on its way",
            time: "03.20.2023"
          },
          {
            text: "Pre Transit, order is ready to be shipped",
            time: "02.20.2023"
          },
          {
            text: "Order has been processed and is being prepared for shipping",
            time: "01.20.2023"
          },
          {
            text: "Order Placed",
            time: "01.02.2023"
          }
        ],
        chart: {
          dataKeys: [
            { name: "ExpectedSales"},
            { name: "Stock"},
          ],
          data: [
            { name: 'Jan', ExpectedSales: 2000, Stock: 1800 },
            { name: 'Feb', ExpectedSales: 7500, Stock: 4100 },
            { name: 'Mar', ExpectedSales: 4800, Stock: 2900 },
            { name: 'Apr', ExpectedSales: 5300, Stock: 3100 },
            { name: 'May', ExpectedSales: 6700, Stock: 3800 },
            { name: 'Jun', ExpectedSales: 8000, Stock: 4700 },
            { name: 'Jul', ExpectedSales: 5900, Stock: 3200 }
          ],
        },
    },
  {
    id: 2, 
    orderNumber: "112-22100",
    suplier: 'Bose', 
    brief: 'Bose Products batch 1', 
    Quantity: 1, 
    orderDate: "02.15.2023",
    delivered: false, 
    requestedBy: "Tyrell Fitzgerald",
    img:"https://logodownload.org/wp-content/uploads/2019/07/bose-logo-1.png",    
    activities: [
      {
        text: "Waiting for delivery, carrier is waiting to be connected for further delivery arrangements",
        time: "5.12.2023"
      },
      {
        text: "Failed attempt, the parcel could not be delivered",
        time: "5.10.2023"
      },
      {
        text: "Order is on its way",
        time: "04.15.2023"
      },
      {
        text: "Pre Transit, order is ready to be shipped",
        time: "03.29.2023"
      },
      {
        text: "Order has been processed and is being prepared for shipping",
        time: "03.15.2023"
      },
      {
        text: "Order Placed",
        time: "02.29.2023"
      }
    ],
    chart: {
      dataKeys: [
        { name: "ExpectedSales"},
        { name: "Stock"},
      ],
      data: [
        { name: 'Jan', ExpectedSales: 3500, Stock: 2500 },
        { name: 'Feb', ExpectedSales: 4200, Stock: 1700 },
        { name: 'Mar', ExpectedSales: 3900, Stock: 2100 },
        { name: 'Apr', ExpectedSales: 5800, Stock: 3300 },
        { name: 'May', ExpectedSales: 7100, Stock: 4000 },
        { name: 'Jun', ExpectedSales: 6300, Stock: 3900 },
        { name: 'Jul', ExpectedSales: 4500, Stock: 2800 }
      ],
    },
  },
  {
    id: 3, 
    orderNumber: "112-22199",
    suplier: 'Skull Candy', 
    brief: 'Skull Candy Products batch 1', 
    Quantity: 1, 
    orderDate: "22.02.2023",
    delivered: true, 
    requestedBy: "Rene Page",
    img:"https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gdx7ayjmbxl9q97uwfpf", 
    activities: [
      {
        text: "Order was delivered successfully and received by Rene Page",
        time: "02.20.2023"
      },
      {
        text: "Order is on its way",
        time: "03.20.2023"
      },
      {
        text: "Pre Transit, order is ready to be shipped",
        time: "02.20.2023"
      },
      {
        text: "Order has been processed and is being prepared for shipping",
        time: "01.20.2023"
      },
      {
        text: "Order Placed",
        time: "01.02.2023"
      }
    ],
    chart: {
      dataKeys: [
        { name: "ExpectedSales"},
        { name: "Stock"},
      ],
      data: [
        { name: 'Jan', ExpectedSales: 3100, Stock: 2800 },
        { name: 'Feb', ExpectedSales: 5200, Stock: 3100 },
        { name: 'Mar', ExpectedSales: 4700, Stock: 2300 },
        { name: 'Apr', ExpectedSales: 6600, Stock: 3600 },
        { name: 'May', ExpectedSales: 5300, Stock: 3100 },
        { name: 'Jun', ExpectedSales: 5700, Stock: 3200 },
        { name: 'Jul', ExpectedSales: 6000, Stock: 3900 }
      ],
    },
       
  },
  {
    id: 4, 
    orderNumber: "112-22399",
    suplier: 'Beats', 
    brief: 'Beats Products batch 1', 
    Quantity: 1, 
    orderDate: "13.02.2023",
    delivered: true, 
    requestedBy: "Rene Page",
    img:"https://cdn.mos.cms.futurecdn.net/kwyUDPNptGShKsQ7tNMhcn.jpg",   
    activities: [
      {
        text: "Order was delivered successfully and received by Rene Page",
        time: "04.01.2023"
      },
      {
        text: "Order is on its way",
        time: "03.19.2023"
      },
      {
        text: "Pre Transit, order is ready to be shipped",
        time: "03.13.2023"
      },
      {
        text: "Order has been processed and is being prepared for shipping",
        time: "02.28.2023"
      },
      {
        text: "Order Placed",
        time: "02.13.2023"
      }
    ],
    chart: {
      dataKeys: [
        { name: "ExpectedSales"},
        { name: "Stock"},
      ],
      data: [
        { name: 'Jan', ExpectedSales: 1800, Stock: 1500 },
        { name: 'Feb', ExpectedSales: 6900, Stock: 3700 },
        { name: 'Mar', ExpectedSales: 4300, Stock: 2200 },
        { name: 'Apr', ExpectedSales: 5600, Stock: 3400 },
        { name: 'May', ExpectedSales: 6100, Stock: 3300 },
        { name: 'Jun', ExpectedSales: 7500, Stock: 4300 },
        { name: 'Jul', ExpectedSales: 4900, Stock: 2700 }
      ],
    },

  },
  {
    id: 5, 
    orderNumber: "112-22200",
    suplier: 'Sony', 
    brief: 'Sony Products batch 2', 
    Quantity: 1, 
    orderDate: "02.03.2023",
    delivered: false, 
    requestedBy: "Rey Conrad",
    img:"https://www.sony.com.pe/content/dam/sony/contents/global/common/sony-logo/Sony_logo_black_1200x630.png",   
    activities: [
      {
        text: "Waiting for delivery, carrier is waiting to be connected for further delivery arrangements",
        time: "04.03.2023"
      },
      {
        text: "Failed attempt, the parcel could not be delivered",
        time: "03.23.2023"
      },
      {
        text: "Order is on its way",
        time: "03.03.2023"
      },
      {
        text: "Pre Transit, order is ready to be shipped",
        time: "02.20.2023"
      },
      {
        text: "Order has been processed and is being prepared for shipping",
        time: "02.13.2023"
      },
      {
        text: "Order Placed",
        time: "02.03.2023"
      }
    ],
    chart: {
      dataKeys: [
        { name: "ExpectedSales"},
        { name: "Stock"},
      ],
      data: [
        { name: 'Jan', ExpectedSales: 2600, Stock: 2100 },
        { name: 'Feb', ExpectedSales: 4800, Stock: 2900 },
        { name: 'Mar', ExpectedSales: 5700, Stock: 3400 },
        { name: 'Apr', ExpectedSales: 4100, Stock: 2300 },
        { name: 'May', ExpectedSales: 6900, Stock: 4200 },
        { name: 'Jun', ExpectedSales: 7200, Stock: 4000 },
        { name: 'Jul', ExpectedSales: 5800, Stock: 3500 }
      ],
    },
     
  }
]

let posts =[
  {
    id: 1, 
    activity: "Sales meeting",
    Date: '10/02/2023', 
    time: '9:00 am', 
    organizer: "Sales manager", 
    img: "https://img.freepik.com/free-vector/business-meeting-icon_23-2147495186.jpg?w=826&t=st=1690766323~exp=1690766923~hmac=c499fbba93724c5a1dad9d24b1684953aaa7a2b28aab76ad5ec2c2f3a3f936ee",
    mandatory: true
    
  },
  {
    id: 2, 
    activity: "HR meeting",
    Date: '10/03/2023', 
    time: '9:00 am', 
    organizer: "HR manager", 
    img: "https://img.freepik.com/free-vector/business-meeting-icon_23-2147495186.jpg?w=826&t=st=1690766323~exp=1690766923~hmac=c499fbba93724c5a1dad9d24b1684953aaa7a2b28aab76ad5ec2c2f3a3f936ee",
    mandatory: true
  },
  {
    id: 3, 
    activity: "Marketing meeting",
    Date: '10/04/2023', 
    time: '9:00 am', 
    organizer: "Marketing manager", 
    img: "https://img.freepik.com/free-vector/business-meeting-icon_23-2147495186.jpg?w=826&t=st=1690766323~exp=1690766923~hmac=c499fbba93724c5a1dad9d24b1684953aaa7a2b28aab76ad5ec2c2f3a3f936ee",
    mandatory: true
  },
  {
    id: 4, 
    activity: "Management meeting",
    Date: '10/06/2023', 
    time: '9:30 am', 
    organizer: "Management manager", 
    img: "https://img.freepik.com/free-vector/business-meeting-icon_23-2147495186.jpg?w=826&t=st=1690766323~exp=1690766923~hmac=c499fbba93724c5a1dad9d24b1684953aaa7a2b28aab76ad5ec2c2f3a3f936ee",
    mandatory: true
  },
  {
    id: 5, 
    activity: "Product Research meeting",
    Date: '10/07/2023', 
    time: '9:45 am', 
    organizer: "Product manager", 
    img: "https://img.freepik.com/free-vector/business-meeting-icon_23-2147495186.jpg?w=826&t=st=1690766323~exp=1690766923~hmac=c499fbba93724c5a1dad9d24b1684953aaa7a2b28aab76ad5ec2c2f3a3f936ee",
    mandatory: false
  },
  {
    id: 6, 
    activity: "Finance meeting",
    Date: '10/12/2023', 
    time: '9:30 am', 
    organizer: "Finance manager", 
    img: "https://img.freepik.com/free-vector/business-meeting-icon_23-2147495186.jpg?w=826&t=st=1690766323~exp=1690766923~hmac=c499fbba93724c5a1dad9d24b1684953aaa7a2b28aab76ad5ec2c2f3a3f936ee",
    mandatory: true
  },
]




// GET USERS
app.get("/api/users", (req, res) => {
    res.json(users);
  });

  // GET USER
app.get("/api/users/:id", (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    res.json(user);
  });


// DELETE USER
app.delete("/api/users/:id", (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.id));
  res.json("User deleted!");
});

// ADD USER
app.post("/api/users", (req, res) => {
  users.push(req.body)
  res.json(users);
});

  // GET PRODUCTS
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET PRODUCT
app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === parseInt(req.params.id));
  res.json(product);
});

// DELETE PRODUCT
app.delete("/api/products/:id", (req, res) => {
  products = products.filter((product) => product.id !== parseInt(req.params.id));
  res.json("Product deleted!");
});

// ADD PRODUCT
app.post("/api/products", (req, res) => {
  products.push(req.body)
  res.json(products);
});


// GET ORDERS
app.get("/api/orders", (req, res) => {
  res.json(orders);
});

// GET ORDER
app.get("/api/orders/:id", (req, res) => {
  const order = orders.find((order) => order.id === parseInt(req.params.id));
  res.json(order);
});

// DELETE ORDER
app.delete("/api/orders/:id", (req, res) => {
  orders = orders.filter((orders) => orders.id !== parseInt(req.params.id));
  res.json("Product deleted!");
});

// ADD ORDER
app.post("/api/orders", (req, res) => {
  orders.push(req.body)
  res.json(orders);
});



  // GET POSTS
app.get("/api/posts", (req, res) => {
  res.json(posts);
});
  
// DELETE POSTS
app.delete("/api/posts/:id", (req, res) => {
  posts = posts.filter((post) => post.id !== parseInt(req.params.id));
  res.json("Product deleted!");
});

// ADD POSTS
app.post("/api/posts", (req, res) => {
  posts.push(req.body)
  res.json(posts);
});



