import Alpine from 'alpinejs'
import LoveCounter from './love-counter';
import persist from '@alpinejs/persist'
import Quotes from './quotes';
import './quote.css'
Alpine.plugin(persist)
window.Alpine = Alpine
Alpine.data('loveCounter', LoveCounter);
Alpine.data('quoteApp', Quotes);
Alpine.start()

