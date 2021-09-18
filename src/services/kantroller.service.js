/*
import axios from 'axios';
import hiraganaUri from '../assets/data/hiragana.json';
import katakanaUri from '../assets/data/katakana.json';
import romajiUri from '../assets/data/romaji.json';
*/

const kantroller = {
    _hiragana: [],
    _katakana: [],
    _romaji: [],
    _currentKana: '',

    /* Load the kana and romaji */
    load() {
        /*
        axios.get(hiraganaUri).then(
            res => console.log('hiragana: ', res),
            err => console.log('err: ', err)
        );
        axios.get(katakanaUri).then(
            res => console.log('katakana: ', res),
            err => console.log('err: ', err)
        );
        axios.get(romajiUri).then(
            res => console.log('romaji: ', res),
            err => console.log('err: ', err)
        );
        */
    },

    /* Returns the active kana */
    kana() {},

    /* Go to next kana */
    next() {},

    /* Go to previous kana */
    prev() {},

    /* Go to a random kana (excluding the current kana) */
    random() {},

    /* Return to original kana order */
    reset () {},

    /* Shuffule the kana order */
    shuffle() {},

    /* Alternate between katakana and hiragana */
    toggleKana() {}
};

export default kantroller;