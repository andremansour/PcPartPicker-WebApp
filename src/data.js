import case1 from "./img/products/case/case-1.jpg";
import case2 from "./img/products/case/case-2.jpg";
import case3 from "./img/products/case/case-3.jpg";
import case4 from "./img/products/case/case-4.jpg";

import cpu1 from "./img/products/cpu/cpu-1.jpg";
import cpu2 from "./img/products/cpu/cpu-2.jpg";
import cpu3 from "./img/products/cpu/cpu-3.jpg";
import cpu4 from "./img/products/cpu/cpu-4.jpg";

import cpuCooler1 from "./img/products/cpuCooler/cpu-cooler-1.jpg";
import cpuCooler2 from "./img/products/cpuCooler/cpu-cooler-2.jpg";
import cpuCooler3 from "./img/products/cpuCooler/cpu-cooler-3.jpg";
import cpuCooler4 from "./img/products/cpuCooler/cpu-cooler-4.jpg";

import memory1 from "./img/products/memory/memory-1.jpg";
import memory2 from "./img/products/memory/memory-2.jpg";
import memory3 from "./img/products/memory/memory-3.jpg";
import memory4 from "./img/products/memory/memory-4.jpg";

import motherboard1 from "./img/products/motherboard/motherboard-1.jpg";
import motherboard2 from "./img/products/motherboard/motherboard-2.jpg";
import motherboard3 from "./img/products/motherboard/motherboard-3.jpg";
import motherboard4 from "./img/products/motherboard/motherboard-4.jpg";

import powersupply1 from "./img/products/powerSupply/power-supply-1.jpg";
import powersupply2 from "./img/products/powerSupply/power-supply-2.jpg";
import powersupply3 from "./img/products/powerSupply/power-supply-3.jpg";
import powersupply4 from "./img/products/powerSupply/power-supply-4.jpg";

import videocard1 from "./img/products/videoCard/video-card-1.jpg";
import videocard2 from "./img/products/videoCard/video-card-2.jpg";
import videocard3 from "./img/products/videoCard/video-card-3.jpg";
import videocard4 from "./img/products/videoCard/video-card-4.jpg";

import storage1 from "./img/products/storage/storage-1.jpg";
import storage2 from "./img/products/storage/storage-2.jpg";
import storage3 from "./img/products/storage/storage-3.jpg";
import storage4 from "./img/products/storage/storage-4.jpg";

const data = {

    caseData: [
        {
            id: 1,
            img: case1,
            title: 'Corsair iCUE 4000X RGB ATX Mid Tower Case',
            desc: 'Corsair iCUE 4000X RGB ATX Mid Tower Case',
            price: 129,
            type: 'case'
        },
        {
            id: 2,
            img: case2,
            title: 'Corsair 4000D Airflow ATX Mid Tower Case',
            desc: 'Corsair 4000D Airflow ATX Mid Tower Case',
            price: 95,
            type: 'case'
        },
        {
            id: 3,
            img: case3,
            title: 'Corsair 4000D Airflow ATX Mid Tower Case (white)',
            desc: 'Corsair 4000D Airflow ATX Mid Tower Case (white)',
            price: 95,
            type: 'case'
        },
        {
            id: 4,
            img: case4,
            title: 'Lian Li O11 Dynamic EVO ATX Mid Tower Case',
            desc: 'Lian Li O11 Dynamic EVO ATX Mid Tower Case',
            price: 189,
            type: 'case'
        }
    ],

    cpuData: [
        {
            id: 5,
            img: cpu1,
            title: 'AMD Ryzen 7 5800X 3.8 GHz 8-Core Processor',
            desc: '3.8 GHz 8-Core Processor',
            price: 300,
            type: 'cpu'
        },
        {
            id: 6,
            img: cpu2,
            title: 'AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor',
            desc: '3.7 GHz 6-Core Processor',
            price: 200,
            type: 'cpu'
        },
        {
            id: 7,
            img: cpu3,
            title: 'AMD Ryzen 9 5900X 3.7 GHz 12-Core Processor',
            desc: '3.7 GHz 12-Core Processor',
            price: 390,
            type: 'cpu'
        },
        {
            id: 8,
            img: cpu4,
            title: 'AMD Ryzen 5 5600G 3.9 GHz 6-Core Processor',
            desc: '3.9 GHz 6-Core Processor',
            price: 177,
            type: 'cpu'
        }
    ],

    cpuCoolerData: [
        {
            id: 9,
            img: cpuCooler1,
            title: 'Corsair iCUE H150i ELITE CAPELLIX 75 CFM Liquid CPU Cooler',
            desc: '75 CFM Liquid CPU Cooler',
            price: 159,
            type: 'cpuCooler'
        },
        {
            id: 10,
            img: cpuCooler2,
            title: 'Cooler Master Hyper 212 RGB Black Edition 57.3 CFM CPU Cooler',
            desc: '57.3 CFM CPU Cooler',
            price: 200,
            type: 'cpuCooler'
        },
        {
            id: 11,
            img: cpuCooler3,
            title: 'Cooler Master MASTERLIQUID ML240L RGB V2 65.59 CFM Liquid CPU Cooler',
            desc: '65.59 CFM Liquid CPU Cooler',
            price: 88,
            type: 'cpuCooler'
        },
        {
            id: 12,
            img: cpuCooler4,
            title: 'Cooler Master Hyper 212 Black Edition 42 CFM CPU Cooler',
            desc: '42 CFM CPU Cooler',
            price: 50,
            type: 'cpuCooler'
        }
    ],

    memoryData: [
        {
            id: 13,
            img: memory1,
            title: 'Corsair Vengeance RGB Pro 16 GB (2 x 8 GB) DDR4-3200 CL16 Memory',
            desc: '16 GB (2 x 8 GB) DDR4-3200 CL16 Memory',
            price: 70,
            type: 'memory'
        },
        {
            id: 14,
            img: memory2,
            title: 'Corsair Vengeance LPX 16 GB (2 x 8 GB) DDR4-3200 CL16 Memory',
            desc: '16 GB (2 x 8 GB) DDR4-3200 CL16 Memory',
            price: 60,
            type: 'memory'
        },
        {
            id: 15,
            img: memory3,
            title: 'Corsair Vengeance RGB Pro 32 GB (2 x 16 GB) DDR4-3600 CL18 Memory',
            desc: '32 GB (2 x 16 GB) DDR4-3600 CL18 Memory',
            price: 124,
            type: 'memory'
        },
        {
            id: 16,
            img: memory4,
            title: 'G.Skill Ripjaws V 32 GB (2 x 16 GB) DDR4-3200 CL16 Memory',
            desc: '32 GB (2 x 16 GB) DDR4-3200 CL16 Memory',
            price: 88,
            type: 'memory'
        }
    ],
    
    motherboardData: [
        {
            id: 17,
            img: motherboard1,
            title: 'Asus ROG STRIX B550-F GAMING (WI-FI) ATX AM4 Motherboard',
            desc: 'Asus ROG STRIX B550-F GAMING (WI-FI) ATX AM4 Motherboard',
            price: 209,
            type: 'motherboard'
        },
        {
            id: 18,
            img: motherboard2,
            title: 'Asus TUF GAMING X570-PLUS (WI-FI) ATX AM4 Motherboard',
            desc: 'Asus TUF GAMING X570-PLUS (WI-FI) ATX AM4 Motherboard',
            price: 200,
            type: 'motherboard'
        },
        {
            id: 19,
            img: motherboard3,
            title: 'MSI MAG B550 TOMAHAWK ATX AM4 Motherboard',
            desc: 'MSI MAG B550 TOMAHAWK ATX AM4 Motherboard',
            price: 170,
            type: 'motherboard'
        },
        {
            id: 20,
            img: motherboard4,
            title: 'MSI B550-A PRO ATX AM4 Motherboard',
            desc: 'MSI B550-A PRO ATX AM4 Motherboard',
            price: 134,
            type: 'motherboard'
        }
    ],

    powersupplyData: [
        {
            id: 21,
            img: powersupply1,
            title: 'EVGA SuperNOVA GA 850 W 80+ Gold Certified Fully Modular ATX Power Supply',
            desc: '850w 80+ Fully Modular ATX Power Supply',
            price: 115,
            type: 'powersupply'
        },
        {
            id: 22,
            img: powersupply2,
            title: 'EVGA SuperNOVA GA 650 W 80+ Gold Certified Fully Modular ATX Power Supply',
            desc: '650w 80+ Fully Modular ATX Power Supply',
            price: 80,
            type: 'powersupply'
        },
        {
            id: 23,
            img: powersupply3,
            title: 'Corsair RMx (2021) 850 W 80+ Gold Certified Fully Modular ATX Power Supply',
            desc: '850w 80+ Fully Modular ATX Power Supply',
            price: 134,
            type: 'powersupply'
        },
        {
            id: 24,
            img: powersupply4,
            title: 'EVGA SuperNOVA GA 750 W 80+ Gold Certified Fully Modular ATX Power Supply',
            desc: '750w 80+ Fully Modular ATX Power Supply',
            price: 109,
            type: 'powersupply'
        }
    ],

    videocardData: [
        {
            id: 25,
            img: videocard1,
            title: 'EVGA GeForce RTX 3080 Ti 12 GB FTW3 ULTRA GAMING LE iCX3 Video Card',
            desc: 'GeForce RTX 3080 Ti 12 GB',
            price: 1050,
            type: 'videocard'
        },
        {
            id: 26,
            img: videocard2,
            title: 'EVGA GeForce RTX 3060 12 GB XC GAMING Video Card',
            desc: 'GeForce RTX 3060 12 GB',
            price: 425,
            type: 'videocard'
        },
        {
            id: 27,
            img: videocard3,
            title: 'MSI Radeon RX 6600 8 GB MECH 2X Video Card',
            desc: 'Radeon RX 6600 8 GB',
            price: 250,
            type: 'videocard'
        },
        {
            id: 28,
            img: videocard4,
            title: 'EVGA GeForce RTX 3070 Ti 8 GB FTW3 ULTRA GAMING Video Card',
            desc: 'GeForce RTX 3070 Ti 8 GB',
            price: 655,
            type: 'videocard'
        }
    ],

    storageData: [
        {
            id: 29,
            img: storage1,
            title: 'Samsung 970 Evo Plus 2 TB M.2-2280 NVME Solid State Drive',
            desc: '2 TB M.2-2280 NVME Solid State Drive',
            price: 184,
            type: 'storage'
        },
        {
            id: 30,
            img: storage2,
            title: 'Samsung 970 Evo Plus 1 TB M.2-2280 NVME Solid State Drive',
            desc: '1 TB M.2-2280 NVME Solid State Drive',
            price: 109,
            type: 'storage'
        },
        {
            id: 31,
            img: storage3,
            title: 'Seagate Barracuda Compute 2 TB 3.5" 7200RPM Internal Hard Drive',
            desc: '2 TB 3.5" 7200RPM Internal Hard Drive',
            price: 50,
            type: 'storage'
        },
        {
            id: 32,
            img: storage4,
            title: 'Samsung 980 Pro 2 TB M.2-2280 NVME Solid State Drive',
            desc: '2 TB M.2-2280 NVME Solid State Drive',
            price: 250,
            type: 'storage'
        }
    ],

}

export default data;