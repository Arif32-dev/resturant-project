import React, { useState, createContext, useEffect } from "react";
import room1 from "../images/beach_resort_data/rooms/room-1.jpeg";
import room2 from "../images/beach_resort_data/rooms/room-2.jpeg";
import room3 from "../images/beach_resort_data/rooms/room-3.jpeg";
import room4 from "../images/beach_resort_data/rooms/room-4.jpeg";
import room5 from "../images/beach_resort_data/rooms/room-5.jpeg";
import room6 from "../images/beach_resort_data/rooms/room-6.jpeg";
import room7 from "../images/beach_resort_data/rooms/room-7.jpeg";
import room8 from "../images/beach_resort_data/rooms/room-8.jpeg";
import room9 from "../images/beach_resort_data/rooms/room-9.jpeg";
import detailspic1 from "../images/beach_resort_data/details_pic/details-1.jpeg";
import detailspic2 from "../images/beach_resort_data/details_pic/details-2.jpeg";
import detailspic3 from "../images/beach_resort_data/details_pic/details-3.jpeg";
import detailspic4 from "../images/beach_resort_data/details_pic/details-4.jpeg";
export const MyContext = createContext();
const Context = (props) => {
   const [state] = useState([
      {
         sys: {
            id: "1"
         },
         fields: {
            name: "single economy",
            slug: "single-economy",
            type: "single",
            price: 100,
            size: 200,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: room1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "2"
         },
         fields: {
            name: "single basic",
            slug: "single-basic",
            type: "single",
            price: 150,
            size: 250,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: room2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "3"
         },
         fields: {
            name: "single standard",
            slug: "single-standard",
            type: "single",
            price: 250,
            size: 300,
            capacity: 1,
            pets: true,
            breakfast: false,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: room3
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "4"
         },
         fields: {
            name: "single deluxe",
            slug: "single-deluxe",
            type: "single",
            price: 300,
            size: 400,
            capacity: 1,
            pets: true,
            breakfast: true,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: room4
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "5"
         },
         fields: {
            name: "double economy",
            slug: "double-economy",
            type: "double",
            price: 200,
            size: 300,
            capacity: 2,
            pets: false,
            breakfast: false,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: room5
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "6"
         },
         fields: {
            name: "double basic",
            slug: "double-basic",
            type: "double",
            price: 250,
            size: 350,
            capacity: 2,
            pets: false,
            breakfast: false,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: room6
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "7"
         },
         fields: {
            name: "double standard",
            slug: "double-standard",
            type: "double",
            price: 300,
            size: 400,
            capacity: 2,
            pets: true,
            breakfast: false,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: room7
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "8"
         },
         fields: {
            name: "double deluxe",
            slug: "double-deluxe",
            type: "double",
            price: 400,
            size: 500,
            capacity: 2,
            pets: true,
            breakfast: true,
            featured: true,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: room8
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "9"
         },
         fields: {
            name: "family economy",
            slug: "family-economy",
            type: "family",
            price: 300,
            size: 500,
            capacity: 3,
            pets: false,
            breakfast: false,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: room9
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "10"
         },
         fields: {
            name: "family basic",
            slug: "family-basic",
            type: "family",
            price: 350,
            size: 550,
            capacity: 4,
            pets: false,
            breakfast: false,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: detailspic4
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "11"
         },
         fields: {
            name: "family standard",
            slug: "family-standard",
            type: "family",
            price: 400,
            size: 600,
            capacity: 5,
            pets: true,
            breakfast: false,
            featured: false,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "12"
         },
         fields: {
            name: "family deluxe",
            slug: "family-deluxe",
            type: "family",
            price: 500,
            size: 700,
            capacity: 6,
            pets: true,
            breakfast: true,
            featured: true,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      },
      {
         sys: {
            id: "13"
         },
         fields: {
            name: "presidential",
            slug: "presidential-room",
            type: "presidential",
            price: 600,
            size: 1000,
            capacity: 10,
            pets: true,
            breakfast: true,
            featured: true,
            description:
               "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
            extras: [
               "Plush pillows and breathable bed linens",
               "Soft, oversized bath towels",
               "Full-sized, pH-balanced toiletries",
               "Complimentary refreshments",
               "Adequate safety/security",
               "Internet",
               "Comfortable beds"
            ],
            images: [
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic1
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic2
                     }
                  }
               },
               {
                  fields: {
                     file: {
                        url: detailspic3
                     }
                  }
               }
            ]
         }
      }
   ]);
   // Defining The state
   const [sortedRooms, setsortedRooms] = useState(state);
   const [type, settype] = useState("all");
   const [capacity, setcapacity] = useState(1);
   const [breakfast, setbreakfast] = useState(false);
   const [pets, setpets] = useState(false);
   const [objectdata] = useState({
      maxPrice: Math.max(...state.map((data) => data.fields.price)),
      maxSize: Math.max(...state.map((data) => data.fields.size)),
      minSize: 0
   });
   const [price, setprice] = useState(objectdata.maxPrice);
   const [maxsize, setmaxsize] = useState(objectdata.maxSize);
   const [minsize, setminsize] = useState(objectdata.minSize);

   // All functionality will go down here
   const handleChangetype = (event) => {
      settype(event.currentTarget.value);
   };
   const handleChangecapacity = (e) => {
      setcapacity(e.currentTarget.value);
   };
   const handleRange = (e) => {
      setprice(e.currentTarget.value);
   };
   const handleMaxSize = (e) => {
      setmaxsize(e.currentTarget.value);
   };
   const handleMinSize = (e) => {
      setminsize(e.currentTarget.value);
   };
   const handleBreakfast = () => setbreakfast(!breakfast);
   const handlePets = () => setpets(!pets);

   let tempRooms = state;
   // setting up condition
   // filtering by type
   if (type !== "all") {
      tempRooms = tempRooms.filter((data) => data.fields.type === type);
   }
   // filter by capacity
   if (capacity !== 1) {
      tempRooms = tempRooms.filter((data) => data.fields.capacity >= capacity);
   }
   // filter by price
   if (price !== objectdata.maxPrice) {
      tempRooms = tempRooms.filter((data) => data.fields.price <= price);
   }
   // filter by size
   tempRooms = tempRooms.filter(
      (data) => data.fields.size >= minsize && data.fields.size <= maxsize
   );
   // filter by breakfast
   if (breakfast === true) {
      tempRooms = tempRooms.filter(
         (data) => data.fields.breakfast === breakfast
      );
   }
   // filter by pets
   if (pets === true) {
      tempRooms = tempRooms.filter((data) => data.fields.pets === pets);
   }

   useEffect(() => {
      setsortedRooms(tempRooms);
   }, [type, capacity, price, maxsize, minsize, pets, breakfast]);

   return (
      <>
         <MyContext.Provider
            value={{
               state,
               sortedRooms,
               objectdata,
               handleChangetype,
               handleChangecapacity,
               handleRange,
               handleMaxSize,
               handleMinSize,
               handleBreakfast,
               handlePets,
               type,
               capacity,
               price,
               maxsize,
               minsize,
               breakfast,
               pets
            }}
         >
            {props.children}
         </MyContext.Provider>
      </>
   );
};

export default Context;
