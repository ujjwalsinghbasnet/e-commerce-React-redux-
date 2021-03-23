import iphone11 from './images/iphone11.jpg'
import note10 from './images/note10.jpg'
import s20 from './images/s20.jpg'
import blackHoodie from './images/black-hoodie.jpg'
import hpLaptop from './images/hp-hq-tre.jpg'
import leatherJacket from './images/leather-jacket.jpg'
import iwatch from './images/i-watchCharger.jpg'
import FourSeatedDinningWooden from './images/4SeatDinning.jpg'
import BrownLeatherShoes from './images/leatherGenuineShoesBrown.jpg'
import Samsung49CHG90 from './images/49_CHG90_QLEDGamingMonitorSamsung.jpg'
import Adultery from './images/adultery.jpg'
import BlackCasual from './images/BlackCasual.jpg'
import AsusVivoBook from './images/ASUS - Vivobook 14_ Laptop - Intel Core i7 - 8GB Memory - NVIDIA GeForce MX250 - 512GB SSD - Slate Grey - Gray.jpg' 
import AsusLaptop15 from './images/asusLaptop15.png'
import ASUSROGStrixMOnitor from './images/ASUS ROG Strix XG32VQR 31_5_ WQHD Curved 144Hz FreeSync Gaming Monitor.jpg'
import beatsBlackHeadphone from './images/beatsBlackHeadphone.jpg'
import BlackHeadphone from './images/blackHeadphone.png'
import sonyHeadphone from './images/sonyHeadphone.jpg'
import darkGreenHeadphones from './images/darkGreenHeadphones.jpg'
import JBLheadphone from './images/greyHeadphones.jpg'

import Valkyries from './images/valkyries.jpg'
import LookingForAlaska from './images/lookingForAlaska.jpg'
import TheFaultInOurStars from './images/faultInOurStars.jpg'
import KarnaliBlues from './images/karnaliblues.jpg'
import odysseyG5SamsungMonitor from './images/odysseyG5SamsungMonitor.jpg'
import DellVostro14 from './images/Dell Vostro 14 3491 Laptop.jpg'
import HPPavillion from './images/HP Pavilion 15-cs0013ns, presume de elegancia y diseño con este portátil_.jpg'
import HP14Amd from './images/HP 14_ AMD R7 8GB RAM 256GB SSD Laptop.jpg'
import ASUSM409DA from './images/Laptop Asus M409DA.png'
import chromeBookLaptopHP from './images/chromebookLaptopHP.jpg'
import honeyCombShellMouse from './images/honeyCombShellMouse.jpg'
import microsoftWirelessMouse from './images/wirelessMicrosoft.jpg'
import colorKeyboard from './images/colorKeyboard.jpg'
import fanTechKeyboard from './images/fanTechKeyboard.jpg'
import marbleTopTable from './images/lowMarbletable.jpg'
import GlassDinning from './images/GlassDinning.jpg'


export const data = [
    {
        id: 1,
        category: ['electronics', 'mobile-phones'],
        name: 'iPhone 11, 4GB/64GB',
        description: 'This is a description about the product.',
        price: 10000,
        slug: 'iphone-11',
        image: {
            url: iphone11
        },
        rating: '4.9 (10)'
    },
    {
        id: 2,
        category: ['electronics','mobile-phones'],
        name: 'Samsung Note 20',
        description: 'This is a description about the product.',
        price: 110000,
        slug: 'samsung-note-20',
        image: {
            url: s20
        },
        rating: '4.8 (15)'
    },
    {
        id: 3,
        category: ['electronics','mobile-phones'],
        name: ' Redmi Note 10, 6/128 GB',
        description: 'This is a description about the product.',
        price: 10000,
        slug: 'redmi-note-10',
        image: {
            url: note10
        },
        rating: '5 (7)'
    },
    {
        id: 4,
        category: ['electronics','laptop'],
        name: 'HP Hq-Tre core i5',
        description: 'This is a description about the product.',
        price: 80000,
        slug: 'hp-laptop',
        image: {
            url: hpLaptop
        },
        rating: '5 (7)'
    },
    {
        id: 5,
        category: ['fashion','clothing','mens-fashion'],
        name: 'Black Leather Jacket',
        description: 'This is a description about the product.',
        price: 2500,
        slug: 'leather-jacket',
        image: {
            url: leatherJacket
        },
        rating: '4.5 (9)'
    },
    {
        id: 6,
        category: ['fashion','clothing', 'unisex', 'hoodie','mens-fashion'],
        name: 'Plain Black Hoodie',
        description: 'This is a description about the product.',
        price: 1800,
        slug: 'hoodie',
        image: {
            url: blackHoodie
        },
        rating: '4.3 (4)'
    },
    {
        id: 7,
        category: ['electronics', 'charger'],
        name: 'I watch Charger',
        description: 'This is a description about the product.',
        price: 1900,
        slug: 'i-charger',
        image: {
            url: iwatch
        },
        rating: '4.3 (1)'
    },
    {
        id: 8,
        category: ['decoration', 'home','table','dinning-table'],
        name: '4-Seated Dinning Table ',
        description: 'This is a description about the product.',
        price: 28000,
        slug: '4-seated-dinning-table',
        image: {
            url: FourSeatedDinningWooden
        },
        rating: '4.9 (1)'
    },
    {
        id: 9,
        category: ['electronics', 'monitor','samsung'],
        name: '49 CHG90 QLED Gaming Monitor',
        description: 'This is a description about the product.',
        price: 50000,
        slug: '49-CHG90-QLED-Gaming-Monitor',
        image: {
            url: Samsung49CHG90
        },
        rating: '4.9 (4)'
    },
    {
        id: 10,
        category: ['shoes', 'party-shoes','mens-fashion'],
        name: 'Brown Leather Shoes',
        description: 'This is a description about the product.',
        price: 2400,
        slug: 'Brown-Leather-Shoes',
        image: {
            url: BrownLeatherShoes
        },
        rating: '4.1 (4)'
    },
    {
        id: 11,
        category: ['books', 'english-novel','novel'],
        name: 'Adultery Paulo Coelho',
        description: 'This is a description about the product.',
        price: 340,
        slug: 'adultery-paulo-coelho',
        image: {
            url: Adultery
        },
        rating: '4.1 (4)'
    },
    {
        id: 12,
        category: ['fashion','shoes', 'casual-shoes','mens-fashion'],
        name: 'Fashion Classic Shoes Black',
        description: 'This is a description about the product.',
        price: 2600,
        slug: 'Fashion-Classic-Shoes-Black',
        image: {
            url: BlackCasual
        },
        rating: '4.1 (4)'
    },
    {
        id: 13,
        category: ['electronics', 'laptop','asus'],
        name: 'ASUS vivobook 14 core-i7',
        description: 'This is a description about the product.',
        price: 89000,
        slug: 'ASUS-vivobook-14-core-i7',
        image: {
            url: AsusVivoBook
        },
        rating: '4.9 (4)'
    },
    {
        id: 14,
        category: ['electronics', 'laptop','asus'],
        name: 'ASUS Laptop X515JA',
        description: 'This is a description about the product.',
        price: 90000,
        slug: 'ASUS-Laptop-X515JA',
        image: {
            url: AsusLaptop15
        },
        rating: '4.1 (10)'
    },
    {
        id: 15,
        category: ['electronics', 'gaming-monitor','asus','monitor'],
        name: 'ASUS Rog Strix 144Hz Monitor',
        description: 'This is a description about the product.',
        price: 56000,
        slug: 'ASUS-Rog-Strix-144Hz-Monitor',
        image: {
            url: ASUSROGStrixMOnitor
        },
        rating: '4.9 (3)'
    },
    {
        id: 16,
        category: ['electronics', 'gaming-monitor','samsung','monitor'],
        name: 'Odyssey G5 Samsung Monitor',
        description: 'This is a description about the product.',
        price: 34000,
        slug: 'Odyssey-G5-Samsung-Monitor',
        image: {
            url: odysseyG5SamsungMonitor
        },
        rating: '5 (2)'
    },
    {
        id: 17,
        category: ['electronics', 'headphone','beats'],
        name: 'Beats Headphone Black',
        description: 'This is a description about the product.',
        price: 3000,
        slug: 'Beats-Headphone-Black',
        image: {
            url: beatsBlackHeadphone
        },
        rating: '4.2 (2)'
    },
    {
        id: 18,
        category: ['electronics', 'headphone'],
        name: 'Plain Black Headphone',
        description: 'This is a description about the product.',
        price: 1200,
        slug: 'Plain-Black-Headphone',
        image: {
            url: BlackHeadphone
        },
        rating: '4.5 (10)'
    },
    {
        id: 19,
        category: ['electronics', 'headphone','sony'],
        name: 'Sony Black Headphone',
        description: 'This is a description about the product.',
        price: 1300,
        slug: 'Sony-Black-Headphone',
        image: {
            url: sonyHeadphone
        },
        rating: '4.1 (13)'
    },
    {
        id: 20,
        category: ['electronics', 'headphone'],
        name: 'Dark Green Headphone',
        description: 'This is a description about the product.',
        price: 900,
        slug: 'Dark-Green-Headphone',
        image: {
            url: darkGreenHeadphones
        },
        rating: '4.6 (7)'
    },
    {
        id: 21,
        category: ['books', 'english-novel','novel'],
        name: ' The Valkyries Paulo Coelho',
        description: 'This is a description about the product.',
        price: 340,
        slug: 'valkyries-paulo-coelho',
        image: {
            url: Valkyries
        },
        rating: '4.1 (4)'
    },
    {
        id: 22,
        category: ['books', 'english-novel','novel'],
        name: 'Looking For Alaska John Green',
        description: 'This is a description about the product.',
        price: 340,
        slug: 'Looking-For-Alaska-John-Green',
        image: {
            url: LookingForAlaska
        },
        rating: '5 (4)'
    },
    {
        id: 23,
        category: ['books', 'english-novel','novel'],
        name: 'The Fault In our Stars',
        description: 'This is a description about the product.',
        price: 340,
        slug: 'the-fault-in-our-stars',
        image: {
            url: TheFaultInOurStars
        },
        rating: '5 (4)'
    },
    {
        id: 24,
        category: ['books', 'nepali-novel','novel'],
        name: 'Karnali Blues Buddhisagar Koirala',
        description: 'This is a description about the product.',
        price: 340,
        slug: 'Karnali-Blues-Buddhisagar-Koirala',
        image: {
            url: KarnaliBlues
        },
        rating: '5 (15)'
    },
    {
        id: 25,
        category: ['electronics', 'laptop','dell'],
        name: 'Dell Vostro 14 3491 Laptop',
        description: 'This is a description about the product.',
        price: 95000,
        slug: 'Dell-Vostro-14-3491-Laptop',
        image: {
            url: DellVostro14
        },
        rating: '4.1 (10)'
    },
    {
        id: 26,
        category: ['electronics', 'laptop','hp'],
        name: 'HP Pavillion 15-cs0013ns',
        description: 'This is a description about the product.',
        price: 80000,
        slug: 'HP-Pavillion-15-cs0013ns',
        image: {
            url: HPPavillion
        },
        rating: '4 (8)'
    },
    {
        id: 27,
        category: ['electronics', 'laptop','hp'],
        name: 'Hp 14_AMD R7 8GB RAM 256GB SSD',
        description: 'This is a description about the product.',
        price: 90000,
        slug: 'Hp-14_AMD-R7-8GB-RAM-256GB-SSD',
        image: {
            url: HP14Amd
        },
        rating: '4.7 (18)'
    },
    {
        id: 28,
        category: ['electronics', 'laptop','asus'],
        name: 'Laptop Asus M409DA',
        description: 'This is a description about the product.',
        price: 85000,
        slug: 'Laptop-Asus-M409DA',
        image: {
            url: ASUSM409DA
        },
        rating: '4.1 (12)'
    },
    {
        id: 29,
        category: ['electronics', 'laptop','hp'],
        name: 'Chrome Book HP',
        description: 'This is a description about the product.',
        price: 60000,
        slug: 'Chrome-Book-HP',
        image: {
            url: chromeBookLaptopHP
        },
        rating: '5 (1)'
    },
    {
        id: 30,
        category: ['electronics', 'mouse'],
        name: 'Honeycomb shell Mouse RGB',
        description: 'This is a description about the product.',
        price: 1500,
        slug: 'Honeycomb-shell-Mouse-RGB',
        image: {
            url: honeyCombShellMouse
        },
        rating: '4.9 (12)'
    },
    {
        id: 31,
        category: ['electronics', 'mouse'],
        name: 'Microsoft Wireless Mouse',
        description: 'This is a description about the product.',
        price: 1200,
        slug: 'Microsoft-Wireless-Mouse',
        image: {
            url: microsoftWirelessMouse
        },
        rating: '4.2 (8)'
    },
    {
        id: 32,
        category: ['electronics', 'keyboard'],
        name: 'Color Keyboard',
        description: 'This is a description about the product.',
        price: 2100,
        slug: 'color-keyboard',
        image: {
            url: colorKeyboard
        },
        rating: '4.1 (12)'
    },
    {
        id: 33,
        category: ['electronics', 'keyboard'],
        name: 'Fantech RGB mouse and keyboard',
        description: 'This is a description about the product.',
        price: 5000,
        slug: 'Fantech-RGB-mouse-and-keyboard',
        image: {
            url: fanTechKeyboard
        },
        rating: '4.1 (12)'
    },
    {
        id: 34,
        category: ['decoration', 'home','table'],
        name: 'Marble Top Table',
        description: 'This is a description about the product.',
        price: 8000,
        slug: 'Marble-Top-Table',
        image: {
            url: marbleTopTable
        },
        rating: '4 (12)'
    },
    {
        id: 35,
        category: ['decoration', 'home','table','dinning-table'],
        name: 'Glass Dinning Table',
        description: 'This is a description about the product.',
        price: 13000,
        slug: 'Glass-Dinning-Table',
        image: {
            url: GlassDinning
        },
        rating: '4.1 (1)'
    },

]